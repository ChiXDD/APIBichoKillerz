import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.APP_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(express.json())
app.use('/', routes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
