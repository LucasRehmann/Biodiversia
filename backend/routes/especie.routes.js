import { Router } from "express";
import mysqlConnection from "mysql2";

const router = Router();

router.get('/:nombre',  (req,res) => {
    const {nombre} = req.params;
    console.log (nombre);

    mysqlConnection.query(
      "SELECT * FROM especies WHERE nombre = ?",
      [nombre],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
});

export default router;