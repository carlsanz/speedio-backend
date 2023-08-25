import mongoose from "mongoose";
import { menu, restaurante } from "./restaurantes.model";

const schema = new mongoose.Schema<restaurante>({
    _id:mongoose.Types.ObjectId,
    nombre:String,
    Gerente:String,
    direccion:String,
    telefono:String,
    tipo_comida:String,
    horario:String,
    imagen:String,
    banner:String,
    menu:Array<menu>,
    email:String,
});

export const restauranteSchema = mongoose.model('restaurantes',schema);