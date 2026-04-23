// ======================================================
// EMAILJS INIT
// ======================================================
(function () {
  try {
    emailjs.init({ publicKey: "YOUR_EMAILJS_PUBLIC_KEY" });
  } catch (e) {}
})();
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

// ======================================================
// DATA
// ======================================================
const STATES_CITIES = {
  Abia: ["Umuahia", "Aba", "Ohafia", "Arochukwu", "Bende"],
  Adamawa: ["Yola", "Mubi", "Numan", "Jimeta", "Ganye"],
  "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Abak"],
  Anambra: ["Awka", "Onitsha", "Nnewi", "Ekwulobia", "Aguata"],
  Bauchi: ["Bauchi", "Azare", "Misau", "Katagum", "Alkaleri"],
  Bayelsa: ["Yenagoa", "Brass", "Ogbia", "Sagbama", "Ekeremor"],
  Benue: ["Makurdi", "Gboko", "Katsina-Ala", "Otukpo", "Vandekya"],
  Borno: ["Maiduguri", "Biu", "Konduga", "Monguno", "Gwoza"],
  "Cross River": ["Calabar", "Ogoja", "Ikom", "Obudu", "Ugep"],
  Delta: ["Asaba", "Warri", "Sapele", "Ughelli", "Agbor"],
  Ebonyi: ["Abakaliki", "Afikpo", "Onueke", "Ezza", "Ishielu"],
  Edo: ["Benin City", "Ekpoma", "Auchi", "Uromi", "Irrua"],
  Ekiti: ["Ado Ekiti", "Ikere", "Oye", "Ijero", "Emure"],
  Enugu: ["Enugu", "Nsukka", "Oji River", "Awgu", "Udi"],
  "FCT Abuja": [
    "Garki",
    "Wuse",
    "Maitama",
    "Asokoro",
    "Gwarinpa",
    "Kubwa",
    "Lugbe",
    "Karu",
  ],
  Gombe: ["Gombe", "Kumo", "Billiri", "Kaltungo", "Bajoga"],
  Imo: ["Owerri", "Orlu", "Okigwe", "Mbaise", "Ngor Okpala"],
  Jigawa: ["Dutse", "Hadejia", "Gumel", "Kazaure", "Ringim"],
  Kaduna: ["Kaduna", "Zaria", "Kafanchan", "Kagoro", "Kachia"],
  Kano: ["Kano", "Wudil", "Rano", "Bichi", "Gwarzo", "Sumaila"],
  Katsina: ["Katsina", "Daura", "Funtua", "Dutsin-Ma", "Mashi"],
  Kebbi: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru", "Kamba"],
  Kogi: ["Lokoja", "Ankpa", "Kabba", "Okene", "Idah"],
  Kwara: ["Ilorin", "Offa", "Omu-Aran", "Patigi", "Lafiagi"],
  Lagos: [
    "Ikeja",
    "Lekki",
    "Victoria Island",
    "Surulere",
    "Yaba",
    "Ikorodu",
    "Epe",
    "Ajah",
    "Sangotedo",
    "Festac",
  ],
  Nasarawa: ["Lafia", "Keffi", "Akwanga", "Nasarawa", "Doma"],
  Niger: ["Minna", "Bida", "Suleja", "Kontagora", "Agaie"],
  Ogun: ["Abeokuta", "Sagamu", "Ijebu-Ode", "Ota", "Ilaro"],
  Ondo: ["Akure", "Ondo", "Owo", "Okitipupa", "Ikare"],
  Osun: ["Osogbo", "Ile-Ife", "Ilesa", "Ede", "Iwo"],
  Oyo: ["Ibadan", "Ogbomosho", "Oyo", "Iseyin", "Saki"],
  Plateau: ["Jos", "Bukuru", "Shendam", "Pankshin", "Wase"],
  Rivers: [
    "Port Harcourt",
    "Obio Akpor",
    "Eleme",
    "Bonny",
    "Okrika",
    "GRA",
    "Diobu",
  ],
  Sokoto: ["Sokoto", "Tambuwal", "Illela", "Wurno", "Isa"],
  Taraba: ["Jalingo", "Wukari", "Bali", "Gashaka", "Zing"],
  Yobe: ["Damaturu", "Potiskum", "Gashua", "Nguru", "Geidam"],
  Zamfara: ["Gusau", "Kaura Namoda", "Talata Mafara", "Anka", "Maru"],
};

const PRODUCTS = [
  {
    id: 1,
    name: "Ankara Power Suit",
    brand: "Zara Lagos",
    price: 38500,
    oldPrice: 52000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=70",
    category: "women",
    state: "Lagos",
    badge: "New",
    discount: 26,
    desc: "A bold, structured suit crafted from premium Lagos Ankara. Features a sharp lapel and wide-leg trouser. Perfect for power dressing.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Aso-Oke Agbada",
    brand: "Kings Couture",
    price: 75000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=400&q=70",
    category: "men",
    state: "Ogun",
    badge: null,
    desc: "Handwoven Aso-Oke Agbada set with intricate embroidery. Includes the flowing outer garment, matching kaftan and trousers.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 56,
  },
  {
    id: 3,
    name: "Kente Midi Dress",
    brand: "GoldThread Co",
    price: 22000,
    oldPrice: 28000,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=70",
    category: "women",
    state: "Abuja",
    badge: "Sale",
    discount: 21,
    desc: "Vibrant Kente-inspired midi dress with a fitted bodice and flared skirt. A true celebration of West African weaving traditions.",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 4,
    name: "Beaded Evening Gown",
    brand: "Pearl Atelier",
    price: 95000,
    oldPrice: null,
    image: "/images/lightlayer6.jpg",
    category: "women",
    state: "Lagos",
    badge: "Featured",
    desc: "Hand-beaded floor-length evening gown. Over 2,000 individual beads hand-sewn by artisans in Lagos. Perfect for black-tie events.",
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    name: "Dashiki Street Shirt",
    brand: "Afro Street",
    price: 8500,
    oldPrice: 12000,
    image:
      "/images/linen-shirt.jpg",
    category: "men",
    state: "Rivers",
    badge: "Sale",
    discount: 29,
    desc: "Relaxed-fit dashiki shirt with vibrant geometric print. Made from breathable cotton blend perfect for the Nigerian heat.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 6,
    name: "Adire Wrap Skirt",
    brand: "IndigoHouse",
    price: 14500,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=400&q=70",
    category: "women",
    state: "Oyo",
    badge: "New",
    desc: "Handcrafted Adire (tie-dye) wrap skirt using traditional Yoruba resist-dyeing techniques. Each piece is uniquely patterned.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 78,
  },
  {
    id: 7,
    name: "Fila Cap – Embroidered",
    brand: "AsoFila Craft",
    price: 5500,
    oldPrice: 7000,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=70",
    category: "accessories",
    state: "Kano",
    badge: null,
    desc: "Traditional Hausa Fila cap with hand-stitched embroidery. A cultural staple, now available in contemporary colorways.",
    sizes: ["One Size"],
    rating: 4.4,
    reviews: 145,
  },
  {
    id: 8,
    name: "Brocade Senator Set",
    brand: "VIP Tailors",
    price: 55000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=70",
    category: "men",
    state: "Lagos",
    badge: "Featured",
    desc: "Premium brocade senator suit with matching agbada overlay. Custom-tailored for a sharp, distinguished look at any formal occasion.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 9,
    name: "Lace Blouse & Wrapper",
    brand: "Aso Ebi Hub",
    price: 31000,
    oldPrice: 42000,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=70",
    category: "women",
    state: "Anambra",
    badge: "Sale",
    discount: 26,
    desc: "Elegant French lace blouse paired with matching George wrapper. The quintessential Igbo women's traditional ensemble.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 10,
    name: "Embroidered Kaftan",
    brand: "Serene Couture",
    price: 18000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=70",
    category: "women",
    state: "Abuja",
    desc: "Flowing silk-blend kaftan with delicate hand embroidery at the neckline and sleeves. Effortlessly elegant for any occasion.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 92,
  },
  {
    id: 11,
    name: "Leather Ankara Bag",
    brand: "CraftLeather NG",
    price: 12000,
    oldPrice: 16000,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=70",
    category: "accessories",
    state: "Lagos",
    badge: "Sale",
    desc: "Genuine leather handbag with Ankara fabric accent panels. Functional and fashionable with three interior compartments.",
    sizes: ["One Size"],
    rating: 4.5,
    reviews: 189,
  },
  {
    id: 12,
    name: "Agbada Embroidered Set",
    brand: "Royal Threads",
    price: 65000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70",
    category: "men",
    state: "Kano",
    desc: "Majestic embroidered Agbada set in premium fabric. The gold threadwork represents wealth, tradition, and elegance.",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 88,
  },
];

