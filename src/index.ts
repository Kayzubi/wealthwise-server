import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { toleranceRouter } from '../router/tolerance'
import dotenv from 'dotenv'

dotenv.config()

const mongodburl = process.env.MONGODB_URL
const port = Number(process.env.PORT) || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/tolerance', toleranceRouter)

mongoose.connect(mongodburl)

mongoose.connection.on('error', (error: Error) => console.log(error))

app.listen(port, '0.0.0.0', () => {
  console.log('Server running on http://localhost:8000')
})
