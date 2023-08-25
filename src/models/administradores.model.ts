import mongoose from "mongoose";

export interface administracion {
    _id?:mongoose.Types.ObjectId;
    nombre:string;
    apellido:string;
    telefono:string;
    cargo:string;
    contrasena:string;
    correo:string;
}

