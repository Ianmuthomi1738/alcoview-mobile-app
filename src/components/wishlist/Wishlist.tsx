
import React, { useState } from 'react';
import { Heart, ShoppingCart, X, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WishlistItem {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

interface WishlistProps {
  onBack: () => void;
}

const Wishlist = ({ onBack }: WishlistProps) => {
  const { toast } = useToast();
  
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Tusker Lager",
      type: "Beer",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200&h=200&fit=crop",
      price: 250,
      originalPrice: 300,
      inStock: true
    },
    {
      id: 4,
      name: "Jack Daniel's",
      type: "Whiskey", 
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=200&fit=crop",
      price: 3500,
      inStock: true
    },
    {
      id: 6,
      name: "Four Cousins Wine",
      type: "Wine",
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&h=200&fit=crop",
      price: 1100,
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const addToCart = (item: WishlistItem) => {
    if (!item.inStock) {
      toast({
        variant: "destructive",
        title: "Out of stock",
        description: "This item is currently unavailable.",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const shareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My AlcohNex Wishlist',
        text: 'Check out my wishlist on AlcohNex!',
        url: window.location.href,
      });
    } else {
      toast({
        title: "Wishlist shared",
        description: "Wishlist link copied to clipboard!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-lg shadow-sm px-4 py-6 border-b border-gray-200/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                <Heart size={28} className="text-pink-500" />
                My Wishlist
              </h1>
              <p className="text-gray-600">{wishlistItems.length} items saved for later</p>
            </div>
            <Button
              onClick={shareWishlist}
              variant="outline"
              size="sm"
            >
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6">
        {wishlistItems.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center border border-white/20">
            <Heart size={64} className="text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding items you love to keep track of them!</p>
            <Button 
              onClick={onBack}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors shadow-lg"
                  >
                    <X size={16} />
                  </button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  {item.originalPrice && item.originalPrice > item.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      SALE
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.type}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">Ksh {item.price}</span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">Ksh {item.originalPrice}</span>
                    )}
                  </div>
                  
                  <Button
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                    className={`w-full ${
                      item.inStock 
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600' 
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
