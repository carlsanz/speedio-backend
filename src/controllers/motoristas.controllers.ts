import { Request, Response } from "express";
import { motoristaSchema } from "../models/motoristas.schema";
//Obtener administradores
export const obtenerMotoristas =(req:Request, res:Response)=> {
    motoristaSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}

export const obtenerMotorista =(req:Request, res:Response) => {
    motoristaSchema.find({_id:req.params._id})
    .then((result)=>{
        res.send(result[0]);
        res.end() 
    })
    .catch((error) => console.log(error));
}