const THRIFT_PRODUCTS = [
  {
    id: 101,
    name: "Vintage Ankara Blazer",
    brand: "Pre-loved · Lagos",
    price: 4500,
    oldPrice: 18000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=70",
    category: "women",
    condition: "Excellent",
    desc: "Barely worn vintage Ankara blazer in excellent condition. Size M.",
    sizes: ["M"],
    rating: 4.8,
    reviews: 12,
  },
  {
    id: 102,
    name: "Pre-owned Agbada",
    brand: "Pre-loved · Kano",
    price: 8000,
    oldPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=400&q=70",
    category: "men",
    condition: "Good",
    desc: "Gently used embroidered Agbada. Minor wear at the hem. Size L.",
    sizes: ["L"],
    rating: 4.2,
    reviews: 8,
  },
  {
    id: 103,
    name: "Thrifted Ankara Dress",
    brand: "Pre-loved · Ibadan",
    price: 3200,
    oldPrice: 12000,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=70",
    category: "women",
    condition: "Good",
    desc: "Lovely floral Ankara dress, worn twice. Size S.",
    sizes: ["S"],
    rating: 4.5,
    reviews: 15,
  },
  {
    id: 104,
    name: "Used Designer Bag",
    brand: "Pre-loved · Abuja",
    price: 6500,
    oldPrice: 25000,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=70",
    category: "accessories",
    condition: "Excellent",
    desc: "Authentic designer-inspired bag in near-perfect condition.",
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 22,
  },
  {
    id: 105,
    name: "Vintage Kente Cloth",
    brand: "Pre-loved · Enugu",
    price: 9000,
    oldPrice: 40000,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=70",
    category: "vintage",
    condition: "Good",
    badge: "Rare",
    desc: "Authentic kente cloth, circa 1990s. Museum-quality piece.",
    sizes: ["One Size"],
    rating: 5.0,
    reviews: 6,
  },
  {
    id: 106,
    name: "Thrift Dashiki Set",
    brand: "Pre-loved · PHC",
    price: 2800,
    oldPrice: 9500,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70",
    category: "men",
    condition: "Fair",
    desc: "Complete dashiki shirt and trousers set. Light fading, well-loved.",
    sizes: ["M", "L"],
    rating: 4.0,
    reviews: 18,
  },
  {
    id: 107,
    name: "Pre-owned Heels",
    brand: "Pre-loved · Lagos",
    price: 3500,
    oldPrice: 15000,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=70",
    category: "shoes",
    condition: "Good",
    desc: "Block heels with Ankara strap detail. Size 39.",
    sizes: ["39"],
    rating: 4.3,
    reviews: 9,
  },
  {
    id: 108,
    name: "Thrift Lace Gown",
    brand: "Pre-loved · Onitsha",
    price: 5000,
    oldPrice: 22000,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=70",
    category: "women",
    condition: "Excellent",
    desc: "Beautiful French lace gown, worn once at a wedding. Size L.",
    sizes: ["L"],
    rating: 4.9,
    reviews: 31,
  },
];

const DESIGNERS = [
  {
    id: 1,
    name: "Amaka Okonkwo",
    state: "Lagos",
    city: "Lekki",
    tags: ["Ankara", "Bridal", "RTW"],
    products: 142,
    followers: 8200,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=70",
    bio: "Visionary Lagos designer known for bold reimaginings of traditional Igbo textiles fused with contemporary silhouettes.",
    instagram: "@amakaokonkwo",
    whatsapp: "+2348012345678",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=60",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=60",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=300&q=60",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&q=60",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=60",
    ],
  },
  {
    id: 2,
    name: "Tunde Fashola",
    state: "FCT Abuja",
    city: "Maitama",
    tags: ["Agbada", "Men's Wear", "Brocade"],
    products: 88,
    followers: 3400,
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=70",
    bio: "Abuja-based menswear specialist creating statement Agbada and Senator sets for the modern African man.",
    instagram: "@tundefashola",
    whatsapp: "+2348023456789",
    gallery: [
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=300&q=60",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&q=60",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&q=60",
    ],
  },
  {
    id: 3,
    name: "Ngozi Eze",
    state: "Anambra",
    city: "Onitsha",
    tags: ["Lace", "Aso-Oke", "Bridal"],
    products: 210,
    followers: 12000,
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=70",
    bio: "Nigeria's premier bridal designer with over 12 years crafting unforgettable looks for Igbo traditional and white wedding ceremonies.",
    instagram: "@ngozieze",
    whatsapp: "+2348034567890",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=60",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=60",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=60",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=300&q=60",
    ],
  },
  {
    id: 4,
    name: "Bashir Musa",
    state: "Kano",
    city: "Wudil",
    tags: ["Embroidery", "Kaftan", "Senator"],
    products: 67,
    followers: 2100,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=70",
    bio: "Kano-based embroidery master, preserving the centuries-old tradition of Northern Nigerian textile artistry in contemporary menswear.",
    instagram: "@bashirmusa",
    whatsapp: "+2348045678901",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&q=60",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&q=60",
    ],
  },
  {
    id: 5,
    name: "Chioma Obi",
    state: "Rivers",
    city: "Port Harcourt",
    tags: ["Ankara", "Accessories", "RTW"],
    products: 95,
    followers: 5600,
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=70",
    bio: "Port Harcourt's most celebrated contemporary designer, blending oil-city chic with indigenous Rivers State textiles.",
    instagram: "@chiomaobi",
    whatsapp: "+2348056789012",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=60",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=60",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=60",
    ],
  },
  {
    id: 6,
    name: "Yemi Alade",
    state: "Oyo",
    city: "Ibadan",
    tags: ["Adire", "Contemporary", "Unisex"],
    products: 74,
    followers: 4200,
    img: "https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=400&q=70",
    bio: "Champion of the Adire revival movement, bringing ancient Yoruba indigo dyeing traditions into 21st century fashion.",
    instagram: "@yemialade",
    whatsapp: "+2348067890123",
    gallery: [
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=300&q=60",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=60",
    ],
  },
  {
    id: 7,
    name: "Fatima Suleiman",
    state: "FCT Abuja",
    city: "Gwarinpa",
    tags: ["Hijab Fashion", "Abayas", "Islamic Wear"],
    products: 118,
    followers: 9800,
    img: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400&q=70",
    bio: "Nigeria's leading modest fashion designer, creating stunning Hijab-friendly collections that honor Islamic values without compromising style.",
    instagram: "@fatimasuleiman",
    whatsapp: "+2348078901234",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=60",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=60",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&q=60",
    ],
  },
  {
    id: 8,
    name: "Emeka Nwosu",
    state: "Enugu",
    city: "Enugu",
    tags: ["Igbo Traditional", "Isi-Agu", "Ceremonial"],
    products: 52,
    followers: 1800,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=70",
    bio: "Custodian of Igbo royal fashion, specializing in ceremonial Isi-Agu and Oji outfits for chieftaincy titles and major life events.",
    instagram: "@emekanwosu",
    whatsapp: "+2348089012345",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=300&q=60",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&q=60",
    ],
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Rise of Lagos as Africa's Fashion Capital",
    cat: "Industry News",
    date: "Apr 18, 2025",
    author: "Bukola Adeyemi",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=70",
    excerpt:
      "Lagos has emerged as the undisputed fashion capital of sub-Saharan Africa, with a thriving ecosystem of designers, brands, and platforms shaping global trends.",
    content:
      "<h3>A New African Renaissance</h3><p>Over the past decade, Lagos has undergone a remarkable transformation. Once dismissed as a peripheral player in global fashion, the city now commands attention from buyers, editors, and tastemakers worldwide.</p><p>The catalyst? A generation of fearless Nigerian designers who refused to shrink themselves or their aesthetic. Names like Lisa Folawiyo, Deola Sagoe, and a new wave of emerging talent have placed Lagos firmly on the global fashion map.</p><h3>Infrastructure Follows Vision</h3><p>Lagos Fashion Week, now in its 14th edition, attracts international press coverage and buying appointments from major retailers. The African Fashion International summit has established frameworks for sustainable growth. And platforms like Fashnexi are ensuring that talent in Kano, Calabar, and Port Harcourt gets the same exposure as their Lagos counterparts.</p><p>The numbers tell the story: Nigeria's fashion industry is estimated at over ₦2 trillion and growing at 15% annually. More importantly, the value is increasingly being captured by Nigerian designers rather than foreign brands.</p>",
  },
  {
    id: 2,
    title: "How to Style Ankara for a Corporate Setting",
    cat: "Style Guide",
    date: "Apr 14, 2025",
    author: "Adaeze Obi",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=70",
    excerpt:
      "Breaking the office dress code ceiling — here's how to wear your Ankara with confidence and professionalism in any corporate environment.",
    content:
      "<h3>The New Corporate Dress Code</h3><p>For too long, Nigerian professionals were told to leave their cultural fabrics at home when entering corporate spaces. That era is decisively over. Today, wearing Ankara in the boardroom isn't just accepted — it's celebrated.</p><p>The key is in the cut and the styling. A well-structured Ankara blazer paired with neutral trousers says 'powerful' not 'casual'. Similarly, an Ankara pencil skirt with a crisp white blouse is office-appropriate without being dull.</p><h3>Fabric Matters</h3><p>Not all Ankara is equal for office wear. Choose prints that are bold but not busy — geometric or abstract patterns read as more formal than large floral prints. The weight of the fabric matters too; stiffer cotton Ankara holds structure better and looks more intentional.</p>",
  },
  {
    id: 3,
    title: "Meet Kano's Embroidery Masters Keeping Tradition Alive",
    cat: "Designer Stories",
    date: "Apr 10, 2025",
    author: "Musa Adamu",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=70",
    excerpt:
      "In the narrow streets of Kano's old city, master embroiderers are preserving an art form that dates back centuries — and training a new generation.",
    content:
      "<h3>A Tradition Under Threat</h3><p>The art of Hausa embroidery — known locally as Tuareg or 'dorin riga' — has been practiced in Northern Nigeria for over 500 years. The intricate geometric patterns stitched into babban riga robes and caps carry meaning: identity, status, spiritual protection.</p><p>But the tradition is under pressure. Cheaper machine-embroidered garments from China have flooded markets, and young people increasingly prefer fast fashion to the slow, skilled craft of their ancestors.</p><h3>The Resistance</h3><p>In workshops behind Kano's ancient city walls, a different story is unfolding. A group of master embroiderers — many of whom learned from their grandparents — are training apprentices and finding new markets through digital platforms.</p><p>Fashnexi has been part of this story, connecting Bashir Musa and other Kano artisans directly with buyers who value authentic craftsmanship and are willing to pay for it.</p>",
  },
];

// State variables
let cart = [],
  wishlist = [],
  currentPage = "home",
  selectedState = null,
  selectedCity = null,
  currentCheckoutStep = 1,
  selectedTemplate = null,
  selectedFabric = null,
  currentGender = "female",
  user = null,
  currentDesignerId = null,
  heroSlide = 0,
  heroInterval = null;

// ======================================================
// HERO CAROUSEL
// ======================================================
function goToSlide(idx) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === idx);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === idx);
  });
  heroSlide = idx;
}
function initCarousel() {
  heroInterval = setInterval(() => {
    const slides = document.querySelectorAll(".hero-slide");
    goToSlide((heroSlide + 1) % slides.length);
  }, 4500);
}

// ======================================================
// NAVIGATION
// ======================================================
function navigate(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const el = document.getElementById("page-" + page);
  if (el) {
    el.classList.add("active");
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });
  if (page === "designers") renderDesigners();
  if (page === "collections") renderCollections();
  if (page === "thrift") renderThrift("all");
  if (page === "wishlist") renderWishlist();
  if (page === "auth") populateAuthStates();
  if (page === "custom") initCustomOrder();
  if (page === "blog") {
    renderBlogGrid();
    renderHomeBlog();
  }
  return false;
}
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

