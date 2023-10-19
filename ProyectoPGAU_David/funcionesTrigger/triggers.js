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

/////////////////////////////////////////////////////////////////////////////////

//-------------------TRIGGER POSTULACION ID_POSTULACION----------------
/*
const createTriggerQuery = `
  CREATE TRIGGER trigger_id_postulacion
  BEFORE INSERT ON postulacion
  FOR EACH ROW
  BEGIN
    SET NEW.id_postulacion = COALESCE((SELECT MAX(id_postulacion) FROM postulacion), 0) + 1;
  END;
`;

conexion.query(createTriggerQuery, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger creado con éxito');
  }

});
*/

//---------------TRIGGER ID_RESULTADOS-------------

/*
const createTriggerQueryIdResultados = `
  CREATE TRIGGER trigger_id_resultados
  BEFORE INSERT ON resultados
  FOR EACH ROW
  BEGIN
    SET NEW.id_resultados = COALESCE((SELECT MAX(id_resultados) FROM resultados), 0) + 1;
  END;
`;

conexion.query(createTriggerQueryIdResultados, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger creado con éxito');
  }

});
*/

//------------------TRIGGER ID_FACULTAD-------------------

const TriggerId_facultad = `
  CREATE TRIGGER trigger_id_facultad
  BEFORE INSERT ON facultad
  FOR EACH ROW
  BEGIN
    SET NEW.id_facultad = COALESCE((SELECT MAX(id_facultad) FROM facultad), 0) + 1;
  END;
`;

conexion.query(TriggerId_facultad, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger creado con éxito');
  }

});

//-------------------TRIGGER ID_PERIODO-----------------------
const TriggerId_periodo = `
  CREATE TRIGGER trigger_id_periodo
  BEFORE INSERT ON periodo
  FOR EACH ROW
  BEGIN
    SET NEW.id_periodo = COALESCE((SELECT MAX(id_periodo) FROM periodo), 0) + 1;
  END;
`;

conexion.query(TriggerId_periodo, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger creado con éxito');
  }

});


//-------------------TRIGGER id_detalle_estudiante_ramo-----------------------
const TriggerId_detalle_estudiante_ramo = `
  CREATE TRIGGER trigger_id_detalle_estudiante_ramo
  BEFORE INSERT ON detalle_estudiante_ramo
  FOR EACH ROW
  BEGIN
    SET NEW.id_detalle_estudiante_ramo = COALESCE((SELECT MAX(id_detalle_estudiante_ramo) FROM detalle_estudiante_ramo), 0) + 1;
  END;
`;

conexion.query(TriggerId_detalle_estudiante_ramo, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger creado con éxito');
  }

});

//posibles triggers: (id_postulacion), (id_resultado), (id_facultad), (id_periodo), (id_detalle_estudiante_ramo), |id_carrera|, |id_ramo|
//posibles funciones: 
// ||=no, ()=hecho
conexion.end();