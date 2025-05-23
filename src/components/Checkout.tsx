
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, CreditCard, Phone } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
  onComplete: () => void;
}

const Checkout = ({ onBack, onComplete }: CheckoutProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  
  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed!",
      description: "Your order has been successfully placed.",
    });
    onComplete();
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <button 
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft size={20} />
              <span>Back to Cart</span>
            </button>
            <h1 className="text-xl font-bold">Checkout</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>

          {/* Delivery Tab */}
          <TabsContent value="delivery" className="mt-6 space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="e.g., +254712345678" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input id="address" placeholder="Enter your address" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="e.g., Nairobi" className="mt-1" />
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="county">County</Label>
                    <Input id="county" placeholder="e.g., Nairobi" className="mt-1" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" placeholder="e.g., 00100" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="instructions">Delivery Instructions (optional)</Label>
                  <textarea
                    id="instructions"
                    placeholder="Special instructions for delivery"
                    className="w-full mt-1 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              
              <Button 
                onClick={() => setActiveTab('payment')}
                className="mt-6 bg-orange-600 hover:bg-orange-700"
              >
                Continue to Payment
              </Button>
            </div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="mt-6 space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 border rounded-lg p-4 flex flex-col items-center ${
                      paymentMethod === 'card' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                    }`}
                  >
                    <CreditCard size={24} className={paymentMethod === 'card' ? 'text-orange-600' : 'text-gray-400'} />
                    <span className="mt-2 font-medium">Card</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`flex-1 border rounded-lg p-4 flex flex-col items-center ${
                      paymentMethod === 'mpesa' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                    }`}
                  >
                    <Phone size={24} className={paymentMethod === 'mpesa' ? 'text-orange-600' : 'text-gray-400'} />
                    <span className="mt-2 font-medium">M-Pesa</span>
                  </button>
                </div>
                
                {paymentMethod === 'card' ? (
                  <div className="space-y-4 mt-6">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="Enter the name on your card" className="mt-1" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 mt-6">
                    <div>
                      <Label htmlFor="mpesaNumber">M-Pesa Phone Number</Label>
                      <Input id="mpesaNumber" placeholder="e.g., 0712345678" className="mt-1" />
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      You will receive an STK push on your phone to complete the payment.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('delivery')}
                >
                  Back
                </Button>
                <Button 
                  onClick={() => setActiveTab('review')}
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                >
                  Continue to Review
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Review Tab */}
          <TabsContent value="review" className="mt-6 space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Items ({3})</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0">
                        <img src="https://placehold.co/100x100?text=Tusker" alt="Tusker" className="w-full h-full object-contain" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Tusker Lager</p>
                            <p className="text-sm text-gray-500">6 x Ksh 250</p>
                          </div>
                          <p className="font-medium">Ksh 1,500</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0">
                        <img src="https://placehold.co/100x100?text=Jack+Daniels" alt="Jack Daniel's" className="w-full h-full object-contain" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Jack Daniel's</p>
                            <p className="text-sm text-gray-500">1 x Ksh 3,500</p>
                          </div>
                          <p className="font-medium">Ksh 3,500</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0">
                        <img src="https://placehold.co/100x100?text=Four+Cousins" alt="Four Cousins" className="w-full h-full object-contain" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Four Cousins</p>
                            <p className="text-sm text-gray-500">2 x Ksh 1,100</p>
                          </div>
                          <p className="font-medium">Ksh 2,200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Delivery Address</h3>
                  <p className="text-gray-700">John Doe</p>
                  <p className="text-gray-700">123 Main Street, Westlands</p>
                  <p className="text-gray-700">Nairobi, 00100</p>
                  <p className="text-gray-700">+254712345678</p>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Payment Method</h3>
                  {paymentMethod === 'card' ? (
                    <div className="flex items-center">
                      <CreditCard size={20} className="text-gray-400 mr-2" />
                      <span>Visa ending in 4242</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Phone size={20} className="text-gray-400 mr-2" />
                      <span>M-Pesa - 0712345678</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Ksh 7,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>Ksh 200</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>Ksh 7,400</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('payment')}
                >
                  Back
                </Button>
                <Button 
                  onClick={handlePlaceOrder}
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Checkout;
