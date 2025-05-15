
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const categoriesList = [
  { name: "Electronics", icon: "🖥️", dealCount: 87, isPopular: true },
  { name: "Fashion", icon: "👕", dealCount: 64, isPopular: true },
  { name: "Home & Garden", icon: "🏡", dealCount: 49, isPopular: false },
  { name: "Travel", icon: "✈️", dealCount: 38, isPopular: true },
  { name: "Food & Dining", icon: "🍔", dealCount: 45, isPopular: false },
  { name: "Health & Beauty", icon: "💄", dealCount: 56, isPopular: true },
  { name: "Sports & Outdoors", icon: "⚽", dealCount: 32, isPopular: false },
  { name: "Toys & Games", icon: "🎮", dealCount: 28, isPopular: false },
  { name: "Books & Media", icon: "📚", dealCount: 41, isPopular: false },
  { name: "Automotive", icon: "🚗", dealCount: 23, isPopular: false },
  { name: "Pet Supplies", icon: "🐾", dealCount: 19, isPopular: false },
  { name: "Office & School", icon: "📝", dealCount: 34, isPopular: false },
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Categories</h1>
            <p className="text-gray-600">
              Browse deals by category to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoriesList.map((category) => (
              <Link
                to={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={category.name}
              >
                <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="mb-4 text-4xl">{category.icon}</div>
                    <h3 className="font-bold text-xl mb-2 text-center">
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {category.dealCount} Deals
                      </Badge>
                      {category.isPopular && (
                        <Badge className="bg-primary text-white text-xs">
                          Popular
                        </Badge>
                      )}
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

export default Categories;
