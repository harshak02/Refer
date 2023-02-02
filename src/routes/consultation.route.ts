import { Router } from 'express'
import ConsultationController from '../controllers/consultation.controller'

const consultationRouter = Router()
const c = new ConsultationController()

consultationRouter.post('/all', c.getAll)

consultationRouter.get('/:id', c.getById)

consultationRouter.post('/', c.postCreate)

export default consultationRouter