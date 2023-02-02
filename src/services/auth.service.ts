import bcrypt from 'bcryptjs'
import JWTService from './jwt.service'
import Patient from '../model/patient.model'
import {
    JWTAuthPayload,
    Patient as PatientDoc,
    UserRoles
} from '../interfaces/user.interface'
import { Types } from 'mongoose'

class AuthService {
    private jwt: JWTService = new JWTService()

    private hashPassword = async (password: string) => {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        return hashedPassword
    }

    private savePatientRefreshToken = async (_id: Types.ObjectId, token: string) => {
        const patient = await Patient.findById(_id).exec()
        if (patient) {
            patient.refreshToken = token
            const saved = await patient.save()
            return saved
        } else {
            throw Error('User does not exist.')
        }
    }

    private issueTokens = async (_id: Types.ObjectId, role: string) => {
        const tokenPayload: JWTAuthPayload = {
            _id,
            role,
        }

        
        const accessToken = this.jwt.generateAccessToken(tokenPayload)
        const refreshToken = this.jwt.generateRefreshToken(tokenPayload)

        const saveToken =  await (async () => {
            if (role === UserRoles.PATIENT) {
                return await this.savePatientRefreshToken(_id, refreshToken)
            } else if (role === UserRoles.DOCTOR) {
                return false
            }
        })()



        if (saveToken) {
            return {
                accessToken,
                refreshToken,
            }
        } else {
            throw Error('Error while issuing token')
        }
    }



    createPatient = async (data: any) => {

        const {
            email,
            password,
            name,
            phone,
        } = data

        const patient = await Patient.findOne({email}).exec()

        if (patient) {
            console.log('Already Registered Please Login')
            throw Error('Already exists, login')
        } else {
            const hashedPassword = await this.hashPassword(password)

            if (hashedPassword) {
                const patientData: PatientDoc = {
                    password: hashedPassword,
                    email,
                    name,
                    phone,
                }
                const newPatient = new Patient({...patientData})
                const isCreated = await newPatient.save()
                if (isCreated) {
                    const tokens = await this.issueTokens(newPatient._id, UserRoles.PATIENT)
                    return {...tokens}
                } else {
                    throw Error('Error while creating a user')
                }
            } else {
                throw Error('Error while hashing the password')
            }
        }
    }

    authenticatePatient = async (data: any) => {
        const {
            email,
            password,
        } = data

        const patient = await Patient.findOne({email}).exec()

        if (!patient) {
            throw Error('No such user.')
        } else {
            const hash = patient.password

            const passwordMatch = await bcrypt.compare(password, hash)
            if (passwordMatch) {

                const tokens = await this.issueTokens(patient._id, UserRoles.PATIENT)
                return {...tokens}

            } else {
                throw Error('Wrong password')
            }
        }
    }

    createDoctor = async () => {

    }

    authenticateDoctor = async () => {

    }
}

export default AuthService