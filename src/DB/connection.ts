import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const accesData: mysql.ConnectionOptions = {
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  connectionLimit: 10,
  multipleStatements: true,
  queueLimit: 0,
}

const connection = mysql.createPool(accesData)

export default connection
