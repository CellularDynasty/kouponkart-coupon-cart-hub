
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import { motion } from "framer-motion";

const Subscriptions = () => {
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
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading mb-4">
            Upgrade Your Savings <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Subscribe to unlock premium deals, exclusive coupons, and early access to the best savings opportunities.
          </p>
        </div>
        
        <SubscriptionPlans />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold font-heading mb-6">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <h3 className="text-lg font-medium mb-2">How does billing work?</h3>
              <p className="text-gray-600">
                You'll be charged monthly based on your selected plan. You can cancel or change your subscription at any time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscriptions;
