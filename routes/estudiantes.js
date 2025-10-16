const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// GET / filtro estudiantes por curso
router.get('/', async (req, res) => {
  try {
    const { curso } = req.query;
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro);
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

// GET /estudiantes/:id
router.get('/:id', async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    if (!estudiante) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(estudiante);
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// POST /estudiantes
router.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear estudiante' });
  }
});

// PUT /estudiantes por ID
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  try {
    const Estudianteeliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!Estudianteeliminado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'ID incorrecto' });
  }
});

module.exports = router;