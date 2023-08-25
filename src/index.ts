import express ,{Request, Response, Express}from 'express';
import { Database } from './utils/database';
import adminRouter from './routers/admistradores.router';
import motoristaRouter from './routers/motoristas.router';
import ordenRouter from './routers/ordenes.router';
import restauranteRouter from './routers/restaurantes.router'
import usuarioRouter from './routers/usuarios.router'


import cors from 'cors';

const app:Express= express();
const db:Database = new Database();
app.use(cors())
app.use(express.json());//Poblar el Objeto del body
app.use(express.urlencoded({extended:true}));

app.use('/admins' , adminRouter);
app.use('/motoristas' , motoristaRouter);
app.use('/ordenes', ordenRouter);
app.use('/restaurantes', restauranteRouter);
app.use('/usuarios' , usuarioRouter);

app.get("/", (req:Request, res:Response)=>{
    res.send("Servidor para el ejercicio de Spotify");
    res.end();
})

app.listen(3000, ()=>{
    console.log("Servidor levantado en el puerto 3000");
})