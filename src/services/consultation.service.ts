import  consultModel  from "../model/consultation.model";
import {Consultation} from "../interfaces/consultation.interface"
import * as mongoose from "mongoose"
mongoose.set('strictQuery', true);

class ConsultationService {
  fetchConsultationById = async(_id: string)=> {
    const consultation = await consultModel.findById(_id).exec()
    if(!consultation){
      throw Error("No consultation with the given ID.")
    }
    else{
      return consultation;
    }
    
  }
    
  fetchConsultations = async(filter: object)=> {
    try {
      const consultations = await consultModel.find(filter).exec();
      return consultations;
    } catch (error) {
      throw error;
    }
  }
    
  createConsultation= async(data: any)=> {
      
    const{ 
      patient,
      appointmentFor,
      datetime,
      doctor
    }=data

    const consultationData: Consultation = {
      patient,
      appointmentFor,
      datetime,
      doctor        
    }

    const newconsultation = new consultModel({...consultationData})
    const isCreated = await newconsultation.save()
    // down one is for testing purpose
    // consultModel.findOne({patient : "salmankhan"},function(err:any,foundList:any){
    //   if(err){
    //     console.log("err");
    //   }
    //   else{
    //     console.log(foundList._id);
    //   }
    // });
    if (isCreated) {
      return isCreated
    } else {
      throw Error('Error while creating a consultation')
    }
        
  }
}

export default ConsultationService