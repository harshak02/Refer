
import { Request } from "express"
import { RequestUser } from "./user.interface"
import * as mongoose from "mongoose"
mongoose.set('strictQuery', true);


interface AuthorisedRequest extends Request {
    user: RequestUser
}

interface Consultation 
{
    patient : String,
    appointmentFor : Number,
    datetime: Number,
    doctor : String,
    active?:Boolean
}

export {
    AuthorisedRequest,
    Consultation
}