// ======================================================
// TOAST
// ======================================================
function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast " + type + " show";
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ======================================================
// PRODUCT CARD
// ======================================================
function productCard(p, isThrift = false) {
  const inWish = wishlist.some((i) => i.id === p.id);
  const inCart = cart.some((i) => i.id === p.id);
  const conditionBadge =
    isThrift && p.condition
      ? `<span class="badge ${p.condition === "Excellent" ? "badge-green" : p.condition === "Good" ? "badge-yellow" : "badge-black"}">${p.condition}</span>`
      : "";
  return `<div class="product-card">
    <div class="product-img-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-badges">
        ${p.badge ? `<span class="badge ${p.badge === "Sale" ? "badge-red" : p.badge === "New" ? "badge-green" : "badge-black"}">${p.badge}</span>` : ""}
        ${p.discount ? `<span class="badge badge-yellow">-${p.discount}%</span>` : ""}
        ${conditionBadge}
      </div>
      <div class="product-actions">
        <button class="product-action-btn ${inWish ? "in-wishlist" : ""}" onclick="toggleWishlist(${p.id})" title="Wishlist">♡</button>
        <button class="product-action-btn" onclick="openQuickView(${p.id})" title="Quick view">👁</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">
        <span class="product-price-main">₦${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="product-price-old">₦${p.oldPrice.toLocaleString()}</span>` : ""}
      </div>
      <button class="product-add-cart" onclick="addToCart(${p.id})">${inCart ? "✓ IN CART" : "+ ADD TO CART"}</button>
    </div>
  </div>`;
}

// ======================================================
// QUICK VIEW MODAL
// ======================================================
function openQuickView(id) {
  const p =
    PRODUCTS.find((x) => x.id === id) ||
    THRIFT_PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const inWish = wishlist.some((i) => i.id === p.id);
  document.getElementById("qvImgSide").style.backgroundImage =
    `url(${p.image})`;
  document.getElementById("qvImgSide").style.backgroundSize = "cover";
  document.getElementById("qvImgSide").style.backgroundPosition = "center";
  document.getElementById("qvBadges").innerHTML =
    (p.badge
      ? `<span class="badge ${p.badge === "Sale" ? "badge-red" : p.badge === "New" ? "badge-green" : "badge-black"}">${p.badge}</span>`
      : "") +
    (p.discount
      ? `<span class="badge badge-yellow">-${p.discount}%</span>`
      : "");
  const stars =
    "★".repeat(Math.round(p.rating || 4)) +
    "☆".repeat(5 - Math.round(p.rating || 4));
  document.getElementById("qvInfoSide").innerHTML = `
    <div class="qv-brand">${p.brand}</div>
    <div class="qv-name">${p.name}</div>
    <div class="qv-price-row">
      <span class="qv-price">₦${p.price.toLocaleString()}</span>
      ${p.oldPrice ? `<span class="qv-old-price">₦${p.oldPrice.toLocaleString()}</span>` : ""}
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <span style="color:var(--yellow);font-size:16px;letter-spacing:2px">${stars}</span>
      <span style="font-size:12px;color:var(--mid)">(${p.reviews || 0} reviews)</span>
    </div>
    <p class="qv-desc">${p.desc || "Premium quality Nigerian fashion piece."}</p>
    <div class="qv-meta">
      <span><strong>Brand:</strong> ${p.brand}</span>
      <span><strong>State:</strong> ${p.state}</span>
      ${p.condition ? `<span><strong>Condition:</strong> <span style="color:var(--green);font-weight:700">${p.condition}</span></span>` : ""}
    </div>
    <div>
      <div class="section-label" style="margin-bottom:8px">Select Size</div>
      <div class="qv-sizes">${(p.sizes || ["S", "M", "L", "XL"]).map((s, i) => `<button class="qv-size-btn${i === 0 ? " selected" : ""}" onclick="this.parentElement.querySelectorAll('.qv-size-btn').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">${s}</button>`).join("")}</div>
    </div>
    <div class="qv-qty-row">
      <span class="qv-qty-label">Qty</span>
      <div class="qv-qty-ctrl">
        <button class="qv-qty-btn" onclick="qvChangeQty(-1)">−</button>
        <input class="qv-qty-num" id="qv-qty" value="1" readonly>
        <button class="qv-qty-btn" onclick="qvChangeQty(1)">+</button>
      </div>
    </div>
    <div class="qv-actions">
      <button class="btn btn-primary btn-lg" style="justify-content:center" onclick="addToCartFromQV(${p.id})">Add to Cart</button>
      <button class="btn ${inWish ? "btn-outline" : "btn-outline"}" style="justify-content:center;${inWish ? "border-color:var(--red);color:var(--red)" : ""}" onclick="toggleWishlistFromQV(${p.id},this)">
        ${inWish ? "♥ Saved to Wishlist" : "♡ Save to Wishlist"}
      </button>
    </div>`;
  document.getElementById("qvModal").classList.add("open");
}

function qvChangeQty(delta) {
  const inp = document.getElementById("qv-qty");
  if (inp) inp.value = Math.max(1, parseInt(inp.value) + delta);
}

function addToCartFromQV(id) {
  const qty = parseInt(document.getElementById("qv-qty")?.value) || 1;
  const p =
    PRODUCTS.find((x) => x.id === id) ||
    THRIFT_PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((x) => x.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ ...p, qty });
  updateCartUI();
  showToast(`"${p.name}" added to cart ✓`);
  closeQuickView();
}

function toggleWishlistFromQV(id, btn) {
  toggleWishlist(id);
  const inWish = wishlist.some((i) => i.id === id);
  btn.style.borderColor = inWish ? "var(--red)" : "var(--green)";
  btn.style.color = inWish ? "var(--red)" : "var(--green)";
  btn.textContent = inWish ? "♥ Saved to Wishlist" : "♡ Save to Wishlist";
}

function closeQuickView() {
  document.getElementById("qvModal").classList.remove("open");
}

// ======================================================
// YOUTUBE MODAL
// ======================================================
function openYouTube(videoId, title, desc) {
  document.getElementById("ytIframe").src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  document.getElementById("yt-title").textContent = title;
  document.getElementById("yt-desc").textContent = desc || "";
  document.getElementById("ytModal").classList.add("open");
}
function closeYouTubeBtn() {
  document.getElementById("ytIframe").src = "";
  document.getElementById("ytModal").classList.remove("open");
}
function closeYouTube(e) {
  if (e.target === document.getElementById("ytModal")) closeYouTubeBtn();
}

// ======================================================
// DESIGNER CATALOGUE MODAL
// ======================================================
function openDesignerCatalogue(designerId) {
  let d;
  if (designerId === "dotw") {
    d = { name: "Amaka Okonkwo", city: "Lekki, Lagos" };
  } else {
    d = DESIGNERS.find((x) => x.id === designerId);
  }
  if (!d) return;
  currentDesignerId = designerId;
  document.getElementById("catalogue-title").textContent =
    d.name + " — Collection";
  document.getElementById("catalogue-subtitle").textContent =
    `📍 ${d.city || ""} · ${PRODUCTS.filter(() => Math.random() > 0.4).length} items available`;
  const products =
    designerId === "dotw"
      ? PRODUCTS.slice(0, 8)
      : [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 6);
  document.getElementById("catalogue-products-grid").innerHTML = products
    .map((p) => productCard(p))
    .join("");
  document.getElementById("catalogueModal").classList.add("open");
}
function closeCatalogue() {
  document.getElementById("catalogueModal").classList.remove("open");
}
function showDesignerProducts(id) {
  openDesignerCatalogue(id);
}

// ======================================================
// DESIGNER PORTFOLIO MODAL
// ======================================================
let currentPortfolioDesignerId = null;
function openDesignerPortfolio(designerId) {
  let d;
  if (designerId === "dotw") {
    d = {
      id: "dotw",
      name: "AMAKA OKONKWO",
      city: "Lekki, Lagos",
      tags: ["Ankara Fusion", "Bridal Couture", "Ready-to-Wear", "Accessories"],
      products: 142,
      followers: 8200,
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      bio: "Amaka Okonkwo is a visionary Lagos-based designer known for her bold reimaginings of traditional Igbo textiles fused with contemporary silhouettes. Her work celebrates identity, movement, and African femininity. Featured in Vogue Africa, Style Rave, and named Forbes Africa Creative 30 Under 30.",
      instagram: "@amakaokonkwo",
      whatsapp: "+2348012345678",
      gallery: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=60",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=60",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=60",
        "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?w=300&q=60",
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&q=60",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=60",
      ],
    };
  } else {
    d = DESIGNERS.find((x) => x.id === designerId);
  }
  if (!d) return;
  currentPortfolioDesignerId = designerId;
  document.getElementById("portfolio-hero-img").src = d.img || d.image;
  document.getElementById("portfolio-name").textContent = d.name;
  document.getElementById("portfolio-city").textContent = `📍 ${d.city}`;
  document.getElementById("portfolio-bio").textContent =
    d.bio || "A passionate fashion creator.";
  document.getElementById("portfolio-stats").innerHTML = `
    <div class="portfolio-stat"><div class="portfolio-stat-val">${(d.products || 0).toLocaleString()}</div><div class="portfolio-stat-label">Products</div></div>
    <div class="portfolio-stat"><div class="portfolio-stat-val">${(d.followers || 0).toLocaleString()}</div><div class="portfolio-stat-label">Followers</div></div>
    <div class="portfolio-stat"><div class="portfolio-stat-val">★ 4.8</div><div class="portfolio-stat-label">Rating</div></div>`;
  document.getElementById("portfolio-tags").innerHTML = (d.tags || [])
    .map((t) => `<span class="designer-card-tag">${t}</span>`)
    .join("");
  document.getElementById("portfolio-contact").innerHTML = `
    <div style="font-size:13px;color:var(--mid)">📸 Instagram: <strong style="color:var(--black)">${d.instagram || "N/A"}</strong></div>
    <div style="font-size:13px;color:var(--mid)">📱 WhatsApp: <strong style="color:var(--black)">${d.whatsapp || "N/A"}</strong></div>`;
  document.getElementById("portfolio-gallery").innerHTML = (d.gallery || [])
    .map(
      (img) => `
    <div class="gallery-img"><img src="${img}" alt="Gallery" loading="lazy"></div>`,
    )
    .join("");
  document.getElementById("portfolioModal").classList.add("open");
}
function closePortfolio() {
  document.getElementById("portfolioModal").classList.remove("open");
}
function openDesignerCatalogueFromPortfolio() {
  closePortfolio();
  setTimeout(() => openDesignerCatalogue(currentPortfolioDesignerId), 300);
}

// ======================================================
// BLOG
// ======================================================
function blogCard(post, featured = false) {
  return `<div class="blog-card ${featured ? "blog-card-featured" : "blog-card-sm"}" onclick="openBlogPost(${post.id})">
    <div class="blog-card-img"><img src="${post.img}" alt="${post.title}" loading="lazy"></div>
    <div class="blog-card-body">
      <div class="blog-card-cat">${post.cat}</div>
      <div class="blog-card-title">${post.title}</div>
      ${featured ? `<p class="blog-card-excerpt">${post.excerpt}</p>` : ""}
      <div class="blog-card-meta"><span>✍ ${post.author}</span><span>📅 ${post.date}</span><span>⏱ ${post.readTime} read</span></div>
    </div>
  </div>`;
}
function renderHomeBlog() {
  const el = document.getElementById("home-blog-grid");
  if (!el) return;
  el.innerHTML =
    blogCard(BLOG_POSTS[0], true) +
    blogCard(BLOG_POSTS[1]) +
    blogCard(BLOG_POSTS[2]);
}
function renderBlogGrid() {
  const el = document.getElementById("blog-grid-full");
  if (!el) return;
  el.innerHTML = BLOG_POSTS.map((p, i) => blogCard(p, i === 0)).join("");
}
function openBlogPost(id) {
  const p = BLOG_POSTS.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("blog-modal-img").src = p.img;
  document.getElementById("blog-modal-cat").textContent = p.cat;
  document.getElementById("blog-modal-title").textContent = p.title;
  document.getElementById("blog-modal-meta").innerHTML =
    `<span>✍ ${p.author}</span><span>📅 ${p.date}</span><span>⏱ ${p.readTime} read</span>`;
  document.getElementById("blog-modal-content").innerHTML =
    p.content || `<p>${p.excerpt}</p>`;
  document.getElementById("blogModal").classList.add("open");
}
function closeBlogModal() {
  document.getElementById("blogModal").classList.remove("open");
}

// ======================================================
// THRIFT
// ======================================================
function renderThrift(cat) {
  const el = document.getElementById("thrift-grid");
  if (!el) return;
  const filtered =
    cat === "all"
      ? THRIFT_PRODUCTS
      : THRIFT_PRODUCTS.filter((p) => p.category === cat);
  el.innerHTML = filtered.map((p) => productCard(p, true)).join("");
}
function filterThrift(cat, btn) {
  document
    .querySelectorAll(".thrift-cat-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderThrift(cat);
}

// ======================================================
// HOME PAGE
// ======================================================
function renderFeaturedProducts() {
  const el = document.getElementById("featured-products");
  if (el)
    el.innerHTML = PRODUCTS.slice(0, 4)
      .map((p) => productCard(p))
      .join("");
}
function renderNewArrivals() {
  const el = document.getElementById("new-arrivals");
  if (el)
    el.innerHTML = PRODUCTS.slice(4, 8)
      .map((p) => productCard(p))
      .join("");
}

// ======================================================
// COLLECTIONS
// ======================================================
function renderCollections(filter = "all") {
  const el = document.getElementById("collections-grid");
  if (!el) return;
  let filtered =
    filter === "all"
      ? PRODUCTS
      : filter === "sale"
        ? PRODUCTS.filter((p) => p.badge === "Sale")
        : PRODUCTS.filter(
            (p) => p.category === filter || p.category.includes(filter),
          );
  el.innerHTML = filtered.map((p) => productCard(p)).join("");
}
function filterCollections(cat, btn) {
  document
    .querySelectorAll(".collection-tab")
    .forEach((t) => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderCollections(cat);
}
function sortProducts(val) {
  let sorted = [...PRODUCTS];
  if (val === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (val === "price-desc") sorted.sort((a, b) => b.price - a.price);
  const el = document.getElementById("collections-grid");
  if (el) el.innerHTML = sorted.map((p) => productCard(p)).join("");
}

// ======================================================
// CART
// ======================================================
function addToCart(id) {
  const p =
    PRODUCTS.find((x) => x.id === id) ||
    THRIFT_PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((x) => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  showToast(`"${p.name}" added to cart ✓`);
  renderCurrentPage();
}
function removeFromCart(id) {
  cart = cart.filter((x) => x.id !== id);
  updateCartUI();
  renderCartSidebar();
}
function updateCartQty(id, delta) {
  const item = cart.find((x) => x.id === id);
  if (item) item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
  renderCartSidebar();
}
function updateCartUI() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById("cart-count").textContent = count;
  renderCartSidebar();
}
function renderCartSidebar() {
  const container = document.getElementById("cart-items-container");
  const footer = document.getElementById("cart-footer");
  const empty = document.getElementById("cart-empty");
  if (cart.length === 0) {
    empty.style.display = "";
    footer.style.display = "none";
    return;
  }
  empty.style.display = "none";
  footer.style.display = "";
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById("cart-subtotal").textContent =
    "₦" + total.toLocaleString();
  document.getElementById("cart-total-display").textContent =
    "₦" + total.toLocaleString();
  container.innerHTML =
    empty.outerHTML +
    cart
      .map(
        (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
        <div class="cart-qty">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id},-1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`,
      )
      .join("");
  document.getElementById("cart-empty").style.display = "none";
}
function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartSidebar").classList.add("open");
}
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartSidebar").classList.remove("open");
}
function clearCart() {
  cart = [];
  updateCartUI();
}
function addCustomToCart() {
  const price = parseInt(
    document.getElementById("custom-price").textContent.replace(/,/g, ""),
  );
  cart.push({
    id: Date.now(),
    name: "Custom Order",
    brand: "Fashnexi Bespoke",
    price,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60",
  });
  updateCartUI();
  showToast("Custom order added to cart ✓");
}

