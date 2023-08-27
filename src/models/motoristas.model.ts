import mongoose from "mongoose";

export interface motorista {
    _id?:mongoose.Types.ObjectId;
    nombre:string;
    apellido:string;
    telefono:string
    correo_electronico?:string;
    contraseña?:string;
    direccion?:string;
    licencia_conducir?:string;
    motocicleta?:motocicleta;
    pedidos?:Array<pedidos>;
    estado:string;

}

export interface motocicleta {
    marca:string;
    modelo:string;
    anno:number;
    placa:string
}

export interface pedidos {
    id_pedido:string;
    fecha:string;
    estado:string;
}