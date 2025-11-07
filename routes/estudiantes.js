const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');
  
//GET: obtener estudiantes, con filtro opcional por curso
router.get('/api/estudiantes', async (req, res) => {
  const { curso } = req.query;

  try {
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro).select('nombre apellido email cursos');
    res.json(estudiantes);
  } catch (err) {
    console.error('Error en GET /estudiantes:', err);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

//Get: obtener estudiantes por ID
router.get('api/estudantes/:id', async (req, res) => {
  try {
    const estudiantes = await Estudiante.findById(req.params.id);
    if (!estudiantes) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiante' });
  }
});

// POST: crear un nuevo estudiante
router.post('/api/estudiantes', async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear estudiante' });
  }
});

// PUT: Actualizar estudiantes por ID
router.put('/api/estudiantes/:id', async (req, res) => {
  try {
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!estudianteActualizado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(estudianteActualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar estudiante' });
  }
});

// DELETE: eliminar estudiantes por ID
router.delete('api/estudiantes/:id', async (req, res) => {
  try {
    const estudianteEliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!estudianteEliminado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'ID incorrecto' });
  }
});

module.exports = router;