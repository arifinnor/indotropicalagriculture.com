export interface HSCode {
  id: string;
  code: string;
  slug: string;
  name: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  products: string[];
  structure: {
    en: string;
    de: string;
  };
  euDuty: {
    rate: string;
    en: string;
    de: string;
  };
  usDuty: {
    rate: string;
    en: string;
    de: string;
  };
  certifications: {
    en: string[];
    de: string[];
  };
  regulations: {
    en: {
      title: string;
      content: string;
    }[];
    de: {
      title: string;
      content: string;
    }[];
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
}

export const hsCodes: HSCode[] = [
  {
    id: "0904",
    code: "0904",
    slug: "0904",
    name: {
      en: "Pepper (Piper spp.)",
      de: "Pfeffer (Piper spp.)"
    },
    description: {
      en: "HS Code 0904 covers pepper of the genus Piper (Piper nigrum, Piper longum, etc.), whether whole, crushed, or ground. This includes black pepper, white pepper, and green pepper in all forms.",
      de: "HS-Code 0904 umfasst Pfeffer der Gattung Piper (Piper nigrum, Piper longum usw.), ganz, zerstoßen oder gemahlen. Dies umfasst schwarzen Pfeffer, weißen Pfeffer und grünen Pfeffer in allen Formen."
    },
    products: ["Black Pepper", "White Pepper"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0904 = Pepper of the genus Piper",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0904 = Pfeffer der Gattung Piper"
    },
    euDuty: {
      rate: "0%",
      en: "Entry under tariff-rate quota or free under GSP for developing countries",
      de: "Einfuhr unter Zollkontingent oder zollfrei im Rahmen des APS für Entwicklungsländer"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Pesticide Residue Analysis",
        "Moisture Content Certificate",
        "ISO 9001 (Quality Management)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Pestizidrückstandsanalyse",
        "Feuchtigkeitsgehalt-Zertifikat",
        "ISO 9001 (Qualitätsmanagement)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Pepper imported into the EU must comply with Regulation (EC) No 396/2005 on pesticide residues. Maximum residue levels (MRLs) are strictly enforced for pesticides such as triazophos, monocrotophos, and carbendazim."
        },
        {
          title: "Quality Standards",
          content: "EU quality standards for pepper are defined by ISO standards for black pepper (ISO 959-1) and white pepper (ISO 1062). Key parameters include moisture content (max 13%), extraneous matter (max 1%), and specific grading based on density and size."
        },
        {
          title: "US FDA Requirements",
          content: "Pepper imported into the US must comply with FDA Food Safety Modernization Act (FSMA) requirements. Foreign suppliers must register with FDA and comply with Current Good Manufacturing Practices (CGMP)."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Pfeffer, der in die EU eingeführt wird, muss die Verordnung (EG) Nr. 396/2005 über Pestizidrückstände einhalten. Höchstgehalte (MRLs) für Pestizide wie Triazophos, Monocrotophos und Carbendazim werden streng durchgesetzt."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Qualitätsstandards für Pfeffer sind durch ISO-Normen für schwarzen Pfeffer (ISO 959-1) und weißen Pfeffer (ISO 1062) definiert. Zu den wichtigsten Parametern gehören Feuchtigkeitsgehalt (max 13%), Fremdbestandteile (max 1%) und spezifische Sortierung basierend auf Dichte und Größe."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Pfeffer, der in die USA eingeführt wird, muss die Anforderungen des FDA Food Safety Modernization Act (FSMA) erfüllen. Ausländische Lieferanten müssen bei der FDA registriert sein und die Current Good Manufacturing Practices (CGMP) einhalten."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0904 - Pepper Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0904 - Pfeffer Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0904 for pepper imports. Learn about EU and US import duties, required certifications, quality standards, and documentation for importing black and white pepper from Indonesia.",
      de: "Umfassender Leitfaden zu HS-Code 0904 für Pfefferimporte. Erfahren Sie mehr über EU- und US-Importzölle, erforderliche Zertifizierungen, Qualitätsstandards und Dokumentationen für den Import von schwarzem und weißem Pfeffer aus Indonesien."
    },
    keywords: {
      en: [
        "HS code 0904",
        "pepper HS code",
        "black pepper tariff",
        "piper nigrum import",
        "indonesian pepper import",
        "pepper import duty EU",
        "pepper import duty USA"
      ],
      de: [
        "HS-Code 0904",
        "Pfeffer HS-Code",
        "Schwarzer Pfeffer Zoll",
        "Piper nigrum Import",
        "Indonesischer Pfeffer Import",
        "Pfeffer Importzoll EU",
        "Pfeffer Importzoll USA"
      ]
    }
  },
  {
    id: "0905",
    code: "0905",
    slug: "0905",
    name: {
      en: "Vanilla",
      de: "Vanille"
    },
    description: {
      en: "HS Code 0905 covers vanilla, whether whole, crushed, or ground. This includes vanilla beans, vanilla powder, and other forms of vanilla derived from Vanilla planifolia (Bourbon vanilla) and other species.",
      de: "HS-Code 0905 umfasst Vanille, ganz, zerstoßen oder gemahlen. Dies umfasst Vanillebohnen, Vanillepulver und andere Formen von Vanille aus Vanilla planifolia (Bourbon-Vanille) und anderen Arten."
    },
    products: ["Vanilla Bean"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0905 = Vanilla",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0905 = Vanille"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative for LDCs",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative für am wenigsten entwickelte Länder"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "CITES (for wild vanilla)",
        "Vanilla Quality Certificate (vanillin content)",
        "Organic Certificate (if applicable)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "CITES (für wildwachsende Vanille)",
        "Vanille-Qualitätszertifikat (Vanillingehalt)",
        "Bio-Zertifikat (falls zutreffend)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Vanilla imports into the EU must comply with Regulation (EC) No 834/2018 for organic products if labeled organic. Maximum residue limits for pesticides are strictly enforced under Regulation (EC) No 396/2005. Vanilla must meet minimum vanillin content standards."
        },
        {
          title: "Quality Standards",
          content: "EU vanilla quality standards specify minimum vanillin content (1.5-2.5% for Bourbon vanilla), moisture content (max 25%), and absence of mold and insect damage. Products are graded by length, appearance, and aroma profile."
        },
        {
          title: "US FDA Requirements",
          content: "Vanilla imported into the US must comply with FDA standards for identity and labeling. Pure vanilla extract must contain 13.35% vanilla bean minimum. FDA enforces standards for adulteration and misbranding."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Vanille-Importe in die EU müssen die Verordnung (EG) Nr. 834/2018 für Bio-Produkte erfüllen, wenn sie als Bio gekennzeichnet sind. Höchstgehalte für Pestizide werden unter der Verordnung (EG) Nr. 396/2005 streng durchgesetzt. Vanille muss Mindestvanillingehalte erfüllen."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Vanille-Qualitätsstandards legen Mindestvanillingehalte (1,5-2,5% für Bourbon-Vanille), Feuchtigkeitsgehalt (max 25%) und das Fehlen von Schimmel und Insektenschäden fest. Produkte werden nach Länge, Aussehen und Aromaprofil sortiert."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Vanille, die in die USA eingeführt wird, muss die FDA-Standards für Identität und Kennzeichnung erfüllen. Reiner Vanilleextrakt muss mindestens 13,35% Vanillebohnen enthalten. Die FDA durchsetzt Standards für Verfälschung und falsche Kennzeichnung."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0905 - Vanilla Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0905 - Vanille Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0905 for vanilla imports. Learn about EU and US import duties, quality standards, required certifications, and documentation for importing Indonesian vanilla beans.",
      de: "Umfassender Leitfaden zu HS-Code 0905 für Vanilleimporte. Erfahren Sie mehr über EU- und US-Importzölle, Qualitätsstandards, erforderliche Zertifizierungen und Dokumentationen für den Import von indonesischen Vanillebohnen."
    },
    keywords: {
      en: [
        "HS code 0905",
        "vanilla HS code",
        "vanilla import duty",
        "vanilla bean tariff",
        "indonesian vanilla import",
        "vanilla planifolia import",
        "bourbon vanilla import"
      ],
      de: [
        "HS-Code 0905",
        "Vanille HS-Code",
        "Vanille Importzoll",
        "Vanillebohne Zoll",
        "Indonesische Vanille Import",
        "Vanilla planifolia Import",
        "Bourbon-Vanille Import"
      ]
    }
  },
  {
    id: "0906",
    code: "0906",
    slug: "0906",
    name: {
      en: "Cinnamon and Cinnamon-Tree Flowers",
      de: "Zimt und Zimtblüten"
    },
    description: {
      en: "HS Code 0906 covers cinnamon and cinnamon-tree flowers (Cinnamomum zeylanicum, Cinnamomum cassia, Cinnamomum loureiroi, etc.), whether whole, crushed, or ground. This includes Ceylon cinnamon, cassia cinnamon, and cinnamon bark.",
      de: "HS-Code 0906 umfasst Zimt und Zimtblüten (Cinnamomum zeylanicum, Cinnamomum cassia, Cinnamomum loureiroi usw.), ganz, zerstoßen oder gemahlen. Dies umfasst Ceylon-Zimt, Cassia-Zimt und Zimtrinde."
    },
    products: ["Cinnamon"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0906 = Cinnamon and cinnamon-tree flowers",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0906 = Zimt und Zimtblüten"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Pesticide Residue Analysis",
        "Moisture Content Certificate",
        "Sulfite Content Certificate (for treated cinnamon)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Pestizidrückstandsanalyse",
        "Feuchtigkeitsgehalt-Zertifikat",
        "Sulfitgehalt-Zertifikat (für behandelten Zimt)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Cinnamon imports into the EU must comply with Regulation (EC) No 396/2005 on pesticide residues. Coumarin content is regulated for Cassia cinnamon (maximum 2 mg/kg for traditional foods, 0.5 mg/kg for beverages). Ceylon cinnamon has lower coumarin levels."
        },
        {
          title: "Quality Standards",
          content: "EU cinnamon quality standards specify moisture content (max 12-15% depending on type), ash content (max 5%), and essential oil content. Cinnamon is graded by quill diameter, length, and color. Ceylon cinnamon commands premium pricing."
        },
        {
          title: "US FDA Requirements",
          content: "Cinnamon imported into the US must comply with FDA food safety regulations. Coumarin is not regulated as strictly in the US compared to the EU. Products must meet labeling requirements and be free from adulteration."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Zimt-Importe in die EU müssen die Verordnung (EG) Nr. 396/2005 über Pestizidrückstände einhalten. Der Cumarin-Gehalt ist für Cassia-Zimt reguliert (maximal 2 mg/kg für traditionelle Lebensmittel, 0,5 mg/kg für Getränke). Ceylon-Zimt hat niedrigere Cumarin-Gehalte."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Zimt-Qualitätsstandards legen Feuchtigkeitsgehalt (max 12-15% je nach Art), Aschegehalt (max 5%) und ätherisches Ölgehalt fest. Zimt wird nach Durchmesser, Länge und Farbe der Stange sortiert. Ceylon-Zimt erzielt höhere Preise."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Zimt, der in die USA eingeführt wird, muss die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Cumarin ist in den USA nicht so streng reguliert wie in der EU. Produkte müssen Kennzeichnungsanforderungen erfüllen und frei von Verfälschungen sein."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0906 - Cinnamon Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0906 - Zimt Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0906 for cinnamon imports. Learn about EU and US import duties, coumarin regulations, quality standards, and documentation for importing Ceylon and Cassia cinnamon from Indonesia.",
      de: "Umfassender Leitfaden zu HS-Code 0906 für Zimtimporte. Erfahren Sie mehr über EU- und US-Importzölle, Cumarin-Vorschriften, Qualitätsstandards und Dokumentationen für den Import von Ceylon- und Cassia-Zimt aus Indonesien."
    },
    keywords: {
      en: [
        "HS code 0906",
        "cinnamon HS code",
        "cinnamon import duty",
        "cassia cinnamon tariff",
        "ceylon cinnamon import",
        "indonesian cinnamon import",
        "cinnamomum import"
      ],
      de: [
        "HS-Code 0906",
        "Zimt HS-Code",
        "Zimt Importzoll",
        "Cassia-Zimt Zoll",
        "Ceylon-Zimt Import",
        "Indonesischer Zimt Import",
        "Cinnamomum Import"
      ]
    }
  },
  {
    id: "0907",
    code: "0907",
    slug: "0907",
    name: {
      en: "Nutmeg, Mace and Cardamoms",
      de: "Muskatnuss, Macis und Kardamom"
    },
    description: {
      en: "HS Code 0907 covers nutmeg, mace, and cardamoms (Myristica fragrans, Elettaria cardamomum, Amomum spp.), whether whole, crushed, or ground. This includes whole nutmeg, mace (aril), and various cardamom varieties.",
      de: "HS-Code 0907 umfasst Muskatnuss, Macis und Kardamom (Myristica fragrans, Elettaria cardamomum, Amomum spp.), ganz, zerstoßen oder gemahlen. Dies umfasst ganze Muskatnuss, Macis (Ariste) und verschiedene Kardamom-Sorten."
    },
    products: ["Nutmeg AB", "Nutmeg BWP", "Nutmeg Dustless", "Mace"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0907 = Nutmeg, mace and cardamoms",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0907 = Muskatnuss, Macis und Kardamom"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Pesticide Residue Analysis",
        "Aflatoxin Certificate",
        "Moisture Content Certificate"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Pestizidrückstandsanalyse",
        "Aflatoxin-Zertifikat",
        "Feuchtigkeitsgehalt-Zertifikat"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Nutmeg and mace imported into the EU must comply with strict aflatoxin limits (maximum 10 µg/kg for aflatoxin B1, 15 µg/kg for total aflatoxins) under Regulation (EC) No 1881/2006. Pesticide residue limits are enforced under Regulation (EC) No 396/2005."
        },
        {
          title: "Quality Standards",
          content: "EU nutmeg quality standards specify moisture content (max 12-15%), non-volatile ether extract (min 25% for nutmeg), and absence of living pests. Grades include Whole (70-75/80), Broken (60-70), and Dustless (Special)."
        },
        {
          title: "US FDA Requirements",
          content: "Nutmeg and mace imported into the US must comply with FDA food safety regulations. Aflatoxin limits are enforced by the FDA. Products must be free from filth, adulteration, and meet labeling requirements."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Muskatnuss und Macis, die in die EU eingeführt werden, müssen strenge Aflatoxin-Grenzen (maximal 10 µg/kg für Aflatoxin B1, 15 µg/kg für Gesamttoxine) unter der Verordnung (EG) Nr. 1881/2006 einhalten. Pestizidrückstandsgrenzen werden unter der Verordnung (EG) Nr. 396/2005 durchgesetzt."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Muskatnuss-Qualitätsstandards legen Feuchtigkeitsgehalt (max 12-15%), nichtflüchtigen Etherextrakt (min 25% für Muskatnuss) und das Fehlen lebender Schädlinge fest. Sorten umfassen Ganz (70-75/80), Gebrochen (60-70) und Dustless (Special)."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Muskatnuss und Macis, die in die USA eingeführt werden, müssen die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Aflatoxin-Grenzen werden von der FDA durchgesetzt. Produkte müssen frei von Verunreinigungen und Verfälschungen sein und Kennzeichnungsanforderungen erfüllen."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0907 - Nutmeg, Mace & Cardamom Import Duties | Indo Tropical Agriculture",
      de: "HS-Code 0907 - Muskatnuss, Macis & Kardamom Importzölle | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0907 for nutmeg, mace, and cardamom imports. Learn about EU and US import duties, aflatoxin regulations, quality standards, and documentation for importing Indonesian nutmeg products.",
      de: "Umfassender Leitfaden zu HS-Code 0907 für Muskatnuss-, Macis- und Kardamom-Importe. Erfahren Sie mehr über EU- und US-Importzölle, Aflatoxin-Vorschriften, Qualitätsstandards und Dokumentationen für den Import von indonesischen Muskatnuss-Produkten."
    },
    keywords: {
      en: [
        "HS code 0907",
        "nutmeg HS code",
        "mace import duty",
        "cardamom tariff",
        "indonesian nutmeg import",
        "myristica fragrans import",
        "nutmeg import regulation"
      ],
      de: [
        "HS-Code 0907",
        "Muskatnuss HS-Code",
        "Macis Importzoll",
        "Kardamom Zoll",
        "Indonesische Muskatnuss Import",
        "Myristica fragrans Import",
        "Muskatnuss Importvorschrift"
      ]
    }
  },
  {
    id: "0908",
    code: "0908",
    slug: "0908",
    name: {
      en: "Nutmeg and Mace",
      de: "Muskatnuss und Macis"
    },
    description: {
      en: "HS Code 0908 specifically covers nutmeg (Myristica fragrans) and mace (the dried aril covering the nutmeg seed), whether whole, crushed, or ground. Indonesia is the world's largest producer of nutmeg, particularly from the Banda Islands.",
      de: "HS-Code 0908 umfasst spezifisch Muskatnuss (Myristica fragrans) und Macis (die getrocknete Ariste, die die Muskatnuss bedeckt), ganz, zerstoßen oder gemahlen. Indonesien ist der weltgrößte Produzent von Muskatnuss, insbesondere von den Banda-Inseln."
    },
    products: ["Nutmeg AB", "Nutmeg BWP", "Nutmeg Dustless", "Mace"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0908 = Nutmeg and mace",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0908 = Muskatnuss und Macis"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Aflatoxin Analysis Certificate",
        "Steam Sterilization Certificate",
        "Packaging Certificate"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Aflatoxin-Analyse-Zertifikat",
        "Dampfsterilisations-Zertifikat",
        "Verpackungszertifikat"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Nutmeg and mace imported into the EU must comply with Commission Regulation (EC) No 1881/2006 setting maximum levels for certain contaminants in foodstuffs. Aflatoxin limits are strictly enforced. Products may require steam sterilization treatment."
        },
        {
          title: "Quality Standards",
          content: "Indonesian nutmeg grades include ABC (70-75/80 lb), BWP (Broken Without Pest), and Dustless. Quality parameters include moisture content (max 12%), ash content (max 3%), and essential oil content. Banda Islands nutmeg commands premium pricing."
        },
        {
          title: "US FDA Requirements",
          content: "Nutmeg and mace imported into the US must comply with the Food, Drug, and Cosmetic Act. Products must be free from filth, adulteration, and properly labeled. FDA may detain products exceeding aflatoxin action levels."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Muskatnuss und Macis, die in die EU eingeführt werden, müssen die Verordnung (EG) Nr. 1881/2006 der Kommission zur Festsetzung von Höchstgehalten für bestimmte Kontaminanten in Lebensmitteln einhalten. Aflatoxin-Grenzen werden streng durchgesetzt. Produkte können eine Dampfsterilisationsbehandlung erfordern."
        },
        {
          title: "Qualitätsstandards",
          content: "Indonesische Muskatnuss-Sorten umfassen ABC (70-75/80 lb), BWP (Broken Without Pest) und Dustless. Qualitätsparameter umfassen Feuchtigkeitsgehalt (max 12%), Aschegehalt (max 3%) und ätherisches Öl. Muskatnuss von den Banda-Inseln erzielt höhere Preise."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Muskatnuss und Macis, die in die USA eingeführt werden, müssen dem Food, Drug, and Cosmetic Act entsprechen. Produkte müssen frei von Verunreinigungen und Verfälschungen sein und ordnungsgemäß gekennzeichnet sein. Die FDA kann Produkte mit überschrittenen Aflatoxin-Werten zurückhalten."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0908 - Nutmeg & Mace Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0908 - Muskatnuss & Macis Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0908 for nutmeg and mace imports. Learn about EU and US import duties, aflatoxin regulations, Indonesian grading (ABC, BWP), and documentation for importing nutmeg from the Banda Islands.",
      de: "Umfassender Leitfaden zu HS-Code 0908 für Muskatnuss- und Macis-Importe. Erfahren Sie mehr über EU- und US-Importzölle, Aflatoxin-Vorschriften, indonesische Sortierung (ABC, BWP) und Dokumentationen für den Import von Muskatnuss von den Banda-Inseln."
    },
    keywords: {
      en: [
        "HS code 0908",
        "nutmeg HS code",
        "mace spice import",
        "indonesian nutmeg BWP",
        "banda nutmeg import",
        "nutmeg import duty EU",
        "myristica fragrans export"
      ],
      de: [
        "HS-Code 0908",
        "Muskatnuss HS-Code",
        "Macis-Gewürz Import",
        "Indonesische Muskatnuss BWP",
        "Banda-Muskatnuss Import",
        "Muskatnuss Importzoll EU",
        "Myristica fragrans Export"
      ]
    }
  },
  {
    id: "0910",
    code: "0910",
    slug: "0910",
    name: {
      en: "Ginger, Saffron, Turmeric and Other Spices",
      de: "Ingwer, Safran, Kurkuma und andere Gewürze"
    },
    description: {
      en: "HS Code 0910 covers ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry powder, and other spices. This includes fresh, dried, crushed, or ground forms of these aromatic spices.",
      de: "HS-Code 0910 umfasst Ingwer, Safran, Kurkuma (Curcuma), Thymian, Lorbeerblätter, Currypulver und andere Gewürze. Dies umfasst frische, getrocknete, zerstoßene oder gemahlene Formen dieser aromatischen Gewürze."
    },
    products: ["Ginger", "Turmeric"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0910 = Ginger, saffron, turmeric and other spices",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0910 = Ingwer, Safran, Kurkuma und andere Gewürze"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Pesticide Residue Analysis",
        "Moisture Content Certificate",
        "Curcumin Content Certificate (for turmeric)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Pestizidrückstandsanalyse",
        "Feuchtigkeitsgehalt-Zertifikat",
        "Curcumingehalt-Zertifikat (für Kurkuma)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Ginger and turmeric imported into the EU must comply with Regulation (EC) No 396/2005 on pesticide residues. Maximum residue levels are strictly enforced. Products must meet food safety standards under Regulation (EC) No 852/2004."
        },
        {
          title: "Quality Standards",
          content: "EU quality standards for ginger specify moisture content (max 12%), ash content (max 7%), and absence of mold. For turmeric, curcumin content (min 3-5%) and color value are important quality parameters. Products are graded by size, appearance, and purity."
        },
        {
          title: "US FDA Requirements",
          content: "Ginger and turmeric imported into the US must comply with FDA food safety regulations. Products must be free from filth, adulteration, and properly labeled. FDA enforces standards for pesticide residues and food additives."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Ingwer und Kurkuma, die in die EU eingeführt werden, müssen die Verordnung (EG) Nr. 396/2005 über Pestizidrückstände einhalten. Höchstgehalte werden streng durchgesetzt. Produkte müssen Lebensmittelsicherheitsstandards gemäß Verordnung (EG) Nr. 852/2004 erfüllen."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Qualitätsstandards für Ingwer legen Feuchtigkeitsgehalt (max 12%), Aschegehalt (max 7%) und das Fehlen von Schimmel fest. Für Kurkuma sind Curcumingehalt (min 3-5%) und Farbwert wichtige Qualitätsparameter. Produkte werden nach Größe, Aussehen und Reinheit sortiert."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Ingwer und Kurkuma, die in die USA eingeführt werden, müssen die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Produkte müssen frei von Verunreinigungen und Verfälschungen sein und ordnungsgemäß gekennzeichnet sein. Die FDA durchsetzt Standards für Pestizidrückstände und Lebensmittelzusätze."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0910 - Ginger, Turmeric & Other Spices Import | Indo Tropical Agriculture",
      de: "HS-Code 0910 - Ingwer, Kurkuma & andere Gewürze Import | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0910 for ginger, turmeric, and other spice imports. Learn about EU and US import duties, pesticide regulations, quality standards, and documentation for importing Indonesian ginger and turmeric.",
      de: "Umfassender Leitfaden zu HS-Code 0910 für Ingwer-, Kurkuma- und andere Gewürzimporte. Erfahren Sie mehr über EU- und US-Importzölle, Pestizidvorschriften, Qualitätsstandards und Dokumentationen für den Import von indonesischem Ingwer und Kurkuma."
    },
    keywords: {
      en: [
        "HS code 0910",
        "ginger HS code",
        "turmeric HS code",
        "curcuma import duty",
        "indonesian ginger import",
        "turmeric import regulation",
        "zingiber officinale import"
      ],
      de: [
        "HS-Code 0910",
        "Ingwer HS-Code",
        "Kurkuma HS-Code",
        "Curcuma Importzoll",
        "Indonesischer Ingwer Import",
        "Kurkuma Importvorschrift",
        "Zingiber officinale Import"
      ]
    }
  },
  {
    id: "0801",
    code: "0801",
    slug: "0801",
    name: {
      en: "Cashew Nuts",
      de: "Cashewnüsse"
    },
    description: {
      en: "HS Code 0801 covers cashew nuts (Anacardium occidentale), fresh or dried, whether shelled, peeled, or broken. This includes whole cashews, broken cashew kernels (W240, W320, etc.), and cashew nuts in shell.",
      de: "HS-Code 0801 umfasst Cashewnüsse (Anacardium occidentale), frisch oder getrocknet, geschält, geschält oder gebrochen. Dies umfasst ganze Cashews, gebrochene Cashewkerne (W240, W320 usw.) und Cashewnüsse in der Schale."
    },
    products: ["Cashew Nut W320", "Cashew Nut W240", "Cashew Nut LP"],
    structure: {
      en: "08 = Edible fruit and nuts; 0801 = Cashew nuts, fresh or dried, whether shelled or not",
      de: "08 = Obst und Nüsse; 0801 = Cashewnüsse, frisch oder getrocknet, geschält oder nicht"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative for LDCs",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative für am wenigsten entwickelte Länder"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Fumigation Certificate",
        "Moisture Content Certificate",
        "Grading Certificate (whole kernels, broken, etc.)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Begasungszertifikat",
        "Feuchtigkeitsgehalt-Zertifikat",
        "Sortierzertifikat (ganze Kerne, gebrochen usw.)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Cashew nuts imported into the EU must comply with Regulation (EC) No 1881/2006 for contaminants including aflatoxins (maximum 10 µg/kg for B1, 15 µg/kg for total). Products must meet food safety standards under Regulation (EC) No 852/2004."
        },
        {
          title: "Quality Standards",
          content: "Cashew grading standards include W180, W210, W240, W320, W450 (whole kernels), and broken grades (LB, SB, B, LP). Quality parameters include moisture content (max 5%), nut count (lb), and absence of defects. Indonesia produces high-quality cashews."
        },
        {
          title: "US FDA Requirements",
          content: "Cashew nuts imported into the US must comply with FDA food safety regulations. Aflatoxin limits are enforced (20 ppb for total aflatoxins). Products must be properly labeled and free from filth and adulteration."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Cashewnüsse, die in die EU eingeführt werden, müssen die Verordnung (EG) Nr. 1881/2006 für Kontaminanten einschließlich Aflatoxine einhalten (maximal 10 µg/kg für B1, 15 µg/kg für gesamt). Produkte müssen Lebensmittelsicherheitsstandards gemäß Verordnung (EG) Nr. 852/2004 erfüllen."
        },
        {
          title: "Qualitätsstandards",
          content: "Cashew-Sortierungsstandards umfassen W180, W210, W240, W320, W450 (ganze Kerne) und gebrochene Sorten (LB, SB, B, LP). Qualitätsparameter umfassen Feuchtigkeitsgehalt (max 5%), Nusszahl (lb) und das Fehlen von Defekten. Indonesien produziert hochwertige Cashews."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Cashewnüsse, die in die USA eingeführt werden, müssen die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Aflatoxin-Grenzen werden durchgesetzt (20 ppb für Gesamttoxine). Produkte müssen ordnungsgemäß gekennzeichnet und frei von Verunreinigungen und Verfälschungen sein."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0801 - Cashew Nuts Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0801 - Cashewnüsse Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0801 for cashew nut imports. Learn about EU and US import duties, aflatoxin regulations, grading standards (W320, W240), and documentation for importing Indonesian cashews.",
      de: "Umfassender Leitfaden zu HS-Code 0801 für Cashew-Importe. Erfahren Sie mehr über EU- und US-Importzölle, Aflatoxin-Vorschriften, Sortierungsstandards (W320, W240) und Dokumentationen für den Import von indonesischen Cashews."
    },
    keywords: {
      en: [
        "HS code 0801",
        "cashew nuts HS code",
        "cashew import duty",
        "cashew kernel tariff",
        "indonesian cashew import",
        "W320 cashew import",
        "anacardium occidentale export"
      ],
      de: [
        "HS-Code 0801",
        "Cashewnüsse HS-Code",
        "Cashew Importzoll",
        "Cashewkernel Zoll",
        "Indonesische Cashew Import",
        "W320 Cashew Import",
        "Anacardium occidentale Export"
      ]
    }
  },
  {
    id: "0901",
    code: "0901",
    slug: "0901",
    name: {
      en: "Coffee",
      de: "Kaffee"
    },
    description: {
      en: "HS Code 0901 covers coffee, whether roasted or not, decaffeinated or not, including coffee husks and skins. This covers both Arabica (Coffea arabica) and Robusta (Coffea canephora) varieties in green, roasted, and soluble forms.",
      de: "HS-Code 0901 umfasst Kaffee, geröstet oder nicht, entkoffeiniert oder nicht, einschließlich Kaffeeschalen und Kaffeehäute. Dies deckt sowohl Arabica (Coffea arabica) als auch Robusta (Coffea canephora) Sorten in grünen, gerösteten und löslichen Formen ab."
    },
    products: ["Coffee Robusta", "Coffee Arabica"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0901 = Coffee, whether roasted or not",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0901 = Kaffee, geröstet oder nicht"
    },
    euDuty: {
      rate: "0%",
      en: "Entry under tariff-rate quota or free under GSP for developing countries",
      de: "Einfuhr unter Zollkontingent oder zollfrei im Rahmen des APS für Entwicklungsländer"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Roast Degree Certificate",
        "Moisture Content Certificate",
        "Organic/Fair Trade Certificate (if applicable)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Röstgrad-Zertifikat",
        "Feuchtigkeitsgehalt-Zertifikat",
        "Bio-Fairtrade-Zertifikat (falls zutreffend)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Coffee imported into the EU must comply with Regulation (EC) No 1881/2006 for contaminants including ochratoxin A (maximum 5 µg/kg for roasted coffee, 10 µg/kg for green coffee). Products must meet food safety standards under Regulation (EC) No 852/2004."
        },
        {
          title: "Quality Standards",
          content: "EU coffee quality standards include moisture content (max 12.5% for green coffee), defect count, and bean size. Specialty coffee grades include Strictly Hard Bean, Hard Bean, and European Preparation. Indonesian coffee includes Gayo, Toraja, and Kintamani origins."
        },
        {
          title: "US FDA Requirements",
          content: "Coffee imported into the US must comply with FDA food safety regulations. Ochratoxin A limits are enforced. Products must be properly labeled with country of origin and meet FDA standards for food additives and contaminants."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Kaffee, der in die EU eingeführt wird, muss die Verordnung (EG) Nr. 1881/2006 für Kontaminanten einschließlich Ochratoxin A (maximal 5 µg/kg für gerösteten Kaffee, 10 µg/kg für grünen Kaffee) einhalten. Produkte müssen Lebensmittelsicherheitsstandards gemäß Verordnung (EG) Nr. 852/2004 erfüllen."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Kaffeequalitätsstandards umfassen Feuchtigkeitsgehalt (max 12,5% für grünen Kaffee), Defektzahl und Bohnengröße. Spezialkaffeesorten umfassen Strictly Hard Bean, Hard Bean und European Preparation. Indonesischer Kaffee umfasst Gayo-, Toraja- und Kintamani-Herkünfte."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Kaffee, der in die USA eingeführt wird, muss die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Ochratoxin-A-Grenzen werden durchgesetzt. Produkte müssen ordnungsgemäß mit Herkunftsland gekennzeichnet sein und FDA-Standards für Lebensmittelzusätze und Kontaminanten erfüllen."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0901 - Coffee Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0901 - Kaffee Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0901 for coffee imports. Learn about EU and US import duties, ochratoxin regulations, quality standards for Arabica and Robusta, and documentation for importing Indonesian coffee.",
      de: "Umfassender Leitfaden zu HS-Code 0901 für Kaffeeimporte. Erfahren Sie mehr über EU- und US-Importzölle, Ochratoxin-Vorschriften, Qualitätsstandards für Arabica und Robusta und Dokumentationen für den Import von indonesischem Kaffee."
    },
    keywords: {
      en: [
        "HS code 0901",
        "coffee HS code",
        "coffee import duty",
        "arabica coffee tariff",
        "robusta coffee import",
        "indonesian coffee import",
        "coffea arabica export"
      ],
      de: [
        "HS-Code 0901",
        "Kaffee HS-Code",
        "Kaffee Importzoll",
        "Arabica-Kaffee Zoll",
        "Robusta-Kaffee Import",
        "Indonesischer Kaffee Import",
        "Coffea arabica Export"
      ]
    }
  },
  {
    id: "0804",
    code: "0804",
    slug: "0804",
    name: {
      en: "Dates, Figs, Coconuts and Other Tropical Fruits",
      de: "Datteln, Feigen, Kokosnüsse und andere tropische Früchte"
    },
    description: {
      en: "HS Code 0804 covers dates, figs, coconuts (copra), and other tropical fruits, fresh or dried. This includes fresh coconuts, dried coconuts, copra, and products derived from these tropical fruits.",
      de: "HS-Code 0804 umfasst Datteln, Feigen, Kokosnüsse (Kopra) und andere tropische Früchte, frisch oder getrocknet. Dies umfasst frische Kokosnüsse, getrocknete Kokosnüsse, Kopra und Produkte aus diesen tropischen Früchten."
    },
    products: ["Coconut", "Copra"],
    structure: {
      en: "08 = Edible fruit and nuts; 0804 = Dates, figs, coconuts and other tropical fruits",
      de: "08 = Obst und Nüsse; 0804 = Datteln, Feigen, Kokosnüsse und andere tropische Früchte"
    },
    euDuty: {
      rate: "0-12%",
      en: "Varies by product form and country of origin",
      de: "Variiert je nach Produktform und Herkunftsland"
    },
    usDuty: {
      rate: "Free-12%",
      en: "Varies by product form and processing",
      de: "Variiert je nach Produktform und Verarbeitung"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Fumigation Certificate",
        "Moisture Content Certificate",
        "Halal Certificate (for certain markets)"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Begasungszertifikat",
        "Feuchtigkeitsgehalt-Zertifikat",
        "Halal-Zertifikat (für bestimmte Märkte)"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Coconuts and tropical fruits imported into the EU must comply with Regulation (EC) No 396/2005 on pesticide residues. Products must meet phytosanitary requirements under Directive 2000/29/EC. Some products may require import permits."
        },
        {
          title: "Quality Standards",
          content: "EU quality standards for coconuts specify moisture content, size, and absence of mold or pests. Copra (dried coconut kernel) must meet minimum oil content standards. Products are graded by size, weight, and appearance."
        },
        {
          title: "US FDA Requirements",
          content: "Coconuts and tropical fruits imported into the US must comply with FDA food safety regulations. Products must be free from pests and diseases. FDA enforces standards for pesticide residues and food additives."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Kokosnüsse und tropische Früchte, die in die EU eingeführt werden, müssen die Verordnung (EG) Nr. 396/2005 über Pestizidrückstände einhalten. Produkte müssen Pflanzengesundheitsanforderungen gemäß Richtlinie 2000/29/EG erfüllen. Einige Produkte benötigen Importgenehmigungen."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Qualitätsstandards für Kokosnüsse legen Feuchtigkeitsgehalt, Größe und das Fehlen von Schimmel oder Schädlingen fest. Kopra (getrockneter Kokoskern) muss Mindestölgehaltsstandards erfüllen. Produkte werden nach Größe, Gewicht und Aussehen sortiert."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Kokosnüsse und tropische Früchte, die in die USA eingeführt werden, müssen die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Produkte müssen frei von Schädlingen und Krankheiten sein. Die FDA durchsetzt Standards für Pestizidrückstände und Lebensmittelzusätze."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0804 - Coconuts & Tropical Fruits Import Duties | Indo Tropical Agriculture",
      de: "HS-Code 0804 - Kokosnüsse & tropische Früchte Importzölle | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0804 for coconut and tropical fruit imports. Learn about EU and US import duties, phytosanitary requirements, quality standards, and documentation for importing Indonesian coconuts and copra.",
      de: "Umfassender Leitfaden zu HS-Code 0804 für Kokosnuss- und tropische Frucht-Importe. Erfahren Sie mehr über EU- und US-Importzölle, Pflanzengesundheitsanforderungen, Qualitätsstandards und Dokumentationen für den Import von indonesischen Kokosnüssen und Kopra."
    },
    keywords: {
      en: [
        "HS code 0804",
        "coconut HS code",
        "copra import duty",
        "tropical fruit tariff",
        "indonesian coconut import",
        "cocos nucifera export",
        "coconut import regulation"
      ],
      de: [
        "HS-Code 0804",
        "Kokosnuss HS-Code",
        "Kopra Importzoll",
        "Tropische Frucht Zoll",
        "Indonesische Kokosnuss Import",
        "Cocos nucifera Export",
        "Kokosnuss Importvorschrift"
      ]
    }
  },
  {
    id: "0910-09",
    code: "0910-09",
    slug: "0910-09",
    name: {
      en: "Turmeric (Curcuma longa)",
      de: "Kurkuma (Curcuma longa)"
    },
    description: {
      en: "HS Code 0910-09 covers turmeric (Curcuma longa), whether fresh, dried, crushed, or ground. This includes turmeric fingers, bulbs, powder, and oleoresin. Indonesian turmeric is known for high curcumin content.",
      de: "HS-Code 0910-09 umfasst Kurkuma (Curcuma longa), frisch, getrocknet, zerstoßen oder gemahlen. Dies umfasst Kurkuma-Finger, Knollen, Pulver und Oleoresin. Indonesische Kurkuma ist für ihren hohen Curcumingehalt bekannt."
    },
    products: ["Turmeric", "Dried Slice Turmeric"],
    structure: {
      en: "09 = Coffee, tea, maté and spices; 0910 = Ginger, saffron, turmeric and other spices",
      de: "09 = Kaffee, Tee, Maté und Gewürze; 0910 = Ingwer, Safran, Kurkuma und andere Gewürze"
    },
    euDuty: {
      rate: "0%",
      en: "Free under Everything But Arms (EBA) initiative",
      de: "Zollfrei unter der Everything But Arms (EBA)-Initiative"
    },
    usDuty: {
      rate: "Free",
      en: "Free under normal trade relations (NTR)",
      de: "Zollfrei unter normalen Handelsbeziehungen (NTR)"
    },
    certifications: {
      en: [
        "Phytosanitary Certificate",
        "Certificate of Origin",
        "Curcumin Content Analysis",
        "Pesticide Residue Certificate",
        "Microbiological Certificate"
      ],
      de: [
        "Pflanzengesundheitszeugnis",
        "Ursprungszeugnis",
        "Curcumingehalt-Analyse",
        "Pestizidrückstands-Zertifikat",
        "Mikrobiologisches Zertifikat"
      ]
    },
    regulations: {
      en: [
        {
          title: "EU Import Regulations",
          content: "Turmeric imported into the EU must comply with Regulation (EC) No 396/2005 on pesticide residues. Products must meet food safety standards under Regulation (EC) No 852/2004. Curcumin as a food additive (E100) must comply with Regulation (EC) No 1333/2008."
        },
        {
          title: "Quality Standards",
          content: "EU turmeric quality standards specify curcumin content (min 3-5%), moisture content (max 12%), ash content (max 7%), and essential oil content. Products are graded by bulb size, color, and purity. Indonesian turmeric is valued for its high curcumin content."
        },
        {
          title: "US FDA Requirements",
          content: "Turmeric imported into the US must comply with FDA food safety regulations. Curcumin is generally recognized as safe (GRAS) as a food additive. Products must be properly labeled and free from contaminants."
        }
      ],
      de: [
        {
          title: "EU-Importvorschriften",
          content: "Kurkuma, der in die EU eingeführt wird, muss die Verordnung (EG) Nr. 396/2005 über Pestizidrückstände einhalten. Produkte müssen Lebensmittelsicherheitsstandards gemäß Verordnung (EG) Nr. 852/2004 erfüllen. Curcumin als Lebensmittelzusatz (E100) muss der Verordnung (EG) Nr. 1333/2008 entsprechen."
        },
        {
          title: "Qualitätsstandards",
          content: "EU-Kurkuma-Qualitätsstandards legen Curcumingehalt (min 3-5%), Feuchtigkeitsgehalt (max 12%), Aschegehalt (max 7%) und ätherisches Öl fest. Produkte werden nach Knollengröße, Farbe und Reinheit sortiert. Indonesische Kurkuma wird für ihren hohen Curcumingehalt geschätzt."
        },
        {
          title: "US FDA-Anforderungen",
          content: "Kurkuma, der in die USA eingeführt wird, muss die FDA-Lebensmittelsicherheitsvorschriften erfüllen. Curcumin ist allgemein als sicher (GRAS) als Lebensmittelzusatz anerkannt. Produkte müssen ordnungsgemäß gekennzeichnet und frei von Kontaminanten sein."
        }
      ]
    },
    metaTitle: {
      en: "HS Code 0910 - Turmeric Import Duties & Regulations | Indo Tropical Agriculture",
      de: "HS-Code 0910 - Kurkuma Importzölle & Vorschriften | Indo Tropical Agriculture"
    },
    metaDescription: {
      en: "Complete guide to HS Code 0910 for turmeric imports. Learn about EU and US import duties, curcumin content requirements, quality standards, and documentation for importing Indonesian turmeric and curcuma products.",
      de: "Umfassender Leitfaden zu HS-Code 0910 für Kurkuma-Importe. Erfahren Sie mehr über EU- und US-Importzölle, Curcumingehalt-Anforderungen, Qualitätsstandards und Dokumentationen für den Import von indonesischer Kurkuma und Curcuma-Produkten."
    },
    keywords: {
      en: [
        "HS code 0910 turmeric",
        "turmeric HS code",
        "curcuma longa import",
        "curcumin import duty",
        "indonesian turmeric import",
        "turmeric import regulation",
        "dried turmeric export"
      ],
      de: [
        "HS-Code 0910 Kurkuma",
        "Kurkuma HS-Code",
        "Curcuma longa Import",
        "Curcumin Importzoll",
        "Indonesische Kurkuma Import",
        "Kurkuma Importvorschrift",
        "Getrocknete Kurkuma Export"
      ]
    }
  }
];

export function getHSCodeBySlug(slug: string): HSCode | undefined {
  return hsCodes.find((code) => code.slug === slug);
}

export function getHSCodeById(id: string): HSCode | undefined {
  return hsCodes.find((code) => code.id === id);
}

export function getHSCodes(): HSCode[] {
  return hsCodes;
}

export function getRelatedHSCodes(currentId: string): HSCode[] {
  const current = getHSCodeById(currentId);
  if (!current) return [];

  // Find HS codes with overlapping products
  const related = hsCodes
    .filter((code) => {
      if (code.id === currentId) return false;
      return current.products.some((product) => code.products.includes(product));
    })
    .slice(0, 3);

  return related;
}
