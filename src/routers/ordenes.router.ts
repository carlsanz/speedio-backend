import express from 'express';
import { obtenerOrdenes,  obtenerOrdenesPorEstado,  obtenerUnaOrden } from '../controllers/ordenes.controller';

const router = express.Router();
// Obtener todas las ordenes
router.get("/", obtenerOrdenes);
// Obtener una orden por id
router.get("/:_id", obtenerUnaOrden);

router.get("/:estado/dis" , obtenerOrdenesPorEstado);

export default router;