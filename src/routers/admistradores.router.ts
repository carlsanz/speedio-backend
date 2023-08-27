import express from 'express';
import { admin, loginAdmin, obtenerAdmin } from '../controllers/administradores.controllers';


const router = express.Router();
//obtener administradores
// http://localhost/admin
router.get("/", obtenerAdmin);
//obtener un administrador
// http://localhost/admin/:_id
router.get("/:_id", admin);

router.post("/login", loginAdmin)

export default router;