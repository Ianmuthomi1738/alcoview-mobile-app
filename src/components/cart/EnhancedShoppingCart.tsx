
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, X, Plus, Minus, Heart, Clock, MapPin } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  quantity: number;
  saved?: boolean;
}

interface EnhancedShoppingCartProps {
  onBack: () => void;
  onCheckout: () => void;
}

const EnhancedShoppingCart = ({ onBack, onCheckout }: EnhancedShoppingCartProps) => {
  const { toast } = useToast();
  
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Tusker Lager",
      type: "Beer",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200&h=200&fit=crop",
      price: 250,
      quantity: 6
    },
    {
      id: 4,
      name: "Jack Daniel's",
      type: "Whiskey",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=200&fit=crop",
      price: 3500,
      quantity: 1
    }
  ]);

  const [savedItems, setSavedItems] = useState<CartItem[]>([
    {
      id: 6,
      name: "Four Cousins",
      type: "Wine",
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&h=200&fit=crop",
      price: 1100,
      quantity: 1,
      saved: true
    }
  ]);
  
  const updateQuantity = (id: number, amount: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + amount);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };
  
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const saveForLater = (id: number) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setSavedItems([...savedItems, { ...item, saved: true, quantity: 1 }]);
      removeItem(id);
      toast({
        title: "Saved for later",
        description: "Item moved to saved items.",
      });
    }
  };

  const moveToCart = (id: number) => {
    const item = savedItems.find(item => item.id === id);
    if (item) {
      setItems([...items, { ...item, saved: false }]);
      setSavedItems(savedItems.filter(item => item.id !== id));
      toast({
        title: "Added to cart",
        description: "Item moved to cart.",
      });
    }
  };
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg shadow-sm px-4 py-3 border-b border-gray-200/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <button 
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
              <span>Continue Shopping</span>
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6 space-y-6">
        {/* Delivery Info */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-4 border border-white/20">
          <div className="flex items-center gap-3 text-green-600">
            <MapPin size={20} />
            <div>
              <p className="font-medium">Delivery to Nairobi CBD</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>30-45 mins • Ksh {deliveryFee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center border border-white/20">
            <div className="w-20 h-20 mx-auto mb-4 text-gray-300">
              <ShoppingCart size={80} />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some items to get started!</p>
            <Button 
              onClick={onBack}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20">
              <div className="p-6 border-b border-gray-200/50">
                <h2 className="text-xl font-semibold">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</h2>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="flex p-6 border-b border-gray-200/50 last:border-b-0">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => saveForLater(item.id)}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                          title="Save for later"
                        >
                          <Heart size={18} />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center py-1 bg-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Ksh {item.price}</p>
                        <p className="text-sm text-gray-500">Ksh {item.price * item.quantity} total</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved Items */}
            {savedItems.length > 0 && (
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20">
                <div className="p-6 border-b border-gray-200/50">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Heart size={20} className="text-orange-500" />
                    Saved for Later ({savedItems.length})
                  </h3>
                </div>
                
                {savedItems.map((item) => (
                  <div key={`saved-${item.id}`} className="flex p-6 border-b border-gray-200/50 last:border-b-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.type}</p>
                          <p className="text-sm font-medium mt-1">Ksh {item.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => moveToCart(item.id)}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xs"
                          >
                            Add to Cart
                          </Button>
                          <button 
                            onClick={() => setSavedItems(savedItems.filter(si => si.id !== item.id))}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Order Summary */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Ksh {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span>Ksh {deliveryFee}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Ksh {total}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={onCheckout}
              className="w-full py-6 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Proceed to Checkout (Ksh {total})
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EnhancedShoppingCart;
