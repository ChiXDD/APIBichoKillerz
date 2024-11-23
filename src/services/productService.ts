import connection from '../BD/connection'

export interface Product {
  id: number
  nombre: string
  descripcion: string
  precio: number
  stock: number
  imagen: string
}

export class ObtenerProductos {
  async getAllProducts(): Promise<Product[]> {
    try {
      const [rows] = await connection.execute('SELECT * FROM productos')
      return rows as Product[]
    } catch (error) {
      console.error('Error al obtener productos:', error)
      throw new Error('Error al obtener productos de la base de datos')
    }
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      const [rows] = await connection.execute(
        'SELECT * FROM productos WHERE id = ?',
        [id]
      )
      const products = rows as Product[]
      return products[0] || null
    } catch (error) {
      console.error('Error al obtener producto:', error)
      throw new Error('Error al obtener producto de la base de datos')
    }
  }
}
