
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CouponCard3D from "@/components/CouponCard3D";
import Footer from "@/components/Footer";
import FilterDialog from "@/components/FilterDialog";
import AiRecommendationFilter from "@/components/AiRecommendationFilter";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrollY, setScrollY] = useState(0);

  // Extract all stores and categories for filters
  const allStores = [...new Set(allCoupons.map((coupon) => coupon.store))];
  const allCategories = [
    ...new Set(allCoupons.flatMap((coupon) => coupon.tags)),
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent -z-10"
        style={{ 
          clipPath: "ellipse(80% 55% at 50% 0%)",
        }}
      />
      
      <motion.div 
        className="absolute top-40 -left-32 w-64 h-64 rounded-full bg-primary-light/20 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-60 -right-32 w-64 h-64 rounded-full bg-primary/20 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <Navbar />
      <main className="flex-grow pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                All Deals
              </motion.h1>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Browse all available coupons and discounts
              </motion.p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              {filterApplied && (
                <motion.button
                  onClick={resetFilters}
                  className="text-primary hover:text-primary-dark transition-colors underline text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Filters
                </motion.button>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={displayedCoupons.length}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {displayedCoupons.map((coupon, index) => (
                <motion.div 
                  key={coupon.store + index} 
                  variants={itemVariants}
                  layout
                  className="h-full"
                >
                  <CouponCard3D {...coupon} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {displayedCoupons.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-medium mb-2">No matching deals found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
