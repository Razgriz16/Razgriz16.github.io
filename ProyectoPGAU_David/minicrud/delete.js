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

/////////////////////////////////////////////////////////////////////////
//estudiante 201706319

conexion.query("DELETE FROM postulacion WHERE id_postulacion = 233",
function(error, results){
    if (error) {
        throw error;
    }console.log("datos insertados", results);
});

conexion.end();

