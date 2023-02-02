import mongoose, { ConnectOptions } from "mongoose"
import { dbOptions, mongoDbUrl } from "./db"

const options:ConnectOptions = {
    // ...dbOptions
}

const m = () => mongoose.connect(mongoDbUrl, options).then((val) => {
    console.log('connection opened to mongo')
})

export default m