import express, { Express } from 'express'
import swaggerUI from 'swagger-ui-express'

import mongoose from './utils/mongoose'

import swaggerOptions from './docs/swagger'

import keys from './utils/constants'


const app: Express = express()
const {port} = keys

app.use(express.json())

import AuthRouter from './routes/auth.route'
import ConsultationRouter from './routes/consultation.route'


app.use('/consultation', ConsultationRouter)
app.use('/auth', AuthRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerOptions))

app.listen(port, () => {
	mongoose()
	console.log(`Server is running at http://localhost:${port}`)
})