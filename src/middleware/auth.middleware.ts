import { RequestHandler, Response } from "express"
import { AuthorisedRequest } from "../interfaces/request.interface"

class AuthMiddleware {
    private static exceptPaths: string[] = []

    authenticate(req: AuthorisedRequest, res: Response, next: RequestHandler) {

    }
}