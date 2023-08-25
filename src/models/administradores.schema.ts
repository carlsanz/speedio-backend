import mongoose from "mongoose";
import { administracion } from "./administradores.model";

const schema = new mongoose.Schema<administracion>({
    _id:mongoose.Types.ObjectId,
    nombre:String,
    apellido:String,
    telefono:String,
    cargo:String,
    contrasena:String,
    correo:String,
});

export const adminSchema = mongoose.model('admins', schema);
