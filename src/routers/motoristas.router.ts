import express from 'express';
import { obtenerMotoristas, obtenerMotorista} from '../controllers/motoristas.controllers';

const router = express.Router();

router.get("/", obtenerMotoristas);

router.get("/:_id", obtenerMotorista);


export default router;