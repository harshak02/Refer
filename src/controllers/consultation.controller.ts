import { Response } from 'express'
import ConsultationService from '../services/consultation.service'
import { AuthorisedRequest } from '../interfaces/request.interface';
import * as mongoose from "mongoose"
mongoose.set('strictQuery', true);
//changed any in this 
class ConsultationController {
    private service: ConsultationService = new ConsultationService()

    getAll = async (req: any, res: Response)=> {
      const doctorName = req.body.doctor;
      //the above one can be changed accordingly
      try {
        const consultations = await this.service.fetchConsultations({doctor : doctorName});
        console.log(consultations);
        res.status(200).send(consultations);
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
    }

    getById = async (req: any, res: Response)=> {
      try {
        const id = req.params.id;
        const consultation = await this.service.fetchConsultationById(id);
        if (!consultation) {
            res.status(404).send({
               message: "Consultation not found"
             });
        }
        res.status(200).send(consultation);
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
    }

    postCreate = async (req: any, res: any) =>{
      
      const{
        patient,
        appointmentFor,
        datetime,
        doctor
      } = req.body

      const data = {
        patient,
        appointmentFor,
        datetime,
        doctor
      }

      try {
        const consultations = await this.service.createConsultation(data)

        res.status(200).send({ message: "Consultation created successfully" });
      } catch (err:any){
        res.status(500).send({ message: err.message });
      }

    }
}

export default ConsultationController