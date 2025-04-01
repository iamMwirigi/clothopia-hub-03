
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { X, Trash2, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const shippingFee = cartTotal > 100 ? 0 : 10;
  const totalWithShipping = cartTotal + shippingFee;
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Looks like you haven't added anything to your cart yet. Browse our collections to find something you'll love.
        </p>
        <Button size="lg" onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border shadow-sm">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row p-4 gap-4 border-b last:border-0">
                <div className="w-full sm:w-24 h-24 bg-muted rounded overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <Link 
                      to={`/product/${item.id}`}
                      className="text-lg font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X size={18} />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.size && `Size: ${item.size.charAt(0).toUpperCase() + item.size.slice(1)}`}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    
                    <div className="font-medium">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={clearCart}
          >
            <Trash2 size={16} />
            Clear Cart
          </Button>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shippingFee === 0 
                    ? 'Free'
                    : formatCurrency(shippingFee)}
                </span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatCurrency(totalWithShipping)}</span>
              </div>
              
              <p className="text-xs text-muted-foreground">
                {cartTotal < 100 
                  ? `Add ${formatCurrency(100 - cartTotal)} more to qualify for free shipping`
                  : 'You qualify for free shipping!'}
              </p>
              
              <Button size="lg" className="w-full gap-2">
                Checkout
                <ArrowRight size={16} />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By checking out, you agree to our
                <Link to="/terms" className="underline mx-1">
                  Terms of Service
                </Link>
                and
                <Link to="/privacy" className="underline mx-1">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
