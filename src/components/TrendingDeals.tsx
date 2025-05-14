
import React from "react";
import CouponCard from "./CouponCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TrendingDeals: React.FC = () => {
  const trendingCoupons = [
    {
      store: "Amazon",
      logo: "/placeholder.svg",
      discount: "20% OFF",
      code: "SAVE20",
      expiryDate: "May 30, 2025",
      tags: ["Tech", "Electronics"],
      isVerified: true,
      isExclusive: true,
    },
    {
      store: "Walmart",
      logo: "/placeholder.svg",
      discount: "$15 OFF $75+",
      code: "15OFFNOW",
      expiryDate: "Jun 15, 2025",
      tags: ["Groceries", "Home"],
      isVerified: true,
    },
    {
      store: "Nike",
      logo: "/placeholder.svg",
      discount: "Free Shipping",
      code: "SHIPFREE",
      expiryDate: "May 25, 2025",
      tags: ["Apparel", "Shoes"],
      isVerified: true,
    },
    {
      store: "Best Buy",
      logo: "/placeholder.svg",
      discount: "$50 OFF $200+",
      code: "TECH50",
      expiryDate: "Jun 5, 2025",
      tags: ["Tech", "Gadgets"],
      isExclusive: true,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Deals</h2>
            <p className="text-gray-600">
              Most popular coupons and discounts right now
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 self-start md:self-center"
          >
            View All Deals
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCoupons.map((coupon, index) => (
            <CouponCard key={index} {...coupon} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Today's Featured Deal
              </h3>
              <p className="text-gray-700 mb-0">
                Get 50% off on all subscriptions at Spotify Premium
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Get This Deal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDeals;
