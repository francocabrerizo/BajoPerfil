import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative">
      <Navbar />
      <Toaster position="bottom-right" />
      {/* Inyectamos el panel del carrito */}
      <CartDrawer />
      
      <main>
        <Hero />
        
        <section id="catalogo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-2">Colección 01</h2>
            <p className="text-sm text-stone-500 uppercase tracking-widest">Prendas esenciales</p>
          </div>
          <ProductGrid />
        </section>

        <section id="nosotros" className="py-32 px-4 bg-white flex items-center justify-center min-h-[60vh]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold tracking-widest uppercase mb-8">Nosotros</h2>
            <p className="text-stone-600 leading-relaxed">
              Bajo Perfil nace de la necesidad de volver a lo esencial. Creemos en prendas que no gritan, 
              sino que acompañan. Nuestra filosofía se basa en el minimalismo, la durabilidad y la 
              elegancia sin esfuerzo para el día a día.
            </p>
          </div>
        </section>

        <section id="contacto" className="py-32 px-4 bg-stone-900 text-stone-50 flex flex-col items-center justify-center min-h-[50vh]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold tracking-widest uppercase mb-8 text-white">Contacto</h2>
            <p className="text-stone-400 mb-8">¿Dudas sobre talles o envíos? Escríbenos.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm tracking-wider">
              <a href="mailto:hola@bajoperfil.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                hola@bajoperfil.com
              </a>
              <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                @bajoperfil
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-xs tracking-widest text-stone-600 bg-stone-900 border-t border-stone-800">
        <p>BP-026 // STOCK LIMITADO</p>
      </footer>
    </div>
  );
}

export default App;