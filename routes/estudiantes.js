const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// Validación de ID de MongoDB
const isValidObjectId = id => /^[0-9a-fA-F]{24}$/.test(id);
  
//GET: obtener estudiantes, con filtro opcional por curso
router.get('/', async (req, res) => {
  const { curso } = req.query;
  
  try {
    if(curso && typeof curso !== 'string'){
      return res.status(400).json({ error: 'El curso debe ser un texto válido' });
    }
    
    // Verificar si el curso es válido según el enum del modelo
    if (curso && !['Matemática', 'Historia', 'Ciencias', 'Arte'].includes(curso)) {
      return res.status(400).json({ 
        error: 'Curso inválido. Debe ser: Matemática, Historia, Ciencias o Arte'
      });
    }

    const filtro = curso ? { curso: curso } : {};

    const estudiantes = await Estudiante.find(filtro).select('nombre apellido email curso');
    res.json(estudiantes);
  } catch (err) {
    console.error('Error en GET /estudiantes:', err);
    res.status(500).json({ 
      error: 'Error al obtener estudiantes',
      mensaje: err.message 
    });
  }
});

//Get: obtener estudiante por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'ID de estudiante inválido' });
  }

  try {
    const estudiante = await Estudiante.findById(id);
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  } catch (err) {
    console.error('Error en GET /estudiantes/:id:', err);
    res.status(500).json({ 
      error: 'Error al obtener estudiante',
      mensaje: err.message 
    });
  }
});

// POST: crear un nuevo estudiante
router.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (err) {
    console.error('Error en POST /estudiantes:', err);
    res.status(400).json({ 
      error: 'Error al crear estudiante',
      mensaje: err.message 
    });
  }
});

// PUT: Actualizar estudiante por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'ID de estudiante inválido' });
  }

  try {
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!estudianteActualizado) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    
    res.json(estudianteActualizado);
  } catch (err) {
    console.error('Error en PUT /estudiantes/:id:', err);
    res.status(400).json({ 
      error: 'Error al actualizar estudiante',
      mensaje: err.message 
    });
  }
});

// DELETE: eliminar estudiante por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'ID de estudiante inválido' });
  }

  try {
    const estudianteEliminado = await Estudiante.findByIdAndDelete(id);
    if (!estudianteEliminado) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Error en DELETE /estudiantes/:id:', err);
    res.status(400).json({ 
      error: 'Error al eliminar estudiante',
      mensaje: err.message 
    });
  }
});

module.exports = router;