// ======================================================
// WISHLIST
// ======================================================
function toggleWishlist(id) {
  const p =
    PRODUCTS.find((x) => x.id === id) ||
    THRIFT_PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  if (wishlist.some((x) => x.id === id)) {
    wishlist = wishlist.filter((x) => x.id !== id);
    showToast("Removed from wishlist");
  } else {
    wishlist.push({ ...p });
    showToast(`"${p.name}" saved to wishlist ♡`, "yellow");
  }
  document.getElementById("wishlist-count").textContent = wishlist.length;
  renderCurrentPage();
  if (currentPage === "wishlist") renderWishlist();
}
function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const empty = document.getElementById("wishlist-empty");
  if (wishlist.length === 0) {
    empty.classList.remove("hidden");
    grid.innerHTML = "";
  } else {
    empty.classList.add("hidden");
    grid.innerHTML = wishlist.map((p) => productCard(p)).join("");
  }
}
function renderCurrentPage() {
  if (currentPage === "home") {
    renderFeaturedProducts();
    renderNewArrivals();
  }
  if (currentPage === "collections") renderCollections();
  if (currentPage === "thrift") renderThrift("all");
  if (currentPage === "wishlist") renderWishlist();
}

// ======================================================
// DESIGNERS
// ======================================================
function initStateFilter() {
  const el = document.getElementById("state-filter");
  if (!el) return;
  const allBtn = `<button class="state-btn active" onclick="selectState(null,this)">All States</button>`;
  const btns = Object.keys(STATES_CITIES)
    .sort()
    .map(
      (s) =>
        `<button class="state-btn" onclick="selectState('${s}',this)">${s}</button>`,
    )
    .join("");
  el.innerHTML = allBtn + btns;
}
function selectState(state, btn) {
  selectedState = state;
  selectedCity = null;
  document
    .querySelectorAll(".state-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  const cf = document.getElementById("city-filter");
  const cl = document.getElementById("city-label");
  if (state && STATES_CITIES[state]) {
    cl.style.display = "";
    const allCB = `<button class="city-btn active" onclick="selectCity(null,this)">All Cities</button>`;
    cf.innerHTML =
      allCB +
      STATES_CITIES[state]
        .map(
          (c) =>
            `<button class="city-btn" onclick="selectCity('${c}',this)">${c}</button>`,
        )
        .join("");
  } else {
    cf.innerHTML = "";
    if (cl) cl.style.display = "none";
  }
  renderDesigners();
}
function selectCity(city, btn) {
  selectedCity = city;
  document
    .querySelectorAll(".city-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderDesigners();
}
function filterDesigners() {
  renderDesigners();
}
function renderDesigners() {
  const grid = document.getElementById("designer-grid");
  if (!grid) return;
  const searchVal = (
    document.getElementById("designer-search")?.value || ""
  ).toLowerCase();
  let filtered = DESIGNERS;
  if (selectedState)
    filtered = filtered.filter(
      (d) => d.state === selectedState || d.state.includes(selectedState),
    );
  if (selectedCity) filtered = filtered.filter((d) => d.city === selectedCity);
  if (searchVal)
    filtered = filtered.filter(
      (d) =>
        d.name.toLowerCase().includes(searchVal) ||
        d.tags.some((t) => t.toLowerCase().includes(searchVal)),
    );
  document.getElementById("designer-count").textContent =
    `Showing ${filtered.length} designer${filtered.length !== 1 ? "s" : ""}`;
  grid.innerHTML =
    filtered
      .map(
        (d) => `
    <div class="designer-card">
      <div class="designer-card-img"><img src="${d.img}" alt="${d.name}" loading="lazy"></div>
      <div class="designer-card-body">
        <div class="designer-card-name">${d.name}</div>
        <div class="designer-card-loc">📍 ${d.city}, ${d.state}</div>
        <div class="designer-card-tags">${d.tags
          .slice(0, 3)
          .map((t) => `<span class="designer-card-tag">${t}</span>`)
          .join("")}</div>
        <div class="designer-card-stats">
          <div class="designer-stat"><strong>${d.products}</strong>Products</div>
          <div class="designer-stat"><strong>${d.followers.toLocaleString()}</strong>Followers</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-sm btn-primary" onclick="openDesignerPortfolio(${d.id})" style="flex:1;justify-content:center">Portfolio</button>
          <button class="btn btn-sm btn-outline" onclick="openDesignerCatalogue(${d.id})" style="flex:1;justify-content:center">Shop</button>
        </div>
      </div>
    </div>`,
      )
      .join("") ||
    '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--mid)">No designers found.</div>';
}

// ======================================================
// SEARCH
// ======================================================
function performSearch(val) {
  const grid = document.getElementById("search-results-grid");
  const label = document.getElementById("search-results-label");
  if (!val.trim()) {
    label.textContent = "";
    grid.innerHTML = "";
    return;
  }
  const results = [...PRODUCTS, ...THRIFT_PRODUCTS].filter(
    (p) =>
      p.name.toLowerCase().includes(val.toLowerCase()) ||
      p.brand.toLowerCase().includes(val.toLowerCase()) ||
      (p.state && p.state.toLowerCase().includes(val.toLowerCase())),
  );
  label.textContent = `${results.length} result${results.length !== 1 ? "s" : ""} for "${val}"`;
  grid.innerHTML =
    results.map((p) => productCard(p)).join("") ||
    '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--mid)">No products found.</div>';
  document.getElementById("search-input-big").value = val;
}

// ======================================================
// AUTH
// ======================================================
function switchAuthTab(tab, btn) {
  document
    .querySelectorAll(".auth-tab")
    .forEach((t) => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  else
    document
      .querySelectorAll(".auth-tab")
      [tab === "register" ? 1 : 0].classList.add("active");
  document
    .getElementById("auth-login")
    .classList.toggle("hidden", tab !== "login");
  document
    .getElementById("auth-register")
    .classList.toggle("hidden", tab !== "register");
}
function populateAuthStates() {
  ["reg-state", "co-state"].forEach((id) => {
    const sel = document.getElementById(id);
    if (!sel || sel.options.length > 1) return;
    Object.keys(STATES_CITIES)
      .sort()
      .forEach((s) => {
        const o = document.createElement("option");
        o.value = s;
        o.textContent = s;
        sel.appendChild(o);
      });
  });
}
function populateRegCities() {
  const state = document.getElementById("reg-state")?.value;
  const cityEl = document.getElementById("reg-city");
  if (!cityEl) return;
  cityEl.innerHTML = '<option value="">Select City</option>';
  if (state && STATES_CITIES[state])
    STATES_CITIES[state].forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      cityEl.appendChild(o);
    });
}
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;
  if (!email || !pass) {
    showToast("Please fill in all fields");
    return;
  }
  user = { email, name: email.split("@")[0] };
  document.getElementById("auth-btn").textContent = "✓";
  showToast(`Welcome back, ${user.name}! ✓`);
  navigate("home");
}
function handleRegister() {
  user = { name: "New User" };
  showToast("Account created! Welcome to Fashnexi ✓");
  navigate("home");
}

