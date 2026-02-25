import type { Metadata } from "next";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  unit: string;
  hsCode: string | null;
  description: string;
  descriptionDe: string | null;
  shortDescription: string;
  fullDescription: string;
  keywords: string[];
  specifications: { label: string; value: string }[];
  image: string;
  bgColor: string;
  category: string;
}

// Raw product data from JSON
const rawProducts = [
  {
    product_name: "Clove",
    price: 8000,
    currency: "USD",
    unit: "TON",
    hs_code: "O907",
    description_en: "Premium quality dried flower buds harvested from the clove tree (Syzygium aromaticum). These whole cloves feature a strong, aromatic, and slightly sweet flavor profile with intense pungency. Perfect for whole spice applications, traditional medicine, and as a key ingredient in spice blends. Each bud contains high essential oil content for maximum flavor impact.",
    description_de: "Hochwertige getrocknete Blütenknospen des Gewürznelkenbaums (Syzygium aromaticum). Diese ganzen Nelken zeichnen sich durch ein starkes, aromatisches und leicht süßliches Geschmacksprofil mit intensiver Schärfe aus. Ideal für die Verwendung als ganzes Gewürz, in der traditionellen Medizin und als Schlüsselzutat in Gewürzmischungen. Jede Knospe enthält einen hohen Anteil an ätherischen Ölen für maximale Geschmacksentfaltung.",
  },
  {
    product_name: "Clove Stem",
    price: 1200,
    currency: "USD",
    unit: "TON",
    hs_code: "O907",
    description_en: "Dried stems of clove flowers, offering a milder but still distinctly clove-like flavor profile at a more economical price point. These stems contain the same aromatic compounds as clove buds but in lower concentration. Perfect for industrial processing, essential oil extraction, and applications where whole bud appearance is not required.",
    description_de: "Getrocknete Stiele der Nelkenblüten mit einem milderen, aber immer noch deutlich nelkenartigen Geschmacksprofil zu einem günstigeren Preis. Diese Stiele enthalten die gleichen aromatischen Verbindungen wie Nelkenknospen, jedoch in geringerer Konzentration. Ideal für die industrielle Verarbeitung, die Gewinnung ätherischer Öle und Anwendungen, bei denen das Erscheinungsbild ganzer Knospen nicht erforderlich ist.",
  },
  {
    product_name: "Broken Cinnamon kb",
    price: 2000,
    currency: "USD",
    unit: "TON",
    hs_code: "O90620",
    description_en: "Broken pieces of premium cinnamon bark (Cinnamomum burmannii), carefully processed to retain the sweet, warm, and delicate flavor characteristic of quality cinnamon. These uniform pieces are ideal for tea infusions, spice blends, and as a cost-effective alternative to whole sticks for grinding. Each piece contains the natural essential oils that give cinnamon its distinctive aroma.",
    description_de: "Zerbrochene Stücke hochwertiger Zimtrinde (Cinnamomum burmannii), schonend verarbeitet, um den süßen, warmen und delikaten Geschmack zu erhalten, der für Qualitätszimt charakteristisch ist. Diese gleichmäßigen Stücke eignen sich ideal für Teeaufgüsse, Gewürzmischungen und als kostengünstige Alternative zu ganzen Stangen zum Mahlen. Jedes Stück enthält die natürlichen ätherischen Öle, die Zimt sein unverwechselbares Aroma verleihen.",
  },
  {
    product_name: "Cinnamon Whole Stick grade A",
    price: 4000,
    currency: "USD",
    unit: "TON",
    hs_code: "0906.11.3",
    description_en: "Premium grade A whole cinnamon sticks (Cinnamomum verum), hand-selected for superior quality and appearance. These carefully rolled sticks feature multiple thin layers of inner bark, delivering an exceptionally sweet, delicate, and complex flavor with subtle floral notes. Perfect for gourmet culinary applications, mulled beverages, and elegant presentation. Each stick is uniform in color and thickness.",
    description_de: "Ganze Zimtstangen der Premium-Klasse A (Cinnamomum verum), handverlesen für überlegene Qualität und Optik. Diese sorgfältig gerollten Stangen bestehen aus mehreren dünnen Schichten der Innenrinde und bieten einen außergewöhnlich süßen, delikaten und komplexen Geschmack mit subtilen blumigen Noten. Ideal für gourmet-kulinarische Anwendungen, Glühgetränke und elegante Präsentation. Jede Stange ist einheitlich in Farbe und Dicke.",
  },
  {
    product_name: "Cinnamon Grade A 8cm size cutting",
    price: 5500,
    currency: "USD",
    unit: "TON",
    hs_code: "0906.11.00.",
    description_en: "Premium quality cinnamon pieces precision-cut to 8cm length for convenient handling and consistent packaging. These Grade A cuttings from Cinnamomum verum feature the same sweet, delicate flavor profile as whole sticks but in a ready-to-use format. Perfect for tea bags, spice sachets, and applications requiring standardized piece sizes without compromising on quality.",
    description_de: "Hochwertige Zimtstücke der Klasse A, präzise auf 8 cm Länge geschnitten für bequeme Handhabung und gleichbleibende Verpackung. Diese geschnittenen Stücke von Cinnamomum verum haben das gleiche süße, delikate Geschmacksprofil wie ganze Stangen, jedoch in einem gebrauchsfertigen Format. Ideal für Teebeutel, Gewürzsäckchen und Anwendungen, die standardisierte Stückgrößen erfordern, ohne Kompromisse bei der Qualität einzugehen.",
  },
  {
    product_name: "Cinnamon AA small broken",
    price: 3000,
    currency: "USD",
    unit: "TON",
    hs_code: "O9061900",
    description_en: "Fine broken pieces of high-grade cinnamon (Cinnamomum burmannii), carefully sifted to ensure consistent particle size. These small pieces offer concentrated flavor and are perfect for industrial applications, spice grinding operations, and the production of cinnamon-based extracts. The pieces release their aromatic oils quickly, making them ideal for rapid infusion processes.",
    description_de: "Fein zerbrochene Stücke von hochwertigem Zimt (Cinnamomum burmannii), sorgfältig gesiebt für gleichbleibende Partikelgröße. Diese kleinen Stücke bieten konzentrierten Geschmack und sind ideal für industrielle Anwendungen, Gewürzmahlprozesse und die Herstellung von zimtbasierten Extrakten. Die Stücke geben ihre aromatischen Öle schnell frei und sind daher ideal für schnelle Aufgussprozesse.",
  },
  {
    product_name: "Dried Slice Turmeric",
    price: 2000,
    currency: "USD",
    unit: "TON",
    hs_code: "0910.30",
    description_en: "Premium dried turmeric slices made from fresh, mature turmeric rhizomes (Curcuma longa). Each slice is carefully cut and dehydrated to preserve the vibrant golden-yellow color, earthy aroma, and the full spectrum of curcumin compounds. These slices are ideal for tea preparations, traditional medicine, natural food coloring, and can be ground into pure turmeric powder.",
    description_de: "Hochwertige getrocknete Kurkumascheiben aus frischen, reifen Kurkuma-Rhizomen (Curcuma longa). Jede Scheibe wird sorgfältig geschnitten und dehydriert, um die leuchtend goldgelbe Farbe, das erdige Aroma und das volle Spektrum an Curcumin-Verbindungen zu erhalten. Diese Scheiben sind ideal für Teezubereitungen, traditionelle Medizin, natürliche Lebensmittelfärbung und können zu reinem Kurkumapulver gemahlen werden.",
  },
  {
    product_name: "Dried Sliced Curcuma",
    price: 1000,
    currency: "USD",
    unit: "TON",
    hs_code: "0910.30.00",
    description_en: "Dried slices of white turmeric (Curcuma zedoaria), also known as zedoary or temu putih. These slices have a milder, more subtle flavor compared to yellow turmeric with pleasant camphor-like undertones and a light beige interior color. Highly valued in traditional Asian medicine and specialty culinary applications for their unique aromatic properties and digestive benefits.",
    description_de: "Getrocknete Scheiben von weißer Kurkuma (Curcuma zedoaria), auch bekannt als Zedoary oder Temu Putih. Diese Scheiben haben im Vergleich zu gelber Kurkuma einen milderen, subtileren Geschmack mit angenehmen kampferartigen Untertönen und einer hellbeigen Innenfarbe. In der traditionellen asiatischen Medizin und in speziellen kulinarischen Anwendungen wegen ihrer einzigartigen aromatischen Eigenschaften und verdauungsfördernden Wirkung sehr geschätzt.",
  },
  {
    product_name: "Dried Sliced Galangal",
    price: 1150,
    currency: "USD",
    unit: "TON",
    hs_code: "O91009",
    description_en: "Premium dried slices of greater galangal (Alpinia galanga), a rhizome essential to Southeast Asian cuisine. These slices preserve the distinctive pine-like, citrusy aroma with subtle earthy undertones. Each slice is carefully dried to maintain the essential oils that give galangal its unique flavor profile. Perfect for Thai soups (Tom Yum, Tom Kha), curry pastes, and traditional remedies.",
    description_de: "Hochwertige getrocknete Scheiben von großem Galgant (Alpinia galanga), ein für die südostasiatische Küche essentielles Rhizom. Diese Scheiben bewahren das charakteristische pinienartige, zitrusartige Aroma mit subtilen erdigen Untertönen. Jede Scheibe wird schonend getrocknet, um die ätherischen Öle zu erhalten, die Galgant sein einzigartiges Geschmacksprofil verleihen. Ideal für thailändische Suppen (Tom Yum, Tom Kha), Currypasten und traditionelle Heilmittel.",
  },
  {
    product_name: "Mace",
    price: 17000,
    currency: "USD",
    unit: "TON",
    hs_code: "O9082100",
    description_en: "Premium whole mace blades - the delicate, lacy aril that surrounds the nutmeg seed. Hand-separated and carefully dried to preserve the intricate web-like structure and vibrant orange-red to amber color. Mace offers a more refined, subtle version of nutmeg's warmth with added floral and peppery notes. Highly valued in European cuisine for flavoring sauces, baked goods, and meat dishes.",
    description_de: "Hochwertige ganze Macis-Blüten - der zarte, netzartige Samenmantel, der die Muskatnuss umgibt. Handverlesen und schonend getrocknet, um die komplizierte netzartige Struktur und die lebendige orangerote bis bernsteinfarbene Farbe zu erhalten. Macis bietet eine raffiniertere, subtilere Version der Wärme von Muskatnuss mit zusätzlichen blumigen und pfeffrigen Noten. In der europäischen Küche sehr geschätzt zum Würzen von Saucen, Backwaren und Fleischgerichten.",
  },
  {
    product_name: "Nutmeg AB",
    price: 8000,
    currency: "USD",
    unit: "TON",
    hs_code: "0908.40.00.00.",
    description_en: "Premium whole nutmeg seeds (Myristica fragrans), Grade AB quality. These carefully selected seeds are uniform in size, dense, and heavy, indicating high essential oil content. The seeds feature a rich, warm, and slightly sweet aroma with complex woody undertones. Perfect for grating fresh over dishes, incorporation into spice blends, and use in baked goods, custards, and savory sauces.",
    description_de: "Ganze Muskatnüsse der Premium-Klasse AB (Myristica fragrans). Diese sorgfältig ausgewählten Samen sind einheitlich in der Größe, dicht und schwer, was auf einen hohen Gehalt an ätherischen Ölen hinweist. Die Samen haben ein reichhaltiges, warmes und leicht süßliches Aroma mit komplexen holzigen Untertönen. Ideal zum frischen Reiben über Gerichte, zur Verwendung in Gewürzmischungen und für Backwaren, Puddings und herzhafte Saucen.",
  },
  {
    product_name: "Nutmeg broken/bwp",
    price: 4200,
    currency: "USD",
    unit: "TON",
    hs_code: "090811.",
    description_en: "Broken nutmeg pieces (Myristica fragrans) - whole nutmeg seeds that have been naturally broken during handling or processing. These pieces retain the same exceptional warm, aromatic flavor profile as whole nutmeg but at a more economical price point. Perfect for industrial grinding operations, essential oil extraction, and applications where visual appearance is not the primary concern.",
    description_de: "Zerbrochene Muskatnussstücke (Myristica fragrans) - ganze Muskatnüsse, die bei der Handhabung oder Verarbeitung natürlich zerbrochen sind. Diese Stücke behalten das gleiche außergewöhnliche warme, aromatische Geschmacksprofil wie ganze Muskatnüsse, jedoch zu einem günstigeren Preis. Ideal für industrielle Mahlprozesse, die Gewinnung ätherischer Öle und Anwendungen, bei denen das visuelle Erscheinungsbild nicht im Vordergrund steht.",
  },
  {
    product_name: "Nutmeg in shell",
    price: 4000,
    currency: "USD",
    unit: "TON",
    hs_code: "0908.10.00.10",
    description_en: "Whole nutmeg seeds (Myristica fragrans) preserved within their natural hard shell. This traditional preservation method ensures maximum freshness and protection of the essential oils inside. The shell must be cracked open to reveal the aromatic seed within. These in-shell nutmegs are ideal for long-term storage and are highly valued in markets where traditional presentation is appreciated.",
    description_de: "Ganze Muskatnüsse (Myristica fragrans) in ihrer natürlichen harten Schale. Diese traditionelle Konservierungsmethode gewährleistet maximale Frische und Schutz der ätherischen Öle im Inneren. Die Schale muss aufgebrochen werden, um den aromatischen Samen freizulegen. Diese Muskatnüsse in der Schale sind ideal für die Langzeitlagerung und werden auf Märkten, die traditionelle Präsentation schätzen, sehr geschätzt.",
  },
  {
    product_name: "Nutmeg dust",
    price: 2500,
    currency: "USD",
    unit: "TON",
    hs_code: "090812.",
    description_en: "Fine particles of nutmeg (Myristica fragrans) produced during the handling and processing of whole nutmegs. This product offers the same warm, aromatic flavor profile as whole nutmeg in a ready-to-use powdered form. Perfect for immediate incorporation into spice blends, food products, and applications where fine texture is desired. An economical option for industrial users.",
    description_de: "Feine Partikel von Muskatnuss (Myristica fragrans), die bei der Handhabung und Verarbeitung ganzer Muskatnüsse anfallen. Dieses Produkt bietet das gleiche warme, aromatische Geschmacksprofil wie ganze Muskatnuss in gebrauchsfertiger Pulverform. Ideal für die sofortige Verwendung in Gewürzmischungen, Lebensmitteln und Anwendungen, bei denen eine feine Textur gewünscht wird. Eine wirtschaftliche Option für industrielle Anwender.",
  },
  {
    product_name: "Long Pepper",
    price: 9000,
    currency: "USD",
    unit: "TON",
    hs_code: "09041190.",
    description_en: "Dried flower spikes of Piper longum, a close relative of black pepper with a more complex and intense flavor profile. These slender, catkin-like spikes deliver a slow-building heat that is both pungent and slightly sweet, with subtle floral and earthy undertones. Prized in Indian and Southeast Asian cuisines, as well as in traditional Ayurvedic medicine for its therapeutic properties.",
    description_de: "Getrocknete Blütenstände von Piper longum, einem engen Verwandten des schwarzen Pfeffers mit einem komplexeren und intensiveren Geschmacksprofil. Diese schlanken, kätzchenartigen Stängel bieten eine langsam aufbauende Schärfe, die sowohl scharf als auch leicht süßlich ist, mit subtilen blumigen und erdigen Untertönen. Geschätzt in der indischen und südostasiatischen Küche sowie in der traditionellen ayurvedischen Medizin für ihre therapeutischen Eigenschaften.",
  },
  {
    product_name: "Betel Nut 70% good Split and whole",
    price: 1800,
    currency: "USD",
    unit: "TON",
    hs_code: "0802.80",
    description_en: "Mixture of split and whole areca nuts (Areca catechu) with approximately 70% good quality kernels. These nuts are harvested at optimal maturity, carefully dried, and sorted. The product contains both whole nuts and naturally split halves. Widely used in traditional betel quid preparations and as a raw material for various industrial applications including pharmaceutical and dental products.",
    description_de: "Mischung aus gespaltenen und ganzen Betelnüssen (Areca catechu) mit etwa 70% guten Kernen. Diese Nüsse werden bei optimaler Reife geerntet, schonend getrocknet und sortiert. Das Produkt enthält sowohl ganze Nüsse als auch natürlich gespaltene Hälften. Weit verbreitet in traditionellen Betelkau-Zubereitungen und als Rohstoff für verschiedene industrielle Anwendungen, einschließlich pharmazeutischer und dentaler Produkte.",
  },
  {
    product_name: "Blackpepper 500 gl",
    price: 7500,
    currency: "USD",
    unit: "TON",
    hs_code: "O9041120",
    description_en: "Premium quality black peppercorns (Piper nigrum) with a density of 500 grams per liter, indicating excellent quality and proper drying. These berries are harvested at peak ripeness and sun-dried to develop the characteristic wrinkled black exterior and pungent aroma. Features bold, sharp heat with complex citrus and pine undertones. Perfect for whole-pepper applications, gourmet grinding, and premium spice blends.",
    description_de: "Hochwertige schwarze Pfefferkörner (Piper nigrum) mit einer Dichte von 500 Gramm pro Liter, was auf ausgezeichnete Qualität und richtige Trocknung hinweist. Diese Beeren werden bei optimaler Reife geerntet und sonnengetrocknet, um die charakteristische runzelige schwarze Außenseite und das scharfe Aroma zu entwickeln. Bietet kräftige, scharfe Schärfe mit komplexen Zitrus- und Pinienuntertönen. Ideal für Anwendungen mit ganzen Pfefferkörnern, zum gourmet Mahlen und für Premium-Gewürzmischungen.",
  },
  {
    product_name: "Blackpepper Broken 300 gl/small 2mm",
    price: 3500,
    currency: "USD",
    unit: "TON",
    hs_code: "0904.11",
    description_en: "Small broken pieces of black pepper (Piper nigrum) approximately 2mm in size with a density of 300g/l. These uniformly sized pieces offer concentrated pepper heat and flavor that releases more quickly than whole peppercorns. Perfect for use in pepper mills, spice blends, meat processing, and applications where rapid flavor infusion is desired. An economical option with no compromise on taste.",
    description_de: "Kleine Bruchstücke von schwarzem Pfeffer (Piper nigrum) von etwa 2 mm Größe mit einer Dichte von 300 g/l. Diese gleichmäßig großen Stücke bieten konzentrierte Pfefferschärfe und -geschmack, die sich schneller freisetzt als bei ganzen Pfefferkörnern. Ideal für Pfeffermühlen, Gewürzmischungen, Fleischverarbeitung und Anwendungen, bei denen eine schnelle Geschmacksentfaltung erwünscht ist. Eine wirtschaftliche Option ohne Kompromisse beim Geschmack.",
  },
  {
    product_name: "Homalomena / Sugandhi Root",
    price: 2500,
    currency: "USD",
    unit: "TON",
    hs_code: "0904.12",
    description_en: "Dried roots of Homalomena aromatica, also known as Sugandhi root or sugandhmantri. This aromatic root features a distinctive camphor-like, woody scent with subtle spicy undertones. Highly valued in traditional medicine systems including Ayurveda for its therapeutic properties. Used in incense formulations, natural perfumery, and as a flavoring agent in certain traditional preparations.",
    description_de: "Getrocknete Wurzeln von Homalomena aromatica, auch bekannt als Sugandhi-Wurzel oder Sugandhmantri. Diese aromatische Wurzel hat einen charakteristischen kampferartigen, holzigen Duft mit subtilen würzigen Untertönen. In traditionellen Medizinsystemen wie Ayurveda wegen ihrer therapeutischen Eigenschaften sehr geschätzt. Verwendung in Räuchermischungen, natürlicher Parfümerie und als Aromastoff in bestimmten traditionellen Zubereitungen.",
  },
  {
    product_name: "Whitepepper",
    price: 9000,
    currency: "USD",
    unit: "TON",
    hs_code: "0904.11.",
    description_en: "Premium white peppercorns (Piper nigrum) produced from fully ripe berries that have been soaked and the outer skin removed before drying. This process results in a smoother, cream-colored peppercorn with a milder yet more complex flavor profile than black pepper. Features earthy, musty notes with a refined heat that doesn't overpower dishes. Perfect for light-colored sauces, cream-based dishes, and where black specks would be visually undesirable.",
    description_de: "Hochwertige weiße Pfefferkörner (Piper nigrum) aus vollreifen Beeren, die vor dem Trocknen eingeweicht und von der Außenhaut befreit werden. Dieser Prozess ergibt glattere, cremefarbene Pfefferkörner mit einem milderen, aber komplexeren Geschmacksprofil als schwarzer Pfeffer. Bietet erdige, muffige Noten mit einer raffinierten Schärfe, die Gerichte nicht überdeckt. Ideal für helle Saucen, cremige Gerichte und dort, wo schwarze Punkte visuell unerwünscht wären.",
  },
  {
    product_name: "Cashew Nut W320",
    price: 12000,
    currency: "USD",
    unit: "TON",
    hs_code: "8013220",
    description_en: "Premium whole cashew kernels (Anacardium occidentale) graded W320, indicating approximately 320 kernels per pound - the most popular and versatile size grade. These carefully processed kernels are whole, white to light ivory in color, with a sweet, buttery flavor and characteristic curved shape. Free from defects and perfectly dried to ensure freshness. Ideal for snacking, confectionery, bakery applications, and premium nut mixes.",
    description_de: "Ganze Cashewkerne der Premiumklasse W320 (Anacardium occidentale), was etwa 320 Kerne pro Pfund bedeutet - die beliebteste und vielseitigste Größenklasse. Diese sorgfältig verarbeiteten Kerne sind ganz, weiß bis hellelfenbeinfarben, mit süßem, buttrigem Geschmack und charakteristischer gebogener Form. Frei von Mängeln und perfekt getrocknet für optimale Frische. Ideal zum Snacken, für Süßwaren, Backanwendungen und Premium-Nussmischungen.",
  },
  {
    product_name: "Coffee Bean Robusta grade 3",
    price: 7500,
    currency: "USD",
    unit: "TON",
    hs_code: "0901.11",
    description_en: "Robusta coffee beans (Coffea canephora), Grade 3 quality. These beans are characterized by their high caffeine content, full body, and strong, bold flavor profile with earthy and nutty undertones. The beans are uniformly sized with minimal defects, properly dried and hulled. Perfect for espresso blends, instant coffee production, and applications requiring a robust coffee character with excellent crema formation.",
    description_de: "Robusta-Kaffeebohnen (Coffea canephora), Qualitätsklasse 3. Diese Bohnen zeichnen sich durch ihren hohen Koffeingehalt, vollen Körper und starkes, kräftiges Geschmacksprofil mit erdigen und nussigen Untertönen aus. Die Bohnen sind gleichmäßig groß mit minimalen Fehlern, richtig getrocknet und geschält. Ideal für Espressomischungen, Instantkaffee-Produktion und Anwendungen, die einen robusten Kaffeecharakter mit ausgezeichneter Crema-Bildung erfordern.",
  },
  {
    product_name: "Gambier",
    price: 9000,
    currency: "USD",
    unit: "TON",
    hs_code: "32019010.",
    description_en: "Natural extract derived from the leaves and twigs of Uncaria gambir, processed into uniform cubes or blocks. This traditional product has been used for centuries in betel quid preparations, textile dyeing, and leather tanning. Contains high levels of catechins and tannins with astringent properties. In modern applications, valued for its natural preservative qualities and as a source of bioactive compounds for various industries.",
    description_de: "Natürliches Extrakt aus Blättern und Zweigen von Uncaria gambir, verarbeitet zu gleichmäßigen Würfeln oder Blöcken. Dieses traditionelle Produkt wird seit Jahrhunderten in Betelkau-Zubereitungen, Textilfärbung und Lederverarbeitung verwendet. Enthält hohe Anteile an Catechinen und Tanninen mit adstringierenden Eigenschaften. In modernen Anwendungen geschätzt für seine natürlichen konservierenden Eigenschaften und als Quelle bioaktiver Verbindungen für verschiedene Industrien.",
  },
  {
    product_name: "Vanilla Bean",
    price: 150,
    currency: "USD",
    unit: "KG",
    hs_code: "0905.10.",
    description_en: "Premium cured vanilla beans (Vanilla planifolia) from Indonesia, known for their exceptional quality and rich flavor profile. These beans undergo a traditional curing process lasting several months to develop the characteristic dark brown to black color, supple texture, and intense aroma. Features sweet, creamy, and floral notes with the classic vanilla bouquet. Each bean is grade A quality, oily, and aromatic.",
    description_de: "Hochwertig fermentierte Vanilleschoten (Vanilla planifolia) aus Indonesien, bekannt für ihre außergewöhnliche Qualität und ihr reichhaltiges Geschmacksprofil. Diese Schoten durchlaufen einen traditionellen, mehrere Monate dauernden Fermentationsprozess, um die charakteristische dunkelbraune bis schwarze Farbe, geschmeidige Textur und intensives Aroma zu entwickeln. Bietet süße, cremige und blumige Noten mit dem klassischen Vanille-Bouquet. Jede Schote ist Klasse A Qualität, ölig und aromatisch.",
  },
  {
    product_name: "Fresh Ginger",
    price: 1800,
    currency: "USD",
    unit: "TON",
    hs_code: "091011.",
    description_en: "Freshly harvested ginger rhizomes (Zingiber officinale) from Indonesia's prime growing regions. These firm, plump rhizomes feature thin, light-brown skin with pale yellow to light green flesh inside. Delivers the characteristic pungent, spicy kick with fresh citrusy undertones that fresh ginger is prized for. Perfect for culinary applications, beverage production, fresh juice extraction, and processing into preserved or candied ginger products.",
    description_de: "Frisch geerntete Ingwer-Rhizome (Zingiber officinale) aus Indonesiens besten Anbaugebieten. Diese festen, prallen Rhizome haben eine dünne, hellbraune Schale mit blassgelbem bis hellgrünem Fruchtfleisch im Inneren. Bietet den charakteristischen scharfen, würzigen Kick mit frischen zitrusartigen Untertönen, für den frischer Ingwer geschätzt wird. Ideal für kulinarische Anwendungen, Getränkeherstellung, frische Saftgewinnung und Verarbeitung zu konservierten oder kandierten Ingwerprodukten.",
  },
  {
    product_name: "Tamarind Seeds",
    price: 400,
    currency: "USD",
    unit: "TON",
    hs_code: "08134020.",
    description_en: "Dried seeds extracted from tamarind fruit (Tamarindus indica). These hard, dark brown, glossy seeds are a byproduct of tamarind pulp processing but have significant commercial value. Widely used in the food industry as a source of stabilizers and thickeners, particularly tamarind kernel powder (TKP). Also valued in traditional medicine, textile processing, and as a raw material for various industrial applications.",
    description_de: "Getrocknete Samen aus der Tamarindenfrucht (Tamarindus indica). Diese harten, dunkelbraunen, glänzenden Samen sind ein Nebenprodukt der Tamarindenmarkverarbeitung, haben aber einen bedeutenden kommerziellen Wert. Weit verbreitet in der Lebensmittelindustrie als Quelle für Stabilisatoren und Verdickungsmittel, insbesondere Tamarindenkernpulver (TKP). Auch geschätzt in der traditionellen Medizin, Textilverarbeitung und als Rohstoff für verschiedene industrielle Anwendungen.",
  },
  {
    product_name: "Basil Seeds",
    price: 4000,
    currency: "USD",
    unit: "TON",
    hs_code: "1209.91.",
    description_en: "Small, black seeds from sweet basil (Ocimum basilicum), known for their remarkable ability to swell and form a gelatinous coating when soaked in water. When hydrated, they expand significantly and develop a tapioca-like texture, making them popular in beverages and desserts across Asia. Rich in dietary fiber, minerals, and antioxidants. Used in refreshing drinks, puddings, and as a natural thickening agent in various preparations.",
    description_de: "Kleine, schwarze Samen des süßen Basilikums (Ocimum basilicum), bekannt für ihre bemerkenswerte Fähigkeit, in Wasser zu quellen und eine gelartige Hülle zu bilden. Bei Hydratation vergrößern sie sich erheblich und entwickeln eine tapiokaähnliche Textur, was sie in Getränken und Desserts in ganz Asien beliebt macht. Reich an Ballaststoffen, Mineralien und Antioxidantien. Verwendung in erfrischenden Getränken, Puddings und als natürliches Verdickungsmittel in verschiedenen Zubereitungen.",
  },
  {
    product_name: "Black Cumin Seeds",
    price: 3500,
    currency: "USD",
    unit: "TON",
    hs_code: "0909311.",
    description_en: "Nigella sativa seeds, commonly known as black cumin or black seed. These small, matte black seeds have a complex flavor profile combining elements of onion, oregano, and black pepper with subtle bitterness. Highly valued for centuries in traditional medicine (often called \"the cure for everything but death\" in Islamic tradition). Rich in thymoquinone and other bioactive compounds. Used in breads, cheeses, pickles, and traditional remedies.",
    description_de: "Nigella-sativa-Samen, allgemein bekannt als Schwarzkümmel. Diese kleinen, mattschwarzen Samen haben ein komplexes Geschmacksprofil, das Elemente von Zwiebel, Oregano und schwarzem Pfeffer mit subtiler Bitterkeit verbindet. Seit Jahrhunderten in der traditionellen Medizin hoch geschätzt (in der islamischen Tradition oft als \"Heilmittel für alles außer den Tod\" bezeichnet). Reich an Thymochinon und anderen bioaktiven Verbindungen. Verwendung in Broten, Käse, Gurken und traditionellen Heilmitteln.",
  },
  {
    product_name: "Java Tamarind",
    price: 550,
    currency: "USD",
    unit: "TON",
    hs_code: "08109020.",
    description_en: "The fruit pulp of Tamarindus indica from Java, Indonesia, processed into a dark, sticky paste containing the sweet-sour flesh, fibers, and seeds. This traditional product offers a complex sweet-tart flavor profile with notes of citrus and dried fruit. Essential in Indonesian and Southeast Asian cuisine for adding sourness to dishes, soups, and sauces. Also used in beverages, candies, and as a natural acidulant in various food preparations.",
    description_de: "Das Fruchtfleisch von Tamarindus indica aus Java, Indonesien, verarbeitet zu einer dunklen, klebrigen Paste, die das süß-saure Fruchtfleisch, Fasern und Samen enthält. Dieses traditionelle Produkt bietet ein komplexes süß-saures Geschmacksprofil mit Noten von Zitrusfrüchten und Trockenfrüchten. Unverzichtbar in der indonesischen und südostasiatischen Küche, um Gerichten, Suppen und Saucen Säure zu verleihen. Auch in Getränken, Süßigkeiten und als natürliches Säuerungsmittel in verschiedenen Lebensmittelzubereitungen verwendet.",
  },
  {
    product_name: "Dried Ginger",
    price: 3500,
    currency: "USD",
    unit: "TON",
    hs_code: "0910.10.",
    description_en: "Dehydrated ginger rhizomes (Zingiber officinale) processed to preserve the essential oils and pungent compounds while removing moisture for extended shelf life. Dried ginger has a more concentrated, slightly different flavor profile than fresh - more pungent and less citrusy, with warm, spicy notes. Available in whole pieces or slices. Perfect for tea blends, spice grinding, traditional medicine preparations, and as a shelf-stable ginger option.",
    description_de: "Dehydrierte Ingwer-Rhizome (Zingiber officinale), verarbeitet zur Erhaltung der ätherischen Öle und scharfen Verbindungen bei gleichzeitiger Entfernung der Feuchtigkeit für längere Haltbarkeit. Getrockneter Ingwer hat ein konzentrierteres, etwas anderes Geschmacksprofil als frischer - schärfer und weniger zitrusartig, mit warmen, würzigen Noten. Erhältlich als ganze Stücke oder Scheiben. Ideal für Teemischungen, Gewürzmahlungen, traditionelle Medizinzubreitungen und als lagerfähige Ingwer-Option.",
  },
  {
    product_name: "Bay Leaf",
    price: 3000,
    currency: "USD",
    unit: "TON",
    hs_code: "0910991000.",
    description_en: "Dried aromatic leaves from the Indonesian bay leaf tree (Syzygium polyanthum), also known as Indonesian laurel or salam leaf. These leaves have a distinctive flavor profile different from Mediterranean bay leaves - milder with subtle hints of nutmeg and clove. An essential herb in Indonesian cooking, added to soups, stews, and rice dishes to impart a subtle aromatic depth. Used fresh or dried, typically removed before serving.",
    description_de: "Getrocknete aromatische Blätter des indonesischen Lorbeerbaums (Syzygium polyanthum), auch bekannt als Indonesischer Lorbeer oder Salam-Blatt. Diese Blätter haben ein charakteristisches Geschmacksprofil, das sich von mediterranen Lorbeerblättern unterscheidet - milder mit subtilen Anklängen von Muskat und Nelke. Ein unverzichtbares Kraut in der indonesischen Küche, das Suppen, Eintöpfen und Reisgerichten eine subtile aromatische Tiefe verleiht. Frisch oder getrocknet verwendet, typischerweise vor dem Servieren entfernt.",
  },
  {
    product_name: "Moringa Leaf",
    price: 2500,
    currency: "USD",
    unit: "TON",
    hs_code: "1211.90.99.",
    description_en: "Dried leaves of Moringa oleifera, often called the \"miracle tree\" for its exceptional nutritional profile. These vibrant green leaves are carefully harvested and dried at low temperatures to preserve their high content of vitamins, minerals, and antioxidants. Rich in protein, calcium, iron, and vitamin C. The leaves have a mild, earthy flavor similar to spinach with a slightly peppery note. Used in teas, soups, and as a nutritional supplement.",
    description_de: "Getrocknete Blätter von Moringa oleifera, oft als \"Baum des Lebens\" bezeichnet aufgrund seines außergewöhnlichen Nährstoffprofils. Diese lebhaft grünen Blätter werden schonend geerntet und bei niedrigen Temperaturen getrocknet, um ihren hohen Gehalt an Vitaminen, Mineralien und Antioxidantien zu erhalten. Reich an Protein, Kalzium, Eisen und Vitamin C. Die Blätter haben einen milden, erdigen Geschmack ähnlich wie Spinat mit einer leicht pfeffrigen Note. Verwendung in Tees, Suppen und als Nahrungsergänzungsmittel.",
  },
  {
    product_name: "Moringa Leaf Powder",
    price: 3500,
    currency: "USD",
    unit: "TON",
    hs_code: "12119099.",
    description_en: "Finely ground powder made from premium dried Moringa oleifera leaves. This vibrant green powder concentrates the exceptional nutritional benefits of fresh moringa leaves into an easy-to-use form. Exceptionally rich in protein, vitamins A, C, and E, calcium, potassium, and iron. Has a mild, earthy, slightly grassy flavor. Perfect for adding to smoothies, juices, soups, baked goods, and as a natural green food coloring and nutritional supplement.",
    description_de: "Feingemahlenes Pulver aus hochwertigen getrockneten Moringa oleifera Blättern. Dieses lebhaft grüne Pulver konzentriert die außergewöhnlichen Nährstoffvorteile frischer Moringablätter in eine einfach zu verwendende Form. Außergewöhnlich reich an Protein, Vitaminen A, C und E, Kalzium, Kalium und Eisen. Hat einen milden, erdigen, leicht grasigen Geschmack. Ideal zum Hinzufügen zu Smoothies, Säften, Suppen, Backwaren und als natürliche grüne Lebensmittelfarbe und Nahrungsergänzungsmittel.",
  },
  {
    product_name: "Red Bean",
    price: 1600,
    currency: "USD",
    unit: "TON",
    hs_code: "0713321000.",
    description_en: "Dried red kidney beans (Phaseolus vulgaris), carefully sorted and cleaned for uniform size and quality. These classic beans feature a deep red color, smooth texture, and mild, slightly sweet flavor that absorbs surrounding flavors beautifully. An excellent source of plant-based protein, complex carbohydrates, and dietary fiber. Perfect for chili, rice and beans, soups, stews, and traditional bean dishes across many cuisines.",
    description_de: "Getrocknete rote Kidneybohnen (Phaseolus vulgaris), sorgfältig sortiert und gereinigt für gleichmäßige Größe und Qualität. Diese klassischen Bohnen haben eine tiefrote Farbe, glatte Textur und milden, leicht süßlichen Geschmack, der umgebende Aromen schön aufnimmt. Eine ausgezeichnete Quelle für pflanzliches Protein, komplexe Kohlenhydrate und Ballaststoffe. Ideal für Chili, Reis und Bohnen, Suppen, Eintöpfe und traditionelle Bohnengerichte vieler Küchen.",
  },
  {
    product_name: "Velvet Tamarind",
    price: 5500,
    currency: "USD",
    unit: "TON",
    hs_code: "08109020.",
    description_en: "Dried fruit of Dialium indum, also known as velvet tamarind or keranji. These small, round fruits have a hard, velvety brown shell that cracks open to reveal a sticky, sweet-sour orange pulp inside. The flavor is uniquely complex - sweet, tangy, and slightly smoky with notes of raisins and apricots. Popular as a snack in Southeast Asia and used in traditional preparations, sauces, and as a flavoring agent in various culinary applications.",
    description_de: "Getrocknete Frucht von Dialium indum, auch bekannt als Samtfrucht oder Keranji. Diese kleinen, runden Früchte haben eine harte, samtige braune Schale, die aufbricht und ein klebriges, süß-saures oranges Fruchtfleisch freigibt. Der Geschmack ist einzigartig komplex - süß, würzig und leicht rauchig mit Noten von Rosinen und Aprikosen. In Südostasien als Snack beliebt und in traditionellen Zubereitungen, Saucen und als Aromastoff in verschiedenen kulinarischen Anwendungen verwendet.",
  },
  {
    product_name: "Cumin seeds",
    price: 6250,
    currency: "USD",
    unit: "TON",
    hs_code: "090930.",
    description_en: "Premium cumin seeds (Cuminum cyminum), hand-selected for their characteristic elongated shape, uniform size, and distinctive warm, earthy aroma. These seeds release their full flavor when lightly toasted, offering a nutty, slightly peppery profile with subtle citrus undertones. An essential spice in cuisines worldwide, from Indian curries to Middle Eastern dishes, Mexican preparations, and European cheeses and breads.",
    description_de: "Hochwertige Kreuzkümmelsamen (Cuminum cyminum), handverlesen für ihre charakteristische längliche Form, gleichmäßige Größe und ihr unverwechselbares warmes, erdiges Aroma. Diese Samen entfalten ihr volles Aroma beim leichten Rösten und bieten ein nussiges, leicht pfeffriges Profil mit subtilen Zitrusuntertönen. Ein essentielles Gewürz in Küchen weltweit, von indischen Currys über nahöstliche Gerichte, mexikanische Zubereitungen bis hin zu europäischen Käsesorten und Broten.",
  },
  {
    product_name: "Long Mace",
    price: 17000,
    currency: "USD",
    unit: "TON",
    hs_code: "0908.",
    description_en: "Premium long mace blades - the whole, uncut arils that surround the nutmeg seed (Myristica fragrans). These carefully hand-separated blades are longer and more intact than regular mace, representing the highest quality grade. Features a delicate, intricate web-like structure with a vibrant orange to amber color. Offers a refined, subtle version of nutmeg's warmth with additional floral and peppery notes. Highly prized by gourmet chefs and spice connoisseurs.",
    description_de: "Hochwertige lange Macis-Blüten - die ganzen, ungeschnittenen Samenmäntel, die die Muskatnuss umgeben (Myristica fragrans). Diese sorgfältig handverlesenen Blätter sind länger und intakter als reguläre Macis und repräsentieren die höchste Qualitätsstufe. Hat eine zarte, komplizierte netzartige Struktur mit einer lebhaften orange bis bernsteinfarbenen Farbe. Bietet eine raffinierte, subtile Version der Wärme von Muskatnuss mit zusätzlichen blumigen und pfeffrigen Noten. Sehr geschätzt von Gourmetköchen und Gewürzliebhabern.",
  },
  {
    product_name: "Raw Cashew Nut",
    price: 2000,
    currency: "USD",
    unit: "TON",
    hs_code: "0801 310000",
    description_en: "Unprocessed raw cashew nuts (Anacardium occidentale) still in their natural state with the testa (seed coat) intact. These nuts have not been roasted or flavored, preserving their pure, natural flavor and nutritional profile. The raw nuts require processing (roasting or boiling) before consumption to remove toxic compounds found in the raw state. Perfect for processors, roasters, and manufacturers who want to apply their own flavoring and roasting methods.",
    description_de: "Unverarbeitete rohe Cashewnüsse (Anacardium occidentale) in ihrem natürlichen Zustand mit intakter Samenhaut. Diese Nüsse wurden weder geröstet noch aromatisiert, was ihr reines, natürliches Aroma und Nährstoffprofil bewahrt. Die rohen Nüsse müssen vor dem Verzehr verarbeitet (geröstet oder gekocht) werden, um giftige Verbindungen zu entfernen, die im Rohzustand vorkommen. Ideal für Verarbeiter, Röster und Hersteller, die ihre eigenen Aromatisierungs- und Röstmethoden anwenden möchten.",
  },
  {
    product_name: "Green Mung beans",
    price: 1400,
    currency: "USD",
    unit: "TON",
    hs_code: "0713.31.",
    description_en: "Premium dried green mung beans (Vigna radiata), also known as moong beans or green gram. These small, oval beans feature a vibrant green color with a distinctive white hilum. They have a mild, slightly sweet flavor and soft texture when cooked. Exceptionally versatile in Asian cuisines - used whole in soups and curries, split for dals, sprouted for nutritious bean sprouts, and ground for flour in desserts and noodles.",
    description_de: "Hochwertige getrocknete grüne Mungobohnen (Vigna radiata). Diese kleinen, ovalen Bohnen haben eine lebhafte grüne Farbe mit einem charakteristischen weißen Hilum. Sie haben einen milden, leicht süßlichen Geschmack und eine weiche Textur beim Kochen. Außergewöhnlich vielseitig in der asiatischen Küche - ganz in Suppen und Currys verwendet, gespalten für Dals, gekeimt für nahrhafte Sprossen und gemahlen zu Mehl für Desserts und Nudeln.",
  },
  {
    product_name: "Clove Broken Head",
    price: 2500,
    currency: "USD",
    unit: "TON",
    hs_code: "O907",
    description_en: "Broken clove heads (Syzygium aromaticum) - the rounded bud portions of cloves that have separated during handling. These pieces contain the highest concentration of essential oils in the clove, delivering intense aromatic punch and flavor. While visually less appealing than whole cloves, they offer the same exceptional quality at a more economical price point. Perfect for industrial grinding, essential oil extraction, and applications where appearance is secondary to flavor.",
    description_de: "Zerbrochene Nelkenköpfe (Syzygium aromaticum) - die runden Knospenteile der Nelken, die sich bei der Handhabung abgetrennt haben. Diese Stücke enthalten die höchste Konzentration an ätherischen Ölen in der Nelke und liefern einen intensiven aromatischen Schlag und Geschmack. Optisch weniger ansprechend als ganze Nelken, bieten sie die gleiche außergewöhnliche Qualität zu einem günstigeren Preis. Ideal für industrielles Mahlen, Gewinnung ätherischer Öle und Anwendungen, bei denen das Aussehen zweitrangig gegenüber dem Geschmack ist.",
  },
  {
    product_name: "Coffee Bean Robusta Grade 2",
    price: 7500,
    currency: "USD",
    unit: "TON",
    hs_code: "0901.11.",
    description_en: "Premium Robusta coffee beans (Coffea canephora), Grade 2 quality - a step above Grade 3 with fewer defects and more consistent sizing. These beans deliver the characteristic Robusta profile: high caffeine content, full body, strong flavor with earthy and nutty undertones, and excellent crema formation. Carefully processed and sorted to ensure quality. Perfect for espresso blends, instant coffee production, and commercial roasting operations seeking reliable quality.",
    description_de: "Hochwertige Robusta-Kaffeebohnen (Coffea canephora), Qualitätsklasse 2 - eine Stufe über Klasse 3 mit weniger Fehlern und gleichmäßigerer Größe. Diese Bohnen liefern das charakteristische Robusta-Profil: hohen Koffeingehalt, vollen Körper, starken Geschmack mit erdigen und nussigen Untertönen und ausgezeichnete Crema-Bildung. Sorgfältig verarbeitet und sortiert, um Qualität zu gewährleisten. Ideal für Espressomischungen, Instantkaffee-Produktion und gewerbliche Röstereien, die zuverlässige Qualität suchen.",
  },
  {
    product_name: "TURMERIC POWDER",
    price: 1.9,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "GINGER POWDER",
    price: 5.1,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "AROMATIC GINGER POWDER",
    price: 5.1,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "BLACKPEPPER POWDER",
    price: 5.4,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "WHITEPEPPER POWDER",
    price: 6.3,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "CINNAMON POWDER",
    price: 2.3,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "CORRIANDER POWDER",
    price: 1.4,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
  {
    product_name: "CLOVE POWDER",
    price: 10.5,
    currency: "USD",
    unit: "KG",
    hs_code: null,
    description_en: null,
    description_de: null,
  },
];

// Helper function to generate slug from product name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Helper function to get category from product name
function getCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("clove")) return "Spices";
  if (n.includes("cinnamon")) return "Spices";
  if (n.includes("pepper")) return "Spices";
  if (n.includes("nutmeg") || n.includes("mace")) return "Spices";
  if (n.includes("ginger") || n.includes("galangal") || n.includes("turmeric") || n.includes("curcuma")) return "Spices";
  if (n.includes("cumin")) return "Spices";
  if (n.includes("vanilla")) return "Spices";
  if (n.includes("bay leaf")) return "Spices";
  if (n.includes("cocoa")) return "Cocoa";
  if (n.includes("coffee")) return "Coffee";
  if (n.includes("cashew")) return "Nuts";
  if (n.includes("betel")) return "Nuts";
  if (n.includes("bean") || n.includes("mung") || n.includes("red bean")) return "Beans";
  if (n.includes("tamarind")) return "Fruits";
  if (n.includes("basil") || n.includes("moringa")) return "Herbs";
  if (n.includes("gambier")) return "Extracts";
  if (n.includes("powder")) return "Powders";
  return "Other";
}

