
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Star, Plus, Minus } from 'lucide-react';

interface ProductDetailProps {
  onBack: () => void;
  productId?: number;
}

const ProductDetail = ({ onBack, productId = 1 }: ProductDetailProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  // In a full implementation, this data would be fetched based on productId
  const product = {
    id: productId,
    name: "Jack Daniel's Tennessee Whiskey",
    type: "Whiskey",
    images: [
      "https://placehold.co/600x800?text=Jack+Daniels+1",
      "https://placehold.co/600x800?text=Jack+Daniels+2",
      "https://placehold.co/600x800?text=Jack+Daniels+3"
    ],
    price: 3500,
    subscriptionPrice: 3200,
    abv: "40%",
    origin: "United States",
    producer: "Jack Daniel Distillery",
    description: "Jack Daniel's Tennessee Whiskey is a premium whiskey known for its smooth, mellow character. It's made using the Lincoln County Process, which involves filtering the spirit through sugar maple charcoal before aging in handcrafted barrels.",
    tastingNotes: {
      aroma: "Sweet vanilla with hints of caramel and oak",
      flavor: "Smooth with touches of caramel, vanilla, and wood",
      finish: "Long, warming finish with notes of toasted oak and spice"
    },
    pairings: ["BBQ ribs", "Chocolate desserts", "Blue cheese"],
    rating: 4.7,
    reviewCount: 128
  };
  
  const [activeImage, setActiveImage] = useState(0);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: `Preparing your order of ${quantity} x ${product.name}.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto max-w-6xl">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Images */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded border-2 ${activeImage === index ? 'border-orange-500' : 'border-transparent'}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full md:w-1/2 p-6">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                  {product.type}
                </span>
              </div>
              
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill={star <= Math.round(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold">Ksh {product.price}</p>
                <p className="text-gray-500">
                  Subscription price: <span className="font-medium text-orange-600">Ksh {product.subscriptionPrice}</span>
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Product Details</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">ABV:</span> {product.abv}
                  </div>
                  <div>
                    <span className="text-gray-500">Origin:</span> {product.origin}
                  </div>
                  <div>
                    <span className="text-gray-500">Producer:</span> {product.producer}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Quantity</h2>
                <div className="flex items-center w-32 border rounded-md overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tasting Notes & Pairings */}
          <div className="border-t p-6">
            <h2 className="text-xl font-bold mb-4">Tasting Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Aroma</h3>
                <p className="text-gray-700">{product.tastingNotes.aroma}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Flavor</h3>
                <p className="text-gray-700">{product.tastingNotes.flavor}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Finish</h3>
                <p className="text-gray-700">{product.tastingNotes.finish}</p>
              </div>
            </div>
            
            <h2 className="text-xl font-bold mb-4">Recommended Pairings</h2>
            <div className="flex flex-wrap gap-2">
              {product.pairings.map((pairing, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                >
                  {pairing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
