
import React from "react";
import CouponCard3D from "./CouponCard3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
      
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!showAll && (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Trending Deals
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Most popular coupons and discounts right now
              </motion.p>
            </div>
            <Link to="/deals">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="mt-4 md:mt-0 self-start md:self-center transition-all hover:shadow-md border-primary text-primary hover:bg-primary/10"
                >
                  View All Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </div>
        )}

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allCoupons.map((coupon, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <CouponCard3D key={index} {...coupon} />
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div 
            className="mt-12 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-primary/30 blur-2xl z-0"
              animate={{ 
                x: [0, 10, 0], 
                y: [0, 5, 0],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Today's Featured Deal
                </h3>
                <p className="text-gray-700 mb-0">
                  Get 50% off on all subscriptions at Spotify Premium
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary-dark text-white shadow-lg">
                  Get This Deal
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrendingDeals;
