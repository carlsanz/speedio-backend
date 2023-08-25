import express from 'express';
import { obtenerRestaurantes, obtenerUnRest } from '../controllers/restaurantes.controller';

const router = express.Router();
// Obtener Todos los restaurantes
router.get("/",  obtenerRestaurantes);
// Obtener Un restaurante por ID
router.get("/:_id", obtenerUnRest);
export default router;