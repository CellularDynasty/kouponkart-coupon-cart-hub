
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const storesList = [
  { name: "Amazon", logo: "/logos/amazon.svg", dealCount: 42, isPopular: true },
  { name: "Walmart", logo: "/logos/walmart.svg", dealCount: 38, isPopular: true },
  { name: "Nike", logo: "/logos/nike.svg", dealCount: 24, isPopular: true },
  { name: "Best Buy", logo: "/logos/bestbuy.svg", dealCount: 36, isPopular: true },
  { name: "Target", logo: "/placeholder.svg", dealCount: 29, isPopular: false },
  { name: "Apple", logo: "/placeholder.svg", dealCount: 18, isPopular: true },
  { name: "Home Depot", logo: "/placeholder.svg", dealCount: 22, isPopular: false },
  { name: "Adidas", logo: "/placeholder.svg", dealCount: 15, isPopular: false },
  { name: "eBay", logo: "/placeholder.svg", dealCount: 31, isPopular: true },
  { name: "Macy's", logo: "/placeholder.svg", dealCount: 27, isPopular: false },
  { name: "Costco", logo: "/placeholder.svg", dealCount: 19, isPopular: false },
  { name: "Kohl's", logo: "/placeholder.svg", dealCount: 24, isPopular: false },
];

const Stores = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Stores</h1>
            <p className="text-gray-600">
              Browse through our collection of stores with amazing deals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {storesList.map((store) => (
              <Link to={`/stores/${store.name.toLowerCase()}`} key={store.name}>
                <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white group">
                  <CardContent className="p-4">
                    <div className="mb-4 w-full h-20 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                      <AspectRatio ratio={1 / 1} className="w-full h-full">
                        <img
                          src={store.logo}
                          alt={`${store.name} logo`}
                          className="object-contain p-2 w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </AspectRatio>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm text-gray-600">
                          {store.dealCount} Deals
                        </span>
                        {store.isPopular && (
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stores;
