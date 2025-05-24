
import React from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  addToCart: (product: Product) => void;
  isLoggedIn?: boolean;
  onLoginPrompt?: () => void;
}

const ProductGrid = ({ title, products, onProductClick, addToCart, isLoggedIn = true, onLoginPrompt }: ProductGridProps) => {
  return (
    <div className="container mx-auto px-4 pb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            addToCart={addToCart}
            isLoggedIn={isLoggedIn}
            onLoginPrompt={onLoginPrompt}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
