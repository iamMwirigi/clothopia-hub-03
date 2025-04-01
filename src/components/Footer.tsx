
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CLOTHOPIA</h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Your destination for modern, sustainable fashion that doesn't compromise on style.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground">All Products</Link></li>
              <li><Link to="/category/new-arrivals" className="text-primary-foreground/80 hover:text-primary-foreground">New Arrivals</Link></li>
              <li><Link to="/category/bestsellers" className="text-primary-foreground/80 hover:text-primary-foreground">Bestsellers</Link></li>
              <li><Link to="/category/sale" className="text-primary-foreground/80 hover:text-primary-foreground">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact Us</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">FAQ</Link></li>
              <li><Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-primary-foreground/80 hover:text-primary-foreground">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-primary-foreground/80 hover:text-primary-foreground">Sustainability</Link></li>
              <li><Link to="/stores" className="text-primary-foreground/80 hover:text-primary-foreground">Stores</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-sm text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Clothopia. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
