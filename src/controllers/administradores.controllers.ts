import { Request, Response } from "express";
import { adminSchema } from "../models/administradores.schema";
// Obtener todos los admins
export const obtenerAdmin = (req:Request, res:Response)=>{
    adminSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}
// obtener un admin
export const admin =(req:Request, res:Response) => {
    adminSchema.find({_id:req.params._id})
    .then((result)=>{
        res.send(result[0]);
        res.end() 
    })
    .catch((error) => console.log(error));
}