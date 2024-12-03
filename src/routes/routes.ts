import { Router } from 'express'
import productosRoutes from './productosRoutes'
import serviciosRoutes from './serviciosRoutes'
import loginRoutes from './loginRoutes'

const router = Router()

// Prefijo /api/productos para todas las rutas de productos
router.use('/productos', productosRoutes)
router.use('/servicios', serviciosRoutes)
router.use('/login', loginRoutes)

export default router
