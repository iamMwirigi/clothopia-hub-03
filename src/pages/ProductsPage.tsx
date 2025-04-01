
import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  // Filter products based on search, category, and price
  useEffect(() => {
    let result = products;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategories, priceRange]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 200 });
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Search</h3>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.slug)}
                    onCheckedChange={() => toggleCategory(category.slug)}
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Price Range</h3>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                min="0"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                className="w-20"
              />
              <span>to</span>
              <Input
                type="number"
                min="0"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className="w-20"
              />
            </div>
          </div>
          
          <Button onClick={clearFilters} variant="outline" className="w-full">
            Clear Filters
          </Button>
        </div>
        
        {/* Products grid */}
        <div className="w-full lg:w-3/4">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters to find what you're looking for.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
