
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <Link to="/" className="text-xl font-bold">CLOTHOPIA</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary/80">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary/80">
            Shop All
          </Link>
          {categories.slice(0, 4).map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.slug}`} 
              className="text-sm font-medium hover:text-primary/80"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <div className="fixed inset-0 top-16 z-50 bg-background animate-fade-in">
            <nav className="container flex flex-col space-y-4 py-6">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-primary/80"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-lg font-medium hover:text-primary/80"
                onClick={toggleMenu}
              >
                Shop All
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.slug}`} 
                  className="text-lg font-medium hover:text-primary/80"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex space-x-2 items-center">
                  <Input placeholder="Search..." className="bg-secondary" />
                  <Button size="icon" variant="ghost">
                    <Search size={20} />
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link to="/account">
              <User size={20} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
