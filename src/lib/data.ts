export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  popular?: boolean;
}

export const categories: Category[] = [
  {
    id: "crispy-pata",
    name: "Crispy Pata Promo",
    description: "Our signature crispy pata in special promo bundles",
    image: "/images/products/crispy-pata.png",
    productCount: 6,
  },
  {
    id: "sulit-ulam",
    name: "Sulit Ulam Bundle",
    description: "Value meal bundles perfect for the family",
    image: "/images/products/3-ulam-bundle.png",
    productCount: 8,
  },
  {
    id: "pasta-noodles",
    name: "Pasta & Noodles",
    description: "Hearty Filipino-style pasta and noodle dishes",
    image: "/images/products/pork-bbq-1.png",
    productCount: 12,
  },
  {
    id: "lechon-rolls",
    name: "Lechon Rolls",
    description: "Perfectly rolled and roasted lechon",
    image: "/images/products/5-ulam-w-belly.png",
    productCount: 3,
  },
  {
    id: "lechon-belly",
    name: "Lechon Belly",
    description: "Crispy and juicy lechon belly cuts",
    image: "/images/products/5-ulam-w-belly.png",
    productCount: 3,
  },
  {
    id: "ala-carte",
    name: "Ala Carte",
    description: "Individual dishes to suit your cravings",
    image: "/images/products/fried-chicken.png",
    productCount: 13,
  },
  {
    id: "knp-products",
    name: "KNP Products Only",
    description: "Exclusive products for Ka Negosyo Partners",
    image: "/images/products/10-ulam-bundle.png",
    productCount: 7,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "10-ulam-bundle",
    name: "10 Ulam Bundle",
    description: "The ultimate family feast! 10 different ulam varieties including crispy pata, lechon belly, pork BBQ, and more.",
    price: 3050,
    image: "/images/products/10-ulam-bundle.png",
    category: "Sulit Ulam Bundle",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 328,
  },
  {
    id: "3-ulam-bundle",
    name: "3 Ulam Bundle",
    description: "Perfect starter bundle with 3 delicious ulam choices. Great for small families!",
    price: 750,
    image: "/images/products/3-ulam-bundle.png",
    category: "Sulit Ulam Bundle",
    badge: "Sulit Deal",
    rating: 4.8,
    reviews: 215,
  },
  {
    id: "4-ulam-bundle",
    name: "4 Ulam Bundle",
    description: "Four flavorful ulam selections for a hearty family meal. Value for money!",
    price: 1050,
    originalPrice: 1250,
    image: "/images/products/4-ulam-bundle.png",
    category: "Sulit Ulam Bundle",
    badge: "Save ₱200",
    rating: 4.9,
    reviews: 189,
  },
  {
    id: "5-ulam-bundle",
    name: "5 Ulam Bundle",
    description: "Five delicious ulam dishes perfect for gatherings and celebrations.",
    price: 1350,
    originalPrice: 1550,
    image: "/images/products/5-ulam-bundle.png",
    category: "Sulit Ulam Bundle",
    badge: "Best Value",
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "5-ulam-w-belly",
    name: "5 Ulam Bundle with Belly",
    description: "Five ulam favorites plus premium lechon belly. The complete fiesta package!",
    price: 2050,
    originalPrice: 2400,
    image: "/images/products/5-ulam-w-belly.png",
    category: "Sulit Ulam Bundle",
    badge: "Premium",
    rating: 4.9,
    reviews: 167,
  },
  {
    id: "6-ulam-bundle",
    name: "6 Ulam Bundle",
    description: "Six mouthwatering ulam dishes including crispy pata for the whole family.",
    price: 2050,
    originalPrice: 2350,
    image: "/images/products/6-ulam-bundle.png",
    category: "Sulit Ulam Bundle",
    badge: "Save ₱300",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: "pork-bbq",
    name: "Pork BBQ",
    description: "Sweet and savory Filipino-style pork barbecue on sticks. A classic Pinoy favorite!",
    price: 560,
    image: "/images/products/pork-bbq-1.png",
    category: "Ala Carte",
    rating: 4.7,
    reviews: 201,
  },
  {
    id: "crispy-pata",
    name: "Crispy Pata",
    description: "Our signature deep-fried pork leg — golden, crispy skin with tender, juicy meat inside.",
    price: 899,
    image: "/images/products/crispy-pata.png",
    category: "Crispy Pata Promo",
    badge: "Signature",
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    description: "Golden fried chicken with our special seasoning. Crispy outside, juicy inside!",
    price: 799,
    image: "/images/products/fried-chicken.png",
    category: "Ala Carte",
    badge: "Popular",
    rating: 4.8,
    reviews: 276,
  },
];

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Cart Package",
    description: "Perfect for beginners who want to start their own Mr. Fryman food cart business.",
    price: 29999,
    features: [
      "Mr. Fryman branded food cart",
      "Complete cooking equipment",
      "Initial product inventory",
      "Training & orientation",
      "Marketing materials",
      "Operational manual",
    ],
    image: "/images/products/crispy-pata.png",
  },
  {
    id: "business",
    name: "Business Package",
    description: "Our most popular package with everything you need to run a profitable food business.",
    price: 49999,
    features: [
      "Premium branded food cart",
      "Full cooking equipment set",
      "Larger initial inventory",
      "Comprehensive training program",
      "Marketing & promo materials",
      "Social media support",
      "Dedicated business mentor",
      "Priority product supply",
    ],
    image: "/images/products/10-ulam-bundle.png",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Partner Package",
    description: "The ultimate Ka Negosyo Partner package for serious entrepreneurs.",
    price: 79999,
    features: [
      "Premium store setup",
      "Industrial cooking equipment",
      "Maximum initial inventory",
      "VIP training & mentorship",
      "Full marketing campaign",
      "Exclusive territory rights",
      "Monthly business consultation",
      "Priority supply guarantee",
      "Revenue sharing benefits",
      "Annual partner summit access",
    ],
    image: "/images/products/6-ulam-bundle.png",
  },
];

export const testimonials = [
  {
    name: "Maria Santos",
    role: "Ka Negosyo Partner - Quezon City",
    content: "Starting my Mr. Fryman food cart was the best decision I made! Within 3 months, I already got my ROI back. The support from the team is amazing.",
    avatar: "/images/testimonials/maria.jpg",
    rating: 5,
  },
  {
    name: "Juan Dela Cruz",
    role: "Regular Customer - Makati",
    content: "The Crispy Pata Kare Kare is hands down the best I've ever had. I order every week for our family gatherings. Sulit na sulit!",
    avatar: "/images/testimonials/juan.jpg",
    rating: 5,
  },
  {
    name: "Ana Reyes",
    role: "Ka Negosyo Partner - Pasig",
    content: "I was hesitant at first but the Business Package gave me everything I needed. Now I have 3 branches! Mr. Fryman changed my life.",
    avatar: "/images/testimonials/ana.jpg",
    rating: 5,
  },
];

export function formatPrice(price: number): string {
  return `₱${price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}
