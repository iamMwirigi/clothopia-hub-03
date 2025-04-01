
import React from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import { featuredProducts, categories } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button asChild variant="outline">
              <Link to="/products">View All</Link>
            </Button>
          </div>
          <ProductGrid products={featuredProducts} featured />
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.slug}`}
                className="relative block bg-white overflow-hidden rounded-md shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-square bg-muted"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SubscriptionBanner />
    </div>
  );
};

export default Index;
