import express from "express";
import { obtenerEncargados, obtenerEstudiantesPorFacultad } from "../controllers/encargadoController.js";

const router = express.Router() 

//router.get('/', obtenerEncargados)


router.get('/:rut_evaluador', obtenerEstudiantesPorFacultad)
/*
router.post('/', crearEstudiante)

router.put('/:rut_estudiante', updateEstudiante)

router.delete('/:rut_estudiante', deleteEstudiante)
*/
export default router