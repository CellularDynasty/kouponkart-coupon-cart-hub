
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AiRecommendationFilterProps {
  onFilterResults: (filteredCoupons: any[]) => void;
  allCoupons: any[];
}

const AiRecommendationFilter: React.FC<AiRecommendationFilterProps> = ({ onFilterResults, allCoupons }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAiRecommendation = () => {
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Simple keyword-based filtering for demo purposes
      // In a real implementation, this would call an AI service
      const keywords = query.toLowerCase().split(" ");
      
      const filteredCoupons = allCoupons.filter(coupon => {
        const matchesStore = coupon.store.toLowerCase().includes(query.toLowerCase());
        const matchesDiscount = coupon.discount.toLowerCase().includes(query.toLowerCase());
        const matchesTags = coupon.tags.some(tag => 
          keywords.some(keyword => tag.toLowerCase().includes(keyword))
        );
        
        return matchesStore || matchesDiscount || matchesTags;
      });
      
      onFilterResults(filteredCoupons);
      setIsLoading(false);
      
      toast({
        title: "AI Recommendations Ready",
        description: `Found ${filteredCoupons.length} deals matching your preferences`,
      });
    }, 1500);
  };

  return (
    <Card className="p-4 mb-6 bg-gradient-to-r from-primary-light/20 to-primary/20 border-none shadow-lg transform hover:scale-[1.01] transition-all duration-300">
      <h3 className="text-lg font-bold mb-3 flex items-center">
        <Bot className="mr-2 h-5 w-5 text-primary" />
        AI Deal Recommendations
      </h3>
      <p className="text-sm mb-4">
        Tell us what you're looking for, and our AI will recommend the best deals for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., tech deals, 20% off shoes, grocery discounts..."
            className="pr-10 shadow-sm bg-white/80"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <Button 
          onClick={handleAiRecommendation}
          disabled={!query.trim() || isLoading}
          className="bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          {isLoading ? "Finding Deals..." : "Get Recommendations"}
        </Button>
      </div>
    </Card>
  );
};

export default AiRecommendationFilter;