// ======================================================
// CHECKOUT + EMAILJS
// ======================================================
function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  currentCheckoutStep = 1;
  updateCheckoutStepUI(1);
  populateAuthStates();
  const ref = "FNX-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("payment-ref").textContent = ref;
  document.getElementById("ref-display").textContent = ref;
  document.getElementById("confirm-order-num").textContent = "Order #" + ref;
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById("checkout-amount").textContent =
    "₦" + total.toLocaleString();
  document.getElementById("confirm-total").textContent =
    "₦" + total.toLocaleString();
  document.getElementById("confirm-items-list").innerHTML = cart
    .map(
      (i) =>
        `<div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;border-bottom:1px solid #eee"><span>${i.name} × ${i.qty}</span><span>₦${(i.price * i.qty).toLocaleString()}</span></div>`,
    )
    .join("");
  document.getElementById("checkoutModal").classList.add("open");
}
function closeCheckout() {
  document.getElementById("checkoutModal").classList.remove("open");
}
function checkoutNextStep(step) {
  if (step === 2) {
    const fname = document.getElementById("co-fname")?.value;
    const phone = document.getElementById("co-phone")?.value;
    const addr = document.getElementById("co-address")?.value;
    const email = document.getElementById("co-email")?.value;
    if (!fname || !phone || !addr || !email) {
      showToast("Please fill in all delivery details");
      return;
    }
  }
  currentCheckoutStep = step;
  updateCheckoutStepUI(step);
}
function updateCheckoutStepUI(step) {
  for (let i = 1; i <= 3; i++) {
    document
      .getElementById(`checkout-step-${i}`)
      .classList.toggle("hidden", i !== step);
    document.getElementById(`step-dot-${i}`).className =
      "step-dot" + (i < step ? " done" : i === step ? " active" : "");
    document.getElementById(`step-label-${i}`).className =
      "step-label" + (i === step ? " active" : "");
  }
}

