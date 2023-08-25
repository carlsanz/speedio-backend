import { Request, Response } from "express";
import { ordenSchema } from "../models/ordenes.schema";

//Obtener administradores
export const obtenerOrdenes =(req:Request, res:Response)=> {
    ordenSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}

//Obtener una orden por Id
export const obtenerUnaOrden =(req:Request, res:Response) => {
    ordenSchema.find({_id:req.params._id})
    .then((result)=>{
        res.send(result[0]);
        res.end() 
    })
    .catch((error) => console.log(error));
}