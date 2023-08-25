import { Request, Response } from "express";
import { restauranteSchema } from "../models/restaurantes.schema";


//Obtener administradores
export const obtenerRestaurantes =(req:Request, res:Response)=> {
    restauranteSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    })  
    .catch((error) => console.error(error));
}

//Obtener un restaurante por Id
export const obtenerUnRest =(req:Request, res:Response) => {
    restauranteSchema.find({_id:req.params._id})
    .then((result)=>{
        res.send(result[0]);
        res.end() 
    })
    .catch((error) => console.log(error));
}