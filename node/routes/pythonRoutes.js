import express from 'express';
import { exec } from 'child_process';

const router = express.Router();
const pythonScriptPath = 'reportes/report_estudiantes.py';

router.get('/', (req, res) => {
    console.log('Solicitud para generar reporte recibida'); // Asegúrate de que este mensaje aparezca en la consola
    exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error ejecutando el script: ${error}`);
            return res.status(500).send('Error al generar el reporte');
        }
        console.log(`Script Python ejecutado correctamente: ${stdout}`);
        return res.send('Reporte generado correctamente');
    });
});


export default router;