// Helper function to get color from category
function getColorForCategory(category: string): string {
  const colors: Record<string, string> = {
    "Spices": "bg-amber-600",
    "Cocoa": "bg-amber-800",
    "Coffee": "bg-stone-700",
    "Nuts": "bg-amber-500",
    "Beans": "bg-green-600",
    "Fruits": "bg-orange-500",
    "Herbs": "bg-emerald-600",
    "Extracts": "bg-yellow-700",
    "Powders": "bg-stone-500",
    "Other": "bg-stone-600",
  };
  return colors[category] || "bg-stone-600";
}

// Helper to extract keywords from description
function extractKeywords(name: string, description: string): string[] {
  const keywords: string[] = [];
  const n = name.toLowerCase();

  // Add category-based keywords
  if (n.includes("clove")) keywords.push("Cloves", "Syzygium aromaticum", "Whole Spices");
  if (n.includes("cinnamon")) keywords.push("Cinnamon", "Cinnamomum", "Spices");
  if (n.includes("pepper")) keywords.push("Pepper", "Piper nigrum", "Spices");
  if (n.includes("nutmeg")) keywords.push("Nutmeg", "Myristica fragrans", "Spices");
  if (n.includes("ginger")) keywords.push("Ginger", "Zingiber officinale", "Spices");
  if (n.includes("turmeric")) keywords.push("Turmeric", "Curcuma longa", "Spices");
  if (n.includes("cocoa")) keywords.push("Cocoa", "Cacao", "Chocolate Ingredients");
  if (n.includes("coffee")) keywords.push("Coffee", "Robusta", "Coffea canephora");
  if (n.includes("cashew")) keywords.push("Cashew", "Anacardium occidentale", "Nuts");
  if (n.includes("vanilla")) keywords.push("Vanilla", "Vanilla planifolia", "Premium Spices");

  // Extract key terms from description
  const descWords = description.split(" ").filter(w => w.length > 5);
  keywords.push(...descWords.slice(0, 3));

  return [...new Set(keywords)].slice(0, 5);
}

