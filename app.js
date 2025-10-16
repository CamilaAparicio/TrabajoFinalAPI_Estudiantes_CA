const express = require('express');
const app = express();
const estudiantesRouter = require('./routes/estudiantes');

app.use(express.json());
app.use('/estudiantes', estudiantesRouter);

app.get('/', (req, res) => {
  res.send('¡Hola Camila desde Express!');
});

app.listen(3000, () => {
  console.log('Servidor Express escuchando en http://localhost:3000');
});