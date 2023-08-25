import { Request, Response } from "express";
import { usuarioSchema } from "../models/usuarios.schema";
import mongoose, {ObjectId}  from "mongoose";

//Obtener administradores
export const obtenerUsuarios =(req:Request, res:Response)=> {
    usuarioSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}

//Obtener un Usuario por Id
export const obtenerUnUsuario =(req:Request, res:Response) => {
    usuarioSchema.find({_id:req.params._id})
    .then((result)=>{
        res.send(result[0]);
        res.end() 
    })
    .catch((error) => console.log(error));
}
// Login de usuario
export const loginUsuario = async (req:Request, res:Response)=> {
    const usuario = await usuarioSchema.findOne({correo_electronico:req.body.correo_electronico,contrasena:req.body.contrasena} , {contrasena:false});
    if(usuario) {
        res.send({status:true, mensaje:'Credenciales Validas', usuario})
    }else {
        res.send({status:false, mensaje:'Credenciales invalidas'})
    }
    res.end();

}

export const agregarUsuario = (req: Request, res: Response) => {
    let u = new usuarioSchema({
        _id: new mongoose.Types.ObjectId(req.body.id),
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        telefono:req.body.telefono,
        correo_electronico:req.body.correo_electronico,
        contrasena:req.body.contrasena
    })
  
    u.save().then(result=>{
        res.send(result);
        res.end()
    }).catch(error=>{
        res.send(error);
        res.end()
    })
  }


