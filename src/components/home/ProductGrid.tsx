
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  addToCart: (product: Product) => void;
}

const ProductGrid = ({ title, products, onProductClick, addToCart }: ProductGridProps) => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
