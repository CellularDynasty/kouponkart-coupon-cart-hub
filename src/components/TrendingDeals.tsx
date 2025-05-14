
import React from "react";
import CouponCard from "./CouponCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingDealsProps {
  showAll?: boolean;
}

const TrendingDeals: React.FC<TrendingDealsProps> = ({ showAll = false }) => {
  const trendingCoupons = [
    {
      store: "Amazon",
      logo: "/logos/amazon.svg",
      discount: "20% OFF",
      code: "SAVE20",
      expiryDate: "May 30, 2025",
      tags: ["Tech", "Electronics"],
      isVerified: true,
      isExclusive: true,
    },
    {
      store: "Walmart",
      logo: "/logos/walmart.svg",
      discount: "$15 OFF $75+",
      code: "15OFFNOW",
      expiryDate: "Jun 15, 2025",
      tags: ["Groceries", "Home"],
      isVerified: true,
    },
    {
      store: "Nike",
      logo: "/logos/nike.svg",
      discount: "Free Shipping",
      code: "SHIPFREE",
      expiryDate: "May 25, 2025",
      tags: ["Apparel", "Shoes"],
      isVerified: true,
    },
    {
      store: "Best Buy",
      logo: "/logos/bestbuy.svg",
      discount: "$50 OFF $200+",
      code: "TECH50",
      expiryDate: "Jun 5, 2025",
      tags: ["Tech", "Gadgets"],
      isExclusive: true,
    },
  ];

  // Additional coupons for the full deals page
  const additionalCoupons = showAll ? [
    {
      store: "Target",
      logo: "/placeholder.svg",
      discount: "Buy 1 Get 1 Free",
      code: "BOGO2025",
      expiryDate: "Jun 30, 2025",
      tags: ["Home", "Groceries"],
      isVerified: true,
    },
    {
      store: "Apple",
      logo: "/placeholder.svg",
      discount: "10% OFF for Students",
      code: "STUDENT10",
      expiryDate: "Aug 15, 2025",
      tags: ["Tech", "Education"],
      isVerified: true,
      isExclusive: true,
    },
    {
      store: "Home Depot",
      logo: "/placeholder.svg",
      discount: "$25 OFF $100+",
      code: "DECOR25",
      expiryDate: "May 20, 2025",
      tags: ["Home", "DIY"],
      isVerified: true,
    },
    {
      store: "Adidas",
      logo: "/placeholder.svg",
      discount: "30% OFF Sale Items",
      code: "EXTRA30",
      expiryDate: "Jun 10, 2025",
      tags: ["Apparel", "Sports"],
      isExclusive: true,
    },
  ] : [];

  const allCoupons = showAll 
    ? [...trendingCoupons, ...additionalCoupons]
    : trendingCoupons;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Deals</h2>
              <p className="text-gray-600">
                Most popular coupons and discounts right now
              </p>
            </div>
            <Link to="/deals">
              <Button
                variant="outline"
                className="mt-4 md:mt-0 self-start md:self-center"
              >
                View All Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCoupons.map((coupon, index) => (
            <CouponCard key={index} {...coupon} />
          ))}
        </div>

        {!showAll && (
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
        )}
      </div>
    </section>
  );
};

export default TrendingDeals;
