const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// GET /estudiantes?curso=Arte
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
    const nuevo = new Estudiante(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /estudiantes/:id
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!actualizado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /estudiantes/:id
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

module.exports = router;