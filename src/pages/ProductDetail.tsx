
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency } from "@/utils/format";
import { ShoppingCart, Heart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize
    }, quantity);
  };
  
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-medium mt-2">{formatCurrency(product.price)}</p>
          </div>
          
          <p className="text-muted-foreground">
            {product.description}
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["small", "medium", "large", "x-large"].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-20"
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Heart size={20} />
              Wishlist
            </Button>
          </div>
          
          <div className="border-t pt-6 mt-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Material: Premium cotton blend</li>
              <li>Machine washable</li>
              <li>Ethically manufactured</li>
              <li>Imported</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
