import { Router } from 'express';
// import * as authController from '../controllers/auth.controller';
import * as authController from '../controllers/auth.controller';
const router = Router();

// Rutas para autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;