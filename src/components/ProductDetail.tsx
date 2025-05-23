
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { getProductById } from '../data/products';

interface ProductDetailProps {
  productId?: number;
  onBack: () => void;
}

const ProductDetail = ({ productId, onBack }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  
  if (!productId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Product not found</h2>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }
  
  const product = getProductById(productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Product not found</h2>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };
  
  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-lg font-bold truncate mx-4">{product.name}</h1>
          <div className="w-16"></div>
        </div>
      </div>
      
      {/* Product Image */}
      <div className="bg-white">
        <div className="h-80 bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Product Info */}
      <div className="bg-white mt-2 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.type} • {product.origin}</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-1 text-gray-500">({product.reviews.length} reviews)</span>
              </div>
              <div className="ml-4 text-sm text-gray-600">
                {product.abv}% ABV
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold">Ksh {product.price}</p>
              <p className="text-lg text-gray-500 line-through">
                Subscription: Ksh {product.subscriptionPrice}
              </p>
            </div>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => updateQuantity(-1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center py-2 border-x">{quantity}</span>
              <button
                onClick={() => updateQuantity(1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <Button 
            onClick={addToCart}
            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-lg"
          >
            <ShoppingCart className="mr-2" />
            Add to Cart (Ksh {product.price * quantity})
          </Button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white mt-2">
        <div className="flex border-b">
          {['details', 'tasting', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 px-6 text-center font-medium capitalize ${
                activeTab === tab
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600'
              }`}
            >
              {tab === 'tasting' ? 'Tasting Notes' : tab}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Producer</h3>
                <p className="text-gray-700">{product.producer}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Perfect Pairings</h3>
                <div className="flex flex-wrap gap-2">
                  {product.pairings.map((pairing, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >
                      {pairing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'tasting' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Aroma</h3>
                <p className="text-gray-700">{product.tastingNotes.aroma}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flavor</h3>
                <p className="text-gray-700">{product.tastingNotes.flavor}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Finish</h3>
                <p className="text-gray-700">{product.tastingNotes.finish}</p>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex items-center ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
