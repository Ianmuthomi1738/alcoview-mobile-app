
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface Product {
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
}

const alcoholProducts: Product[] = [
  {
    id: 1,
    name: "Tusker Lager",
    type: "Beer",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop",
    price: 250,
    subscriptionPrice: 200,
    rating: 4.2,
    description: "Kenya's premium lager beer with a crisp, refreshing taste.",
    origin: "Kenya",
    abv: 4.2
  },
  {
    id: 2,
    name: "Kenya Cane",
    type: "Spirit",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 1200,
    subscriptionPrice: 1000,
    rating: 4.0,
    description: "Premium Kenyan cane spirit with smooth finish.",
    origin: "Kenya",
    abv: 40.0
  },
  {
    id: 3,
    name: "Amarula Cream",
    type: "Liqueur",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&h=500&fit=crop",
    price: 2500,
    subscriptionPrice: 2200,
    rating: 4.5,
    description: "Rich cream liqueur made from African marula fruit.",
    origin: "South Africa",
    abv: 17.0
  },
  {
    id: 4,
    name: "Jack Daniel's",
    type: "Whiskey",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 3500,
    subscriptionPrice: 3200,
    rating: 4.7,
    description: "Tennessee whiskey with distinctive charcoal mellowing.",
    origin: "USA",
    abv: 40.0
  },
  {
    id: 5,
    name: "Heineken",
    type: "Beer",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop",
    price: 300,
    subscriptionPrice: 250,
    rating: 4.1,
    description: "International premium lager with balanced taste.",
    origin: "Netherlands",
    abv: 5.0
  },
  {
    id: 6,
    name: "Four Cousins",
    type: "Wine",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=500&fit=crop",
    price: 1100,
    subscriptionPrice: 950,
    rating: 4.3,
    description: "Smooth South African wine with fruity notes.",
    origin: "South Africa",
    abv: 13.5
  },
  {
    id: 7,
    name: "Smirnoff Vodka",
    type: "Vodka",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 1800,
    subscriptionPrice: 1600,
    rating: 4.4,
    description: "Premium vodka with clean, crisp taste.",
    origin: "Russia",
    abv: 40.0
  },
  {
    id: 8,
    name: "Jameson",
    type: "Whiskey",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=500&fit=crop",
    price: 2800,
    subscriptionPrice: 2500,
    rating: 4.6,
    description: "Irish whiskey with smooth, balanced flavor.",
    origin: "Ireland",
    abv: 40.0
  }
];

interface HomePageProps {
  onProductSelect: (productId: number) => void;
}

const HomePage = ({ onProductSelect }: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  const categories = ["All", ...new Set(alcoholProducts.map(product => product.type))];
  
  const filteredProducts = alcoholProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || activeCategory === "All" || product.type === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleProductClick = (product: Product) => {
    onProductSelect(product.id);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Search & Cart Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search brands, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          <Button variant="outline" className="relative ml-2 h-12">
            <ShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="container mx-auto max-w-6xl px-4 mt-6">
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`h-10 whitespace-nowrap ${activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Banner */}
      <div className="container mx-auto max-w-6xl px-4 mt-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Premium Subscription</h2>
              <p className="mb-4">Get access to exclusive spirits, free delivery, and special discounts.</p>
              <Button className="bg-white text-orange-600 hover:bg-gray-100">
                Subscribe Now
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=300&fit=crop" alt="Premium spirits" className="h-32 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&h=300&fit=crop" alt="Subscription package" className="h-32 object-cover rounded-lg hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          {activeCategory && activeCategory !== "All" ? activeCategory : "All Products"}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <div 
                className="h-48 sm:h-56 bg-gray-100 cursor-pointer overflow-hidden"
                onClick={() => handleProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 
                  className="font-medium mb-1 cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{product.type}</p>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({product.origin})</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-bold text-lg">Ksh {product.price}</p>
                    <p className="text-xs text-gray-500 line-through">
                      Sub: Ksh {product.subscriptionPrice}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => addToCart(product)}
                    className="bg-orange-600 hover:bg-orange-700 h-8 px-3"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
