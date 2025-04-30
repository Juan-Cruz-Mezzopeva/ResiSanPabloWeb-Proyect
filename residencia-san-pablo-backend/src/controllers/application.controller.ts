import { Request, Response } from 'express';
import Application from '../models/Application';

// Obtener todas las postulaciones
export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await Application.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(applications);
  } catch (error) {
    console.error('Error al obtener postulaciones:', error);
    res.status(500).json({ message: 'Error al obtener postulaciones' });
  }
};

// Obtener una postulación por ID
export const getApplicationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const application = await Application.findByPk(id);
    
    if (!application) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }
    
    res.status(200).json(application);
  } catch (error) {
    console.error('Error al obtener postulación:', error);
    res.status(500).json({ message: 'Error al obtener postulación' });
  }
};

// Crear nueva postulación
export const createApplication = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      birthDate,
      dni,
      email,
      phone,
      university,
      career,
      startYear,
      motivation,
      attachments
    } = req.body;
    
    const application = await Application.create({
      fullName,
      birthDate,
      dni,
      email,
      phone,
      university,
      career,
      startYear,
      motivation,
      attachments: attachments || null
    });
    
    res.status(201).json({
      message: 'Postulación recibida correctamente',
      application
    });
  } catch (error) {
    console.error('Error al crear postulación:', error);
    res.status(500).json({ message: 'Error al crear postulación' });
  }
};

// Actualizar estado de postulación
export const updateApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const application = await Application.findByPk(id);
    
    if (!application) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }
    
    await application.update({ status });
    
    res.status(200).json(application);
  } catch (error) {
    console.error('Error al actualizar estado de postulación:', error);
    res.status(500).json({ message: 'Error al actualizar estado de postulación' });
  }
};

// Eliminar postulación
export const deleteApplication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const application = await Application.findByPk(id);
    
    if (!application) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }
    
    await application.destroy();
    
    res.status(200).json({ message: 'Postulación eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar postulación:', error);
    res.status(500).json({ message: 'Error al eliminar postulación' });
  }
};