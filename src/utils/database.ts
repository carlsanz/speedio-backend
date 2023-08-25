import mongoose from "mongoose";

export class Database {
    server:string= 'localhost';
    port:string = '27017';
    db:string = 'speedio';

    constructor(){
        mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
        .then(()=>{
            console.log('Se conecto a Mongo')
        }).catch((error)=>{
            console.error('Ocurrio un error', error)
        });
    }
}