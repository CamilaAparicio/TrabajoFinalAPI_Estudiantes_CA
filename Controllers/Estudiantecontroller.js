export const eliminarEstudiante = async (req, res) => {
  const id = req.method === 'DELETE' ? req.query.id : null;
  if (!id) return res.status(400).json({ error: 'ID requerido' });

  try {
    await Estudiante.findByIdAndDelete(id);
    res.status(200).json({ mensaje: `Estudiante ${id} eliminado` });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar estudiante' });
  }
};
