
const mysql = require('mysql2/promise');

async function obtenerRutEstudiante(id) {
    //conexion con la base de datos
    const conexion = await mysql.createConnection({
        host: 'localhost',
        database: 'mydb',
        user: 'root',
        password: 'admin'
        
    });
    // Realiza la consulta sql
    try {
        const [rows] = await conexion.execute('SELECT rut_estudiante, estado_postulacion FROM postulacion WHERE id_postulacion = ?', [id]);
    // Retorna el resultado
        return console.log(rows[0].rut_estudiante, rows[0].estado_postulacion);
    } 
    // Tira error en caso de que haya uno
    catch (err) {
        console.error(err);
        throw err;
    } 
    // Finaliza la conexion
    finally {
        await conexion.end();
    }
}

// Reemplaza con el ID que deseas buscar
obtenerRutEstudiante(55)
  .catch((error) => {
    console.error('Error en la conexión:', error);
  });
    
