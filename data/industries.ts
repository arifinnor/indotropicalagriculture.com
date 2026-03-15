export interface Industry {
  id: string;
  name: string;
  nameDe?: string;
  slug: string;
  icon: string;
  description: {
    en: string;
    de: string;
  };
  benefits: Array<{
    en: string;
    de: string;
  }>;
  relevantCategories: string[];
  useCase: {
    en: string;
    de: string;
  };
  ctaText: {
    en: string;
    de: string;
  };
  keywords: {
    en: string[];
    de: string[];
  };
}

export const industries: Industry[] = [
  {
    id: "food-manufacturers",
    name: "Food Manufacturers",
    nameDe: "Lebensmittelhersteller",
    slug: "food-manufacturers",
    icon: "🏭",
    description: {
      en: "Indo Tropical Agriculture is your trusted partner for bulk Indonesian agricultural products. We supply industrial-scale quantities of premium spices, herbs, nuts, and coffee beans to food manufacturers worldwide.",
      de: "Indo Tropical Agriculture ist Ihr vertrauenswürdiger Partner für großtechnische indonesische Landwirtschaftsprodukte. Wir liefern industrielle Mengen an Premium-Gewürzen, Kräutern, Nüssen und Kaffeebohnen an Lebensmittelhersteller weltweit."
    },
    benefits: [
      {
        en: "Bulk quantities available (1 ton to full container loads)",
        de: "Großmengen verfügbar (1 Tonne bis volle Containerladungen)"
      },
      {
        en: "Consistent quality with batch testing and certification",
        de: "Konsistente Qualität mit Chargenprüfung und Zertifizierung"
      },
      {
        en: "Competitive wholesale pricing for large-scale orders",
        de: "Wettbewerbsfähige Großhandelspreise für Großbestellungen"
      },
      {
        en: "Reliable supply chain with year-round availability",
        de: "Zuverlässige Lieferkette mit ganzjähriger Verfügbarkeit"
      },
      {
        en: "Food safety compliance (HACCP, GMP standards)",
        de: "Lebensmittelsicherheits-Compliance (HACCP, GMP-Standards)"
      }
    ],
    relevantCategories: ["Spices", "Herbs", "Nuts", "Coffee", "Beans"],
    useCase: {
      en: "Our products are used by food manufacturers in processed foods, ready-to-eat meals, bakery products, confectionery, and beverage industries. We ensure consistent flavor profiles and quality specifications for your production needs.",
      de: "Unsere Produkte werden von Lebensmittelherstellern in verarbeiteten Lebensmitteln, Fertiggerichten, Backwaren, Süßwaren und Getränkeindustrien verwendet. Wir gewährleisten konsistente Geschmacksprofile und Qualitätsspezifikationen für Ihre Produktionsanforderungen."
    },
    ctaText: {
      en: "Request bulk pricing for your manufacturing needs",
      de: "Fordern Sie Großhandelspreise für Ihre Fertigungsanforderungen an"
    },
    keywords: {
      en: [
        "indonesian agriculture for food manufacturers",
        "bulk spices for food industry",
        "industrial spice suppliers indonesia",
        "b2b food ingredients indonesia"
      ],
      de: [
        "indonesische landwirtschaft für lebensmittelhersteller",
        "gewürze großhandel lebensmittelindustrie",
        "industrielle gewürzlieferanten indonesien",
        "b2b lebensmittelzutaten indonesien"
      ]
    }
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    nameDe: "Pharmazeutisch",
    slug: "pharmaceutical",
    icon: "💊",
    description: {
      en: "Premium medicinal herbs and botanical ingredients from Indonesia for pharmaceutical applications. Our products meet strict quality standards for pharmaceutical and nutraceutical manufacturing.",
      de: "Premium medizinische Kräuter und pflanzliche Inhaltsstoffe aus Indonesien für pharmazeutische Anwendungen. Unsere Produkte erfüllen strenge Qualitätsstandards für pharmazeutische und Nahrungsergänzungsmittelherstellung."
    },
    benefits: [
      {
        en: "High-purity medicinal herbs with documented therapeutic properties",
        de: "Hochreine medizinische Kräuter mit dokumentierten therapeutischen Eigenschaften"
      },
      {
        en: "Laboratory test reports for batch quality verification",
        de: "Laborberichte zur Verifizierung der Chargenqualität"
      },
      {
        en: "Phytosanitary certificates and traceability documentation",
        de: "Pflanzengesundheitszeugnisse und Rückverfolgbarkeitsdokumentation"
      },
      {
        en: "Organic certification available for certified products",
        de: "Bio-Zertifizierung verfügbar für zertifizierte Produkte"
      },
      {
        en: "Compliance with pharmaceutical GMP requirements",
        de: "Einhaltung der pharmazeutischen GMP-Anforderungen"
      }
    ],
    relevantCategories: ["Herbs", "Spices"],
    useCase: {
      en: "Our herbs and extracts are used in pharmaceutical formulations, traditional medicine, nutraceuticals, and dietary supplements. We provide detailed specifications for active compound content and ensure batch-to-batch consistency.",
      de: "Unsere Kräuter und Extrakte werden in pharmazeutischen Formulierungen, traditioneller Medizin, Nahrungsergänzungsmitteln und Nahrungsergänzungsmitteln verwendet. Wir liefern detaillierte Spezifikationen für Wirkstoffgehalt und gewährleisten Chargen-zu-Chargen-Konsistenz."
    },
    ctaText: {
      en: "Request pharmaceutical-grade product specifications",
      de: "Fordern Sie pharmazeutische Produktspezifikationen an"
    },
    keywords: {
      en: [
        "indonesian medicinal herbs for pharmaceutical",
        "pharmaceutical grade spices indonesia",
        "medicinal plant extracts indonesia",
        "herbal medicine ingredients supplier",
        "botanical ingredients for nutraceuticals"
      ],
      de: [
        "indonesische medizinische kräuter für pharmazeutik",
        "pharmazeutische qualität gewürze indonesien",
        "medizinische pflanzenextrakte indonesien",
        "kräutermedizin zutatenlieferant",
        "pflanzliche inhaltsstoffe nahrungsergänzungsmittel"
      ]
    }
  },
  {
    id: "essential-oils",
    name: "Essential Oils",
    nameDe: "Ätherische Öle",
    slug: "essential-oils",
    icon: "🧴",
    description: {
      en: "High-essential-oil content spices and aromatic products from Indonesia for essential oil extraction. Our products deliver superior aroma and therapeutic benefits for aromatherapy and fragrance industries.",
      de: "Gewürze und aromatische Produkte mit hohem ätherischen Ölgehalt aus Indonesien für ätherische Ölextraktion. Unsere Produkte liefern überlegenes Aroma und therapeutische Vorteile für Aromatherapie- und Parfmindustrien."
    },
    benefits: [
      {
        en: "High essential oil content (2-4% for cloves, 3-4% for ginger)",
        de: "Hoher ätherischer Ölgehalt (2-4% für Gewürznelken, 3-4% für Ingwer)"
      },
      {
        en: "GC-MS analysis available for oil composition verification",
        de: "GC-MS-Analyse verfügbar für Ölzusammensetzungsverifizierung"
      },
      {
        en: "Sustainable sourcing from spice islands of Indonesia",
        de: "Nachhaltige Beschaffung von den Gewürzinseln Indonesiens"
      },
      {
        en: "Fresh harvest with optimal aromatic profile",
        de: "Frische Ernte mit optimalem Aromaprofil"
      },
      {
        en: "Available in bulk quantities for commercial extraction",
        de: "In Großmengen für kommerzielle Extraktion verfügbar"
      }
    ],
    relevantCategories: ["Spices", "Herbs"],
    useCase: {
      en: "Our high-oil-content spices are used for essential oil production in aromatherapy, perfumes, cosmetics, and personal care products. Cloves, nutmeg, cinnamon, and ginger are particularly prized for their aromatic compounds.",
      de: "Unsere gewürze mit hohem Ölgehalt werden für ätherische Ölproduktion in Aromatherapie, Parfüms, Kosmetik und Körperpflegeprodukte verwendet. Gewürznelken, Muskatnuss, Zimt und Ingwer sind besonders geschätzt für ihre aromatischen Verbindungen."
    },
    ctaText: {
      en: "Request essential oil product specifications",
      de: "Fordern Sie Produktspezifikationen für ätherische Öle an"
    },
    keywords: {
      en: [
        "indonesian spices for essential oils",
        "high oil content cloves indonesia",
        "aromatic spices for distillation",
        "clove oil raw materials indonesia",
        "ginger essential oil raw material"
      ],
      de: [
        "indonesische gewürze für ätherische öle",
        "hoher ölgehalt gewürznelken indonesien",
        "aromatische gewürze für destillation",
        "nelkenöl rohmaterialien indonesien",
        "ingwer ätherisches öl rohmaterial"
      ]
    }
  },
  {
    id: "beverage",
    name: "Beverage Industry",
    nameDe: "Getränkeindustrie",
    slug: "beverage",
    icon: "🥤",
    description: {
      en: "Premium spices and botanicals from Indonesia for beverage manufacturers. Our ginger, vanilla, cinnamon, and other aromatic ingredients enhance tea, coffee, energy drinks, and alcoholic beverages.",
      de: "Premium-Gewürze und Botanicals aus Indonesien für Getränkehersteller. Unser Ingwer, Vanille, Zimt und andere aromatische Zutaten veredeln Tee, Kaffee, Energy-Drinks und alkoholische Getränke."
    },
    benefits: [
      {
        en: "Clean, pure flavors without additives or contaminants",
        de: "Saubere, reine Aromen ohne Zusatzstoffe oder Verunreinigungen"
      },
      {
        en: "Consistent flavor profiles for batch-to-batch reliability",
        de: "Konsistente Aromaprofile für Chargen-zu-Chargen-Zuverlässigkeit"
      },
      {
        en: "Food-grade quality with proper documentation",
        de: "Lebensmittelqualität mit ordnungsgemäßer Dokumentation"
      },
      {
        en: "Specialized varieties for beverage applications",
        de: "Spezialisierte Sorten für Getränkeanwendungen"
      },
      {
        en: "Soluble and extractable forms for various processing needs",
        de: "Lösliche und extrahierbare Formen für verschiedene Verarbeitungsanforderungen"
      }
    ],
    relevantCategories: ["Spices", "Herbs", "Coffee"],
    useCase: {
      en: "Our products are used in teas, coffees, energy drinks, ginger beer, vanilla-flavored beverages, and alcoholic beverages like gin and rum. We ensure consistent flavor and quality for large-scale beverage production.",
      de: "Unsere Produkte werden in Tees, Kaffees, Energy-Drinks, Ingwerbier, Vanille-getränkte Getränke und alkoholische Getränke wie Gin und Rum verwendet. Wir gewährleisten konsistenten Geschmack und Qualität für großtechnische Getränkeproduktion."
    },
    ctaText: {
      en: "Request beverage industry product samples",
      de: "Fordern Sie Musterverpackungen für die Getränkeindustrie an"
    },
    keywords: {
      en: [
        "indonesian spices for beverages",
        "ginger for tea and drinks indonesia",
        "vanilla beans for beverage industry",
        "cinnamon for coffee indonesia",
        "botanical ingredients for drinks"
      ],
      de: [
        "indonesische gewürze für getränke",
        "ingwer für tee und getränke indonesien",
        "vanillebohnen für getränkeindustrie",
        "zimt für kaffee indonesien",
        "pflanzliche zutaten für getränke"
      ]
    }
  },
  {
    id: "bakery",
    name: "Bakery",
    nameDe: "Bäckerei",
    slug: "bakery",
    icon: "🥐",
    description: {
      en: "Premium baking spices and ingredients from Indonesia for bakeries and confectionery. Our cinnamon, nutmeg, cloves, ginger, and vanilla add authentic flavors to breads, cakes, pastries, and chocolates.",
      de: "Premium-Backgewürze und -zutaten aus Indonesien für Bäckereien und Süßwaren. Unser Zimt, Muskatnuss, Gewürznelken, Ingwer und Vanille verleihen Brot, Kuchen, Gebäck und Schokoladen authentische Aromen."
    },
    benefits: [
      {
        en: "Consistent spice quality for reliable baking results",
        de: "Konsistente Gewürzqualität für zuverlässige Backergebnisse"
      },
      {
        en: "Fine grind options for smooth incorporation in doughs",
        de: "Feinmehloptionen für reibungslose Einbringung in Teige"
      },
      {
        en: "Whole and ground spices for versatile applications",
        de: "Ganze und gemahlene Gewürze für vielseitige Anwendungen"
      },
      {
        en: "Food-safe packaging and handling",
        de: "Lebensmittelsichere Verpackung und Handhabung"
      },
      {
        en: "Premium-grade vanilla beans for specialty confectionery",
        de: "Premium-Vanillebohnen für Spezialitäten-Süßwaren"
      }
    ],
    relevantCategories: ["Spices", "Beans"],
    useCase: {
      en: "Our baking spices are used in artisanal and industrial bakeries for breads, rolls, cakes, cookies, pastries, and confectionery. Ceylon cinnamon for delicate flavors, Indonesian cloves for depth, and premium vanilla for luxury chocolates.",
      de: "Unsere Backgewürze werden in handwerklichen und industriellen Bäckereien für Brot, Brötchen, Kuchen, Kekse, Gebäck und Süßwaren verwendet. Ceylon-Zimt für feine Aromen, indonesische Gewürznelken für Tiefe und Premium-Vanille für Luxus-Schokoladen."
    },
    ctaText: {
      en: "Request bakery spice samples",
      de: "Fordern Sie Musterverpackungen für Backgewürze an"
    },
    keywords: {
      en: [
        "indonesian spices for bakery",
        "baking spices wholesale indonesia",
        "cinnamon for bread indonesia",
        "vanilla beans for bakery",
        "nutmeg for pastries indonesia"
      ],
      de: [
        "indonesische gewürze für bäckerei",
        "backgewürze großhandel indonesien",
        "zimt für brot indonesien",
        "vanillebohnen für bäckerei",
        "muskatnuss für gebäck indonesien"
      ]
    }
  },
  {
    id: "distributors",
    name: "Distributors",
    nameDe: "Distributoren",
    slug: "distributors",
    icon: "📦",
    description: {
      en: "Partner with Indo Tropical Agriculture as your B2B agricultural products distributor. We offer competitive wholesale pricing, reliable supply, and marketing support for distributors worldwide.",
      de: "Werden Sie Partner von Indo Tropical Agriculture als Ihr B2B-Distributor für Landwirtschaftsprodukte. Wir bieten wettbewerbsfähige Großhandelspreise, zuverlässige Versorgung und Marketingunterstützung für Distributoren weltweit."
    },
    benefits: [
      {
        en: "Exclusive territorial distribution rights available",
        de: "Exklusive regionale Vertriebsrechte verfügbar"
      },
      {
        en: "Competitive wholesale pricing with volume discounts",
        de: "Wettbewerbsfähige Großhandelspreise mit Mengenrabatten"
      },
      {
        en: "Marketing materials and product documentation support",
        de: "Marketingmaterialien und Produktdokumentationsunterstützung"
      },
      {
        en: "Flexible payment terms for established partners",
        de: "Flexible Zahlungsbedingungen für etablierte Partner"
      },
      {
        en: "Training on product knowledge and handling",
        de: "Schulungen zu Produktwissen und Handhabung"
      }
    ],
    relevantCategories: ["Spices", "Herbs", "Nuts", "Coffee", "Beans"],
    useCase: {
      en: "We partner with food distributors, spice merchants, and agricultural product wholesalers across Europe, Asia, and the Americas. Distributors benefit from our direct sourcing, quality assurance, and comprehensive product range.",
      de: "Wir arbeiten mit Lebensmitteldistributoren, Gewürzhändlern und Landwirtschaftsprodukte-Großhändlern in Europa, Asien und Amerika zusammen. Distributoren profitieren von unserer direkten Beschaffung, Qualitätssicherung und umfassenden Produktpalette."
    },
    ctaText: {
      en: "Start your distributor partnership with us",
      de: "Starten Sie Ihre Distributorenpartnerschaft mit uns"
    },
    keywords: {
      en: [
        "indonesian agricultural products distributor",
        "wholesale spice distribution opportunities",
        "b2b agricultural products partnership",
        "spice distribution business indonesia",
        "agricultural products wholesale distributor"
      ],
      de: [
        "indonesischer landwirtschaftsprodukte distributor",
        "gewürze großhandel distributionsmöglichkeiten",
        "b2b landwirtschaftsprodukte partnerschaft",
        "gewürzvertrieb geschäft indonesien",
        "landwirtschaftsprodukte großhandelsdistributor"
      ]
    }
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
