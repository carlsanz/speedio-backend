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


export const loginAdmin = async (req:Request, res:Response)=> {
    const admin = await adminSchema.findOne({correo_electronico:req.body.correo_electronico, contraseña:req.body.contraseña} , {contraseña:false});
    if(admin) {
        res.send({status:true, mensaje:'Credenciales Validas', admin})
    }else {
        res.send({status:false, mensaje:'Credenciales invalidas'})
    }
    res.end();

}