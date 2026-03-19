import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts, getRelatedPosts } from "@/data/blog-posts";
import { locales } from "@/i18n/config";
import Navigation from "../../../components/Navigation";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all blog posts across all locales
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/blog/${slug}`
    : `https://indotropicalagriculture.com/de/blog/${slug}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const metaTitle = locale === "en" ? post.metaTitle.en : post.metaTitle.de;
  const metaDescription = locale === "en" ? post.metaDescription.en : post.metaDescription.de;
  const keywords = locale === "en" ? post.keywords.en : post.keywords.de;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      section: post.category,
      tags: locale === "en" ? post.tags.en : post.tags.de,
      images: post.featuredImage ? [
        {
          url: `https://indotropicalagriculture.com${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: locale === "en" ? post.title.en : post.title.de,
        },
      ] : [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: locale === "en" ? post.title.en : post.title.de,
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/blog/${slug}`,
        de: `https://indotropicalagriculture.com/de/blog/${slug}`,
      },
    },
  };
}

// JSON-LD Schema for blog posts
function getBlogPostJsonLd(locale: string, post: ReturnType<typeof getBlogPostBySlug>) {
  if (!post) return {};

  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const title = locale === "en" ? post.title.en : post.title.de;
  const description = locale === "en" ? post.excerpt.en : post.excerpt.de;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${baseUrl}/blog/${post.slug}#article`,
        headline: title,
        description: description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: post.author.name,
        },
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
          logo: {
            "@type": "ImageObject",
            url: "https://indotropicalagriculture.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/blog/${post.slug}`,
        },
        articleSection: post.category,
        keywords: (locale === "en" ? post.tags.en : post.tags.de).join(", "),
        about: {
          "@type": "Thing",
          name: locale === "en" ? "Indonesian Agricultural Exports" : "Indonesische Landwirtschaftsexporte",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "en" ? "Blog" : "Blog",
            item: `${baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
          },
        ],
      },
    ],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = getBlogPostJsonLd(locale, post);
  const relatedPosts = getRelatedPosts(post.id, 3);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getBlogPath = () => locale === "en" ? "/blog" : `/${locale}/blog`;
  const getBlogPostPath = (slug: string) => locale === "en" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

  // Get localized content
  const title = locale === "en" ? post.title.en : post.title.de;
  const content = locale === "en" ? post.content.en : post.content.de;
  const category = post.category;
  const tags = locale === "en" ? post.tags.en : post.tags.de;

  // UI strings
  const backToHome = locale === "en" ? "Back to Home" : "Zurück zur Startseite";
  const backToBlog = locale === "en" ? "Back to Blog" : "Zurück zum Blog";
  const readTime = locale === "en" ? "min read" : "Min. Lesezeit";
  const publishedOn = locale === "en" ? "Published" : "Veröffentlicht";
  const updatedOn = locale === "en" ? "Updated" : "Aktualisiert";
  const authorLabel = locale === "en" ? "By" : "Von";
  const tagsLabel = locale === "en" ? "Tags" : "Tags";
  const relatedArticles = locale === "en" ? "Related Articles" : "Verwandte Artikel";
  const readArticle = locale === "en" ? "Read Article" : "Artikel lesen";
  const contactCta = locale === "en" ? "Have Questions About This Topic?" : "Fragen zu diesem Thema?";
  const contactDesc = locale === "en"
    ? "Our team can provide more information and guidance on importing Indonesian agricultural products."
    : "Unser Team kann weitere Informationen und Beratung zum Import indonesischer landwirtschaftlicher Produkte bereitstellen.";
  const contactButton = locale === "en" ? "Contact Our Team" : "Kontaktieren Sie unser Team";

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === "en"
      ? date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : date.toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-28 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href={getHomePath()} className="hover:text-emerald-600">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={getBlogPath()} className="hover:text-emerald-600">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-stone-700">{title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <article className="py-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
              {category}
            </span>
            <span className="text-sm text-stone-500">
              {post.readTime} {readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-8">
            <span>
              {publishedOn}: {formatDate(post.publishedAt)}
            </span>
            <span>•</span>
            <span>
              {updatedOn}: {formatDate(post.updatedAt)}
            </span>
            <span>•</span>
            <span>
              {authorLabel} {post.author.name}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-stone-600">{tagsLabel}:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-stone-500 bg-stone-200 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Content */}
      <article className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-stone max-w-none prose-lg">
            {content.sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4 whitespace-pre-line">
                  {section.content}
                </p>
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-3">
                    {section.listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-stone-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-6 bg-stone-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              {relatedArticles}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const relatedTitle = locale === "en" ? relatedPost.title.en : relatedPost.title.de;
                const relatedExcerpt = locale === "en"
                  ? relatedPost.excerpt.en.substring(0, 100) + "..."
                  : relatedPost.excerpt.de.substring(0, 100) + "...";

                return (
                  <Link
                    key={relatedPost.id}
                    href={getBlogPostPath(relatedPost.slug)}
                    className="group bg-white rounded-lg p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <div className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {relatedTitle}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-3 mb-3">
                      {relatedExcerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span>{relatedPost.readTime} {readTime}</span>
                      <span>•</span>
                      <time>{formatDate(relatedPost.publishedAt)}</time>
                    </div>
                    <span className="inline-flex items-center mt-3 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                      {readArticle}
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {contactCta}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
            {contactDesc}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            {contactButton}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
