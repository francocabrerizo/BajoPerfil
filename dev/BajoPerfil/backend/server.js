const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Memoria temporal (Hasta que conectemos la base de datos real)
const products = [
  {
    id: 1,
    name: "Remera Oversize Heavyweight",
    price: 25000,
    description: "Algodón peinado 100%. Caída estructurada y cuello cerrado.",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
  }
  // Luego puedes pegar aquí el resto de tu JSON para probar
];

// Rutas de la API
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Servidor de Bajo Perfil corriendo en http://localhost:${PORT}`);
});