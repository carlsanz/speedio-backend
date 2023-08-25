import mongoose from "mongoose";

export interface ordenes {
    _id?:mongoose.Types.ObjectId;
    numero_orden:string;
    destino:string;
    precio_total:number;
    estado:string
} 