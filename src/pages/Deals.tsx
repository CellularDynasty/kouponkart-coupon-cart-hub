
import React from "react";
import Navbar from "@/components/Navbar";
import TrendingDeals from "@/components/TrendingDeals";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">All Deals</h1>
              <p className="text-gray-600">
                Browse all available coupons and discounts
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 md:mt-0 self-start md:self-center"
            >
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter Deals
            </Button>
          </div>

          {/* Featured Deals */}
          <TrendingDeals showAll={true} />

          {/* More deals would go here in a real application */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
