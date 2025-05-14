
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary-light/10 to-primary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Save More with{" "}
            <span className="text-primary">
              Koupon<span className="text-primary-light">Kart</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Discover the best deals, discount codes, and savings from thousands of
            stores in one place
          </p>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search for stores or brands..."
                  className="w-full h-12 pr-10 text-base"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-medium text-base">
                Find Deals
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Popular:</span>
              <a href="#" className="hover:text-primary-light underline">Amazon</a>
              <a href="#" className="hover:text-primary-light underline">Walmart</a>
              <a href="#" className="hover:text-primary-light underline">Target</a>
              <a href="#" className="hover:text-primary-light underline">Best Buy</a>
              <a href="#" className="hover:text-primary-light underline">Nike</a>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="text-sm font-medium text-gray-500 mb-3">TRUSTED BY OVER 10,000+ USERS</div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-gray-400 font-heading font-bold">COMPANY</div>
              <div className="text-gray-400 font-heading font-bold">BRAND</div>
              <div className="text-gray-400 font-heading font-bold">STARTUP</div>
              <div className="text-gray-400 font-heading font-bold">BUSINESS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
