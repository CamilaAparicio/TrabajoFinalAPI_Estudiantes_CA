const mongoose = require('mongoose');

const cursosValidos = ['Matemática', 'Historia', 'Ciencias', 'Arte'];

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Debes ingresar un email válido'],
    unique: true
  },
  cursos: {
    type: [String],
    enum: cursosValidos,
    required: true,
    validate: {
      validator: function (arr) {
        return arr.every(curso => cursosValidos.includes(curso));
      },
      message: 'Curso equivocado. Debe ser Matemática, Historia, Ciencias o Arte'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Estudiante', estudianteSchema);