
import React, { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { Product, alcoholProducts } from '@/data/products';

// Import our new components
import SearchHeader from './home/SearchHeader';
import CategoryFilter from './home/CategoryFilter';
import FeaturedBanner from './home/FeaturedBanner';
import ProductGrid from './home/ProductGrid';

interface HomePageProps {
  onProductSelect: (productId: number) => void;
  onLoginPrompt?: () => void;
  isLoggedIn?: boolean;
}

const HomePage = ({ onProductSelect, onLoginPrompt, isLoggedIn = true }: HomePageProps) => {
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
  };
  
  const handleProductClick = (product: Product) => {
    onProductSelect(product.id);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <SearchHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItems={cartItems}
      />
      
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <FeaturedBanner />
      
      <ProductGrid 
        title={activeCategory && activeCategory !== "All" ? activeCategory : "All Products"}
        products={filteredProducts}
        onProductClick={handleProductClick}
        addToCart={addToCart}
        isLoggedIn={isLoggedIn}
        onLoginPrompt={onLoginPrompt}
      />
    </div>
  );
};

export default HomePage;
