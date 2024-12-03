import express from 'express';
import { AuthController } from '../services/loginService';

const router = express.Router();
const authController = new AuthController();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    await authController.register(email, password);
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    await authController.login(email, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
});

export default router;
