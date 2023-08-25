import mongoose from "mongoose";
import { ordenes } from "./ordenes.model";

const schema = new mongoose.Schema<ordenes>({
    _id:mongoose.Types.ObjectId,
    numero_orden:String,
    destino:String,
    precio_total:Number,
    estado:String
})

export const ordenSchema = mongoose.model('ordenes',schema);