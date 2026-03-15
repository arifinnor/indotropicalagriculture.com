export interface ProductSpec {
  label: {
    en: string;
    de: string;
  };
  valueA: string;
  valueB: string;
}

export interface ProductComparison {
  id: string;
  slug: string;
  productA: {
    name: {
      en: string;
      de: string;
    };
    slug: string;
    description: {
      en: string;
      de: string;
    };
  };
  productB: {
    name: {
      en: string;
      de: string;
    };
    slug: string;
    description: {
      en: string;
      de: string;
    };
  };
  intro: {
    en: string;
    de: string;
  };
  keyDifference: {
    en: string;
    de: string;
  };
  specs: ProductSpec[];
  chooseA: {
    title: {
      en: string;
      de: string;
    };
    reasons: {
      en: string[];
      de: string[];
    };
  };
  chooseB: {
    title: {
      en: string;
      de: string;
    };
    reasons: {
      en: string[];
      de: string[];
    };
  };
  conclusion: {
    en: string;
    de: string;
  };
  metaTitle: {
    en: string;
    de: string;
  };
  metaDescription: {
    en: string;
    de: string;
  };
  keywords: {
    en: string[];
    de: string[];
  };
  publishedAt: string;
  updatedAt: string;
}

export const comparisons: ProductComparison[] = [
  {
    id: "white-pepper-vs-black-pepper",
    slug: "white-pepper-vs-black-pepper",
    productA: {
      name: {
        en: "White Pepper",
        de: "Weißer Pfeffer"
      },
      slug: "white-pepper",
      description: {
        en: "White pepper is made from fully ripe pepper berries that have been soaked to remove the outer skin, leaving only the inner seed. It has a milder, more delicate flavor with earthy and fermented notes.",
        de: "Weißer Pfeffer wird aus vollreifen Pfefferbeeren hergestellt, die eingeweicht wurden, um die äußere Schale zu entfernen, so dass nur der innere Samen übrig bleibt. Er hat ein milderes, feineres Aroma mit erdigen und fermentierten Noten."
      }
    },
    productB: {
      name: {
        en: "Black Pepper",
        de: "Schwarzer Pfeffer"
      },
      slug: "black-pepper",
      description: {
        en: "Black pepper is produced from unripe, green pepper berries that are dried with the skin on, resulting in the characteristic dark wrinkled appearance. It has a stronger, more pungent flavor with spicy and woody notes.",
        de: "Schwarzer Pfeffer wird aus unreifen, grünen Pfefferbeeren hergestellt, die mit der Schale getrocknet werden, was das charakteristische dunkle Runzeln-Aussehen ergibt. Er hat ein stärkeres, schärferes Aroma mit würzigen und holzigen Noten."
      }
    },
    intro: {
      en: "Choosing between white and black pepper is one of the most common decisions for spice importers and food manufacturers. Both come from the same plant (Piper nigrum), but the processing differences result in distinct flavors, appearances, and culinary applications. Understanding these differences helps you select the right product for your market and customers.",
      de: "Die Wahl zwischen weißem und schwarzem Pfeffer ist eine der häufigsten Entscheidungen für Gewürzimporteure und Lebensmittelhersteller. Beide stammen aus derselben Pflanze (Piper nigrum), aber die Verarbeitungsunterschiede führen zu unterschiedlichen Geschmacksrichtungen, Erscheinungen und kulinarischen Anwendungen. Das Verständnis dieser Unterschiede hilft Ihnen, das richtige Produkt für Ihren Markt und Ihre Kunden auszuwählen."
    },
    keyDifference: {
      en: "The fundamental difference lies in the processing: white pepper is the seed of the ripe berry with the skin removed, while black pepper is the unripe berry dried with the skin intact. This affects flavor intensity, aroma profile, and best-use applications.",
      de: "Der grundlegende Unterschied liegt in der Verarbeitung: Weißer Pfeffer ist der Samen der reifen Beere ohne die entfernte Schale, während schwarzer Pfeffer die unreife Beere mit intakter Schale ist. Dies beeinflusst die Geschmacksintensität, das Aromaprofil und die besten Anwendungen."
    },
    specs: [
      {
        label: { en: "Processing Method", de: "Verarbeitungsmethode" },
        valueA: "Ripe berries, soaked & skinned",
        valueB: "Unripe berries, dried with skin"
      },
      {
        label: { en: "Flavor Intensity", de: "Geschmacksintensität" },
        valueA: "Mild, delicate, earthy",
        valueB: "Strong, pungent, spicy"
      },
      {
        label: { en: "Appearance", de: "Erscheinung" },
        valueA: "White to cream-colored, smooth",
        valueB: "Dark brown to black, wrinkled"
      },
      {
        label: { en: "Heat Level", de: "Schärfegrad" },
        valueA: "Medium heat",
        valueB: "High heat"
      },
      {
        label: { en: "Aroma", de: "Aroma" },
        valueA: "Fermented, earthy notes",
        valueB: "Piney, woody, citrusy"
      },
      {
        label: { en: "HS Code", de: "HS-Code" },
        valueA: "0904.11",
        valueB: "0904.11"
      },
      {
        label: { en: "Price Range", de: "Preisbereich" },
        valueA: "Generally higher (more labor-intensive)",
        valueB: "Generally lower (simpler processing)"
      },
      {
        label: { en: "Shelf Life", de: "Haltbarkeit" },
        valueA: "2-3 years proper storage",
        valueB: "2-3 years proper storage"
      },
      {
        label: { en: "Primary Markets", de: "Hauptmärkte" },
        valueA: "Europe (for white sauces, soups)",
        valueB: "Global (universal seasoning)"
      }
    ],
    chooseA: {
      title: { en: "Choose White Pepper When:", de: "Wählen Sie Weißen Pfeffer, wenn:" },
      reasons: {
        en: [
          "You need a pepper for light-colored dishes where visible specks are undesirable (white sauces, cream soups, mashed potatoes)",
          "Your customers prefer a milder, less overpowering pepper flavor",
          "You're supplying European markets where white pepper is traditional in certain dishes",
          "You need an earthy, fermented flavor profile for specific recipes",
          "Visual presentation is critical in the final product"
        ],
        de: [
          "Sie einen Pfeffer für helle Gerichte benötigen, bei denen sichtbare Flecken unerwünscht sind (weiße Soßen, Cremesuppen, Kartoffelbrei)",
          "Ihre Kunden einen milderen, weniger überwältigenden Pfeffergeschmack bevorzugen",
          "Sie europäische Märkte beliefern, wo weißer Pfeffer in bestimmten Gerichten traditionell ist",
          "Sie ein erdiges, fermentiertes Geschmacksprofil für bestimmte Rezepte benötigen",
          "Die visuelle Präsentation im Endprodukt kritisch ist"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose Black Pepper When:", de: "Wählen Sie Schwarzen Pfeffer, wenn:" },
      reasons: {
        en: [
          "You need the most versatile, universally recognized pepper flavor",
          "Your customers prefer a stronger, more pungent pepper experience",
          "You're supplying markets where black pepper is the default seasoning",
          "You want the traditional appearance of cracked or ground pepper",
          "Cost-effectiveness is important without sacrificing quality"
        ],
        de: [
          "Sie den vielseitigsten, allgemein anerkannten Pfeffergeschmack benötigen",
          "Ihre Kunden ein stärkeres, schärferes Pfeffererlebnis bevorzugen",
          "Sie Märkte beliefern, wo schwarzer Pfeffer die Standardgewürzung ist",
          "Sie das traditionelle Aussehen von gemahlenem oder zerbrochenem Pfeffer wünschen",
          "Kosteneffizienz wichtig ist, ohne Qualität zu opfern"
        ]
      }
    },
    conclusion: {
      en: "Both white and black pepper have their place in the global spice market, and many importers choose to stock both varieties to serve different customer needs. White pepper commands a premium price in European markets where it's valued for specific applications, while black pepper remains the workhorse spice with steady worldwide demand. When importing from Indonesia, we can provide both varieties in various grades to match your target market's preferences and quality requirements.",
      de: "Sowohl weißer als auch schwarzer Pfeffer haben ihren Platz im globalen Gewürzmarkt, und viele Importeure wählen beide Sorten, um unterschiedliche Kundenbedürfnisse zu erfüllen. Weißer Pfeffer erzielt auf europäischen Märkten einen höheren Preis, wo er für bestimmte Anwendungen geschätzt wird, während schwarzer Pfeffer das Standardgewürz mit stetiger weltweiter Nachfrage bleibt. Beim Import aus Indonesien können wir beide Sorten in verschiedenen Qualitäten liefern, um den Vorlieben und Qualitätsanforderungen Ihres Zielmarktes zu entsprechen."
    },
    metaTitle: {
      en: "White Pepper vs Black Pepper: Complete Buyer's Guide | Indo Tropical Agriculture",
      de: "Weißer Pfeffer vs Schwarzer Pfeffer: Vollständiger Einkaufsführer | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Compare white pepper vs black pepper: flavor differences, processing methods, pricing, and best uses for B2B spice importers. Source premium Indonesian peppercorns.",
      de: "Vergleich von weißem Pfeffer vs schwarzem Pfeffer: Geschmacksunterschiede, Verarbeitungsmethoden, Preise und beste Verwendungen für B2B-Gewürzimporteure. Beziehen Sie premium indonesische Pfefferkörner."
    },
    keywords: {
      en: ["white pepper vs black pepper", "piper nigrum", "indonesian pepper", "pepper import", "spice comparison", "wholesale pepper"],
      de: ["weißer pfeffer vs schwarzer pfeffer", "piper nigrum", "indonesischer pfeffer", "pfeffer import", "gewürz vergleich", "großhandel pfeffer"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: "clove-stem-vs-whole-clove",
    slug: "clove-stem-vs-whole-clove",
    productA: {
      name: {
        en: "Clove Stem",
        de: "Nelkenstiel"
      },
      slug: "clove-stem",
      description: {
        en: "Clove stems are the woody stalks attached to clove buds. They contain a lower concentration of clove oil (10-14%) compared to whole buds but still retain the characteristic clove aroma and flavor. They're a cost-effective alternative for essential oil extraction and industrial applications.",
        de: "Nelkenstiele sind die holzigen Stiele, die an Nelkenknospen befestigt sind. Sie enthalten eine niedrigere Konzentration an Nelkenöl (10-14%) im Vergleich zu ganzen Knospen, behalten aber das charakteristische Nelkenaroma und den Geschmack. Sie sind eine kostengünstige Alternative für die ätherische Ölgewinnung und industrielle Anwendungen."
      }
    },
    productB: {
      name: {
        en: "Whole Clove",
        de: "Ganze Nelke"
      },
      slug: "whole-clove",
      description: {
        en: "Whole cloves are the dried, unopened flower buds of the clove tree. They contain high levels of clove oil (15-20%) and are prized for their intense aroma, flavor, and medicinal properties. They're the premium choice for culinary use and high-end essential oil production.",
        de: "Ganze Nelken sind die getrockneten, ungeöffneten Blütenknospen des Nelkenbaums. Sie enthalten hohe Mengen an Nelkenöl (15-20%) und sind für ihr intensives Aroma, den Geschmack und die medizinischen Eigenschaften geschätzt. Sie sind die Premiumwahl für kulinarische Anwendungen und hochwertige ätherische Ölgewinnung."
      }
    },
    intro: {
      en: "Clove stems and whole cloves come from the same Syzygium aromaticum tree, but they serve different markets and applications. Understanding the oil content differences, pricing structures, and industrial uses helps importers make informed decisions based on their customers' needs and budget constraints.",
      de: "Nelkenstiele und ganze Nelken stammen vom selben Syzygium aromaticum Baum, dienen aber verschiedenen Märkten und Anwendungen. Das Verständnis der Ölgehalt-Unterschiede, Preisstrukturen und industriellen Verwendungen hilft Importeuren, informierte Entscheidungen basierend auf den Bedürfnissen und Budgetbeschränkungen ihrer Kunden zu treffen."
    },
    keyDifference: {
      en: "The primary difference is essential oil content: whole cloves contain 15-20% clove oil, while stems contain only 10-14%. This affects pricing, aroma intensity, and whether the product is suitable for culinary use or primarily for industrial oil extraction.",
      de: "Der primäre Unterschied ist der Gehalt an ätherischem Öl: Ganze Nelken enthalten 15-20% Nelkenöl, während Stiele nur 10-14% enthalten. Dies beeinflusst die Preise, die Aromaintensität und ob das Produkt für kulinarische Anwendungen oder hauptsächlich für die industrielle Ölgewinnung geeignet ist."
    },
    specs: [
      {
        label: { en: "Clove Oil Content", de: "Nelkenölgehalt" },
        valueA: "10-14%",
        valueB: "15-20%"
      },
      {
        label: { en: "Primary Use", de: "Hauptverwendung" },
        valueA: "Oil extraction, industrial",
        valueB: "Culinary, medicinal, oil extraction"
      },
      {
        label: { en: "Appearance", de: "Erscheinung" },
        valueA: "Brown, woody stems",
        valueB: "Dark brown, dried flower buds"
      },
      {
        label: { en: "Aroma Intensity", de: "Aromaintensität" },
        valueA: "Moderate",
        valueB: "Very strong"
      },
      {
        label: { en: "Price Point", de: "Preisniveau" },
        valueA: "Lower (60-80% of whole cloves)",
        valueB: "Premium pricing"
      },
      {
        label: { en: "HS Code", de: "HS-Code" },
        valueA: "0906.11",
        valueB: "0906.11"
      },
      {
        label: { en: "Origin", de: "Herkunft" },
        valueA: "Indonesia, Madagascar, Tanzania",
        valueB: "Indonesia, Madagascar, Tanzania"
      },
      {
        label: { en: "Moisture Content", de: "Feuchtigkeitsgehalt" },
        valueA: "10-12%",
        valueB: "10-12%"
      }
    ],
    chooseA: {
      title: { en: "Choose Clove Stems When:", de: "Wählen Sie Nelkenstiele, wenn:" },
      reasons: {
        en: [
          "Cost is a primary concern and you need the most economical source of clove oil",
          "Your customers use cloves primarily for essential oil extraction (perfumery, pharmaceuticals)",
          "Culinary appearance is not a requirement",
          "You're supplying industrial manufacturers who prioritize oil yield over appearance",
          "You need to offer a budget-friendly option alongside premium whole cloves"
        ],
        de: [
          "Kosten ein primäres Anliegen sind und Sie die preiswerteste Nelkenölquelle benötigen",
          "Ihre Kunden Nelken hauptsächlich für die ätherische Ölgewinnung verwenden (Parfümerie, Pharmazeutika)",
          "Kulinarische Erscheinung keine Anforderung ist",
          "Sie industrielle Hersteller beliefern, die Ölausbeute vor Erscheinung priorisieren",
          "Sie ein budgetfreundliches Option neben Premium-Ganznelken anbieten müssen"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose Whole Cloves When:", de: "Wählen Sie Ganze Nelken, wenn:" },
      reasons: {
        en: [
          "Your customers require cloves for food seasoning and culinary applications",
          "Aroma intensity and quality are the top priorities",
          "You're supplying premium spice markets, gourmet retailers, or high-end food manufacturers",
          "The visual appearance of the whole bud is important for your product",
          "You need cloves for medicinal or aromatherapy products where purity matters"
        ],
        de: [
          "Ihre Kunden Nelken für Lebensmittelgewürze und kulinarische Anwendungen benötigen",
          "Aromaintensität und Qualität die Top-Prioritäten sind",
          "Sie Premium-Gewürzmärkte, Gourmet-Einzelhändler oder hochwertige Lebensmittelhersteller beliefern",
          "Das visuelle Erscheinungsbild der ganzen Knospe für Ihr Produkt wichtig ist",
          "Sie Nelken für medizinische oder Aromatherapieprodukte benötigen, wo Reinheit wichtig ist"
        ]
      }
    },
    conclusion: {
      en: "Many experienced importers stock both clove stems and whole cloves to serve different market segments. Whole cloves command premium pricing in culinary and specialty markets, while stems provide excellent value for industrial oil extraction. Indonesia produces some of the world's finest cloves, and we can supply both stems and buds in various grades to match your specific requirements and target market needs.",
      de: "Viele erfahrene Importeure lagern sowohl Nelkenstiele als auch ganze Nelken, um verschiedene Marktsegmente zu bedienen. Ganze Nelken erzielen Premiumpreise in kulinarischen und Spezialmärkten, während Stiele ein hervorragendes Preis-Leistungs-Verhältnis für die industrielle Ölgewinnung bieten. Indonesien produziert einige der feinsten Nelken der Welt, und wir können sowohl Stiele als auch Knospen in verschiedenen Qualitäten liefern, um Ihren spezifischen Anforderungen und den Bedürfnissen Ihres Zielmarktes zu entsprechen."
    },
    metaTitle: {
      en: "Clove Stem vs Whole Clove: Essential Oil Content & Pricing Guide",
      de: "Nelkenstiel vs Ganze Nelke: Ätherisches Öl & Preisvergleich"
    },
    metaDescription: {
      en: "Compare clove stems vs whole cloves for B2B import: essential oil content (10-20%), pricing differences, culinary uses, and industrial applications. Source Indonesian cloves.",
      de: "Vergleich von Nelkenstielen vs ganzen Nelken für B2B-Import: Ätherisches Öl (10-20%), Preisunterschiede, kulinarische Verwendung und industrielle Anwendungen. Beziehen Sie indonesische Nelken."
    },
    keywords: {
      en: ["clove stem vs whole clove", "indonesian cloves", "clove oil content", "clove import", "syzygium aromaticum", "wholesale cloves"],
      de: ["nelkenstiel vs ganze nelke", "indonesische nelken", "nelkenölgehalt", "nelken import", "syzygium aromaticum", "großhandel nelken"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: "nutmeg-abc-vs-bwp-vs-dust",
    slug: "nutmeg-abc-vs-bwp-vs-dust",
    productA: {
      name: {
        en: "Nutmeg ABC Grade",
        de: "Nelken ABC-Qualität"
      },
      slug: "nutmeg-abc",
      description: {
        en: "Nutmeg ABC grade consists of whole, sound nutmegs with a minimum diameter of 20mm and moisture content below 12%. This is the highest commercial grade, ideal for grinding and premium spice markets. The nuts have a rich, aromatic flavor and are free from defects and infestation.",
        de: "Muskatnuss ABC-Qualität besteht aus ganzen, einwandfreien Muskatnüssen mit einem Mindestdurchmesser von 20 mm und einem Feuchtigkeitsgehalt unter 12%. Dies ist die höchste Handelsqualität, ideal zum Mahlen und für Premium-Gewürzmärkte. Die Nüsse haben einen reichen, aromatischen Geschmack und sind frei von Defekten und Befall."
      }
    },
    productB: {
      name: {
        en: "Nutmeg BWP / Dust",
        de: "Muskatnuss BWP / Staub"
      },
      slug: "nutmeg-bwp-dust",
      description: {
        en: "Nutmeg BWP (Broken, Whole, Pieces) and Dust are lower-grade products consisting of broken nuts, shells, and smaller pieces. They're primarily used for essential oil extraction and industrial applications where appearance is not a concern. They offer excellent value for oleoresin and oil production.",
        de: "Muskatnuss BWP (Broken, Whole, Pieces) und Staub sind Produkte minderer Qualität, die aus zerbrochenen Nüssen, Schalen und kleineren Stücken bestehen. Sie werden hauptsächlich für die ätherische Ölgewinnung und industrielle Anwendungen verwendet, wo Erscheinung keine Rolle spielt. Sie bieten ein hervorragendes Preis-Leistungs-Verhältnis für Oleoresin- und Ölproduktion."
      }
    },
    intro: {
      en: "Indonesian nutmeg is graded based on size, soundness, and visual appearance. Understanding the difference between ABC grade (whole premium nuts) and lower grades like BWP/Dust (broken pieces and dust) is essential for importers to select the right product for their market—whether it's premium spice retail or industrial oil extraction.",
      de: "Indonesische Muskatnüsse werden basierend auf Größe, Unversehrtheit und visuellem Erscheinungsbild sortiert. Das Verständnis des Unterschieds zwischen ABC-Qualität (ganze Premium-Nüsse) und niedrigeren Qualitäten wie BWP/Staub (zerbrochene Stücke und Staub) ist für Importeure wesentlich, um das richtige Produkt für ihren Markt auszuwählen—ob es sich um Premium-Gewürz-Einzelhandel oder industrielle Ölgewinnung handelt."
    },
    keyDifference: {
      en: "ABC grade consists of whole, premium-quality nuts ideal for culinary grinding and retail packaging, while BWP/Dust includes broken pieces, shells, and dust used primarily for essential oil extraction. The visual and quality difference makes ABC grade command 2-3x higher prices in the market.",
      de: "ABC-Qualität besteht aus ganzen, premiumqualitativen Nüssen, ideal für kulinarisches Mahlen und Einzelhandelsverpackungen, während BWP/Staub zerbrochene Stücke, Schalen und Staub enthält, die hauptsächlich für die ätherische Ölgewinnung verwendet werden. Der visuelle und Qualitätsunterschied führt dazu, dass ABC-Qualität auf dem Markt 2-3x höhere Preise erzielt."
    },
    specs: [
      {
        label: { en: "Product Type", de: "Produktart" },
        valueA: "Whole, sound nutmegs",
        valueB: "Broken pieces, shells, dust"
      },
      {
        label: { en: "Minimum Size", de: "Minimale Größe" },
        valueA: "20mm diameter",
        valueB: "No size requirement"
      },
      {
        label: { en: "Moisture Content", de: "Feuchtigkeitsgehalt" },
        valueA: "Max 12%",
        valueB: "Max 14%"
      },
      {
        label: { en: "Primary Use", de: "Hauptverwendung" },
        valueA: "Grinding, culinary, retail",
        valueB: "Oil extraction, industrial"
      },
      {
        label: { en: "Oil Content", de: "Ölgehalt" },
        valueA: "6-8%",
        valueB: "5-7% (varies)"
      },
      {
        label: { en: "Price Range", de: "Preisbereich" },
        valueA: "Premium (2-3x higher)",
        valueB: "Economy (60-80% less)"
      },
      {
        label: { en: "HS Code", de: "HS-Code" },
        valueA: "0908.11",
        valueB: "0908.11"
      },
      {
        label: { en: "Defects Allowed", de: "Zulässige Defekte" },
        valueA: "Minimal (<5%)",
        valueB: "Higher (not visually graded)"
      }
    ],
    chooseA: {
      title: { en: "Choose ABC Grade When:", de: "Wählen Sie ABC-Qualität, wenn:" },
      reasons: {
        en: [
          "Your customers will grind the nutmeg for culinary use (baking, sauces, beverages)",
          "You're supplying retail spice markets or gourmet food companies",
          "Visual appearance and product uniformity are important for packaging",
          "You need the highest quality for premium positioning in your market",
          "Your customers value the rich, full aroma of premium whole nutmegs"
        ],
        de: [
          "Ihre Kunden die Muskatnuss für kulinarische Zwecke mahlen werden (Backen, Soßen, Getränke)",
          "Sie Einzelhandelsgewürzmärkte oder Gourmet-Lebensmittelunternehmen beliefern",
          "Visuelles Erscheinungsbild und Produktuniformität für Verpackungen wichtig sind",
          "Sie die höchste Qualität für Premium-Positionierung in Ihrem Markt benötigen",
          "Ihre Kunden das reiche, volle Aroma von Premium-Ganzmuskatnüssen schätzen"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose BWP/Dust When:", de: "Wählen Sie BWP/Staub, wenn:" },
      reasons: {
        en: [
          "Your primary use is essential oil or oleoresin extraction",
          "Cost efficiency is critical for your industrial production",
          "Visual appearance is not relevant for your end product",
          "You're supplying manufacturers of nutmeg oil, butter, or extracts",
          "You need to maximize oil yield per dollar spent"
        ],
        de: [
          "Ihre Hauptverwendung die ätherische Öl- oder Oleoresin-Gewinnung ist",
          "Kosteneffizienz für Ihre industrielle Produktion kritisch ist",
          "Visuelles Erscheinungsbild für Ihr Endprodukt nicht relevant ist",
          "Sie Hersteller von Muskatnussöl, -butter oder -extrakten beliefern",
          "Sie die Ölausbeute pro ausgegebenem Dollar maximieren müssen"
        ]
      }
    },
    conclusion: {
      en: "The Indonesian nutmeg market offers products for every segment from premium retail to industrial extraction. ABC grade nutmegs from the Banda Islands and other growing regions in Indonesia are renowned worldwide for their quality. We can supply all grades of nutmeg to match your specific needs—whether you're serving high-end spice retailers or essential oil manufacturers looking for cost-effective raw materials.",
      de: "Der indonesische Muskatnussmarkt bietet Produkte für jedes Segment von Premium-Einzelhandel bis hin zur industriellen Extraktion. ABC-Muskatnüsse von den Banda-Inseln und anderen Anbaugebieten in Indonesien sind weltweit für ihre Qualität bekannt. Wir können alle Muskatnussqualitäten liefern, um Ihren spezifischen Bedürfnissen zu entsprechen—ob Sie Premium-Gewürzeinzelhändler oder Hersteller von ätherischen Ölen beliefern, die kostengünstige Rohstoffe suchen."
    },
    metaTitle: {
      en: "Nutmeg ABC vs BWP vs Dust: Grade Comparison & Import Guide",
      de: "Muskatnuss ABC vs BWP vs Staub: Qualitätsvergleich & Einkaufsführer"
    },
    metaDescription: {
      en: "Compare Indonesian nutmeg grades: ABC premium whole nuts vs BWP broken pieces vs dust for oil extraction. Pricing, uses, and specifications for B2B importers.",
      de: "Vergleich indonesischer Muskatnussqualitäten: ABC Premium-Ganznüsse vs BWP-zerbrochene Stücke vs Staub für Ölgewinnung. Preise, Verwendung und Spezifikationen für B2B-Importeure."
    },
    keywords: {
      en: ["nutmeg abc grade", "nutmeg bwp", "indonesian nutmeg", "nutmeg import", "nutmeg oil extraction", "spice grading"],
      de: ["muskatnuss abc qualität", "muskatnuss bwp", "indonesische muskatnuss", "muskatnuss import", "muskatnuss ölgewinnung", "gewürzsortierung"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: "fresh-ginger-vs-dried-ginger",
    slug: "fresh-ginger-vs-dried-ginger",
    productA: {
      name: {
        en: "Fresh Ginger",
        de: "Frischer Ingwer"
      },
      slug: "fresh-ginger",
      description: {
        en: "Fresh ginger is the raw, unprocessed rhizome with high moisture content (80-85%). It has a pungent, spicy, and slightly sweet flavor with citrusy notes. Fresh ginger is highly perishable and requires cold chain logistics, but offers the most vibrant flavor profile for culinary applications.",
        de: "Frischer Ingwer ist die rohe, unverarbeitete Rhizom mit hohem Feuchtigkeitsgehalt (80-85%). Er hat ein scharfes, würziges und leicht süßes Aroma mit zitrusartigen Noten. Frischer Ingwer ist sehr leicht verderblich und erfordert Kühlketten-Logistik, bietet aber das lebhafteste Geschmacksprofil für kulinarische Anwendungen."
      }
    },
    productB: {
      name: {
        en: "Dried Ginger",
        de: "Getrockneter Ingwer"
      },
      slug: "dried-ginger",
      description: {
        en: "Dried ginger is processed fresh ginger that has been sun-dried or machine-dried to reduce moisture content to 10-12%. It has a more concentrated, intense flavor with earthy and woody notes. Dried ginger is shelf-stable, easier to ship, and the standard form for industrial spice processing and essential oil extraction.",
        de: "Getrockneter Ingwer ist verarbeiteter frischer Ingwer, der sonnengetrocknet oder maschinell getrocknet wurde, um den Feuchtigkeitsgehalt auf 10-12% zu reduzieren. Er hat ein konzentrierteres, intensiveres Aroma mit erdigen und holzigen Noten. Getrockneter Ingwer ist lagerfähig, einfacher zu versenden und die Standardform für industrielle Gewürzverarbeitung und ätherische Ölgewinnung."
      }
    },
    intro: {
      en: "The choice between fresh and dried ginger depends on your target market, logistics capabilities, and end-use applications. While fresh ginger offers superior flavor for culinary use, dried ginger provides practical advantages for international trade and industrial processing. Indonesia is a major producer of both forms, offering year-round availability for export markets.",
      de: "Die Wahl zwischen frischem und getrocknetem Ingwer hängt von Ihrem Zielmarkt, den logistischen Möglichkeiten und den Endverwendungsanwendungen ab. Während frischer Ingwer einen überlegenen Geschmack für kulinarische Anwendungen bietet, hat getrockneter Ingwer praktische Vorteile für den internationalen Handel und die industrielle Verarbeitung. Indonesien ist ein bedeutender Produzent beider Formen und bietet ganzjährige Verfügbarkeit für Exportmärkte."
    },
    keyDifference: {
      en: "The fundamental difference is moisture content and shelf life: fresh ginger contains 80-85% moisture and is highly perishable (2-3 weeks refrigerated), while dried ginger has 10-12% moisture and is shelf-stable for 18-24 months. This dictates shipping requirements, storage conditions, and suitable applications.",
      de: "Der grundlegende Unterschied ist der Feuchtigkeitsgehalt und die Haltbarkeit: Frischer Ingwer enthält 80-85% Feuchtigkeit und ist sehr leicht verderblich (2-3 Wochen gekühlt), während getrockneter Ingwer 10-12% Feuchtigkeit hat und 18-24 Monate lagerfähig ist. Dies bestimmt die Versandanforderungen, Lagerbedingungen und geeignete Anwendungen."
    },
    specs: [
      {
        label: { en: "Moisture Content", de: "Feuchtigkeitsgehalt" },
        valueA: "80-85%",
        valueB: "10-12%"
      },
      {
        label: { en: "Shelf Life", de: "Haltbarkeit" },
        valueA: "2-3 weeks (refrigerated)",
        valueB: "18-24 months (ambient)"
      },
      {
        label: { en: "Shipping", de: "Versand" },
        valueA: "Air freight or reefer container",
        valueB: "Standard container (ambient)"
      },
      {
        label: { en: "Flavor Profile", de: "Geschmacksprofil" },
        valueA: "Pungent, citrusy, bright",
        valueB: "Concentrated, earthy, woody"
      },
      {
        label: { en: "Price", de: "Preis" },
        valueA: "Higher (includes air freight)",
        valueB: "Lower (economical shipping)"
      },
      {
        label: { en: "Primary Use", de: "Hauptverwendung" },
        valueA: "Culinary, restaurants, retail",
        valueB: "Industrial, spice blends, oils"
      },
      {
        label: { en: "HS Code", de: "HS-Code" },
        valueA: "0910.11 (fresh)",
        valueB: "0910.12 (dried)"
      },
      {
        label: { en: "Origin", de: "Herkunft" },
        valueA: "Indonesia (Java, Sumatra)",
        valueB: "Indonesia (Java, Sumatra)"
      },
      {
        label: { en: "Oil Content", de: "Ölgehalt" },
        valueA: "1-3% (fresh weight)",
        valueB: "2-4% (dried weight)"
      }
    ],
    chooseA: {
      title: { en: "Choose Fresh Ginger When:", de: "Wählen Sie Frischen Ingwer, wenn:" },
      reasons: {
        en: [
          "Your customers are restaurants, food service, or retail markets for fresh produce",
          "Superior, bright flavor is worth the premium and logistics costs",
          "You have access to cold chain distribution and quick turnover",
          "You're supplying markets where fresh ginger is traditionally preferred (Asian cuisine)",
          "Visual appearance of fresh rhizomes is important for your product display"
        ],
        de: [
          "Ihre Kunden Restaurants, Lebensmittel-Service oder Einzelhandelsmärkte für frische Produkte sind",
          "Überlegener, lebhafter Geschmack den Premium und die Logistikkosten wert ist",
          "Sie Zugang zu Kühlketten-Vertrieb und schnellem Umschlag haben",
          "Sie Märkte beliefern, wo frischer Ingwer traditionell bevorzugt wird (asiatische Küche)",
          "Das visuelle Erscheinungsbild der frischen Rhizome für Ihre Produktanzeige wichtig ist"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose Dried Ginger When:", de: "Wählen Sie Getrockneten Ingwer, wenn:" },
      reasons: {
        en: [
          "You need cost-effective shipping for international trade",
          "Your customers use ginger for industrial processing, spice blends, or oil extraction",
          "Long shelf life and ambient storage are important for your inventory",
          "You're supplying manufacturers of ginger products (tea, confectionery, supplements)",
          "Consistent year-round supply is needed regardless of harvest season"
        ],
        de: [
          "Sie kostengünstigen Versand für internationalen Handel benötigen",
          "Ihre Kunden Ingwer für industrielle Verarbeitung, Gewürzmischungen oder Ölgewinnung verwenden",
          "Lange Haltbarkeit und Umgebungslagerung für Ihren Bestand wichtig sind",
          "Sie Hersteller von Ingwerprodukten beliefern (Tee, Süßwaren, Nahrungsergänzungsmittel)",
          "Konsistente ganzjährige Versorgung unabhängig von der Erntezeit benötigt wird"
        ]
      }
    },
    conclusion: {
      en: "Many importers maintain both fresh and dried ginger in their portfolio to serve different market segments. Fresh ginger commands premium pricing in markets that value quality and flavor, while dried ginger provides stable, year-round availability for industrial users. Indonesia produces excellent ginger in both forms, and we can help you source the right product based on your specific requirements, logistics capabilities, and target market preferences.",
      de: "Viele Importeure führen sowohl frischen als auch getrockneten Ingwer in ihrem Portfolio, um verschiedene Marktsegmente zu bedienen. Frischer Ingwer erzielt Premiumpreise in Märkten, die Qualität und Geschmack schätzen, während getrockneter Ingwer stabile, ganzjährige Verfügbarkeit für industrielle用户提供 bietet. Indonesien produziert ausgezeichneten Ingwer in beiden Formen, und wir können Ihnen helfen, das richtige Produkt basierend auf Ihren spezifischen Anforderungen, logistischen Möglichkeiten und den Präferenzen Ihres Zielmarktes zu beziehen."
    },
    metaTitle: {
      en: "Fresh Ginger vs Dried Ginger: Import Guide for B2B Buyers",
      de: "Frischer Ingwer vs Getrockneter Ingwer: Einkaufsführer für B2B-Käufer"
    },
    metaDescription: {
      en: "Compare fresh vs dried ginger for import: moisture content, shelf life, shipping logistics, pricing, and applications. Source premium Indonesian ginger wholesale.",
      de: "Vergleich von frischem vs getrocknetem Ingwer für Import: Feuchtigkeitsgehalt, Haltbarkeit, Versandlogistik, Preise und Anwendungen. Beziehen Sie premium indonesischen Ingwer im Großhandel."
    },
    keywords: {
      en: ["fresh ginger vs dried ginger", "indonesian ginger", "ginger import", "zingiber officinale", "wholesale ginger", "ginger oil"],
      de: ["frischer ingwer vs getrockneter ingwer", "indonesischer ingwer", "ingwer import", "zingiber officinale", "großhandel ingwer", "ingweröl"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: "robusta-vs-arabica-coffee",
    slug: "robusta-vs-arabica-coffee",
    productA: {
      name: {
        en: "Robusta Coffee",
        de: "Robusta-Kaffee"
      },
      slug: "robusta-coffee",
      description: {
        en: "Robusta coffee (Coffea canephora) is grown at lower altitudes (0-800m) and has higher caffeine content (2.2-2.7%). It has a strong, bitter flavor with earthy and rubbery notes. Robusta is more disease-resistant, higher-yielding, and forms the base of many espresso blends for its rich crema production.",
        de: "Robusta-Kaffee (Coffea canephora) wird in niedrigeren Lagen (0-800 m) angebaut und hat einen höheren Koffeingehalt (2,2-2,7%). Er hat einen starken, bitteren Geschmack mit erdigen und gummiartigen Noten. Robusta ist krankheitsresistenter, ertragsstärker und bildet die Basis vieler Espresso-Mischungen für seine reiche Crema-Produktion."
      }
    },
    productB: {
      name: {
        en: "Arabica Coffee",
        de: "Arabica-Kaffee"
      },
      slug: "arabica-coffee",
      description: {
        en: "Arabica coffee (Coffea arabica) is grown at higher altitudes (1000-2000m) and has lower caffeine content (0.8-1.5%). It offers complex, nuanced flavors with fruity, floral, and acidic notes. Arabica is considered the premium variety, commanding higher prices, but is more delicate and susceptible to disease.",
        de: "Arabica-Kaffee (Coffea arabica) wird in höheren Lagen (1000-2000 m) angebaut und hat einen niedrigeren Koffeingehalt (0,8-1,5%). Er bietet komplexe, nuancierte Aromen mit fruchtigen, blumigen und sauren Noten. Arabica gilt als die Premium-Varietät, erzielt höhere Preise, ist aber empfindlicher und anfälliger für Krankheiten."
      }
    },
    intro: {
      en: "Indonesia is one of the world's largest coffee producers, offering both Robusta and Arabica varieties from different regions. Understanding the differences in growing conditions, flavor profiles, caffeine content, and market positioning helps importers select the right beans for their customers—whether for premium specialty roasters or commercial espresso blends.",
      de: "Indonesien ist einer der größten Kaffeeproduzenten der Welt und bietet sowohl Robusta- als auch Arabica-Varietäten aus verschiedenen Regionen. Das Verständnis der Unterschiede in Anbaubedingungen, Geschmacksprofilen, Koffeingehalt und Marktpositionierung hilft Importeuren, die richtigen Bohnen für ihre Kunden auszuwählen—ob für Premium-Spezialröster oder kommerzielle Espresso-Mischungen."
    },
    keyDifference: {
      en: "The fundamental differences are genetics and growing conditions: Robusta grows at lower altitudes with higher caffeine and bitter, earthy flavors, while Arabica requires high-altitude cultivation and produces complex, acidic, fruity flavors. These differences affect pricing, caffeine content, oil production, and best-use applications.",
      de: "Die grundlegenden Unterschiede sind Genetik und Anbaubedingungen: Robusta wächst in niedrigeren Lagen mit höherem Koffeingehalt und bitteren, erdigen Aromen, während Arabica Hochlandanbau erfordert und komplexe, saure, fruchtige Aromen produziert. Diese Unterschiede beeinflussen Preise, Koffeingehalt, Ölproduktion und die besten Anwendungen."
    },
    specs: [
      {
        label: { en: "Scientific Name", de: "Wissenschaftlicher Name" },
        valueA: "Coffea canephora",
        valueB: "Coffea arabica"
      },
      {
        label: { en: "Growing Altitude", de: "Anbauhöhe" },
        valueA: "0-800m",
        valueB: "1000-2000m"
      },
      {
        label: { en: "Caffeine Content", de: "Koffeingehalt" },
        valueA: "2.2-2.7%",
        valueB: "0.8-1.5%"
      },
      {
        label: { en: "Flavor Profile", de: "Geschmacksprofil" },
        valueA: "Strong, bitter, earthy, rubbery",
        valueB: "Complex, fruity, floral, acidic"
      },
      {
        label: { en: "Sugar Content", de: "Zuckergehalt" },
        valueA: "3-7%",
        valueB: "6-9%"
      },
      {
        label: { en: "Disease Resistance", de: "Krankheitsresistenz" },
        valueA: "High",
        valueB: "Low"
      },
      {
        label: { en: "Price", de: "Preis" },
        valueA: "Lower (40-60% of Arabica)",
        valueB: "Premium pricing"
      },
      {
        label: { en: "Primary Use", de: "Hauptverwendung" },
        valueA: "Espresso blends, instant coffee",
        valueB: "Specialty coffee, single-origin"
      },
      {
        label: { en: "Indonesian Regions", de: "Indonesische Regionen" },
        valueA: "Sumatra, Java, Sulawesi",
        valueB: "Sumatra (Lintong, Mandheling), Java, Flores"
      }
    ],
    chooseA: {
      title: { en: "Choose Robusta When:", de: "Wählen Sie Robusta, wenn:" },
      reasons: {
        en: [
          "Cost efficiency is important for your commercial coffee products",
          "You're sourcing for espresso blends that need rich crema and body",
          "Your customers produce instant coffee or coffee extracts",
          "You need higher caffeine content for energy drinks or fortified products",
          "Consistent supply and disease resistance are priorities for your sourcing"
        ],
        de: [
          "Kosteneffizienz für Ihre kommerziellen Kaffeprodukte wichtig ist",
          "Sie für Espresso-Mischungen einkaufen, die reiche Crema und Körper brauchen",
          "Ihre Kunden löslichen Kaffee oder Kaffeeextrakte herstellen",
          "Sie höheren Koffeingehalt für Energydrinks oder angereicherte Produkte benötigen",
          "Konsistente Versorgung und Krankheitsresistenz Prioritäten für Ihre Beschaffung sind"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose Arabica When:", de: "Wählen Sie Arabica, wenn:" },
      reasons: {
        en: [
          "Your customers are specialty coffee roasters and premium markets",
          "Complex, nuanced flavor profiles are required for single-origin offerings",
          "You're supplying third-wave coffee shops and discerning consumers",
          "Premium positioning and quality differentiation are important for your brand",
          "Your market values fruity, floral, and acidic flavor characteristics"
        ],
        de: [
          "Ihre Kunden Spezialitäten-Kaffeeröster und Premium-Märkte sind",
          "Komplexe, nuancierte Geschmacksprofile für Single-Origin-Angebote erforderlich sind",
          "Sie Third-Wave-Cafés und anspruchsvolle Verbraucher beliefern",
          "Premium-Positionierung und Qualitätsdifferenzierung für Ihre Marke wichtig sind",
          "Ihr Markt fruchtige, blumige und saure Geschmacksmerkmale schätzt"
        ]
      }
    },
    conclusion: {
      en: "Indonesia's coffee heritage spans both Robusta and Arabica production, with each variety thriving in different regions and serving distinct market needs. Many importers maintain relationships with suppliers for both types, offering flexibility to serve diverse customer segments from instant coffee manufacturers to specialty roasters. We can source Indonesian beans from renowned regions like Sumatra, Java, Sulawesi, and Flores, ensuring you get the right quality and characteristics for your target market.",
      de: "Indonesiens Kaffeeerbe umfasst sowohl Robusta- als auch Arabica-Produktion, wobei jede Varietät in verschiedenen Regionen gedeiht und unterschiedliche Marktbedürfnisse bedient. Viele Importeure pflegen Beziehungen zu Lieferanten für beide Arten und bieten Flexibilität, um verschiedene Kundensegmente von löslichen Kaffeeherstellern bis hin zu Spezialitätenröstern zu bedienen. Wir können indonesische Bohnen aus renommierten Regionen wie Sumatra, Java, Sulawesi und Flores beziehen und sicherstellen, dass Sie die richtige Qualität und die richtigen Merkmale für Ihren Zielmarkt erhalten."
    },
    metaTitle: {
      en: "Robusta vs Arabica Coffee: Indonesian Beans Comparison Guide",
      de: "Robusta vs Arabica Kaffee: Indonesischer Bohnenvergleich"
    },
    metaDescription: {
      en: "Compare Robusta vs Arabica coffee from Indonesia: caffeine content, flavor profiles, growing regions, pricing, and applications for B2B coffee importers.",
      de: "Vergleich von Robusta vs Arabica Kaffee aus Indonesien: Koffeingehalt, Geschmacksprofile, Anbaugebiete, Preise und Anwendungen für B2B-Kaffeeimporteure."
    },
    keywords: {
      en: ["robusta vs arabica", "indonesian coffee", "sumatra coffee", "coffee import", "wholesale coffee beans", "caffeine content"],
      de: ["robusta vs arabica", "indonesischer kaffee", "sumatra kaffee", "kaffee import", "großhandel kaffeebohnen", "koffeingehalt"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: "cassia-vs-ceylon-cinnamon",
    slug: "cassia-vs-ceylon-cinnamon",
    productA: {
      name: {
        en: "Cassia Cinnamon",
        de: "Cassia-Zimt"
      },
      slug: "cassia-cinnamon",
      description: {
        en: "Cassia cinnamon (Cinnamomum cassia) is the most common cinnamon variety in international trade, characterized by its thick, hard bark and strong, spicy flavor. It contains higher levels of coumarin (4-5%) and has a more intense, pungent taste. Cassia is primarily produced in Indonesia (Korintje variety), China, and Vietnam.",
        de: "Cassia-Zimt (Cinnamomum cassia) ist die häufigste Zimtvarietät im internationalen Handel, gekennzeichnet durch seine dicke, harte Rinde und starkes, würziges Aroma. Er enthält höhere Mengen an Cumarin (4-5%) und hat einen intensiveren, schärferen Geschmack. Cassia wird hauptsächlich in Indonesien (Korintje-Varietät), China und Vietnam produziert."
      }
    },
    productB: {
      name: {
        en: "Ceylon Cinnamon",
        de: "Ceylon-Zimt"
      },
      slug: "ceylon-cinnamon",
      description: {
        en: "Ceylon cinnamon (Cinnamomum verum) is known as 'true cinnamon,' originating from Sri Lanka. It has a thin, brittle bark that forms multiple quills when dried. Ceylon cinnamon has a delicate, sweet flavor with citrusy notes and contains very low coumarin levels (<0.004%), making it the preferred choice for health-conscious markets and frequent consumption.",
        de: "Ceylon-Zimt (Cinnamomum verum) ist als 'echter Zimt' bekannt, ursprünglich aus Sri Lanka. Er hat eine dünne, spröde Rinde, die beim Trocknen mehrere Stangen bildet. Ceylon-Zimt hat ein feines, süßes Aroma mit zitrusartigen Noten und enthält sehr niedrige Cumarin-Werte (<0,004%), was ihn zur bevorzugten Wahl für gesundheitsbewusste Märkte und häufigen Verzehr macht."
      }
    },
    intro: {
      en: "The distinction between Cassia and Ceylon cinnamon is crucial for spice importers, as these products serve different markets, price points, and regulatory considerations. Indonesia is the world's largest producer of Cassia cinnamon (specifically the Korintje variety), while Ceylon remains the premium choice for European markets with strict coumarin regulations.",
      de: "Die Unterscheidung zwischen Cassia- und Ceylon-Zimt ist für Gewürzimporteure entscheidend, da diese Produkte verschiedene Märkte, Preispunkte und regulatorische Überlegungen bedienen. Indonesien ist der weltgrößte Produzent von Cassia-Zimt (speziell die Korintje-Varietät), während Ceylon die Premiumwahl für europäische Märkte mit strengen Cumarin-Regulierungen bleibt."
    },
    keyDifference: {
      en: "The critical differences are coumarin content and flavor profile: Cassia contains high coumarin levels (4-5%) with strong, spicy flavor, while Ceylon has minimal coumarin (<0.004%) with delicate, sweet flavor. EU regulations limit coumarin in food products, making Ceylon the preferred choice for European markets, while Cassia dominates global trade due to its lower price.",
      de: "Die entscheidenden Unterschiede sind Cumarin-Gehalt und Geschmacksprofil: Cassia enthält hohe Cumarin-Werte (4-5%) mit starkem, würzigem Geschmack, während Ceylon minimales Cumarin (<0,004%) mit feinem, süßem Geschmack hat. EU-Regulierungen begrenzen Cumarin in Lebensmitteln, was Ceylon zur bevorzugten Wahl für europäische Märkte macht, während Cassia aufgrund seines niedrigeren Preises den Welthandel dominiert."
    },
    specs: [
      {
        label: { en: "Scientific Name", de: "Wissenschaftlicher Name" },
        valueA: "Cinnamomum cassia",
        valueB: "Cinnamomum verum"
      },
      {
        label: { en: "Coumarin Content", de: "Cumarin-Gehalt" },
        valueA: "4-5% (high)",
        valueB: "<0.004% (very low)"
      },
      {
        label: { en: "Bark Characteristics", de: "Rindenmerkmale" },
        valueA: "Thick, hard, single quill",
        valueB: "Thin, brittle, multiple quills"
      },
      {
        label: { en: "Flavor Profile", de: "Geschmacksprofil" },
        valueA: "Strong, spicy, pungent, bitter",
        valueB: "Delicate, sweet, citrusy"
      },
      {
        label: { en: "Price", de: "Preis" },
        valueA: "Economy (3-5x cheaper)",
        valueB: "Premium (3-5x higher)"
      },
      {
        label: { en: "Major Producers", de: "Hauptproduzenten" },
        valueA: "Indonesia (Korintje), China, Vietnam",
        valueB: "Sri Lanka (90% of world supply)"
      },
      {
        label: { en: "Market Share", de: "Marktanteil" },
        valueA: "90%+ of global trade",
        valueB: "<10% of global trade"
      },
      {
        label: { en: "HS Code", de: "HS-Code" },
        valueA: "0906.11",
        valueB: "0906.11"
      },
      {
        label: { en: "EU Regulation", de: "EU-Regulierung" },
        valueA: "Coumarin limits restrict use",
        valueB: "No restrictions (safe for daily use)"
      }
    ],
    chooseA: {
      title: { en: "Choose Cassia Cinnamon When:", de: "Wählen Sie Cassia-Zimt, wenn:" },
      reasons: {
        en: [
          "Cost-effectiveness is the primary consideration for your customers",
          "You're supplying markets where coumarin regulations are less restrictive",
          "Strong, spicy cinnamon flavor is desired (baked goods, commercial spice blends)",
          "Your customers use cinnamon in small amounts or occasionally",
          "You need the standard cinnamon variety that dominates global trade"
        ],
        de: [
          "Kosteneffizienz die primäre Überlegung für Ihre Kunden ist",
          "Sie Märkte beliefern, wo Cumarin-Regulierungen weniger restriktiv sind",
          "Starker, würziger Zimtgeschmack gewünscht ist (Backwaren, kommerzielle Gewürzmischungen)",
          "Ihre Kunden Zimt in kleinen Mengen oder gelegentlich verwenden",
          "Sie die Standard-Zimtvarietät benötigen, die den Welthandel dominiert"
        ]
      }
    },
    chooseB: {
      title: { en: "Choose Ceylon Cinnamon When:", de: "Wählen Sie Ceylon-Zimt, wenn:" },
      reasons: {
        en: [
          "You're supplying EU markets with strict coumarin regulations",
          "Health-conscious customers value low coumarin for frequent consumption",
          "Delicate, sweet flavor profile is preferred (desserts, beverages)",
          "Premium positioning justifies the higher price point",
          "Your customers value the 'true cinnamon' designation and origin story"
        ],
        de: [
          "Sie EU-Märkte mit strengen Cumarin-Regulierungen beliefern",
          "Gesundheitsbewusste Kunden niedriges Cumarin für häufigen Verzehr schätzen",
          "Feines, süßes Geschmacksprofil bevorzugt wird (Desserts, Getränke)",
          "Premium-Positionierung den höheren Preis rechtfertigt",
          "Ihre Kunden die Bezeichnung 'echter Zimt' und die Herkunftsgeschichte schätzen"
        ]
      }
    },
    conclusion: {
      en: "The global cinnamon market is dominated by Indonesian Cassia (Korintje variety), which offers excellent value and is suitable for most commercial applications. However, Ceylon cinnamon occupies an important premium niche, particularly in European markets with coumarin restrictions. Many importers stock both varieties to serve different customer segments. We can supply premium Indonesian Korintje Cassia as well as source Ceylon cinnamon through our network, ensuring you have the right product for each market you serve.",
      de: "Der globale Zimtmarkt wird von indonesischem Cassia (Korintje-Varietät) dominiert, der ein hervorragendes Preis-Leistungs-Verhältnis bietet und für die meisten kommerziellen Anwendungen geeignet ist. Ceylon-Zimt nimmt jedoch eine wichtige Premium-Nische ein, besonders in europäischen Märkten mit Cumarin-Beschränkungen. Viele Importeure lagern beide Varietäten, um verschiedene Kundensegmente zu bedienen. Wir können premium indonesischen Korintje-Cassia sowie Ceylon-Zimt über unser Netzwerk beziehen und sicherstellen, dass Sie das richtige Produkt für jeden Markt haben, den Sie bedienen."
    },
    metaTitle: {
      en: "Cassia vs Ceylon Cinnamon: Coumarin Content & Import Guide",
      de: "Cassia vs Ceylon Zimt: Cumarin-Gehalt & Einkaufsführer"
    },
    metaDescription: {
      en: "Compare Cassia vs Ceylon cinnamon for B2B import: coumarin content, flavor differences, EU regulations, Indonesian Korintje cinnamon, and pricing for wholesale buyers.",
      de: "Vergleich von Cassia vs Ceylon Zimt für B2B-Import: Cumarin-Gehalt, Geschmacksunterschiede, EU-Regulierungen, indonesischer Korintje-Zimt und Preise für Großhandelskäufer."
    },
    keywords: {
      en: ["cassia vs ceylon cinnamon", "indonesian cinnamon", "korintje cinnamon", "coumarin content", "cinnamon import", "wholesale cinnamon"],
      de: ["cassia vs ceylon zimt", "indonesischer zimt", "korintje zimt", "cumarin gehalt", "zimt import", "großhandel zimt"]
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15"
  }
];

// Helper functions
export function getComparisons() {
  return comparisons;
}

export function getComparisonBySlug(slug: string): ProductComparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonById(id: string): ProductComparison | undefined {
  return comparisons.find((c) => c.id === id);
}

export function getRelatedComparisons(currentId: string, locale: string = "en", limit: number = 3): ProductComparison[] {
  return comparisons
    .filter((c) => c.id !== currentId)
    .slice(0, limit);
}
