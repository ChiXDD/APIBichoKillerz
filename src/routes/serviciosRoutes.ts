import { Router } from 'express'
import { ObtenerServicios } from '../services/serviciosService'

const router = Router()
const obtenerServicios = new ObtenerServicios()

router.get('/', async (_req, res) => {
  try {
    const services = await obtenerServicios.getAllServices()
    res.json(services)
    console.log('Servicios obtenidos')
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios' })
    console.log('Error al obtener los servicios')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const service = await obtenerServicios.getServiceById(Number(req.params.id))
    if (service) {
      res.json(service)
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios' })
  }
})

export default router