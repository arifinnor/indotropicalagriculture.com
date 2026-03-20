import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getBlogPosts, blogCategories } from "@/data/blog-posts";
import Navigation from "../../components/Navigation";
import Breadcrumb from "../../components/Breadcrumb";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === "en"
    ? "Blog | Indo Tropical Agriculture"
    : "Blog | Indo Tropical Agriculture";

  const description = locale === "en"
    ? "Insights and resources for B2B spice importers: Indonesian agricultural export guides, sustainability practices, quality control, and shipping logistics."
    : "Einblicke und Ressourcen für B2B-Gewürzimporteure: Indonesische Landwirtschaftsexportleitfäden, Nachhaltigkeitspraktiken, Qualitätskontrolle und Versandlogistik.";

  const keywords = locale === "en"
    ? ["indonesian spice blog", "b2b import guide", "spice export", "indonesian agriculture"]
    : ["indonesischer gewürz-blog", "b2b-import-leitfaden", "gewürzexport", "indonesische landwirtschaft"];

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/blog"
    : "https://indotropicalagriculture.com/de/blog";

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    alternates: {
      canonical: url,
      languages: {
        en: "https://indotropicalagriculture.com/blog",
        de: "https://indotropicalagriculture.com/de/blog",
      },
    },
  };
}

// JSON-LD Schema for blog index
function getBlogIndexJsonLd(locale: string, bt: Awaited<ReturnType<typeof getTranslations>>) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const posts = getBlogPosts();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/blog#collection`,
        url: `${baseUrl}/blog`,
        name: locale === "en" ? "Blog - Indo Tropical Agriculture" : "Blog - Indo Tropical Agriculture",
        description: locale === "en"
          ? "Collection of articles about Indonesian agricultural exports, spice trade, and B2B import guidance."
          : "Sammlung von Artikeln über indonesische Landwirtschaftsexporte, Gewürzhandel und B2B-Importberatung.",
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
            name: bt("home"),
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: bt("blog"),
            item: `${baseUrl}/blog`,
          },
        ],
      },
      ...posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${baseUrl}/blog/${post.slug}#article`,
        headline: locale === "en" ? post.title.en : post.title.de,
        description: locale === "en" ? post.excerpt.en : post.excerpt.de,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: post.author.name,
        },
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          logo: {
            "@type": "ImageObject",
            url: "https://indotropicalagriculture.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/blog/${post.slug}`,
        },
      })),
    ],
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = getBlogPosts();
  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });
  const jsonLd = getBlogIndexJsonLd(locale, bt);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getBlogPostPath = (slug: string) => locale === "en" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

  // UI strings
  const blogTitle = locale === "en" ? "Blog & Resources" : "Blog & Ressourcen";
  const blogSubtitle = locale === "en"
    ? "Insights and guidance for B2B spice importers sourcing from Indonesia"
    : "Einblicke und Beratung für B2B-Gewürzimporteure, die aus Indonesien beziehen";
  const readMore = locale === "en" ? "Read Article" : "Artikel lesen";
  const readTime = locale === "en" ? "min read" : "Min. Lesezeit";
  const publishedOn = locale === "en" ? "Published" : "Veröffentlicht";
  const recentArticles = locale === "en" ? "Recent Articles" : "Aktuelle Artikel";
  const allCategories = locale === "en" ? "All Categories" : "Alle Kategorien";

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

      {/* Breadcrumb + Header */}
      <div className="bg-gradient-to-b from-emerald-50/60 to-stone-100">
      <Breadcrumb
        locale={locale}
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("blog") },
        ]}
      />

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {blogTitle}
          </h1>
          <p className="text-xl text-stone-600">
            {blogSubtitle}
          </p>
        </div>
      </section>
      </div>

      {/* Categories */}
      <section className="py-8 px-6 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="text-sm font-medium text-stone-500">{allCategories}:</span>
            {blogCategories.map((category) => (
              <Link
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">{recentArticles}</h2>
          <div className="space-y-8">
            {posts.map((post) => {
              const title = locale === "en" ? post.title.en : post.title.de;
              const excerpt = locale === "en" ? post.excerpt.en : post.excerpt.de;
              const category = post.category;

              return (
                <article
                  key={post.id}
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-200 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                      {category}
                    </span>
                    <time className="text-sm text-stone-500">
                      {publishedOn}: {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-sm text-stone-500">
                      {post.readTime} {readTime}
                    </span>
                  </div>

                  <Link href={getBlogPostPath(post.slug)}>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3 hover:text-emerald-600 transition-colors">
                      {title}
                    </h3>
                  </Link>

                  <p className="text-stone-600 mb-4 leading-relaxed">
                    {excerpt}
                  </p>

                  <Link
                    href={getBlogPostPath(post.slug)}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    {readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en" ? "Need More Information?" : "Benötigen Sie weitere Informationen?"}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
            {locale === "en"
              ? "Our team is ready to help with your Indonesian spice import needs. Contact us for detailed information, pricing, and samples."
              : "Unser Team ist bereit, Ihnen bei Ihren indonesischen Gewürzimportbedürfnissen zu helfen. Kontaktieren Sie uns für detaillierte Informationen, Preise und Muster."}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            {locale === "en" ? "Get in Touch" : "Kontaktieren Sie uns"}
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
