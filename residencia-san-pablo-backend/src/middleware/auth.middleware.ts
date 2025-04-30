import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Interfaz extendida para incluir el usuario en el objeto Request
interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }
    
    const token = authHeader.split(' ')[1]; // Formato: "Bearer TOKEN"
    
    if (!token) {
      return res.status(401).json({ message: 'Formato de token inválido' });
    }
    
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    
    const user = await User.findByPk(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};