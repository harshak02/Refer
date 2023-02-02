import {
    MongoClient
} from 'mongodb'

import C from './constants'

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const dbName = 'semwell-MediU'
const mongoDbUrl = C.mongo_db_url + dbName

class DB {
    options: any = dbOptions
    private url: string = ''
    // private dbName: string = 'semwell-MediU'
    private m: MongoClient = new MongoClient(this.url, this.options)

    async use(_collection: string) {
        return this.m.connect()
            .then((c) => 
                c.db(dbName)
                .collection(_collection)
            )
            .catch((e) => {
                throw Error(e)
            })
    }
}

export {
    dbOptions,
    mongoDbUrl
}

export default DB
