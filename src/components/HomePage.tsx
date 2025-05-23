
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  subscriptionPrice: number;
}

const alcoholProducts: Product[] = [
  {
    id: 1,
    name: "Tusker Lager",
    type: "Beer",
    image: "https://placehold.co/400x500?text=Tusker",
    price: 250,
    subscriptionPrice: 200
  },
  {
    id: 2,
    name: "Kenya Cane",
    type: "Spirit",
    image: "https://placehold.co/400x500?text=Kenya+Cane",
    price: 1200,
    subscriptionPrice: 1000
  },
  {
    id: 3,
    name: "Amarula Cream",
    type: "Liqueur",
    image: "https://placehold.co/400x500?text=Amarula",
    price: 2500,
    subscriptionPrice: 2200
  },
  {
    id: 4,
    name: "Jack Daniel's",
    type: "Whiskey",
    image: "https://placehold.co/400x500?text=Jack+Daniels",
    price: 3500,
    subscriptionPrice: 3200
  },
  {
    id: 5,
    name: "Heineken",
    type: "Beer",
    image: "https://placehold.co/400x500?text=Heineken",
    price: 300,
    subscriptionPrice: 250
  },
  {
    id: 6,
    name: "Four Cousins",
    type: "Wine",
    image: "https://placehold.co/400x500?text=Four+Cousins",
    price: 1100,
    subscriptionPrice: 950
  },
  {
    id: 7,
    name: "Smirnoff Vodka",
    type: "Vodka",
    image: "https://placehold.co/400x500?text=Smirnoff",
    price: 1800,
    subscriptionPrice: 1600
  },
  {
    id: 8,
    name: "Jameson",
    type: "Whiskey",
    image: "https://placehold.co/400x500?text=Jameson",
    price: 2800,
    subscriptionPrice: 2500
  }
];

const HomePage = () => {
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
    // In a full implementation, this would navigate to the product detail page
    toast({
      title: product.name,
      description: `${product.type} - Click to view details`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search & Cart Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search brands, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button variant="outline" className="relative ml-2">
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
                className={activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
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
              <img src="https://placehold.co/200x300?text=Premium" alt="Premium spirits" className="h-32 object-contain rounded-lg" />
              <img src="https://placehold.co/200x300?text=Package" alt="Subscription package" className="h-32 object-contain rounded-lg hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          {activeCategory ? activeCategory : "All Products"}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div 
                className="h-48 sm:h-56 bg-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 
                  className="font-medium mb-1 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.type}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-bold">Ksh {product.price}</p>
                    <p className="text-xs text-gray-500 line-through">
                      Subscription: Ksh {product.subscriptionPrice}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => addToCart(product)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Help Button */}
      <div className="fixed bottom-6 right-6">
        <Button 
          className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 shadow-lg"
          onClick={() => toast({
            title: "Live Chat",
            description: "Chat support is coming soon!",
          })}
        >
          <HelpCircleIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

const HelpCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export default HomePage;
