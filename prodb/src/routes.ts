import express from "express";
import {getData, postData} from "./controllers";
 
export const router = express.Router();

//Ruta para obtener datos (GET)
router.get("/datos", postData);
//Ruta para agregar datos (POST)
router.post("/datos", getData);

export default router