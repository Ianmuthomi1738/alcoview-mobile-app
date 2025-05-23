
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from 'lucide-react';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItems: any[];
}

const SearchHeader = ({ searchQuery, setSearchQuery, cartItems }: SearchHeaderProps) => {
  return (
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
  );
};

export default SearchHeader;
