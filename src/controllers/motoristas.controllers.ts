import { Request, Response } from "express";
import { motoristaSchema } from "../models/motoristas.schema";
//Obtener motoristas
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

// Login Motoristas
export const loginMotorista = async (req:Request, res:Response)=> {
    const motorista = await motoristaSchema.findOne({correo_electronico:req.body.correo_electronico,contrasena:req.body.contrasena} , {contrasena:false});
    if(motorista) {
        res.send({status:true, mensaje:'Credenciales Validas', motorista})
    }else {
        res.send({status:false, mensaje:'Credenciales invalidas'})
    }
    res.end();

}

// motoristas sin pedido y motoristas activos
export const motoristaPorEstado= async(req:Request, res:Response) => {
    motoristaSchema.find({estado:req.params.estado},{})
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}

// export const obtenerOrdenesPorEstado =(req:Request, res:Response) => {
//     ordenSchema.find({estado:req.params.estado},{})
//     .then((result) => {
//         res.send(result);
//         res.end();
//     })  
//     .catch((error) => console.error(error));
// }