// Helper to generate specifications
function generateSpecifications(product: typeof rawProducts[0]): { label: string; value: string }[] {
  const specs: { label: string; value: string }[] = [];

  if (product.hs_code) {
    specs.push({ label: "HS Code", value: product.hs_code });
  }
  specs.push({ label: "Price", value: `$${product.price.toLocaleString()} / ${product.unit}` });
  specs.push({ label: "Incoterms", value: "FOB Surabaya, Indonesia" });

  // Add quality specs based on product
  const n = product.product_name.toLowerCase();
  if (n.includes("grade") || n.includes("class")) {
    const gradeMatch = product.product_name.match(/grade\s+[a-z0-9]+/i);
    if (gradeMatch) {
      specs.push({ label: "Grade", value: gradeMatch[0].replace(/grade\s+/i, "").toUpperCase() });
    }
  }

  specs.push({ label: "Origin", value: "Indonesia" });

  return specs;
}

// Transform raw products into full product objects
const products: Product[] = rawProducts.map((raw, index) => {
  const category = getCategory(raw.product_name);
  const slug = generateSlug(raw.product_name);

  return {
    id: `product-${index}`,
    slug,
    name: raw.product_name,
    price: raw.price,
    currency: raw.currency,
    unit: raw.unit,
    hsCode: raw.hs_code,
    description: raw.description_en || raw.product_name,
    descriptionDe: raw.description_de,
    shortDescription: raw.description_en
      ? raw.description_en.slice(0, 150) + (raw.description_en.length > 150 ? "..." : "")
      : raw.product_name,
    fullDescription: raw.description_en || `High-quality ${raw.product_name} from Indonesia.`,
    keywords: extractKeywords(raw.product_name, raw.description_en || ""),
    specifications: generateSpecifications(raw),
    image: "/products/default.svg",
    bgColor: getColorForCategory(category),
    category,
  };
});

// Get featured products (first 6 for landing page)
export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}

// Get all products
export function getAllProducts(): Product[] {
  return products;
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

// Get all categories
export function getCategories(): string[] {
  return [...new Set(products.map(p => p.category))].sort();
}

// Generate static params for SSG
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// Generate metadata for a product
export function generateProductMetadata(product: Product): Metadata {
  const url = `https://indotropicalagriculture.com/products/${product.slug}`;

  return {
    title: `${product.name} | Indo Tropical Agriculture - Indonesian Exporter`,
    description: product.fullDescription,
    keywords: product.keywords,
    authors: [{ name: "Indo Tropical Agriculture" }],
    creator: "Indo Tropical Agriculture",
    publisher: "Indo Tropical Agriculture",
    metadataBase: new URL("https://indotropicalagriculture.com"),
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Indo Tropical Agriculture`,
      description: product.fullDescription,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${product.name} - Indo Tropical Agriculture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Indo Tropical Agriculture`,
      description: product.fullDescription,
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    robots: { index: true, follow: true },
  };
}

// Export all products for direct access
export { products };
