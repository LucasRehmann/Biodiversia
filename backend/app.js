import express from "express";
import morgan from "morgan";

const app = express();

import especieRoutes from "./routes/especie.routes.js";
import habitatRoutes from "./routes/habitat.routes.js";
import area_afectadaRoutes from "./routes/area_afectada.routes.js";
import nueva_ubicacionRoutes from "./routes/nueva_ubicacion.routes.js";

app.use(morgan("dev"));
app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.use("/api/especie", especieRoutes);
app.use("/api/habitat", habitatRoutes);
app.use("/api/areaafectada", area_afectadaRoutes);
app.use("/api/nuevaubicacion", nueva_ubicacionRoutes);


export default app; 