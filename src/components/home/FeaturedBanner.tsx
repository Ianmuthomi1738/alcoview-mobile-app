
import React from 'react';
import { Button } from "@/components/ui/button";

const FeaturedBanner = () => {
  return (
    <div className="container mx-auto px-4 mt-6 mb-8">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden shadow-xl">
        {/* Mobile-first responsive layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Content Section */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 text-white">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
                Premium Subscription
              </h2>
              <p className="text-orange-100 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Get access to exclusive spirits, free delivery, and special discounts with our premium membership.
              </p>
              <Button className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Subscribe Now
              </Button>
            </div>
          </div>

          {/* Images Section */}
          <div className="flex-shrink-0 p-4 md:p-6 lg:p-8">
            <div className="flex justify-center lg:justify-end gap-3 md:gap-4">
              {/* Image 1 */}
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=400&fit=crop&auto=format" 
                  alt="Premium spirits collection" 
                  className="h-24 w-18 sm:h-32 sm:w-24 lg:h-40 lg:w-30 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop&auto=format";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Image 2 - Hidden on smallest screens */}
              <div className="relative group hidden xs:block">
                <img 
                  src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&h=400&fit=crop&auto=format" 
                  alt="Subscription package" 
                  className="h-24 w-18 sm:h-32 sm:w-24 lg:h-40 lg:w-30 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=400&fit=crop&auto=format";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Image 3 - Only visible on larger screens */}
              <div className="relative group hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop&auto=format" 
                  alt="Premium subscription benefits" 
                  className="h-24 w-18 sm:h-32 sm:w-24 lg:h-40 lg:w-30 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop&auto=format";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </div>

            {/* Mobile carousel indicators - optional */}
            <div className="flex justify-center mt-4 space-x-2 lg:hidden">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-red-400 to-orange-300"></div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
