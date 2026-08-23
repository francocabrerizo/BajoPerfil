import products from '../data/products.json'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <section id="catalogo" className="bg-white py-16 md:py-24 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-stone-900 uppercase">
            Colección Esencial
          </h2>
          <p className="mt-3 text-stone-500 text-xs md:text-sm tracking-wider uppercase font-light">
            Selección exclusiva de prendas minimalistas
          </p>
        </div>

        {/* Grilla de productos: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
