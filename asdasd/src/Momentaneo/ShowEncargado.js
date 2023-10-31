import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/admin/encargado/';

const CompShowEncargado = () => {
  const [evaluadores, setEvaluadores] = useState([]);

  useEffect(() => {
    getEvaluadores();
  }, []);

  const getEvaluadores = async () => {
    const res = await axios.get(URI);
    setEvaluadores(res.data);
  };

  const deleteEvaluador = async (rut_evaluador) => {
    await axios.delete(`${URI}${rut_evaluador}`);
    getEvaluadores();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_encargado`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>Rut</th>
                <th>ID Facultad</th>
                <th>ID Rol</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {evaluadores.map((evaluador) => (
                <tr key={evaluador.rut_evaluador}>
                  <td>{evaluador.rut_evaluador}</td>
                  <td>{evaluador.id_facultad}</td>
                  <td>{evaluador.id_rol}</td>
                  <td>{evaluador.nombre_evaluador}</td>
                  <td>{evaluador.apellido1_evaluador}</td>
                  <td>{evaluador.apellido2_evaluador}</td>
                  <td>{evaluador.contraseña_evaluador}</td>
                  <td>
                    <Link
                      to={`/admin/editar_encargado/${evaluador.rut_evaluador}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteEvaluador(evaluador.rut_evaluador)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowEncargado;
