import express from "express";
import { crearEstudiante, deleteEstudiante, obtener1Estudiante, obtenerEstudiantes, updateEstudiante, obtener1Ramo, obtenerRamos, updateRamo, crearRamo, deleteRamo, obtenerCarreras, obtener1Carrera, crearCarrera, updateCarrera, deleteCarrera, obtenerFacultades, obtener1Facultad, crearFacultad, updateFacultad, deleteFacultad, obtenerEncargados, obtener1Encargado, crearEncargado, updateEncargado, deleteEncargado, obtenerAdmins, obtener1Admin, crearAdmin, updateAdmin, deleteAdmin, obtenerPeriodos, obtener1Periodo, crearPeriodo, updatePeriodo, deletePeriodo, obtenerRoles, obtener1Rol, crearRol, updateRol, deleteRol, obtenerPostulaciones, obtener1Postulacion, crearPostulacion, updatePostulacion, deletePostulacion, obtenerResultados, obtener1Resultado, crearResultados, updateResultados, deleteResultados, obtenerDetalle_estudiante_ramo, obtener1Detalle_estudiante_ramo, crearDetalle_estudiante_ramo, updateDetalle_estudiante_ramo, deleteDetalle_estudiante_ramo } from "../controllers/adminController.js";
const router = express.Router() 

//estudiante
router.get('/estudiante', obtenerEstudiantes)
router.get('/estudiante/:rut_estudiante', obtener1Estudiante)
router.post('/estudiante', crearEstudiante)
router.put('/estudiante/:rut_estudiante', updateEstudiante)
router.delete('/estudiante/:rut_estudiante', deleteEstudiante)

//ramo
router.get('/ramo', obtenerRamos)
router.get('/ramo/:id_ramo', obtener1Ramo)
router.post('/ramo', crearRamo)
router.put('/ramo/:id_ramo', updateRamo)
router.delete('/ramo/:id_ramo', deleteRamo)

//carrera
router.get('/carrera', obtenerCarreras)
router.get('/carrera/:id_carrera', obtener1Carrera)
router.post('/carrera', crearCarrera)
router.put('/carrera/:id_carrera', updateCarrera)
router.delete('/carrera/:id_carrera', deleteCarrera)

// facultad
router.get('/facultad', obtenerFacultades)
router.get('/facultad/:id_facultad', obtener1Facultad)
router.post('/facultad', crearFacultad)
router.put('/facultad/:id_facultad', updateFacultad)
router.delete('/facultad/:id_facultad', deleteFacultad)

// encargado
router.get('/encargado', obtenerEncargados)
router.get('/encargado/:rut_evaluador', obtener1Encargado)
router.post('/encargado', crearEncargado)
router.put('/encargado/:rut_evaluador', updateEncargado)
router.delete('/encargado/:rut_evaluador', deleteEncargado)

// admin
router.get('/admin', obtenerAdmins)
router.get('/admin/:rut_administrador', obtener1Admin)
router.post('/admin', crearAdmin)
router.put('/admin/:rut_administrador', updateAdmin)
router.delete('/admin/:rut_administrador', deleteAdmin)

// periodo
router.get('/periodo', obtenerPeriodos)
router.get('/periodo/:id_periodo', obtener1Periodo)
router.post('/periodo', crearPeriodo)
router.put('/periodo/:id_periodo', updatePeriodo)
router.delete('/periodo/:id_periodo', deletePeriodo)

// rol
router.get('/rol', obtenerRoles)
router.get('/rol/:id_rol', obtener1Rol)
router.post('/rol', crearRol)
router.put('/rol/:id_rol', updateRol)
router.delete('/rol/:id_rol', deleteRol)

// postulacion
router.get('/postulacion', obtenerPostulaciones)
router.get('/postulacion/:id_postulacion', obtener1Postulacion)
router.post('/postulacion', crearPostulacion)
router.put('/postulacion/:id_postulacion', updatePostulacion)
router.delete('/postulacion/:id_postulacion', deletePostulacion)

// resultados
router.get('/resultados', obtenerResultados)
router.get('/resultados/:id_resultados', obtener1Resultado)
router.post('/resultados', crearResultados)
router.put('/resultados/:id_resultados', updateResultados)
router.delete('/resultados/:id_resultados', deleteResultados)

// detalle_estudiantes_ramo
router.get('/de_esra', obtenerDetalle_estudiante_ramo)
router.get('/de_esra/:id_detalle_estudiante_ramo', obtener1Detalle_estudiante_ramo)
router.post('/de_esra', crearDetalle_estudiante_ramo)
router.put('/de_esra/:id_detalle_estudiante_ramo', updateDetalle_estudiante_ramo)
router.delete('/de_esra/:id_detalle_estudiante_ramo', deleteDetalle_estudiante_ramo)
export default router