import jwt, {
	Secret,
	JwtPayload,
	SignOptions,
	VerifyErrors
} from 'jsonwebtoken'
import { JWTAuthPayload } from '../interfaces/user.interface'
import CONSTANTS from './constants'

class JWT {
	options: SignOptions = {
		algorithm: 'RS256',
	}
	
	private generateToken(payload: Object, key: Secret, options: SignOptions | undefined) {
		return jwt.sign(
			payload,
			key,
			options
		)
	}

	private verifyToken(token: string, key: Secret, options: SignOptions) {
		return jwt.verify(
			token,
			key,
			options, 
			(err: any, decoded: any) => {
				if (err) {
					return {
						value: false,
						result: err
					}
				} else {
					return {
						value: true,
						result: decoded
					}
				}
			}
		)
	}

	generateAccessToken(payload: JWTAuthPayload) {
		const {
			JWT_secret,
			JWT_expiry
		} = CONSTANTS
		
		return this.generateToken(
			payload,
			JWT_secret,
			{
				...this.options,
				expiresIn: JWT_expiry,
			}
		)
	}

	generateRefreshToken(payload: JWTAuthPayload) {
		const {
			R_secret,
			R_expiry,
		} = CONSTANTS

		return this.generateToken(
			payload,
			R_secret,
			{
				...this.options, 
				expiresIn: R_expiry,
			}
		)
	}

	verifyAccessToken(token: string) {
		const {
			JWT_secret,
			JWT_expiry,
		} = CONSTANTS

		return this.verifyToken(
			token, 
			JWT_secret, 
			{
				...this.options,
				expiresIn: JWT_expiry,
			}
		)
	}

	verifyRefreshToken(token: string) {
		const {
			R_secret,
			R_expiry,
		} = CONSTANTS

		return this.verifyToken(
			token, 
			R_secret, 
			{
				...this.options,
				expiresIn: R_expiry,
			}
		)
	}
}
export default JWT
