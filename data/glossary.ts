export interface GlossaryTerm {
  id: string;
  slug: string;
  title: {
    en: string;
    de: string;
  };
  definition: {
    en: string;
    de: string;
  };
  content: {
    en: {
      summary: string;
      sections: {
        heading: string;
        content: string;
      }[];
      relatedTerms?: string[];
    };
    de: {
      summary: string;
      sections: {
        heading: string;
        content: string;
      }[];
      relatedTerms?: string[];
    };
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
  category: string;
  publishedAt: string;
  updatedAt: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "hs-code",
    slug: "hs-code",
    title: {
      en: "HS Code (Harmonized System Code)",
      de: "HS-Code (Harmonisiertes System)"
    },
    definition: {
      en: "A standardized numerical method of classifying traded products developed and maintained by the World Customs Organization (WCO). HS codes are used by customs authorities worldwide to identify products for tariff assessment, trade statistics, and regulatory compliance.",
      de: "Ein standardisiertes numerisches System zur Klassifizierung von gehandelten Waren, das von der Weltzollorganisation (WCO) entwickelt und gepflegt wird. HS-Codes werden von Zollbehörden weltweit verwendet, um Produkte für Zollbewertung, Handelsstatistiken und regulatorische Compliance zu identifizieren."
    },
    content: {
      en: {
        summary: "HS Codes are essential for international trade, serving as the universal language of product classification. Understanding the correct HS code for your imported goods is crucial for determining applicable duties, taxes, and regulatory requirements.",
        sections: [
          {
            heading: "HS Code Structure",
            content: "The HS code system uses a 6-digit base code standardized internationally. The first two digits identify the chapter (broad category), the next two identify the heading within that chapter, and the final two identify the specific product. Countries can add additional digits for further classification—Indonesia and EU countries typically use 8-10 digit codes for customs purposes."
          },
          {
            heading: "Why HS Codes Matter for Indonesian Agricultural Imports",
            content: "When importing agricultural products from Indonesia, the correct HS code determines: (1) The customs duty rate applicable in your country, (2) Whether import licenses or permits are required, (3) Applicable sanitary and phytosanitary (SPS) measures, and (4) Trade statistics and quota eligibility. Incorrect HS code classification can result in delays, penalties, or seizure of goods."
          },
          {
            heading: "Common HS Codes for Indonesian Products",
            content: "Cocoa Beans (0901): 0901 10 for raw/roasted, 0901 20 for cocoa powder. Cloves (0904): 0904 11 for whole cloves, 0904 12 for crushed/ground. Ginger (0910): 0910 11 for ginger, fresh or dried. Nutmeg (0908): 0908 11 for nutmeg, 0908 12 for mace. Vanilla (0905): 0905 00 for vanilla. Black Pepper (0904): 0904 21 for black pepper, whole or crushed."
          },
          {
            heading: "Working with Indo Tropical Agriculture",
            content: "We assist our clients by providing accurate HS code information for all products. Our export documentation team ensures that commercial invoices, packing lists, and certificates of origin reference the correct codes for smooth customs clearance in your destination country. Contact us for HS code verification on your product inquiries."
          }
        ],
        relatedTerms: ["export-documentation", "indonesian-spice-grading"]
      },
      de: {
        summary: "HS-Codes sind für den internationalen Handel unerlässlich und dienen als universelle Sprache der Produktklassifizierung. Das Verständnis des korrekten HS-Codes für Ihre Importware ist entscheidend für die Bestimmung der anwendbaren Zölle, Steuern und regulatorischen Anforderungen.",
        sections: [
          {
            heading: "Struktur des HS-Codes",
            content: "Das HS-Code-System verwendet einen 6-stelligen Basiscode, der international standardisiert ist. Die ersten beiden Ziffern identifizieren das Kapitel (breite Kategorie), die nächsten beiden identifizieren die Position innerhalb dieses Kapitels und die letzten beiden identifizieren das spezifische Produkt. Länder können zusätzliche Ziffern für eine weitergehende Klassifizierung hinzufügen—Indonesien und EU-Länder verwenden typischerweise 8-10-stellige Codes für Zollzwecke."
          },
          {
            heading: "Warum HS-Codes für Importe indonesischer Landwirtschaftsprodukte wichtig sind",
            content: "Beim Import von landwirtschaftlichen Produkten aus Indonesien bestimmt der korrekte HS-Code: (1) Den anwendbaren Zollsatz in Ihrem Land, (2) Ob Importlizenzen oder -genehmigungen erforderlich sind, (3) Anwendbare gesundheitliche und pflanzenschutzrechtliche (SPS) Maßnahmen und (4) Handelsstatistiken und Kontingentberechtigung. Eine falsche HS-Code-Klassifizierung kann zu Verzögerungen, Strafen oder der Beschlagnahmung von Waren führen."
          },
          {
            heading: "Gängige HS-Codes für indonesische Produkte",
            content: "Kakaobohnen (0901): 0901 10 für roh/geröstet, 0901 20 für Kakaopulver. Gewürznelken (0904): 0904 11 für ganze Nelken, 0904 12 für zerkleinert/gemahlen. Ingwer (0910): 0910 11 für Ingwer, frisch oder getrocknet. Muskatnuss (0908): 0908 11 für Muskatnuss, 0908 12 für Macis. Vanille (0905): 0905 00 für Vanille. Schwarzer Pfeffer (0904): 0904 21 für schwarzen Pfeffer, ganz oder zerkleinert."
          },
          {
            heading: "Zusammenarbeit mit Indo Tropical Agriculture",
            content: "Wir unterstützen unsere Kunden durch Bereitstellung genauer HS-Code-Informationen für alle Produkte. Unser Exportdokumentationsteam stellt sicher, dass Handelsrechnungen, Packlisten und Ursprungszeugnisse die korrekten Codes für einen reibungslosen Zollablauf in Ihrem Zielland referenzieren. Kontaktieren Sie uns für HS-Code-Verifizierung bei Ihren Produktanfragen."
          }
        ],
        relatedTerms: ["exportdokumentation", "indonesisches-gewürzgrading"]
      }
    },
    metaTitle: {
      en: "HS Code Guide for Indonesian Agricultural Imports | Indo Tropical Agriculture",
      de: "HS-Code-Leitfaden für Importe indonesischer Landwirtschaftsprodukte"
    },
    metaDescription: {
      en: "Learn about HS Codes (Harmonized System Codes) for importing Indonesian agricultural products. Understanding customs classification, duty rates, and compliance for cocoa, spices, and more from Indonesia.",
      de: "Erfahren Sie mehr über HS-Codes (Harmonisierte Systeme) für den Import indonesischer Landwirtschaftsprodukte. Verständnis der Zollklassifizierung, Zollsätze und Compliance für Kakao, Gewürze und mehr aus Indonesien."
    },
    keywords: {
      en: [
        "hs code indonesia",
        "harmonized system code",
        "indonesian import hs codes",
        "customs classification indonesia",
        "hs code cocoa beans",
        "hs code cloves",
        "indonesia export hs code",
        "eu import hs codes"
      ],
      de: [
        "hs-code indonesien",
        "harmonisiertes system",
        "indonesische import hs-codes",
        "zollklassifizierung indonesien",
        "hs-code kakaobohnen",
        "hs-code gewürznelken",
        "indonesien export hs-code",
        "eu-import hs-codes"
      ]
    },
    category: "Trade Documentation",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14"
  },
  {
    id: "indonesian-spice-grading",
    slug: "indonesian-spice-grading-system",
    title: {
      en: "Indonesian Spice Grading System",
      de: "Indonesisches Gewürz-Classifications-System"
    },
    definition: {
      en: "Indonesia's national quality standards and classification system for spices, established by the National Standardization Agency (BSN - Badan Standardisasi Nasional). These standards define quality parameters such as moisture content, foreign matter, color, aroma, and size for export-grade spices.",
      de: "Die nationalen Qualitätsstandards und Klassifizierungssysteme Indonesiens für Gewürze, die von der nationalen Standardisierungsbehörde (BSN - Badan Standardisasi Nasional) festgelegt wurden. Diese Standards definieren Qualitätsparameter wie Feuchtigkeitsgehalt, Fremdbestandteile, Farbe, Aroma und Größe für Exportgewürze."
    },
    content: {
      en: {
        summary: "Indonesian spice grading ensures consistency and quality in the international spice trade. Understanding these grades helps buyers specify exact requirements and ensures they receive products matching their expectations.",
        sections: [
          {
            heading: "Official Indonesian National Standards (SNI)",
            content: "Indonesian National Standards (Standar Nasional Indonesia - SNI) establish the minimum quality requirements for spice exports. Key SNI standards include SNI 01-3925-2013 for whole cloves, SNI 01-3927-2013 for nutmeg, SNI 01-4271-1996 for white pepper, and SNI 01-6236-2000 for ginger. Compliance with SNI is often a prerequisite for export to regulated markets like the EU."
          },
          {
            heading: "Clove Grades and Specifications",
            content: "Indonesian cloves are graded by appearance, size, and stem content. Grade 1 (Premium/Export Quality): Whole cloves with max 2-3% stems, uniform brown color, strong aroma, moisture 8-10%. Grade 2 (Standard): Slightly smaller, up to 5% stems allowed, moisture max 12%. Grade 3 (Commercial): Higher stem content, smaller size, suitable for oil extraction. Clove stems are also traded separately for essential oil production."
          },
          {
            heading: "Nutmeg and Mace Grading",
            content: "Nutmeg grading is based on size in kernels per pound (K/L). Grade 1 (80-100 K/L): Large whole nuts, shelled, dried to 8-10% moisture. Grade 2 (100-120 K/L): Medium size, premium quality. Grade 3 (120+ K/L): Smaller nuts, often used for grinding. BWP (Broken, Wormy, Punky) is the lowest grade, suitable only for oil extraction. Mace (the aril) is graded as Whole, Broken, or Ground with quality based on color and aroma."
          },
          {
            heading: "Pepper Grading Standards",
            content: "Indonesian black pepper (mostly from Lampung) is graded by: Grade 1: Black pepper with 2% max defect, 13% max moisture, 500g/L density. Grade 2: Up to 4% defects allowed. Grade 3: Up to 6% defects, suitable for oil extraction. White pepper (Muntok) is graded by appearance, with Grade 1 having cream-white color, minimal dark spots, and specific density requirements. FAQ (Fair Average Quality) is a common export designation for bulk shipments."
          },
          {
            heading: "Ginger and Turmeric Quality Grades",
            content: "Ginger grading focuses on origin, size, and appearance. Grade A (Jumbo): Large rhizomes, 300g+, minimal fiber, high oil content. Grade B (Medium): 150-300g, good for extraction. Grade C (Small): Under 150g, often dried for powder. Ginger is also graded by use: Culinary grade (aesthetic appearance) vs. Industrial grade (high oil content, appearance less important). Similar standards apply to turmeric with emphasis on curcumin content for industrial buyers."
          },
          {
            heading: "Vanilla Bean Classification",
            content: "Indonesian vanilla beans are classified by length, moisture, and appearance. Grade A (Gourmet): 15-20cm+, moist, flexible, oily, 25-30% moisture. Grade B (Extract): Shorter, drier (15-20% moisture), less attractive appearance but good flavor extraction. Grade C (Cuts): Pieces and splits, very low cost, used for extraction. Red/Bourbon type vs. Tahitensis type also affects pricing and usage."
          },
          {
            heading: "Quality Assurance from Indo Tropical Agriculture",
            content: "We provide detailed specifications for all our spices including grade, origin, moisture content, and defect percentages. Our quality team conducts pre-shipment inspections and can arrange third-party inspection services (SGS, Bureau Veritas) upon request. We document SNI compliance and provide certificates of analysis with each shipment."
          }
        ],
        relatedTerms: ["hs-code", "vanilla-bean-grades", "clove-growing-regions"]
      },
      de: {
        summary: "Das indonesische Gewürzgrading sorgt für Konsistenz und Qualität im internationalen Gewürzhandel. Das Verständnis dieser Grade hilft Käufern, genaue Anforderungen zu spezifizieren und stellt sicher, dass sie Produkte erhalten, die ihren Erwartungen entsprechen.",
        sections: [
          {
            heading: "Offizielle indonesische Nationalstandards (SNI)",
            content: "Indonesische Nationalstandards (Standar Nasional Indonesia - SNI) legen die Mindestqualitätsanforderungen für Gewürzexporte fest. Wichtige SNI-Standards umfassen SNI 01-3925-2013 für ganze Gewürznelken, SNI 01-3927-2013 für Muskatnuss, SNI 01-4271-1996 für weißen Pfeffer und SNI 01-6236-2000 für Ingwer. Die Einhaltung von SNI ist oft Voraussetzung für den Export in regulierte Märkte wie die EU."
          },
          {
            heading: "Nelken-Grade und -Spezifikationen",
            content: "Indonesische Gewürznelken werden nach Aussehen, Größe und Stielgehalt klassifiziert. Grad 1 (Premium/Exportqualität): Ganze Nelken mit max. 2-3% Stielen, einheitliche braune Farbe, starkes Aroma, Feuchtigkeit 8-10%. Grad 2 (Standard): Etwas kleiner, bis zu 5% Stiele erlaubt, Feuchtigkeit max. 12%. Grad 3 (Kommersiell): Höherer Stielgehalt, kleinere Größe, geeignet für Ölextraktion. Nelkenstiele werden separat für die ätherische Ölproduktion gehandelt."
          },
          {
            heading: "Muskatnuss- und Macis-Grading",
            content: "Muskatnuss-Grading basiert auf der Größe in Kernen pro Pfund (K/L). Grad 1 (80-100 K/L): Große ganze Nüsse, geschält, getrocknet auf 8-10% Feuchtigkeit. Grad 2 (100-120 K/L): Mittlere Größe, Premiumqualität. Grad 3 (120+ K/L): Kleinere Nüsse, oft zum Mahlen verwendet. BWP (Broken, Wormy, Punky) ist die niedrigste Sorte, nur zur Ölextraktion geeignet. Macis (der Arillus) wird als Ganz, Gebrochen oder Gemahlen klassifiziert, Qualität basierend auf Farbe und Aroma."
          },
          {
            heading: "Pfeffer-Grading-Standards",
            content: "Indonesischer schwarzer Pfeffer (meist aus Lampung) wird nach folgenden Kriterien klassifiziert: Grad 1: Schwarzer Pfeffer mit max. 2% Fehlern, 13% max. Feuchtigkeit, 500g/L Dichte. Grad 2: Bis zu 4% Fehler erlaubt. Grad 3: Bis zu 6% Fehler, geeignet für Ölextraktion. Weißer Pfeffer (Muntok) wird nach Aussehen klassifiziert, wobei Grad 1 eine cremefarbene Farbe, minimale dunkle Flecken und spezifische Dichteanforderungen aufweist. FAQ (Fair Average Quality) ist eine gängige Exportbezeichnung für Massensendungen."
          },
          {
            heading: "Ingwer- und Kurkuma-Qualitätsgrade",
            content: "Ingwer-Klassifizierung konzentriert sich auf Herkunft, Größe und Aussehen. Grad A (Jumbo): Große Rhizome, 300g+, minimale Faser, hoher Ölgehalt. Grad B (Mittel): 150-300g, gut für Extraktion. Grad C (Klein): Unter 150g, oft getrocknet für Pulver. Ingwer wird auch nach Verwendung klassifiziert: Küchengrad (ästhetisches Aussehen) vs. Industriegrade (hoher Ölgehalt, Aussehen weniger wichtig). Ähnliche Standards gelten für Kurkuma mit Betonung des Curcumingehalts für Industriekäufer."
          },
          {
            heading: "Vanillebohnen-Klassifizierung",
            content: "Indonesische Vanillebohnen werden nach Länge, Feuchtigkeit und Aussehen klassifiziert. Grad A (Gourmet): 15-20cm+, feucht, flexibel, ölig, 25-30% Feuchtigkeit. Grad B (Extrakt): Kürzer, trockener (15-20% Feuchtigkeit), weniger attraktives Aussehen aber gute Geschmacksextraktion. Grad C (Schnitte): Stücke und Splitter, sehr kostengünstig, für Extraktion verwendet. Rot/Bourbon-Typ vs. Tahitensis-Typ beeinflusst auch Preisierung und Verwendung."
          },
          {
            heading: "Qualitätssicherung von Indo Tropical Agriculture",
            content: "Wir bieten detaillierte Spezifikationen für alle unsere Gewürze einschließlich Grad, Herkunft, Feuchtigkeitsgehalt und Defektprozentsätze. Unser Qualitätsteam führt Vorversandinspektionen durch und kann Drittinspektionsdienste (SGS, Bureau Veritas) auf Anfrage arrangieren. Wir dokumentieren SNI-Compliance und stellen Analysebescheinigungen mit jeder Sendung bereit."
          }
        ],
        relatedTerms: ["hs-code", "vanillebohnen-grade", "gewürznelken-anbaugebiete"]
      }
    },
    metaTitle: {
      en: "Indonesian Spice Grading System Guide | Quality Standards Explained",
      de: "Indonesisches Gewürz-Classification-System | Qualitätsstandards erklärt"
    },
    metaDescription: {
      en: "Understanding Indonesian spice grading standards (SNI) for cloves, nutmeg, pepper, vanilla, and ginger. Learn about quality grades, specifications, and export requirements for Indonesian spices.",
      de: "Verständnis der indonesischen Gewürzgrading-Standards (SNI) für Gewürznelken, Muskatnuss, Pfeffer, Vanille und Ingwer. Erfahren Sie mehr über Qualitätsgrade, Spezifikationen und Exportanforderungen für indonesische Gewürze."
    },
    keywords: {
      en: [
        "indonesian spice grading",
        "sni standards indonesia",
        "clove grades indonesia",
        "nutmeg quality grades",
        "indonesian pepper grading",
        "vanilla bean grades",
        "spice quality standards",
        "indonesian export quality"
      ],
      de: [
        "indonesisches gewürzgrading",
        "sni-standards indonesien",
        "nelken-grade indonesien",
        "muskatnuss-qualitätsgrade",
        "indonesischer pfeffer-grading",
        "vanillebohnen-grade",
        "gewürzqualitätsstandards",
        "indonesische exportqualität"
      ]
    },
    category: "Product Quality",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14"
  },
  {
    id: "export-documentation",
    slug: "export-documentation-guide",
    title: {
      en: "Export Documentation Guide for Indonesian Agricultural Products",
      de: "Exportdokumentation-Leitfaden für indonesische Landwirtschaftsprodukte"
    },
    definition: {
      en: "The set of official documents required by customs authorities and importing countries to legally export agricultural products from Indonesia. These documents verify product origin, quality, compliance with regulations, and facilitate customs clearance at destination ports.",
      de: "Die Reihe von offiziellen Dokumenten, die von Zollbehörden und Importländern erforderlich sind, um landwirtschaftliche Produkte legal aus Indonesien zu exportieren. Diese Dokumente verifizieren Produktherkunft, Qualität, Compliance mit Vorschriften und erleichtern den Zoll an Zielhäfen."
    },
    content: {
      en: {
        summary: "Proper export documentation is critical for smooth international trade. Indo Tropical Agriculture handles all documentation requirements, ensuring your shipments clear customs without delays or complications.",
        sections: [
          {
            heading: "Core Export Documents",
            content: "Commercial Invoice: Detailed billing document showing product description, quantity, unit price, total value, HS codes, and payment terms. Required by all customs authorities worldwide. Packing List: Itemized list of all packages including net/gross weight, dimensions, marks and numbers, and packaging type. Essential for cargo verification and customs inspection."
          },
          {
            heading: "Transport and Insurance Documents",
            content: "Bill of Lading (B/L): Contract of carriage between shipper and carrier, serving as receipt, document of title, and evidence of transport contract. For air freight: Air Waybill (AWB). These documents are negotiable and may be required for banking purposes. Insurance Certificate: Proof of cargo insurance coverage (if CIF terms). Shows insured value, coverage conditions, and claims procedures."
          },
          {
            heading: "Origin and Quality Certificates",
            content: "Certificate of Origin: Issued by authorized chambers of commerce or trade associations, certifying that goods originated in Indonesia. Essential for preferential tariff treatment under free trade agreements and for certain quota restrictions. Phytosanitary Certificate: Issued by Indonesia's Agricultural Quarantine Agency (IAQA), confirming that products meet plant health requirements of the importing country. Required for most agricultural products entering the EU and other regulated markets."
          },
          {
            heading: "Product-Specific Documentation",
            content: "Fumigation Certificate: Confirms treatment for pests, required for many agricultural products and wooden packaging materials. Certificate of Analysis/Quality: Laboratory test results showing product specifications (moisture, purity, etc.). Health Certificate: For food products, certifying compliance with food safety regulations. Organic Certificate: Required for certified organic products, showing certification body and compliance with organic standards."
          },
          {
            heading: "Destination-Specific Requirements",
            content: "European Union: Requires phytosanitary certificate, certificate of origin, and may require specific import licenses for certain products. Products must meet EU maximum residue levels (MRLs) for pesticides. United States: FDA prior notice, food facility registration, and customs bond required. Certain products may require USDA permits. Japan: Import permits, MHLW notification, and strict pesticide residue testing. China: CIQ clearance, GACC compliance, and pre-shipment inspection requirements."
          },
          {
            heading: "Document Preparation Timeline",
            content: "Documents are typically prepared 1-2 weeks before shipment: Phytosanitary certificates require inspection 3-5 days before loading. Certificates of origin are processed after finalizing other documents. Commercial documents (invoice, packing list) are prepared first and used to generate other certificates. Original documents are couriered to the destination or sent via telex release for faster processing."
          },
          {
            heading: "Indo Tropical Agriculture Documentation Service",
            content: "Our export documentation team has extensive experience preparing documents for all major destination markets. We ensure accuracy, completeness, and compliance with both Indonesian export regulations and destination import requirements. We provide document checklists for each order, offer document courier services, and can arrange electronic document submission where accepted. Contact us for documentation requirements specific to your country."
          }
        ],
        relatedTerms: ["hs-code", "indonesian-spice-grading"]
      },
      de: {
        summary: "Eigene Exportdokumentation ist entscheidend für einen reibungslosen internationalen Handel. Indo Tropical Agriculture bearbeitet alle Dokumentationsanforderungen und stellt sicher, dass Ihre Sendungen ohne Verzögerungen oder Komplikationen den Zoll passieren.",
        sections: [
          {
            heading: "Kern-Exportdokumente",
            content: "Handelsrechnung: Detailliertes Abrechnungsdokument mit Produktbeschreibung, Menge, Einzelpreis, Gesamtwert, HS-Codes und Zahlungsbedingungen. Von allen Zollbehörden weltweit erforderlich. Packliste: Aufstellung aller Pakete einschließlich Netto/Brutto-Gewicht, Abmessungen, Marken und Nummern und Verpackungsart. Wesentlich für Frachtverifizierung und Zollinspektion."
          },
          {
            heading: "Transport- und Versicherungsdokumente",
            content: "Konnossement (Bill of Lading): Beförderungsvertrag zwischen Absender und Frachtführer, dient als Quittung, Titel dokument und Nachweis des Transportvertrags. Für Luftfracht: Luftfrachtbrief (Air Waybill). Diese Dokumente sind negotiabel und können für Bankzwecke erforderlich sein. Versicherungszertifikat: Nachweis der Frachtversicherungsabdeckung (bei CIF-Konditionen). Zeigt versicherten Wert, Deckungsbedingungen und Schadensverfahren."
          },
          {
            heading: "Ursprungs- und Qualitätszertifikate",
            content: "Ursprungszeugnis: Ausgestellt von autorisierten Handelskammern oder Handelsverbänden, bestätigt, dass Waren aus Indonesien stammen. Wesentlich für präferenzielle Zollbehandlung unter Freihandelsabkommen und für bestimmte Kontingentbeschränkungen. Pflanzengesundheitszeugnis: Ausgestellt von der indonesischen Landwirtschafts Quarantänebehörde (IAQA), bestätigt, dass Produkte die Pflanzengesundheitsanforderungen des Importlandes erfüllen. Erforderlich für die meisten Landwirtschaftsprodukte, die in die EU und andere regulierte Märkte eintreten."
          },
          {
            heading: "Produktspezifische Dokumentation",
            content: "Begasungszertifikat: Bestätigt die Behandlung gegen Schädlinge, erforderlich für viele Landwirtschaftsprodukte und Holzverpackungsmaterialien. Analyse-/Qualitätszertifikat: Laborergebnisse, die Produktspezifikationen zeigen (Feuchtigkeit, Reinheit usw.). Gesundheitszeugnis: Für Lebensmittelprodukte, bestätigt die Compliance mit Lebensmittelsicherheitsvorschriften. Bio-Zertifikat: Erforderlich für zertifizierte Bio-Produkte, zeigt Zertifizierungsstelle und Compliance mit Bio-Standards."
          },
          {
            heading: "Zielspezifische Anforderungen",
            content: "Europäische Union: Erfordert Pflanzengesundheitszeugnis, Ursprungszeugnis und kann spezifische Importlizenzen für bestimmte Produkte erfordern. Produkte müssen EU-Höchstwerte für Pestizidrückstände (MRL) einhalten. Vereinigte Staaten: FDA-Vorankündigung, Lebensmittelbetriebsregistrierung und Zollbürgschaft erforderlich. Bestimmte Produkte können USDA-Genehmigungen erfordern. Japan: Importgenehmigungen, MHLW-Benachrichtigung und strenge Pestizidrückstandtests. China: CIQ-Freigabe, GACC-Compliance und Vorversandinspektionsanforderungen."
          },
          {
            heading: "Zeitplan für Dokumentenvorbereitung",
            content: "Dokumente werden typischerweise 1-2 Wochen vor Versand vorbereitet: Pflanzengesundheitszeugnisse erfordern Inspektion 3-5 Tage vor Verladung. Ursprungszeugnisse werden nach Finalisierung anderer Dokumente verarbeitet. Handelsdokumente (Rechnung, Packliste) werden zuerst vorbereitet und zum Generieren anderer Zertifikate verwendet. Originaldokumente werden per Kurier an den Zielort gesendet oder per Telex-Release für schnellere Bearbeitung übermittelt."
          },
          {
            heading: "Indo Tropical Agriculture Dokumentationsservice",
            content: "Unser Exportdokumentationsteam verfügt über umfangreiche Erfahrung bei der Vorbereitung von Dokumenten für alle wichtigsten Zielmärkte. Wir stellen Genauigkeit, Vollständigkeit und Compliance mit sowohl indonesischen Exportvorschriften als auch Ziellimportanforderungen sicher. Wir stellen Dokumenten-Checklisten für jede Bestellung bereit, bieten Dokumenten-Kurierdienste an und können elektronische Dokumenteneinreichung arrangieren, wo akzeptiert. Kontaktieren Sie uns für Dokumentationsanforderungen spezifisch für Ihr Land."
          }
        ],
        relatedTerms: ["hs-code", "indonesisches-gewürzgrading"]
      }
    },
    metaTitle: {
      en: "Export Documentation Guide | Indonesian Agricultural Products to Europe",
      de: "Exportdokumentation-Leitfaden | Indonesische Landwirtschaftsprodukte nach Europa"
    },
    metaDescription: {
      en: "Complete guide to export documentation requirements for Indonesian agricultural products. Learn about commercial invoices, bills of lading, phytosanitary certificates, and customs clearance for importing from Indonesia.",
      de: "Vollständiger Leitfaden zu Exportdokumentationsanforderungen für indonesische Landwirtschaftsprodukte. Erfahren Sie mehr über Handelsrechnungen, Konnossemente, Pflanzengesundheitszeugnisse und Zollabfertigung für Importe aus Indonesien."
    },
    keywords: {
      en: [
        "indonesia export documentation",
        "phytosanitary certificate indonesia",
        "certificate of origin indonesia",
        "indonesia customs documents",
        "bill of lading indonesia",
        "indonesia agricultural export requirements",
        "eu import from indonesia",
        "indonesia export clearance"
      ],
      de: [
        "indonesien exportdokumentation",
        "pflanzengesundheitszeugnis indonesien",
        "ursprungszeugnis indonesien",
        "indonesien zolldokumente",
        "konnossement indonesien",
        "indonesische landwirtschaftsexportanforderungen",
        "eu-import aus indonesien",
        "indonesien exportfreigabe"
      ]
    },
    category: "Trade Documentation",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14"
  },
  {
    id: "clove-growing-regions",
    slug: "clove-growing-regions-indonesia",
    title: {
      en: "Clove Growing Regions in Indonesia",
      de: "Gewürznelken-Anbaugebiete in Indonesien"
    },
    definition: {
      en: "Indonesia is the world's largest producer of cloves, with the spice primarily grown in the Maluku Islands (the original Spice Islands), Sulawesi, Java, Sumatra, and Bali. Each region produces cloves with distinct characteristics in terms of oil content, aroma profile, and appearance due to variations in soil, climate, and cultivation methods.",
      de: "Indonesien ist der weltweit größte Produzent von Gewürznelken, wobei das Gewürz hauptsächlich auf den Molukken (den ursprünglichen Gewürzinseln), Sulawesi, Java, Sumatra und Bali angebaut wird. Jede Region produziert Gewürznelken mit unterschiedlichen Eigenschaften in Bezug auf Ölgehalt, Aromaprofil und Aussehen aufgrund von Variationen in Boden, Klima und Anbaumethoden."
    },
    content: {
      en: {
        summary: "Understanding clove origins helps buyers select products with specific characteristics. Indo Tropical Agriculture sources cloves from multiple regions, offering options tailored to different industry needs—essential oil production, food processing, or pharmaceutical applications.",
        sections: [
          {
            heading: "The Original Spice Islands: Maluku (Moluccas)",
            content: "The Maluku Islands, particularly Ternate, Tidore, and the Banda Islands, are the ancestral home of cloves. This region produces premium quality cloves known for: High essential oil content (up to 18-20%), exceptional aroma intensity, dark reddish-brown color, and large well-formed buds. Maluku cloves are preferred by essential oil distillers and premium spice buyers seeking the authentic Indonesian clove character."
          },
          {
            heading: "Sulawesi Cloves",
            content: "Sulawesi (formerly Celebes) is a major clove-producing region, particularly the Minahasa Peninsula and northern districts. Sulawesi cloves are characterized by: Good oil content (15-17%), balanced flavor profile suitable for culinary use, consistent quality and uniform size, and competitive pricing due to large production volumes. Sulawesi cloves are widely used in food processing and are a reliable choice for bulk exports."
          },
          {
            heading: "Javanese Cloves",
            content: "Java, especially the eastern regions and parts of Central Java, produces cloves with distinctive characteristics: Lighter brown color compared to Maluku cloves, slightly lower oil content but excellent for grinding, consistent moisture content, and good shelf stability. Javanese cloves are often preferred for spice powder production due to their color and grindability."
          },
          {
            heading: "Sumatran Cloves",
            content: "Sumatra's clove production is concentrated in the western regions. Sumatran cloves are known for: Medium oil content, good aroma suitable for various applications, competitive pricing, and reliable supply availability. Sumatran production has increased in recent years as farmers diversify from traditional crops like rubber and palm oil."
          },
          {
            heading: "Bali and Lesser Sunda Islands",
            content: "Bali and nearby islands including Lombok and Sumbawa produce cloves on a smaller scale. Regional characteristics include: Organic cultivation practices common, distinctive terroir-driven flavor, premium positioning for specialty markets, and limited annual production. These regions appeal to buyers seeking sustainably-produced, traceable cloves."
          },
          {
            heading: "Clove Harvest Seasons and Quality",
            content: "Cloves are typically harvested twice per year: Main harvest (June-August): Produces the highest quality cloves with peak oil content. Secondary harvest (December-February): Smaller volume but acceptable quality. Cloves are harvested as unopened buds, hand-picked at the right stage when they turn from green to pinkish-brown. Proper drying is critical—Maluku and Sulawesi producers use traditional sun-drying methods that preserve essential oils."
          },
          {
            heading: "Grading and Regional Specifications",
            content: "While Indonesian SNI standards apply nationally, regional variations exist: Maluku: Typically commands price premium, meets or exceeds Grade 1 specifications. Sulawesi: Grade 1-2 depending on sub-region and harvest. Java: Grade 2-3 commonly available, suitable for industrial processing. Sumatra: Mixed grades, value-oriented pricing. Indo Tropical Agriculture can specify regional origin on request, allowing buyers to select the clove characteristics that best match their requirements."
          },
          {
            heading: "Sourcing from Indo Tropical Agriculture",
            content: "We maintain relationships with clove farmers across all major growing regions. Our sourcing team can provide: Regional origin verification, samples from different regions for comparison, bulk blending for consistent specifications, and traceability documentation. Contact us to discuss regional sourcing options for your specific application."
          }
        ],
        relatedTerms: ["indonesian-spice-grading", "vanilla-bean-grades"]
      },
      de: {
        summary: "Das Verständnis der Gewürznelken-Herkunft hilft Käufern, Produkte mit spezifischen Eigenschaften auszuwählen. Indo Tropical Agriculture bezieht Gewürznelken aus mehreren Regionen und bietet Optionen, die auf verschiedene Industriebedürfnisse zugeschnitten sind—ätherische Ölproduktion, Lebensmittelverarbeitung oder pharmazeutische Anwendungen.",
        sections: [
          {
            heading: "Die ursprünglichen Gewürzinseln: Molukken",
            content: "Die Molukken, insbesondere Ternate, Tidore und die Banda-Inseln, sind die ursprüngliche Heimat der Gewürznelken. Diese Region produziert Premium-Gewürznelken, die bekannt sind für: Hohen ätherischen Ölgehalt (bis zu 18-20%), außergewöhnliche Aromaintensität, dunkel rötlich-braune Farbe und große, wohlgeformte Knospen. Molukkische Nelken werden von ätherischen Öldestillateuren und Premium-Gewürzkäufern bevorzugt, die den authentischen indonesischen Nelkencharakter suchen."
          },
          {
            heading: "Sulawesi-Gewürznelken",
            content: "Sulawesi (ehemals Celebes) ist eine wichtige Gewürznelken produzierende Region, insbesondere die Minahasa-Halbinsel und nördliche Bezirke. Sulawesi-Gewürznelken sind gekennzeichnet durch: Guten Ölgehalt (15-17%), ausgeglichenes Geschmacksprofil geeignet für kulinarische Verwendung, konsistente Qualität und einheitliche Größe und wettbewerbsfähige Preise aufgrund großer Produktionsvolumina. Sulawesi-Nelken werden weitgehend in der Lebensmittelverarbeitung verwendet und sind eine zuverlässige Wahl für Massenexporte."
          },
          {
            heading: "Javanische Gewürznelken",
            content: "Java, besonders die östlichen Regionen und Teile Zentral-Javas, produziert Gewürznelken mit unterschiedlichen Merkmalen: Hellere braune Farbe im Vergleich zu Molukkischen Nelken, etwas niedrigerer Ölgehalt aber hervorragend zum Mahlen, konsistenter Feuchtigkeitsgehalt und gute Haltbarkeit. Javanische Gewürznelken werden oft für Gewürzpulverproduktion bevorzugt aufgrund ihrer Farbe und Mahlfähigkeit."
          },
          {
            heading: "Sumatra-Gewürznelken",
            content: "Die Gewürznelkenproduktion Sumatras ist in den westlichen Regionen konzentriert. Sumatra-Gewürznelken sind bekannt für: Mittleren Ölgehalt, gutes Aroma geeignet für verschiedene Anwendungen, wettbewerbsfähige Preise und zuverlässige Lieferverfügbarkeit. Die Sumatra-Produktion hat in den letzten Jahren zugenommen, da Bauern von traditionellen Pflanzen wie Kautschuk und Palmöl diversifizieren."
          },
          {
            heading: "Bali und Kleine Sunda-Inseln",
            content: "Bali und benachbarte Inseln einschließlich Lombok und Sumbawa produzieren auf kleinerer Skala Gewürznelken. Regionale Merkmale umfassen: Häufige ökologische Anbaupraktiken, distinctive terroir-getriebenes Aroma, Premium-Positionierung für Spezialmärkte und begrenzte jährliche Produktion. Diese Regionen sprechen Käufer an, die nachhaltig produzierte, rückverfolgbare Gewürznelken suchen."
          },
          {
            heading: "Gewürznelken-Erntezeiten und Qualität",
            content: "Gewürznelken werden typischerweise zweimal pro Jahr geerntet: Haupternte (Juni-August): Produziert die höchste Qualität mit Spitzenölgehalt. Zweiternte (Dezember-Februar): Geringeres Volumen aber akzeptable Qualität. Gewürznelken werden als ungeöffnete Knospen geerntet, von Hand gepflückt im richtigen Stadium, wenn sie sich von grün nach rötlich-braun verfärben. Proper Trocknung ist kritisch—Molukken- und Sulawesi-Produzenten verwenden traditionelle Sonnentrocknungsmethoden, die ätherische Öle erhalten."
          },
          {
            heading: "Grading und regionale Spezifikationen",
            content: "Während indonesische SNI-Standards national gelten, gibt es regionale Variationen: Molukken: Typischerweise Preisaufschlag, erfüllt oder übertrifft Grad-1-Spezifikationen. Sulawesi: Grad 1-2 je nach Teilregion und Ernte. Java: Grad 2-3 häufig verfügbar, geeignet für industrielle Verarbeitung. Sumatra: Gemischte Grade, wertorientierte Preisgestaltung. Indo Tropical Agriculture kann regionale Herkunft auf Anfrage spezifizieren, sodass Käufern die Gewürznelken-Charakteristika auswählen können, die ihren Anforderungen am besten entsprechen."
          },
          {
            heading: "Bezug von Indo Tropical Agriculture",
            content: "Wir pflegen Beziehungen zu Gewürznelkenbauern in allen großen Anbauregionen. Unser Beschaffungsteam kann bereitstellen: Regionale Herkunftsverifizierung, Proben aus verschiedenen Regionen zum Vergleich, Massenmischung für konsistente Spezifikationen und Rückverfolgbarkeitsdokumentation. Kontaktieren Sie uns, um regionale Bezugsoptionen für Ihre spezifische Anwendung zu besprechen."
          }
        ],
        relatedTerms: ["indonesisches-gewürzgrading", "vanillebohnen-grade"]
      }
    },
    metaTitle: {
      en: "Clove Growing Regions in Indonesia | Origins & Characteristics Guide",
      de: "Gewürznelken-Anbaugebiete in Indonesien | Herkunft & Eigenschaften"
    },
    metaDescription: {
      en: "Discover Indonesian clove growing regions including Maluku, Sulawesi, Java, and Sumatra. Learn about regional characteristics, harvest seasons, and quality variations for sourcing cloves from Indonesia.",
      de: "Entdecken Sie indonesische Gewürznelken-Anbaugebiete einschließlich Molukken, Sulawesi, Java und Sumatra. Erfahren Sie mehr über regionale Merkmale, Erntezeiten und Qualitätsvariationen für den Bezug von Gewürznelken aus Indonesien."
    },
    keywords: {
      en: [
        "clove growing regions indonesia",
        "indonesian cloves origin",
        "maluku cloves",
        "sulawesi cloves",
        "clove producing regions",
        "indonesian spice islands",
        "clove harvest season",
        "cloves supplier indonesia"
      ],
      de: [
        "gewürznelken-anbaugebiete indonesien",
        "indonesische gewürznelken herkunft",
        "molukken-gewürznelken",
        "sulawesi-gewürznelken",
        "gewürznelken produzierende regionen",
        "indonesische gewürzinseln",
        "gewürznelken erntezeit",
        "gewürznelken lieferant indonesien"
      ]
    },
    category: "Product Origins",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14"
  },
  {
    id: "vanilla-bean-grades",
    slug: "vanilla-bean-grades",
    title: {
      en: "Vanilla Bean Grades and Quality Guide",
      de: "Vanillebohnen-Grade und Qualitätsleitfaden"
    },
    definition: {
      en: "Vanilla beans are classified by grade based on physical characteristics including length, moisture content, appearance, and condition. The grading system varies by producing country, with Indonesian vanilla following both traditional Indonesian standards and international classification for premium markets.",
      de: "Vanillebohnen werden nach Grad basierend auf physischen Eigenschaften klassifiziert, einschließlich Länge, Feuchtigkeitsgehalt, Aussehen und Zustand. Das Klassifizierungssystem variiert nach producer Land, wobei indonesische Vanille sowohl traditionelle indonesische Standards als auch internationale Klassifizierung für Premiummärkte folgt."
    },
    content: {
      en: {
        summary: "Indonesian vanilla beans (Vanilla planifolia) offer exceptional quality and value compared to other origins. Understanding the grade classifications helps buyers select the right vanilla for their specific needs—whether gourmet cooking, extract manufacturing, or perfume production.",
        sections: [
          {
            heading: "Grade A: Gourmet/Premium Vanilla Beans",
            content: "Grade A beans represent the highest quality Indonesian vanilla, characterized by: Length: 15-20+ centimeters, long and well-formed. Moisture: 25-30%, making them supple and flexible. Appearance: Deep dark brown to black color, oily sheen, clean surface free of defects. Aroma: Strong, rich vanilla fragrance with complex notes. Uses: Premium culinary applications, gourmet cooking, dessert garnishes, high-end extract production. Grade A beans can be folded without breaking—the hallmark of proper curing and moisture content."
          },
          {
            heading: "Grade B: Extract/Industrial Grade Vanilla Beans",
            content: "Grade B beans are primarily used for extraction and offer excellent value: Length: 12-15 centimeters, shorter than Grade A. Moisture: 15-20%, drier and more brittle. Appearance: Dark brown color, may have surface imperfections or slight splits. Aroma: Good vanilla flavor, slightly less intense than Grade A. Uses: Vanilla extract production, brewing, baking, ice cream making, cosmetic ingredient extraction. Grade B provides superior flavor extraction efficiency at a significantly lower price point than Grade A."
          },
          {
            heading: "Grade C: Cuts and Splits",
            content: "Grade C represents the most economical vanilla option: Composition: Broken pieces, splits, and shorter beans. Moisture: Below 15%, very dry and brittle. Appearance: Variable color, visible imperfections. Aroma: Acceptable vanilla flavor, less consistency than higher grades. Uses: Industrial-scale vanilla extraction, powder production, home extract making where appearance doesn't matter. Grade C offers the lowest cost per kilogram but requires more processing and may produce lower-quality extract."
          },
          {
            heading: "Indonesian Vanilla Characteristics",
            content: "Indonesian vanilla (primarily from Java, Bali, and Papua) is known for: High vanillin content: Comparable to Madagascan vanilla. Sweet, creamy flavor profile: Distinctive from other origins. Thick, oily beans: Indicative of quality curing. Excellent value: Often priced 30-40% below Madagascan or Tahitian vanilla. Sustainable production: Smallholder farmers with traditional curing methods. Indonesian vanilla performs exceptionally well in extract production and baking applications."
          },
          {
            heading: "Vanillin Content Measurement",
            content: "Vanillin content is a key quality indicator for industrial buyers: Premium Indonesian Grade A: 2.0-2.5% vanillin. Standard Grade A/B: 1.8-2.2% vanillin. Grade B/C: 1.5-2.0% vanillin. Vanillin content can be verified through laboratory testing and is often specified in contracts for industrial buyers. Indo Tropical Agriculture can provide vanillin analysis certificates for bulk orders."
          },
          {
            heading: "Curing Process Impact on Quality",
            content: "Proper curing is essential for developing vanilla's characteristic flavor: Indonesian curing typically involves: Blanking: Beans are immersed in hot water (65-70°C) for 2-3 minutes. Sweating: Wrapped in blankets for 24-48 hours to develop flavor. Drying: Sun-drying for 2-3 months until moisture reaches target. Conditioning: Stored in waxed paper for 3+ months to develop full aroma. Well-cured beans have better flavor retention, higher vanillin content, and superior shelf life."
          },
          {
            heading: "Purchasing Considerations",
            content: "When selecting Indonesian vanilla, consider: Intended use (gourmet vs. extract vs. industrial), Budget constraints, Moisture content (affects weight-to-value ratio), Vanillin content requirements, Certification needs (organic, fair trade). For extract production, Grade B often offers the best value. For gourmet applications, Grade A's appearance and flexibility justify the premium."
          },
          {
            heading: "Sourcing from Indo Tropical Agriculture",
            content: "We offer a complete range of Indonesian vanilla grades with: Traceability to specific growing regions, Laboratory analysis available on request, Sample programs for product evaluation, Bulk blending for consistent specifications, Flexible packaging options (vacuum-packed, bulk). Contact us for vanilla samples and pricing based on your specific grade requirements."
          }
        ],
        relatedTerms: ["indonesian-spice-grading", "clove-growing-regions"]
      },
      de: {
        summary: "Indonesische Vanillebohnen (Vanilla planifolia) bieten außergewöhnliche Qualität und Wert im Vergleich zu anderen Herkünften. Das Verständnis der Gradklassifizierungen hilft Käufern, die richtige Vanille für ihre spezifischen Bedürfnisse auszuwählen—ob Gourmet-Kochen, Extrakt herstellung oder Parfumproduktion.",
        sections: [
          {
            heading: "Grad A: Gourmet/Premium Vanillebohnen",
            content: "Grad A Bohnen repräsentieren die höchste Qualität indonesischer Vanille, gekennzeichnet durch: Länge: 15-20+ Zentimeter, lang und wohlgeformt. Feuchtigkeit: 25-30%, macht sie geschmeidig und flexibel. Aussehen: Tief dunkelbraun bis schwarze Farbe, öligter Glanz, saubere Oberfläche frei von Fehlern. Aroma: Starkes, reiches Vanillearoma mit komplexen Noten. Verwendungen: Premium-kulinarische Anwendungen, Gourmet-Kochen, Dessert-Garnituren, High-End-Extraktproduktion. Grad A Bohnen können gebogen werden, ohne zu brechen—das Kennzeichen korrekter Curing und Feuchtigkeitsgehalt."
          },
          {
            heading: "Grad B: Extrakt/Industriegrade Vanillebohnen",
            content: "Grad B Bohnen werden hauptsächlich für Extraktion verwendet und bieten hervorragenden Wert: Länge: 12-15 Zentimeter, kürzer als Grad A. Feuchtigkeit: 15-20%, trockener und spröder. Aussehen: Dunkelbraune Farbe, kann Oberflächenunvollkommenheiten oder leichte Risse aufweisen. Aroma: Gutes Vanillearoma, etwas weniger intensiv als Grad A. Verwendungen: Vanilleextraktproduktion, Brauen, Backen, Eiscremeherstellung, kosmetische Zutatenextraktion. Grad B bietet überlegene Aromaextraktionseffizienz bei signifikant niedrigerem Preis als Grad A."
          },
          {
            heading: "Grad C: Schnitte und Splitter",
            content: "Grad C repräsentiert die wirtschaftlichste Vanilleoption: Zusammensetzung: Gebrochene Stücke, Splitter und kürzere Bohnen. Feuchtigkeit: Unter 15%, sehr trocken und spröde. Aussehen: Variable Farbe, sichtbare Unvollkommenheiten. Aroma: Akzeptables Vanillearoma, weniger Konsistenz als höhere Grade. Verwendungen: Industrieskalige Vanilleextraktion, Pulverproduktion, Heimextraktbereitung, wo Aussehen keine Rolle spielt. Grad C bietet die niedrigsten Kosten pro Kilogramm, erfordert aber mehr Verarbeitung und kann minderwertigeren Extrakt produzieren."
          },
          {
            heading: "Indonesische Vanille-Merkmale",
            content: "Indonesische Vanille (hauptsächlich aus Java, Bali und Papua) ist bekannt für: Hohen Vanillingehalt: Vergleichbar mit Madagaskar-Vanille. Süßes, cremiges Geschmacksprofil: Unterscheidbar von anderen Herkünften. Dicke, ölige Bohnen: Indikativ für Qualitäts-curing. Hervorragender Wert: Oft 30-40% unter Madagaskar- oder Tahiti-Vanille preist. Nachhaltige Produktion: Kleinbauern mit traditionellen Curing-Methoden. Indonesische Vanille performs hervorragend in Extraktproduktion und Backanwendungen."
          },
          {
            heading: "Vanillingehalt-Messung",
            content: "Der Vanillingehalt ist ein wichtigen Qualitätsindikator für Industriekäufer: Premium indonesischer Grad A: 2,0-2,5% Vanillin. Standard Grad A/B: 1,8-2,2% Vanillin. Grad B/C: 1,5-2,0% Vanillin. Der Vanillingehalt kann durch Labortests verifiziert werden und ist oft in Verträgen für Industriekäufer spezifiziert. Indo Tropical Agriculture kann Vanillin-Analysebescheinigungen für Massenbestellungen bereitstellen."
          },
          {
            heading: "Curing-Prozess-Einfluss auf Qualität",
            content: "Eigene Curing ist entscheidend für die Entwicklung des charakteristischen Vanillearomas: Indonesisches Curing umfasst typischerweise: Blanking: Bohnen werden in heißem Wasser (65-70°C) für 2-3 Minuten eingetaucht. Schwitzen: In Decken gewickelt für 24-48 Stunden, um Aroma zu entwickeln. Trocknen: Sonnentrocknung für 2-3 Monate bis Feuchtigkeit Ziel erreicht. Konditionieren: In gewachstem Papier gelagert für 3+ Monate, um volles Aroma zu entwickeln. Gut kurierte Bohnen haben bessere Aromarückhaltung, höheren Vanillingehalt und überlegene Haltbarkeit."
          },
          {
            heading: "Kaufüberlegungen",
            content: "Bei der Auswahl indonesischer Vanille sollten Sie beachten: Beabsichtigte Verwendung (Gourmet vs. Extrakt vs. Industriell), Budgetbeschränkungen, Feuchtigkeitsgehalt (beeinflusst Gewicht-zu-Wert-Verhältnis), Vanillingehalt-Anforderungen, Zertifizierungsbedürfnisse (Bio, Fair Trade). Für Extraktproduktion bietet Grad B oft den besten Wert. Für Gourmet-Anwendungen rechtfertigen Aussehen und Flexibilität von Grad A den Aufschlag."
          },
          {
            heading: "Bezug von Indo Tropical Agriculture",
            content: "Wir bieten eine vollständige Palette indonesischer Vanille-Grade mit: Rückverfolgbarkeit zu spezifischen Anbauregionen, Laboranalyse auf Anfrage verfügbar, Sample-Programme für Produktauswertung, Massenmischung für konsistente Spezifikationen, Flexible Verpackungsoptionen (vakuumverpackt, Masse). Kontaktieren Sie uns für Vanilleproben und Preisgestaltung basierend auf Ihren spezifischen Gradanforderungen."
          }
        ],
        relatedTerms: ["indonesisches-gewürzgrading", "gewürznelken-anbaugebiete"]
      }
    },
    metaTitle: {
      en: "Vanilla Bean Grades Guide | Indonesian Vanilla Quality Classification",
      de: "Vanillebohnen-Grade-Leitfaden | Indonesische Vanille-Qualitätsklassifizierung"
    },
    metaDescription: {
      en: "Understanding vanilla bean grades for Indonesian vanilla. Learn about Grade A gourmet beans, Grade B extract grade, and Grade C cuts for cooking, extract production, and industrial applications.",
      de: "Verständnis der Vanillebohnen-Grade für indonesische Vanille. Erfahren Sie mehr über Grad A Gourmet-Bohnen, Grad B Extraktgrad und Grad C Schnitte für Kochen, Extraktproduktion und Industrieanwendungen."
    },
    keywords: {
      en: [
        "vanilla bean grades",
        "indonesian vanilla quality",
        "grade a vanilla beans",
        "vanilla extract grade",
        "indonesian vanilla planifolia",
        "vanilla curing process",
        "vanillin content vanilla",
        "indonesian vanilla supplier"
      ],
      de: [
        "vanillebohnen-grade",
        "indonesische vanillequalität",
        "grad a vanillebohnen",
        "vanilleextraktgrad",
        "indonesische vanille planifolia",
        "vanille-curing-prozess",
        "vanillingehalt vanille",
        "indonesischer vanillelieferant"
      ]
    },
    category: "Product Quality",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14"
  }
];

export function getGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms;
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

export function getGlossaryCategories(): string[] {
  const categories = new Set(glossaryTerms.map((term) => term.category));
  return Array.from(categories).sort();
}

// Helper to get related terms
export function getRelatedTerms(
  currentTermId: string,
  locale: string,
  limit: number = 3
): GlossaryTerm[] {
  const currentTerm = glossaryTerms.find((term) => term.id === currentTermId);
  if (!currentTerm) return [];

  const relatedSlugs = currentTerm.content[locale === "de" ? "de" : "en"].relatedTerms || [];
  const relatedTerms = relatedSlugs
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((term): term is GlossaryTerm => term !== undefined);

  return relatedTerms.slice(0, limit);
}
