import { Router } from "express";
import  Nueva_ubicacion  from '../models/areas_afectadas.js';
const router = Router();

// router.post('/areaafectada', async (req,res) => {

//     const {nombre, ubicacion, causa} = req.body;
//     await Nueva_ubicacion.create({
//         nombre,
//         ubicacion,
//         causa,
//     })

// });

export default router;