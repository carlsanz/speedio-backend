import mongoose from "mongoose";
import { motorista, pedidos } from "./motoristas.model";
const schema= new mongoose.Schema<motorista> ({
    _id:mongoose.Types.ObjectId,
    nombre:String,
    apellido:String,
    telefono:String,
    correo_electronico:String,
    contraseña:String,
    direccion:String,
    licencia_conducir:String,
    motocicleta:Object,
    pedidos:Array<pedidos>,
    estado:String,

});

export const motoristaSchema = mongoose.model('motoristas',schema);
