import { Request } from "express"
import { RequestUser } from "./user.interface"

interface AuthorisedRequest extends Request {
    params: any
    body: { patient: any; appointmentFor: any; datetime: any; doctor: any }
    user: RequestUser
}

export {
    AuthorisedRequest,
}