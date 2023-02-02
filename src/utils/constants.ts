import dotenv from 'dotenv'
dotenv.config({
	path: '.env'
})
const CONSTANTS = {
	JWT_secret: process.env.JWT_SECRET || '',
	JWT_expiry: process.env.JWT_EXPIRY_SECONDS || ``,
	R_secret: process.env.R_SECRET || '',
	R_public: process.env.R_PUBLIC || '',
	R_expiry: process.env.R_EXPIRY_SECONDS || ``,
	port: process.env.PORT || 3000,
	mongo_db_url: process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/',
}
export default CONSTANTS