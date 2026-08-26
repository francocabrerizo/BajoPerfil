import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const totalItems = useCartStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  // Traemos la función para abrir el panel
  const openCart = useCartStore((state) => state.openCart);

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-xl tracking-widest uppercase text-stone-900">
              Bajo Perfil
            </a>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#catalogo" className="text-sm font-medium tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
              CATÁLOGO
            </a>
            <a href="#nosotros" className="text-sm font-medium tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
              NOSOTROS
            </a>
            <a href="#contacto" className="text-sm font-medium tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
              CONTACTO
            </a>
          </div>

          <div className="flex items-center">
            {/* AGREGAMOS EL ONCLICK AQUÍ */}
            <button onClick={openCart} className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-900 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}