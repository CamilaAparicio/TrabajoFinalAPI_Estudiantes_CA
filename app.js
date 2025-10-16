const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const estudiantesRoutes = require('./routes/estudiantes');
const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenida a la API de Gestión de Estudiantes');
});

app.use('/api', estudiantesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});