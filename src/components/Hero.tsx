
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="h-[500px] w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative h-full flex flex-col justify-center items-start text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">New Season Arrivals</h1>
          <p className="text-lg md:text-xl max-w-md">Discover the latest trends and styles for the new season.</p>
          <div className="flex space-x-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Link to="/category/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
