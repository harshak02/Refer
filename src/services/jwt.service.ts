import JWT from '../utils/jwt'

class JWTService extends JWT {

    verifyAndRefreshAuthToken(token: string) {
        const valid:any = this.verifyRefreshToken(token)
        if (valid.value) {
            const newToken = this.generateAccessToken({...valid.result})
            return newToken
        } else {

        }
    }
}

export default JWTService