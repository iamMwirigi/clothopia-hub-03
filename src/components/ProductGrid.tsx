
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/contexts/CartContext";

interface ProductGridProps {
  products: Product[];
  featured?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, featured = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} featured={featured && product.id === 1} />
      ))}
    </div>
  );
};

export default ProductGrid;
