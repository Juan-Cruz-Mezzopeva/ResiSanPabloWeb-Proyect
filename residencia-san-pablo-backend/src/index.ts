import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';

// Rutas
import authRoutes from './routes/auth.routes';
import alumniRoutes from './routes/alumni.routes';
import applicationRoutes from './routes/application.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/alumni', alumniRoutes);
app.use('/api/applications', applicationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API Residencia Estudiantil funcionando correctamente' });
});

// Sincronizar modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada.');
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });