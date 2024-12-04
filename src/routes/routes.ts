import { Router } from 'express'
import productosRoutes from './productosRoutes'
import serviciosRoutes from './serviciosRoutes'

const router = Router()

// Prefijo /api/productos para todas las rutas de productos
router.use('/productos', productosRoutes)
router.use('/servicios', serviciosRoutes)

export default router
