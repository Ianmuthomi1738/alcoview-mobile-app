
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  addToCart: (product: Product) => void;
  isLoggedIn?: boolean;
  onLoginPrompt?: () => void;
}

const ProductCard = ({ product, onProductClick, addToCart, isLoggedIn = true, onLoginPrompt }: ProductCardProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isLoggedIn) {
      onLoginPrompt?.();
      return;
    }

    setIsInWishlist(!isInWishlist);
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isInWishlist ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-105 relative">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <Heart 
          size={20} 
          className={`transition-all duration-200 ${
            isInWishlist 
              ? 'text-pink-500 fill-pink-500' 
              : 'text-gray-400 hover:text-pink-500'
          }`}
        />
      </button>

      <div 
        className="h-48 sm:h-56 bg-gray-100 cursor-pointer overflow-hidden"
        onClick={() => onProductClick(product)}
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
          onClick={() => onProductClick(product)}
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
            onClick={handleAddToCart}
            className="bg-orange-600 hover:bg-orange-700 h-8 px-3"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
