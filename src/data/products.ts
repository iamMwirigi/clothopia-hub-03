
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 2329.99,
    category: "t-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Essential white t-shirt made from premium cotton for everyday comfort."
  },
  {
    id: 2,
    name: "Slim-Fit Black Jeans",
    price: 2059.99,
    category: "pants",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Modern slim-fit black jeans with stretchy comfort and classic style."
  },
  {
    id: 3,
    name: "Casual Denim Jacket",
    price: 1089.99,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Versatile denim jacket that pairs with almost any outfit."
  },
  {
    id: 4,
    name: "Summer Floral Dress",
    price: 1949.99,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Light and breezy floral dress perfect for summer days."
  },
  {
    id: 5,
    name: "Athletic Performance Hoodie",
    price: 1875.99,
    category: "activewear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Technical performance hoodie designed for workouts and casual wear."
  },
  {
    id: 6,
    name: "Wool Winter Coat",
    price: 3159.99,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium wool coat to keep you stylish and warm during winter months."
  },
  {
    id: 7,
    name: "Vintage Logo Sweatshirt",
    price: 3465.99,
    category: "sweatshirts",
    image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Comfortable sweatshirt with a retro logo design."
  },
  {
    id: 8,
    name: "Linen Summer Shirt",
    price: 8945.99,
    category: "shirts",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Breathable linen shirt ideal for hot summer days."
  }
];

export const categories = [
  { id: 1, name: "T-Shirts", slug: "t-shirts" },
  { id: 2, name: "Pants", slug: "pants" },
  { id: 3, name: "Outerwear", slug: "outerwear" },
  { id: 4, name: "Dresses", slug: "dresses" },
  { id: 5, name: "Activewear", slug: "activewear" },
  { id: 6, name: "Sweatshirts", slug: "sweatshirts" },
  { id: 7, name: "Shirts", slug: "shirts" }
];

export const featuredProducts = products.slice(0, 4);
