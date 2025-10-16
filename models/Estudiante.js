const mongoose = require('../config/db');

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Debes ingresar un nombre']
  },
  apellido: {
    type: String,
    required: [true, 'Debes ingresar un apellido']
  },
  email: {
    type: String,
    required: [true, 'Debes ingresar un email'],
    match: [/.+\@.+\..+/, 'Debes ingresar un email válido'],
    unique: true
  },
  curso: {
    type: String,
    enum: {
      values: ['Matemática', 'Historia', 'Ciencias', 'Arte'],
      message: 'Curso equivocado. Debe ser Matemática, Historia, Ciencias o Arte'
    },
    required: [true, 'Debes ingresar un curso']
  }
},
{ timestamps: true });

module.exports = mongoose.model('Estudiante', estudianteSchema);