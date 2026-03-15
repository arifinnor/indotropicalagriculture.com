export interface Destination {
  id: string;
  name: string;
  nameDe?: string;
  slug: string;
  flag: string;
  importRegulations: {
    en: string;
    de: string;
  };
  popularProducts: {
    en: string[];
    de: string[];
  };
  shippingRoute: {
    en: string;
    de: string;
  };
  transitTime: {
    en: string;
    de: string;
  };
  preferredPayment: {
    en: string[];
    de: string[];
  };
  keywords: {
    en: string[];
    de: string[];
  };
}

export const destinations: Destination[] = [
  {
    id: "germany",
    name: "Germany",
    nameDe: "Deutschland",
    slug: "germany",
    flag: "🇩🇪",
    importRegulations: {
      en: "Germany requires phytosanitary certificates for agricultural products. Products must comply with EU standards (Regulation EC 178/2002). HS codes required for customs clearance. VAT applies to imports.",
      de: "Deutschland verlangt Pflanzengesundheitszeugnisse für landwirtschaftliche Produkte. Produkte müssen EU-Standards (Verordnung EG 178/2002) erfüllen. HS-Codes für den Zoll erforderlich. MwSt. wird auf Importe angewendet."
    },
    popularProducts: {
      en: ["Cloves", "Nutmeg", "Cinnamon", "Black Pepper", "Vanilla"],
      de: ["Gewürznelken", "Muskatnuss", "Zimt", "Schwarzer Pfeffer", "Vanille"]
    },
    shippingRoute: {
      en: "Shipments to Germany typically route through Port of Hamburg or Rotterdam (Netherlands) for overland transport.",
      de: "Sendungen nach Deutschland werden typischerweise über den Hamburger Hafen oder Rotterdam (Niederlande) für den Landtransport geleitet."
    },
    transitTime: {
      en: "25-35 days from Indonesian ports to Hamburg/Rotterdam.",
      de: "25-35 Tage von indonesischen Häfen nach Hamburg/Rotterdam."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "SEPA for EU clients"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "SEPA für EU-Kunden"]
    },
    keywords: {
      en: [
        "indonesian spice export to germany",
        "import from indonesia to germany",
        "wholesale spices germany",
        "indonesian agriculture supplier germany"
      ],
      de: [
        "indonesischer gewürzexport nach deutschland",
        "import aus indonesien nach deutschland",
        "gewürze großhandel deutschland",
        "indonesischer landwirtschaftslieferant deutschland"
      ]
    }
  },
  {
    id: "netherlands",
    name: "Netherlands",
    nameDe: "Niederlande",
    slug: "netherlands",
    flag: "🇳🇱",
    importRegulations: {
      en: "Netherlands requires EU-compliant phytosanitary certificates. Rotterdam is a major entry point with streamlined customs procedures. Products must meet Dutch Food and Consumer Product Safety Authority (NVWA) standards.",
      de: "Die Niederlande verlangen EU-konforme Pflanzengesundheitszeugnisse. Rotterdam ist ein wichtiger Eingangshafen mit vereinfachten Zollverfahren. Produkte müssen den Standards der niederländischen Lebensmittel- und Verbraucherproduktbehörde (NVWA) entsprechen."
    },
    popularProducts: {
      en: ["Vanilla Beans", "Cloves", "Ginger", "Nutmeg", "Cashew Nuts"],
      de: ["Vanillebohnen", "Gewürznelken", "Ingwer", "Muskatnuss", "Cashewnüsse"]
    },
    shippingRoute: {
      en: "Direct shipments to Port of Rotterdam, Europe's largest seaport.",
      de: "Direktversand zum Hafen Rotterdam, dem größten Seehafen Europas."
    },
    transitTime: {
      en: "25-30 days from Indonesian ports to Rotterdam.",
      de: "25-30 Tage von indonesischen Häfen nach Rotterdam."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "SEPA"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "SEPA"]
    },
    keywords: {
      en: [
        "indonesian spice export to netherlands",
        "import from indonesia to netherlands",
        "wholesale spices netherlands",
        "indonesian agriculture supplier netherlands"
      ],
      de: [
        "indonesischer gewürzexport in die niederlande",
        "import aus indonesien in die niederlande",
        "gewürze großhandel niederlande",
        "indonesischer landwirtschaftslieferant niederlande"
      ]
    }
  },
  {
    id: "uk",
    name: "United Kingdom",
    nameDe: "Vereinigtes Königreich",
    slug: "uk",
    flag: "🇬🇧",
    importRegulations: {
      en: "UK has specific post-Brexit import regulations. Phytosanitary certificates and customs declarations required. Products must meet UK Food Standards Agency (FSA) requirements. VAT and import duties apply.",
      de: "Das Vereinigte Königreich hat spezifische Post-Brexit-Importvorschriften. Pflanzengesundheitszeugnisse und Zollerklärungen erforderlich. Produkte müssen die Anforderungen der britischen Lebensmittelbehörde (FSA) erfüllen. MwSt. und Importzölle gelten."
    },
    popularProducts: {
      en: ["Cloves", "Nutmeg", "Cinnamon", "Black Pepper", "Vanilla Beans"],
      de: ["Gewürznelken", "Muskatnuss", "Zimt", "Schwarzer Pfeffer", "Vanillebohnen"]
    },
    shippingRoute: {
      en: "Shipments route through Felixstowe, Southampton, or London Gateway ports.",
      de: "Sendungen werden über die Häfen Felixstowe, Southampton oder London Gateway geleitet."
    },
    transitTime: {
      en: "28-35 days from Indonesian ports to UK ports.",
      de: "28-35 Tage von indonesischen Häfen zu britischen Häfen."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "BACS/CHAPS for UK clients"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "BACS/CHAPS für britische Kunden"]
    },
    keywords: {
      en: [
        "indonesian spice export to uk",
        "import from indonesia to uk",
        "wholesale spices united kingdom",
        "indonesian agriculture supplier uk"
      ],
      de: [
        "indonesischer gewürzexport nach großbritannien",
        "import aus indonesien nach großbritannien",
        "gewürze großhandel vereinigtes königreich",
        "indonesischer landwirtschaftslieferant uk"
      ]
    }
  },
  {
    id: "france",
    name: "France",
    nameDe: "Frankreich",
    slug: "france",
    flag: "🇫🇷",
    importRegulations: {
      en: "France requires EU-compliant phytosanitary certificates and customs documentation. Products must meet DGCCRF (Directorate General for Competition, Consumer Affairs and Fraud Control) standards. Organic certification (ECOCERT) available for certified products.",
      de: "Frankreich verlangt EU-konforme Pflanzengesundheitszeugnisse und Zollunterlagen. Produkte müssen den Standards der DGCCRF (Direktion für Wettbewerb, Verbraucherangelegenheiten und Betrugsbekämpfung) entsprechen. Bio-Zertifizierung (ECOCERT) verfügbar für zertifizierte Produkte."
    },
    popularProducts: {
      en: ["Vanilla Beans", "Clove Stem", "Cinnamon", "Nutmeg", "Ginger"],
      de: ["Vanillebohnen", "Nelkenstiele", "Zimt", "Muskatnuss", "Ingwer"]
    },
    shippingRoute: {
      en: "Shipments to Port of Marseille, Le Havre, or Dunkerque.",
      de: "Sendungen zu den Häfen Marseille, Le Havre oder Dunkerque."
    },
    transitTime: {
      en: "28-35 days from Indonesian ports to French ports.",
      de: "28-35 Tage von indonesischen Häfen zu französischen Häfen."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "SEPA"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "SEPA"]
    },
    keywords: {
      en: [
        "indonesian spice export to france",
        "indonesian vanilla beans france",
        "import from indonesia to france",
        "wholesale spices france",
        "indonesian agriculture supplier france"
      ],
      de: [
        "indonesischer gewürzexport nach frankreich",
        "indonesische vanillebohnen frankreich",
        "import aus indonesien nach frankreich",
        "gewürze großhandel frankreich",
        "indonesischer landwirtschaftslieferant frankreich"
      ]
    }
  },
  {
    id: "usa",
    name: "United States",
    nameDe: "Vereinigte Staaten",
    slug: "usa",
    flag: "🇺🇸",
    importRegulations: {
      en: "USA requires FDA registration, phytosanitary certificates, and customs declarations. Products must comply with USDA and FDA regulations. Import duties and customs bonds required.",
      de: "Die USA verlangen FDA-Registrierung, Pflanzengesundheitszeugnisse und Zollerklärungen. Produkte müssen USDA- und FDA-Vorschriften entsprechen. Importzölle und Zollbürgschaften erforderlich."
    },
    popularProducts: {
      en: ["Coffee Beans", "Cloves", "Nutmeg", "Cashew Nuts", "Ginger"],
      de: ["Kaffeebohnen", "Gewürznelken", "Muskatnuss", "Cashewnüsse", "Ingwer"]
    },
    shippingRoute: {
      en: "Shipments to East Coast ports (New York, Savannah, Norfolk) or West Coast ports (Los Angeles, Long Beach).",
      de: "Sendungen zu Ostküstenhäfen (New York, Savannah, Norfolk) oder Westküstenhäfen (Los Angeles, Long Beach)."
    },
    transitTime: {
      en: "East Coast: 30-40 days | West Coast: 20-25 days from Indonesian ports.",
      de: "Ostküste: 30-40 Tage | Westküste: 20-25 Tage von indonesischen Häfen."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "ACH/Wire Transfer"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "ACH/Überweisung"]
    },
    keywords: {
      en: [
        "indonesian spice export to usa",
        "import from indonesia to usa",
        "wholesale spices america",
        "indonesian agriculture supplier usa"
      ],
      de: [
        "indonesischer gewürzexport in die usa",
        "import aus indonesien in die usa",
        "gewürze großhandel amerika",
        "indonesischer landwirtschaftslieferant usa"
      ]
    }
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    nameDe: "Vereinigte Arabische Emirate",
    slug: "uae",
    flag: "🇦🇪",
    importRegulations: {
      en: "UAE requires phytosanitary certificates and halal certification for food products. Products must meet UAE Ministry of Climate Change and Environment standards. Import duties apply (typically 5%).",
      de: "Die VAE verlangen Pflanzengesundheitszeugnisse und Halal-Zertifizierung für Lebensmittelprodukte. Produkte müssen den Standards des Ministeriums für Klimawandel und Umwelt der VAE entsprechen. Importzölle gelten (typischerweise 5%)."
    },
    popularProducts: {
      en: ["Cloves", "Cinnamon", "Cardamom", "Black Pepper", "Ginger"],
      de: ["Gewürznelken", "Zimt", "Kardamom", "Schwarzer Pfeffer", "Ingwer"]
    },
    shippingRoute: {
      en: "Shipments to Jebel Ali Port (Dubai), Khalifa Port (Abu Dhabi), or Port Rashid.",
      de: "Sendungen zum Hafen Jebel Ali (Dubai), Khalifa-Port (Abu Dhabi) oder Port Rashid."
    },
    transitTime: {
      en: "12-18 days from Indonesian ports to UAE ports.",
      de: "12-18 Tage von indonesischen Häfen zu Häfen der VAE."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "Local bank transfer"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "Lokale Banküberweisung"]
    },
    keywords: {
      en: [
        "indonesian spice export to uae",
        "indonesian spices dubai",
        "import from indonesia to uae",
        "wholesale spices middle east",
        "indonesian agriculture supplier uae"
      ],
      de: [
        "indonesischer gewürzexport in die vae",
        "indonesische gewürze dubai",
        "import aus indonesien in die vae",
        "gewürze großhandel naher osten",
        "indonesischer landwirtschaftslieferant vae"
      ]
    }
  },
  {
    id: "japan",
    name: "Japan",
    nameDe: "Japan",
    slug: "japan",
    flag: "🇯🇵",
    importRegulations: {
      en: "Japan has strict import regulations. Requires phytosanitary certificates, import permits, and compliance with MHLW (Ministry of Health, Labour and Welfare) and MAFF (Ministry of Agriculture, Forestry and Fisheries) standards. Residue testing for pesticides required.",
      de: "Japan hat strenge Importvorschriften. Verlangt Pflanzengesundheitszeugnisse, Importgenehmigungen und Compliance mit MHLW- (Ministerium für Gesundheit, Arbeit und Wohlfahrt) und MAFF-Standards (Ministerium für Landwirtschaft, Forstwirtschaft und Fischerei). Rückstandstests für Pestizide erforderlich."
    },
    popularProducts: {
      en: ["Ginger", "Cloves", "Nutmeg", "Vanilla Beans", "Cinnamon"],
      de: ["Ingwer", "Gewürznelken", "Muskatnuss", "Vanillebohnen", "Zimt"]
    },
    shippingRoute: {
      en: "Shipments to Port of Tokyo, Yokohama, Osaka, or Kobe.",
      de: "Sendungen zu den Häfen Tokio, Yokohama, Osaka oder Kobe."
    },
    transitTime: {
      en: "12-18 days from Indonesian ports to Japanese ports.",
      de: "12-18 Tage von indonesischen Häfen zu japanischen Häfen."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "Local bank transfer"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "Lokale Banküberweisung"]
    },
    keywords: {
      en: [
        "indonesian spice export to japan",
        "indonesian ginger japan",
        "import from indonesia to japan",
        "wholesale spices tokyo",
        "indonesian agriculture supplier japan"
      ],
      de: [
        "indonesischer gewürzexport nach japan",
        "indonesischer ingwer japan",
        "import aus indonesien nach japan",
        "gewürze großhandel tokyo",
        "indonesischer landwirtschaftslieferant japan"
      ]
    }
  },
  {
    id: "china",
    name: "China",
    nameDe: "China",
    slug: "china",
    flag: "🇨🇳",
    importRegulations: {
      en: "China requires phytosanitary certificates and import permits. Products must comply with GACC (General Administration of Customs of China) standards. CIQ (China Inspection and Quarantine) inspection required. HS codes essential for customs clearance.",
      de: "China verlangt Pflanzengesundheitszeugnisse und Importgenehmigungen. Produkte müssen den Standards der GACC (General Administration of Customs of China) entsprechen. CIQ-Inspektion (China Inspection and Quarantine) erforderlich. HS-Codes für den Zoll wesentlich."
    },
    popularProducts: {
      en: ["Clove Stem", "Nutmeg", "Cinnamon", "Cashew Nuts", "Coffee"],
      de: ["Nelkenstiele", "Muskatnuss", "Zimt", "Cashewnüsse", "Kaffee"]
    },
    shippingRoute: {
      en: "Shipments to Shanghai, Shenzhen, Ningbo, or Guangzhou ports.",
      de: "Sendungen zu den Häfen Shanghai, Shenzhen, Ningbo oder Guangzhou."
    },
    transitTime: {
      en: "10-18 days from Indonesian ports to Chinese ports.",
      de: "10-18 Tage von indonesischen Häfen zu chinesischen Häfen."
    },
    preferredPayment: {
      en: ["T/T (Telegraphic Transfer)", "L/C (Letter of Credit)", "RMB payments for local clients"],
      de: ["T/T (Telegrafische Überweisung)", "L/C (Akkreditiv)", "RMB-Zahlungen für lokale Kunden"]
    },
    keywords: {
      en: [
        "indonesian spice export to china",
        "indonesian clove stem china",
        "import from indonesia to china",
        "wholesale spices shanghai",
        "indonesian agriculture supplier china"
      ],
      de: [
        "indonesischer gewürzexport nach china",
        "indonesische nelkenstiele china",
        "import aus indonesien nach china",
        "gewürze großhandel shanghai",
        "indonesischer landwirtschaftslieferant china"
      ]
    }
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
