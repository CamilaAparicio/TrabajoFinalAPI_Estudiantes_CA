const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');
const e = require('express');
  
//GET /obtener estudiantes, con filtro opcional por curso
router.get('/', async (req, res) => {
  try {
    const { curso } = req.query;
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro);
    if (curso) {
      estudiantes = await Estudiante.find({ curso });
    }else {
      estudiantes = await Estudiante.find();
    }
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

// POST /estudiantes
router.post('/estudiante', async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear estudiante' });
  }
});

// PUT /estudiantes por ID
router.put('/estudiante/:id', async (req, res) => {
  try {
    const Estudianteactualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!Estudianteactualizado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(Estudianteactualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar estudiante' });
  }
});

// DELETE /estudiantes por ID
router.delete('/estudiante/:id', async (req, res) => {
  try {
    const Estudianteeliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!Estudianteeliminado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'ID incorrecto' });
  }
});

module.exports = router;