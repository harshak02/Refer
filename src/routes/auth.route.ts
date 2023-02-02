import { Router } from "express"
import AuthController from "../controllers/auth.controller"
const router = Router()

const c = new AuthController()

router.post('/patient/login', c.patientLogin)

router.post('/patient/signup', c.patientSignup)

export default router