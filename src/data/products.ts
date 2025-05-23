
export interface Product {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  subscriptionPrice: number;
  rating: number;
  description: string;
  origin: string;
  abv: number;
  tastingNotes: {
    aroma: string;
    flavor: string;
    finish: string;
  };
  producer: string;
  pairings: string[];
  reviews: {
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const alcoholProducts: Product[] = [
  {
    id: 1,
    name: "Tusker Lager",
    type: "Beer",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop",
    price: 250,
    subscriptionPrice: 200,
    rating: 4.2,
    description: "Kenya's premium lager beer with a crisp, refreshing taste that has been crafted with the finest ingredients for over 90 years.",
    origin: "Kenya",
    abv: 4.2,
    tastingNotes: {
      aroma: "Fresh malt with subtle hop notes",
      flavor: "Crisp and clean with balanced sweetness",
      finish: "Short and refreshing with mild bitterness"
    },
    producer: "East African Breweries Limited",
    pairings: ["Grilled meats", "Spicy foods", "Light appetizers"],
    reviews: [
      {
        id: 1,
        user: "John K.",
        rating: 4,
        comment: "Great local beer, perfect for the Kenyan climate!",
        date: "2024-01-15"
      },
      {
        id: 2,
        user: "Mary S.",
        rating: 5,
        comment: "My favorite beer. Always fresh and crisp.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: 2,
    name: "Kenya Cane",
    type: "Spirit",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 1200,
    subscriptionPrice: 1000,
    rating: 4.0,
    description: "Premium Kenyan cane spirit with smooth finish, distilled from the finest sugar cane.",
    origin: "Kenya",
    abv: 40.0,
    tastingNotes: {
      aroma: "Sweet cane with vanilla hints",
      flavor: "Smooth and mellow with caramel notes",
      finish: "Long and warming"
    },
    producer: "Kenya Wine Agencies Limited",
    pairings: ["Cocktails", "Neat sipping", "Mixers"],
    reviews: [
      {
        id: 1,
        user: "David M.",
        rating: 4,
        comment: "Smooth spirit, great for mixing cocktails.",
        date: "2024-01-12"
      }
    ]
  },
  {
    id: 3,
    name: "Amarula Cream",
    type: "Liqueur",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&h=500&fit=crop",
    price: 2500,
    subscriptionPrice: 2200,
    rating: 4.5,
    description: "Rich cream liqueur made from African marula fruit, creating a unique and indulgent taste experience.",
    origin: "South Africa",
    abv: 17.0,
    tastingNotes: {
      aroma: "Rich cream with exotic fruit notes",
      flavor: "Creamy and smooth with tropical fruit flavors",
      finish: "Smooth and lingering with vanilla"
    },
    producer: "Distell Group",
    pairings: ["Desserts", "Coffee", "Ice cream", "Chocolate"],
    reviews: [
      {
        id: 1,
        user: "Sarah L.",
        rating: 5,
        comment: "Absolutely delicious! Perfect with dessert.",
        date: "2024-01-14"
      }
    ]
  },
  {
    id: 4,
    name: "Jack Daniel's",
    type: "Whiskey",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 3500,
    subscriptionPrice: 3200,
    rating: 4.7,
    description: "Tennessee whiskey with distinctive charcoal mellowing process, creating America's favorite whiskey.",
    origin: "USA",
    abv: 40.0,
    tastingNotes: {
      aroma: "Vanilla and caramel with oak undertones",
      flavor: "Smooth vanilla with hints of spice and oak",
      finish: "Long and mellow with charcoal smoothness"
    },
    producer: "Jack Daniel Distillery",
    pairings: ["BBQ", "Dark chocolate", "Cigars"],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Classic American whiskey. Smooth and reliable.",
        date: "2024-01-13"
      }
    ]
  },
  {
    id: 5,
    name: "Heineken",
    type: "Beer",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop",
    price: 300,
    subscriptionPrice: 250,
    rating: 4.1,
    description: "International premium lager with balanced taste, brewed with the finest ingredients and a unique A-yeast.",
    origin: "Netherlands",
    abv: 5.0,
    tastingNotes: {
      aroma: "Light malt with floral hop notes",
      flavor: "Crisp and clean with mild bitterness",
      finish: "Clean and refreshing"
    },
    producer: "Heineken N.V.",
    pairings: ["Seafood", "Light salads", "Cheese"],
    reviews: [
      {
        id: 1,
        user: "Anna P.",
        rating: 4,
        comment: "Consistent quality, always refreshing.",
        date: "2024-01-11"
      }
    ]
  },
  {
    id: 6,
    name: "Four Cousins",
    type: "Wine",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=500&fit=crop",
    price: 1100,
    subscriptionPrice: 950,
    rating: 4.3,
    description: "Smooth South African wine with fruity notes, crafted from carefully selected grapes from the Western Cape.",
    origin: "South Africa",
    abv: 13.5,
    tastingNotes: {
      aroma: "Fresh berries with floral hints",
      flavor: "Smooth and fruity with balanced acidity",
      finish: "Medium with pleasant fruit lingering"
    },
    producer: "Van Loveren Family Vineyards",
    pairings: ["Pasta", "Poultry", "Soft cheeses"],
    reviews: [
      {
        id: 1,
        user: "Lisa T.",
        rating: 4,
        comment: "Great value wine with lovely fruit flavors.",
        date: "2024-01-09"
      }
    ]
  },
  {
    id: 7,
    name: "Smirnoff Vodka",
    type: "Vodka",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 1800,
    subscriptionPrice: 1600,
    rating: 4.4,
    description: "Premium vodka with clean, crisp taste, triple distilled and filtered for exceptional purity.",
    origin: "Russia",
    abv: 40.0,
    tastingNotes: {
      aroma: "Clean and neutral with subtle grain notes",
      flavor: "Smooth and clean with slight sweetness",
      finish: "Clean and warming"
    },
    producer: "Diageo",
    pairings: ["Cocktails", "Caviar", "Smoked fish"],
    reviews: [
      {
        id: 1,
        user: "Tom W.",
        rating: 4,
        comment: "Perfect for cocktails, very smooth.",
        date: "2024-01-08"
      }
    ]
  },
  {
    id: 8,
    name: "Jameson",
    type: "Whiskey",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 2800,
    subscriptionPrice: 2500,
    rating: 4.6,
    description: "Irish whiskey with smooth, balanced flavor, triple distilled for exceptional smoothness.",
    origin: "Ireland",
    abv: 40.0,
    tastingNotes: {
      aroma: "Light floral with pot still spices",
      flavor: "Perfect balance of spicy, nutty and vanilla notes",
      finish: "Smooth with light sherry sweetness"
    },
    producer: "Irish Distillers",
    pairings: ["Irish stew", "Dark chocolate", "Nuts"],
    reviews: [
      {
        id: 1,
        user: "Patrick O.",
        rating: 5,
        comment: "Excellent Irish whiskey, smooth and flavorful.",
        date: "2024-01-07"
      }
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return alcoholProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return alcoholProducts;
  return alcoholProducts.filter(product => product.type === category);
};
