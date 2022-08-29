import { Router } from "express";
import  Especies  from '../models/especies.js';

const router = Router();

router.get('/:nombre', async (req,res) => {
    const {nombre} = req.params;
     try {
      const especie = await Especies.findOne({
        where: {nombre}
        //attributes: ['nombre'] //para traer un campo especifico
      })
      res.json(especie);
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
    
    
});

export default router;