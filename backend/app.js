import express from "express";
import morgan from "morgan";

const app = express();

import especieRoutes from "./routes/especie.routes.js";
import habitatRoutes from "./routes/habitat.routes.js";

app.use(morgan("dev"));
app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.use("/api/especie", especieRoutes);
app.use("/api/habitat", habitatRoutes);

export default app; 