import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const accesData: mysql.ConnectionOptions = {
  user: 'root',
  host: 'localhost',
  database: 'BichoKillerz',
  password: '10111011',
  port: 3306,
  connectionLimit: 10,
  multipleStatements: true,
  queueLimit: 0,
}

const connection = mysql.createPool(accesData)

export default connection
