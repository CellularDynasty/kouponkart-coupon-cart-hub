
import React from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Store, 
  CreditCard, 
  Package, 
  Gift, 
  Tag 
} from "lucide-react";

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  path: string;
}

const Category: React.FC<CategoryProps> = ({ icon, title, count, path }) => {
  return (
    <Link 
      to={path}
      className="card-hover group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="h-14 w-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-4 group-hover:bg-primary-light/20 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-heading font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{count} offers</p>
    </Link>
  );
};

const CategorySection: React.FC = () => {
  const categories = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Online Shopping",
      count: 2154,
      path: "/categories/shopping",
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Food & Dining",
      count: 852,
      path: "/categories/food",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Travel & Hotels",
      count: 642,
      path: "/categories/travel",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Electronics",
      count: 522,
      path: "/categories/electronics",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Beauty & Health",
      count: 424,
      path: "/categories/beauty",
    },
    {
      icon: <Tag className="h-6 w-6" />,
      title: "Entertainment",
      count: 321,
      path: "/categories/entertainment",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the best deals and coupons for your favorite categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
