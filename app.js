const express = require('express');

const dotenv = require('dotenv');
const connectDB = require('./config/db');
const estudiantesRoutes = require('./routes/estudiantes');
const app = express();
import corsOptions from './config/corsOptions.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Bienvenida a la API de Gestión de Estudiantes');
});

app.use('/api', estudiantesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
}
