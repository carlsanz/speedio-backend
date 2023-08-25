import express from 'express';
import { agregarUsuario, loginUsuario, obtenerUnUsuario, obtenerUsuarios } from '../controllers/usuarios.controllers';

const router = express.Router();
// Obtener todos los usuarios
router.get("/", obtenerUsuarios);
// Obtener Un usuario por Id
router.get("/:_id", obtenerUnUsuario);
// login de usuarios
router.post("/login", loginUsuario);
// AGREGAR NUEVO USUARIO
router.post("/nuevo" , agregarUsuario);

export default router;