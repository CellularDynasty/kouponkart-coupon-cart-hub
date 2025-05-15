
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendingDeals from "@/components/TrendingDeals";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
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
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <TrendingDeals />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
