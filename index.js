import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { mongo } from './src/db.js'
import rotas from './routes/rotas.js'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json' with { type: 'json' }
const app = express()

app.use(express.json())
mongo ()
app.use(rotas)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export default app