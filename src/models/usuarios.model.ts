import mongoose from "mongoose";

export interface usuario {
    _id?:mongoose.Types.ObjectId;
    nombre:string;
    apellido:string;
    username?:string;
    telefono:string;
    correo_electronico:string;
    direccion?:string;
    contrasena:string;
}