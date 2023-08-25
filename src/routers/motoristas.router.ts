import express from 'express';
import { obtenerMotoristas, obtenerMotorista, loginMotorista} from '../controllers/motoristas.controllers';

const router = express.Router();

router.get("/", obtenerMotoristas);

router.get("/:_id", obtenerMotorista);

router.post("/login", loginMotorista);


export default router;