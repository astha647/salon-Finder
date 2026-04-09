export type PriceTier = "Budget" | "Mid-range" | "Premium";

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

export interface Salon {
  id: number;
  name: string;
  location: string;
  rating: number;
  priceTier: PriceTier;
  services: string[];
  description: string;
  images: string[];
  reviews: Review[];
}
