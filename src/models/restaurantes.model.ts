import mongoose from "mongoose";

export interface restaurante {
    _id?:mongoose.Types.ObjectId;
    nombre:string;
    Gerente:string;
    direccion:string;
    telefono?:string;
    tipo_comida?:string;
    horario?:string;
    imagen?:string;
    banner?:string;
    menu?:Array<menu>;
    email:string;

}

export interface menu {
    nombre_plato:string;
    descripcion:string;
    precio:number;
    img:string;
}