import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
      </main>
    </div>
  )
}

export default App
