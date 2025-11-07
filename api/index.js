const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const estudiantesRoutes = require('./routes/estudiantes');
const corsOptions = require('./config/corsOptions');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Bienvenida a la API de Gestión de Estudiantes');
});

app.use('/api', estudiantesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
module.exports = app;