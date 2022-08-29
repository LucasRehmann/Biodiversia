import { Router } from "express";
import { Habitats } from '../models/habitats';
const router = Router();


router.get('/:id',  (req,res) => {
    const {id} = req.params;
     try {
      const habitat = await Habitats.findOne({
        where: {id}
        //attributes: ['nombre'] //para traer un campo especifico
      })
      res.json(habitat);
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
    
    
});

export default router;