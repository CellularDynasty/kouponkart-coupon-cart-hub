
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import { useToast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { toast } = useToast();
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    setCartCount(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart.",
    });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-heading font-bold text-2xl text-primary">
                Koupon<span className="text-primary-light">Kart</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/stores"
              className="text-gray-700 hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
            >
              Stores
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/deals"
              className="text-gray-700 hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
            >
              Trending
            </Link>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="font-medium"
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white font-medium"
                onClick={() => setIsSignUpOpen(true)}
              >
                Sign Up
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative ml-2"
                onClick={handleCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-6 space-y-3 animate-fade-in">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-light px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/stores"
              className="block text-gray-700 hover:text-primary-light px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Stores
            </Link>
            <Link
              to="/categories"
              className="block text-gray-700 hover:text-primary-light px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/deals"
              className="block text-gray-700 hover:text-primary-light px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full justify-center font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSignInOpen(true);
                }}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-center bg-primary hover:bg-primary-dark text-white font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSignUpOpen(true);
                }}
              >
                Sign Up
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 w-full justify-start font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleCartClick();
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({cartCount})</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Authentication Dialogs */}
      <SignInDialog 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
        onSignUpClick={() => setIsSignUpOpen(true)} 
      />
      <SignUpDialog 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignInClick={() => setIsSignInOpen(true)} 
      />
    </nav>
  );
};

export default Navbar;
