import mongoose from "mongoose";
import { usuario } from "./usuarios.model";

const schema = new mongoose.Schema<usuario>({
    _id:mongoose.Types.ObjectId,
    nombre:String,
    apellido:String,
    username:String,
    telefono:String,
    correo_electronico:String,
    direccion:String,
    contrasena:String,
});

export const usuarioSchema = mongoose.model('usuarios',schema);