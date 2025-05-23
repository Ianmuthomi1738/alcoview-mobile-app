import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, X, Plus, Minus } from 'lucide-react';
import { getProductById } from '../data/products';

interface CartItem {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  onBack: () => void;
  onCheckout: () => void;
}

const ShoppingCart = ({ onBack, onCheckout }: ShoppingCartProps) => {
  const { toast } = useToast();
  
  // Sample cart data using real product data
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
    },
    {
      id: 6,
      name: "Four Cousins",
      type: "Wine",
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&h=200&fit=crop",
      price: 1100,
      quantity: 2
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
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        variant: "destructive",
        title: "Cart is empty",
        description: "Please add items to your cart before checkout.",
      });
      return;
    }
    onCheckout();
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <button 
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Continue Shopping</span>
            </button>
            <h1 className="text-xl font-bold">Shopping Cart</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6">
        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 8H8.00488V6H21.7241C22.2764 6 22.7241 6.44772 22.7241 7C22.7241 7.08176 22.7141 7.16322 22.6942 7.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button 
              onClick={onBack}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</h2>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="flex p-6 border-b last:border-b-0">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
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
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center py-1">{item.quantity}</span>
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
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
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
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>Ksh {total}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="w-full py-6 text-lg bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Proceed to Checkout (Ksh {total})
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
