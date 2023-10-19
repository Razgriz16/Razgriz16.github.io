var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'admin'

});

conexion.connect(function(error){
    if(error){
        throw error;
        }else{
            console.log('conexion exitosa');
        }
});
////////////////////////////////////////////////////////////

//INSERTAR POSTULACION
/*
conexion.query("INSERT INTO postulacion (rut_estudiante, id_ramo, id_periodo, id_resultados, estado_postulacion, horas_solicitud_ayudantia) VALUES (201706319, 1, 2, 20, 'aprobado', 4)", 
function(error, results){
    if (error) {
        throw error;
    }console.log("datos insertados", results);
});
*/

//////////////////////////////////////////////////////
//INSERTAR RESULTADOS
conexion.query("INSERT INTO resultados (id_periodo, respuesta) VALUES (2, 'aprobado')", 
function(error, results){
    if (error) {
        throw error;
    }console.log("datos insertados", results);
});

conexion.end();