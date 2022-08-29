import { Router } from "express";
import mysqlConnection from "mysql2";

const router = Router();


router.get('/:id',  (req,res) => {
    const {id} = req.params;
    console.log (id);

    mysqlConnection.query('SELECT * FROM habitat_especie WHERE id = ?', [id], (err,rows,fields) => {
        if (!err){
            res.json (rows);
        }

        else {
            console.log (err);
        }
    });
});

export default router;