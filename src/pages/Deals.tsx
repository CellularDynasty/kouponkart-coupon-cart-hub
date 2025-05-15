
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CouponCard from "@/components/CouponCard";
import Footer from "@/components/Footer";
import FilterDialog from "@/components/FilterDialog";
import AiRecommendationFilter from "@/components/AiRecommendationFilter";
import { motion } from "framer-motion";

// Extended coupon data
const allCoupons = [
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
  {
    store: "eBay",
    logo: "/placeholder.svg",
    discount: "15% OFF Refurbished Tech",
    code: "REFURB15",
    expiryDate: "Jul 5, 2025",
    tags: ["Tech", "Electronics"],
    isVerified: true,
  },
  {
    store: "Macy's",
    logo: "/placeholder.svg",
    discount: "$20 OFF $100+",
    code: "SAVE20NOW",
    expiryDate: "Jun 20, 2025",
    tags: ["Apparel", "Home"],
    isVerified: true,
  },
  {
    store: "Costco",
    logo: "/placeholder.svg",
    discount: "$50 OFF Annual Membership",
    code: "JOIN50",
    expiryDate: "Jul 15, 2025",
    tags: ["Membership", "Groceries"],
    isExclusive: true,
  },
  {
    store: "Kohl's",
    logo: "/placeholder.svg",
    discount: "25% OFF Entire Purchase",
    code: "BIGDEAL25",
    expiryDate: "May 25, 2025",
    tags: ["Apparel", "Home"],
    isVerified: true,
  },
];

const Deals = () => {
  const [displayedCoupons, setDisplayedCoupons] = useState(allCoupons);
  const [filterApplied, setFilterApplied] = useState(false);

  // Extract all stores and categories for filters
  const allStores = [...new Set(allCoupons.map((coupon) => coupon.store))];
  const allCategories = [
    ...new Set(allCoupons.flatMap((coupon) => coupon.tags)),
  ];

  const handleApplyFilters = (filters) => {
    const { stores, categories, exclusiveOnly, verifiedOnly } = filters;
    
    let filtered = [...allCoupons];
    
    // Filter by stores if any selected
    if (stores.length > 0) {
      filtered = filtered.filter((coupon) => stores.includes(coupon.store));
    }
    
    // Filter by categories if any selected
    if (categories.length > 0) {
      filtered = filtered.filter((coupon) =>
        coupon.tags.some((tag) => categories.includes(tag))
      );
    }
    
    // Filter by exclusive only
    if (exclusiveOnly) {
      filtered = filtered.filter((coupon) => coupon.isExclusive);
    }
    
    // Filter by verified only
    if (verifiedOnly) {
      filtered = filtered.filter((coupon) => coupon.isVerified);
    }
    
    setDisplayedCoupons(filtered);
    setFilterApplied(
      stores.length > 0 || categories.length > 0 || exclusiveOnly || verifiedOnly
    );
  };

  const handleFilterResults = (filteredCoupons) => {
    setDisplayedCoupons(filteredCoupons);
    setFilterApplied(true);
  };

  const resetFilters = () => {
    setDisplayedCoupons(allCoupons);
    setFilterApplied(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">All Deals</h1>
              <p className="text-gray-600">
                Browse all available coupons and discounts
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              {filterApplied && (
                <button
                  onClick={resetFilters}
                  className="text-primary hover:text-primary-dark transition-colors underline text-sm"
                >
                  Reset Filters
                </button>
              )}
              <FilterDialog
                onApplyFilters={handleApplyFilters}
                allStores={allStores}
                allCategories={allCategories}
              />
            </div>
          </div>

          {/* AI Recommendation Section */}
          <AiRecommendationFilter
            onFilterResults={handleFilterResults}
            allCoupons={allCoupons}
          />

          {/* Deals Grid with Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedCoupons.map((coupon, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="transform-gpu perspective-1000">
                  <div className="transform transition-all duration-300 hover:rotate-y-3 hover:rotate-x-3 hover:shadow-2xl">
                    <CouponCard {...coupon} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {displayedCoupons.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No matching deals found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
