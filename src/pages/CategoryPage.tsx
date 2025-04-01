
import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">
        {category ? category.name : "Category"}
      </h1>
      
      {categoryProducts.length > 0 ? (
        <ProductGrid products={categoryProducts} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="text-muted-foreground">This category doesn't have any products yet.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
