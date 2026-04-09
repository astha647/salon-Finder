import type { Salon } from "../types";

export const salons: Salon[] = [
  {
    id: 1,
    name: "Rose Glow Studio",
    location: "Downtown",
    rating: 4.8,
    priceTier: "Premium",
    services: ["Bridal Makeup", "Hair Spa", "Facial", "Nail Art"],
    description:
      "Luxury salon known for elegant bridal looks, skin therapy, and premium beauty experiences.",
    images: [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80"
    ],
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Loved the bridal package!" },
      { id: 2, user: "Ananya", rating: 4.5, comment: "Excellent staff and ambiance." }
    ]
  },
  {
    id: 2,
    name: "Blush & Bloom",
    location: "City Center",
    rating: 4.5,
    priceTier: "Mid-range",
    services: ["Haircut", "Hair Color", "Manicure", "Pedicure"],
    description:
      "Trendy and vibrant salon with expert stylists for hair transformations and nail care.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
    ],
    reviews: [
      { id: 1, user: "Meera", rating: 4.5, comment: "Great haircut and color match!" },
      { id: 2, user: "Ira", rating: 4.2, comment: "Affordable and clean setup." }
    ]
  },
  {
    id: 3,
    name: "Silk Touch Salon",
    location: "Riverside",
    rating: 4.2,
    priceTier: "Budget",
    services: ["Threading", "Waxing", "Basic Facial", "Hair Trim"],
    description:
      "Friendly neighborhood salon offering dependable beauty services at value prices.",
    images: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
    ],
    reviews: [
      { id: 1, user: "Neha", rating: 4.1, comment: "Good service and polite team." },
      { id: 2, user: "Ritika", rating: 4.3, comment: "Worth the price." }
    ]
  },
  {
    id: 4,
    name: "Petal Beauty Lounge",
    location: "West End",
    rating: 4.7,
    priceTier: "Premium",
    services: ["Keratin Treatment", "Party Makeup", "Facial", "Spa"],
    description:
      "Chic lounge with curated skin and hair rituals for a polished, glamorous finish.",
    images: [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1200&q=80"
    ],
    reviews: [
      { id: 1, user: "Sneha", rating: 4.8, comment: "My go-to for party makeup." },
      { id: 2, user: "Pooja", rating: 4.6, comment: "Premium service, lovely interiors." }
    ]
  },
  {
    id: 5,
    name: "Glow Nest",
    location: "Uptown",
    rating: 4.4,
    priceTier: "Mid-range",
    services: ["Skin Cleanup", "Hair Styling", "Eyebrow Design", "Bridal Trial"],
    description:
      "Comfort-focused salon balancing quality and affordability with personalized beauty care.",
    images: [
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1200&q=80"
    ],
    reviews: [
      { id: 1, user: "Shreya", rating: 4.5, comment: "Friendly specialists and nice results." },
      { id: 2, user: "Asha", rating: 4.2, comment: "Loved the cleanup and styling." }
    ]
  }
];
