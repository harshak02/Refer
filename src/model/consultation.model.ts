// class ConsultationModel {
//     _collection = 'Consultation'
//     id: String = ''
//     patient: String = ''
//     appointmentFor: Number = Number()
//     datetime: Number = Number()
//     doctor: String = ''
//     active: Boolean = Boolean()
// }

// export default ConsultationModel

import {
  Schema,
  model
} from 'mongoose'

import * as mongoose from "mongoose"
mongoose.set('strictQuery', true);

const ConsultationModel = new Schema({
  id: {
    type: String,
    required: false
  },
  patient: {
    type: String,
    required: true
  },
  appointmentFor: {
    type: Number,
    default: 0
  },
  datetime: {
    type: Number,
    default: 0
  },
  doctor: {
    type: String
  },
  active: {
    type: Boolean
  },
})

const consultModel = model('consultModel', ConsultationModel)
export default consultModel
