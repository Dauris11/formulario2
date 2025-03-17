import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes"; // Asegúrate de importar bien el router

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware para procesar JSON en las peticiones

// Rutas
app.use("/api", router); // Asegúrate de que la ruta base sea '/api'

// Servidor escuchando
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
