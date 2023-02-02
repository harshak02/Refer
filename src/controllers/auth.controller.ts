import { Request, Response } from 'express'
import AuthService from '../services/auth.service'

class AuthController {
    private service: AuthService = new AuthService()

    patientLogin = async (req: Request, res: Response) => {

        const {
            email,
            password,
        } = req.body

        const data = {
            email,
            password,
        }
    
        try {
            const tokens = await this.service.authenticatePatient(data)

            res.send({
                message: 'User logged in.',
                data: {...tokens}
            })
            
        } catch (err: any) {
            res.send({
                message: err.message,
                status: 400
            })
        }
    }

    patientSignup = async (req: Request, res: Response) => {
        const {
            email,
            phone,
            age,
            gender,
            password,
            name,
        } = req.body

        const data = {
            email,
            phone,
            age,
            gender,
            password,
            name,
        }

        try {
            const tokens = await this.service.createPatient(data)

            res.status(200).send({
                message: 'Authenticated user.',
                data: {
                    ...tokens
                }
            })
        } catch (err: any) {
            res.status(400).send({
                message: err.message,
            })
        }
    }

    doctorLogin = async (req: Request, res: Response) => {

    }
    
    doctorSignup = async (req: Request, res: Response) => {

    }
}

export default AuthController