import { Types } from 'mongoose'

interface RequestUser {
    user: {
        _id: String,
        role: String,
    }
}

interface JWTAuthPayload {
    _id: Types.ObjectId,
    role: String,
}

enum UserRoles {
    ADMIN = 'admin',
    DOCTOR = 'doctor',
    PATIENT = 'patient',
}

interface AuthorisedUser {
    refreshToken?: string
}

interface Patient extends AuthorisedUser {
    name: string,
    email: string,
    phone: string,
    password: string,
    dob?: Date,
    gender?: string,
    weight?: number,
    height?: number,
}

export {
    RequestUser,
    JWTAuthPayload,
    UserRoles,
    Patient,
}