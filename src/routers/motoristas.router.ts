import express from 'express';
import { obtenerMotoristas, obtenerMotorista, loginMotorista, motoristaPorEstado} from '../controllers/motoristas.controllers';

const router = express.Router();

router.get("/", obtenerMotoristas);

router.get("/:_id", obtenerMotorista);

router.post("/login", loginMotorista);

router.get("/:estado/dis" , motoristaPorEstado)


export default router;