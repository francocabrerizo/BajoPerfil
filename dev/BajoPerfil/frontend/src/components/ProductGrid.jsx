import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import products from '../data/products.json';

export default function ProductGrid() {
  // Este estado guarda el producto que el usuario quiere ver en detalle
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            // Al hacer clic, guardamos este producto en el estado
            onClick={() => setSelectedProduct(product)} 
          />
        ))}
      </div>

      {/* Si hay un producto seleccionado, renderizamos el Modal. 
          Al cerrarlo, volvemos el estado a null */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
}