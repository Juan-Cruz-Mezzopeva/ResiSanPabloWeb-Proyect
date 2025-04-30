import { Request, Response } from 'express';
import Alumni from '../models/Alumni';


// Obtener todos los ex-alumnos
export const getAllAlumni = async (req: Request, res: Response) => {
  try {
    const alumni = await Alumni.findAll({
      order: [['graduationYear', 'DESC']]
    });
    res.status(200).json(alumni);
  } catch (error) {
    console.error('Error al obtener ex-alumnos:', error);
    res.status(500).json({ message: 'Error al obtener ex-alumnos' });
  }
};

// Obtener un ex-alumno por ID
export const getAlumniById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const alumni = await Alumni.findByPk(id);
    
    if (!alumni) {
      return res.status(404).json({ message: 'Ex-alumno no encontrado' });
    }
    
    res.status(200).json(alumni);
  } catch (error) {
    console.error('Error al obtener ex-alumno:', error);
    res.status(500).json({ message: 'Error al obtener ex-alumno' });
  }
};

// Crear nuevo ex-alumno
export const createAlumni = async (req: Request, res: Response) => {
  try {
    const { name, photo, description, graduationYear, career } = req.body;
    
    const alumni = await Alumni.create({
      name,
      photo,
      description,
      graduationYear,
      career
    });
    
    res.status(201).json(alumni);
  } catch (error) {
    console.error('Error al crear ex-alumno:', error);
    res.status(500).json({ message: 'Error al crear ex-alumno' });
  }
};

// Actualizar ex-alumno
export const updateAlumni = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, photo, description, graduationYear, career } = req.body;
    
    const alumni = await Alumni.findByPk(id);
    
    if (!alumni) {
      return res.status(404).json({ message: 'Ex-alumno no encontrado' });
    }
    
    await alumni.update({
      name,
      photo,
      description,
      graduationYear,
      career
    });
    
    res.status(200).json(alumni);
  } catch (error) {
    console.error('Error al actualizar ex-alumno:', error);
    res.status(500).json({ message: 'Error al actualizar ex-alumno' });
  }
};

// Eliminar ex-alumno
export const deleteAlumni = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const alumni = await Alumni.findByPk(id);
    
    if (!alumni) {
      return res.status(404).json({ message: 'Ex-alumno no encontrado' });
    }
    
    await alumni.destroy();
    
    res.status(200).json({ message: 'Ex-alumno eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar ex-alumno:', error);
    res.status(500).json({ message: 'Error al eliminar ex-alumno' });
  }
};