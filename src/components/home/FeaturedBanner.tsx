
import React from 'react';
import { Button } from "@/components/ui/button";

const FeaturedBanner = () => {
  return (
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
            <img src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=300&fit=crop" alt="Premium spirits" className="h-32 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&h=300&fit=crop" alt="Subscription package" className="h-32 object-cover rounded-lg hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
