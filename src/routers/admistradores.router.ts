import express from 'express';
import { admin, obtenerAdmin } from '../controllers/administradores.controllers';


const router = express.Router();
//obtener administradores
// http://localhost/admin
router.get("/", obtenerAdmin);
//obtener un administrador
// http://localhost/admin/:_id
router.get("/:_id", admin);

export default router;