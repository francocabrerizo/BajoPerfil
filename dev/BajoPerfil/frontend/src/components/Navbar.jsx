import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nombre de la Tienda */}
        <a href="#" className="text-xl font-bold tracking-[0.2em] text-stone-900 uppercase hover:opacity-85 transition-opacity">
          Bajo Perfil
        </a>

        {/* Links de navegación sutiles (opcional, para realzar el aspecto profesional) */}
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-stone-600">
          <a href="#" className="hover:text-stone-900 transition-colors">Catalogo</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Contacto</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Nosotros</a>
        </div>

        {/* Ícono del Carrito */}
        <button 
          className="relative p-2 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-full transition-all duration-300 focus:outline-none"
          aria-label="Carrito de compras"
        >
          <ShoppingCart className="w-5 h-5 stroke-[1.5]" />
          {/* Pequeño indicador de carrito vacío / con ítems para darle realismo senior */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-stone-900 rounded-full"></span>
        </button>
      </div>
    </nav>
  )
}
