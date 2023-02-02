// import { Router } from "express"
// import jwtMethods from '../utils/jwt'

// const refreshRouter = Router()

// refreshRouter.post('/', (req: any, res: any) => {
// 	const refreshToken = req.body.token
	
// 	const jwt_Instance = new jwtMethods()

// 	const result: any = jwt_Instance.verifyRefreshToken(refreshToken)

// 	if (result.value) {
// 		const accessToken = jwt_Instance.generateAccessToken({email: req.body.email})
// 		return res.status(200).json({accessToken: accessToken})

// 	} else {
// 		return res.status(400).json({message: 'Unauthorized'})
// 	}
// })
// export default refreshRouter