async function submitOrderViaEmail() {
  const fname = document.getElementById("co-fname")?.value || "";
  const lname = document.getElementById("co-lname")?.value || "";
  const email = document.getElementById("co-email")?.value || "";
  const phone = document.getElementById("co-phone")?.value || "";
  const address = document.getElementById("co-address")?.value || "";
  const state = document.getElementById("co-state")?.value || "";
  const city = document.getElementById("co-city")?.value || "";
  const ref = document.getElementById("payment-ref")?.textContent || "";
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const itemsList = cart
    .map(
      (i) => `${i.name} (x${i.qty}) — ₦${(i.price * i.qty).toLocaleString()}`,
    )
    .join("\n");

  const templateParams = {
    to_email: "orders@fashnexi.com",
    reply_to: email,
    customer_name: `${fname} ${lname}`,
    customer_email: email,
    customer_phone: phone,
    delivery_address: `${address}, ${city}, ${state}`,
    order_reference: ref,
    order_items: itemsList,
    order_total: "₦" + total.toLocaleString(),
    order_date: new Date().toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    payment_method: "Bank Transfer — GTB",
    message: `New order placed on Fashnexi.\n\nCustomer: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}, ${city}, ${state}\n\nItems:\n${itemsList}\n\nTotal: ₦${total.toLocaleString()}\nReference: ${ref}`,
  };

  // Show sending overlay
  document.getElementById("sendingOverlay").classList.add("open");

  try {
    // Attempt EmailJS send
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    document.getElementById("sendingOverlay").classList.remove("open");
    checkoutNextStep(3);
    showToast("Order submitted! Check your email for confirmation ✓");
  } catch (error) {
    console.warn("EmailJS not configured yet:", error);
    // Fallback: still proceed to confirmation step
    document.getElementById("sendingOverlay").classList.remove("open");
    checkoutNextStep(3);
    showToast("Order recorded! Bank transfer details saved ✓");
  }
}

