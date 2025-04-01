
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/format";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  return (
    <div className={cn("product-card group", featured ? "col-span-2" : "")}>
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-muted-foreground">{formatCurrency(product.price)}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
