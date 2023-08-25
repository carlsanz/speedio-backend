import express from 'express';
import { obtenerOrdenes, obtenerUnaOrden } from '../controllers/ordenes.controller';

const router = express.Router();
// Obtener todas las ordenes
router.get("/", obtenerOrdenes);
// Obtener una orden por id
router.get("/:_id", obtenerUnaOrden)
export default router;