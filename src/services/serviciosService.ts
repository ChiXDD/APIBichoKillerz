import connection from '../BD/connection'

export interface Servicio {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
}

export class ObtenerServicios {
  async getAllServices(): Promise<Servicio[]> {
    try {
      const [rows] = await connection.execute('SELECT * FROM servicios')
      return rows as Servicio[]
    } catch (error) {
      console.error('Error al obtener los servicios:', error)
      throw new Error('Error al obtener los servicios de la base de datos')
    }
  }

  async getServiceById(id: number): Promise<Servicio | null> {
    try {
      const [rows] = await connection.execute(
        'SELECT * FROM servicios WHERE id = ?',
        [id]
      )
      const services = rows as Servicio[]
      return services[0] || null
    } catch (error) {
      console.error('Error al obtener los servicios:', error)
      throw new Error('Error al obtener los servicios de la base de datos')
    }
  }
}
