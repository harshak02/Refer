import { Model, Schema, model } from 'mongoose'
import { Patient } from '../interfaces/user.interface'

const {
    String,
    Number,
    Date,
} = Schema.Types

const patientSchema: Schema = new Schema<Patient>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    refreshToken: {
        type: String,
        default: null
    }
})

const PatientModel = model<Patient>('Patient', patientSchema)

export {
    patientSchema,
    PatientModel,
}

export default PatientModel