function copyText(text) {
  navigator.clipboard
    ?.writeText(text)
    .then(() => showToast("Copied! ✓", "yellow"))
    .catch(() => showToast("Copied!", "yellow"));
}
function copyCartTotal() {
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  copyText(total.toString());
}

// ======================================================
// CUSTOM ORDER
// ======================================================
const TEMPLATES = {
  female: [
    {
      name: "A-Line Dress",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=60",
      price: 45000,
    },
    {
      name: "Wrap Gown",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60",
      price: 55000,
    },
    {
      name: "Jumpsuit",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&q=60",
      price: 42000,
    },
    {
      name: "Two-Piece Set",
      img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=200&q=60",
      price: 38000,
    },
  ],
  male: [
    {
      name: "Agbada Set",
      img: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=200&q=60",
      price: 75000,
    },
    {
      name: "Senator Kaftan",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&q=60",
      price: 52000,
    },
    {
      name: "Dashiki Suit",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60",
      price: 48000,
    },
    {
      name: "Brocade Shirt",
      img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=200&q=60",
      price: 32000,
    },
  ],
  unisex: [
    {
      name: "Boubou Robe",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=60",
      price: 38000,
    },
    {
      name: "Cape Dress",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&q=60",
      price: 42000,
    },
    {
      name: "Linen Coord",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=60",
      price: 35000,
    },
    {
      name: "Oversized Set",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=60",
      price: 36000,
    },
  ],
};
const FABRICS = [
  "Ankara",
  "Aso-Oke",
  "Adire",
  "Lace",
  "Brocade",
  "Chiffon",
  "Denim",
  "Linen",
  "Kente",
  "George",
];
const SWATCHES = [
  "#c0392b",
  "#e67e22",
  "#f1c40f",
  "#2ecc71",
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#1a1a2e",
  "#ffffff",
  "#8B4513",
  "#2d4a2d",
  "#d4a574",
  "#ff69b4",
  "#40e0d0",
  "#708090",
];

function initCustomOrder() {
  renderTemplates();
  renderFabricSwatches();
}
function setGender(gender, btn) {
  currentGender = gender;
  document
    .querySelectorAll(".gender-tab")
    .forEach((t) => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  selectedTemplate = null;
  document.getElementById("canvas-img").classList.add("hidden");
  document.getElementById("canvas-hint").style.display = "";
  renderTemplates();
}
function renderTemplates() {
  const grid = document.getElementById("template-grid");
  if (!grid) return;
  const templates = TEMPLATES[currentGender] || TEMPLATES.female;
  grid.innerHTML = templates
    .map(
      (t, i) =>
        `<div class="template-item ${selectedTemplate === i ? "selected" : ""}" onclick="selectTemplate(${i})"><img src="${t.img}" alt="${t.name}"><span>${t.name}</span></div>`,
    )
    .join("");
}
function selectTemplate(idx) {
  selectedTemplate = idx;
  const t = (TEMPLATES[currentGender] || TEMPLATES.female)[idx];
  document.getElementById("canvas-img").src = t.img;
  document.getElementById("canvas-img").classList.remove("hidden");
  document.getElementById("canvas-hint").style.display = "none";
  document.getElementById("custom-price").textContent =
    t.price.toLocaleString();
  renderTemplates();
  updateCustomPrice();
}
function renderFabricSwatches() {
  const tg = document.getElementById("fabric-type-grid");
  if (tg)
    tg.innerHTML = FABRICS.map(
      (f, i) =>
        `<button style="padding:8px;border:1.5px solid ${selectedFabric === i ? "var(--green)" : "#ddd"};border-radius:var(--radius);font-size:11px;font-weight:600;cursor:pointer;background:${selectedFabric === i ? "var(--green-pale)" : "#fff"};transition:all .2s" onclick="selectFabricType(${i})">${f}</button>`,
    ).join("");
  const sg = document.getElementById("fabric-swatch-grid");
  if (sg)
    sg.innerHTML = SWATCHES.map(
      (c, i) =>
        `<div class="fabric-swatch" style="background:${c};border:${c === "#ffffff" ? "1.5px solid #ddd" : "none"}" onclick="selectSwatch(this)" title="Color ${i + 1}"></div>`,
    ).join("");
}
function selectFabricType(idx) {
  selectedFabric = idx;
  renderFabricSwatches();
  updateCustomPrice();
}
function selectSwatch(el) {
  document
    .querySelectorAll(".fabric-swatch")
    .forEach((s) => s.classList.remove("selected"));
  el.classList.add("selected");
  updateCustomPrice();
}
function updateCustomPrice() {
  const templates = TEMPLATES[currentGender] || TEMPLATES.female;
  if (selectedTemplate === null) return;
  let base = templates[selectedTemplate].price;
  if (parseInt(document.getElementById("m-chest")?.value) || 0 > 42)
    base += 5000;
  document.getElementById("custom-price").textContent = base.toLocaleString();
}

// ======================================================
// COUNTDOWN
// ======================================================
function initCountdown() {
  let end = new Date();
  end.setHours(
    end.getHours() + 8,
    end.getMinutes() + 24,
    end.getSeconds() + 37,
  );
  function tick() {
    const diff = Math.max(0, Math.floor((end - new Date()) / 1000));
    const h = Math.floor(diff / 3600),
      m = Math.floor((diff % 3600) / 60),
      s = diff % 60;
    const hEl = document.getElementById("cd-hours"),
      mEl = document.getElementById("cd-mins"),
      sEl = document.getElementById("cd-secs");
    if (hEl) hEl.textContent = String(h).padStart(2, "0");
    if (mEl) mEl.textContent = String(m).padStart(2, "0");
    if (sEl) sEl.textContent = String(s).padStart(2, "0");
    if (diff <= 0) {
      end = new Date();
      end.setHours(end.getHours() + 8);
    }
  }
  tick();
  setInterval(tick, 1000);
}

// ======================================================
// CLOSE MODALS ON OVERLAY CLICK
// ======================================================
document.getElementById("qvModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("qvModal")) closeQuickView();
});
document.getElementById("catalogueModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("catalogueModal")) closeCatalogue();
});
document.getElementById("portfolioModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("portfolioModal")) closePortfolio();
});
document.getElementById("blogModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("blogModal")) closeBlogModal();
});
document.getElementById("checkoutModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("checkoutModal")) closeCheckout();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeQuickView();
    closeYouTubeBtn();
    closeCatalogue();
    closePortfolio();
    closeBlogModal();
    closeCheckout();
  }
});

// ======================================================
// INIT
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
  renderNewArrivals();
  renderHomeBlog();
  initStateFilter();
  initCountdown();
  initCarousel();
  populateAuthStates();
  document.getElementById("globalSearch").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = e.target.value;
      navigate("search");
      setTimeout(() => performSearch(val), 100);
    }
  });
});
