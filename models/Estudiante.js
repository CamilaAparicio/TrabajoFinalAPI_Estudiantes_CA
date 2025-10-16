const mongoose = require('mongoose');

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
    enum: {
      values: ['Matemática', 'Historia', 'Ciencias', 'Arte'],
      message: 'Curso equivocado. Debe ser Matemática, Historia, Ciencias o Arte'
    },
    required: true
  }
},
{ timestamps: true });

module.exports = mongoose.model('Estudiante', estudianteSchema);