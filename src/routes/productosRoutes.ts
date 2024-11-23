import { Router } from 'express'
import { ObtenerProductos } from '../services/productService'

const router = Router()
const obtenerProductos = new ObtenerProductos()

router.get('/', async (_req, res) => {
  try {
    const products = await obtenerProductos.getAllProducts()
    res.json(products)
    console.log('Productos obtenidos')
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' })
    console.log('Error al obtener productos')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await obtenerProductos.getProductById(Number(req.params.id))
    if (product) {
      res.json(product)
      console.log('Producto obtenido')
    } else {
      res.status(404).json({ error: 'Producto no encontrado' })
      console.log('Producto no encontrado')
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' })
    console.log('Error al obtener producto')
  }
})

export default router