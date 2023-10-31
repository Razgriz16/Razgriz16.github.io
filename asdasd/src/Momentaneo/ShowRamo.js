import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';

import axios from 'axios';

const URI = 'http://localhost:8000/admin/ramo/';

const CompShowRamo = () => {
  const [ramos, setRamos] = useState([]);
  useEffect(() => {
    getRamos();
  }, []);

  const getRamos = async () => {
    const res = await axios.get(URI);
    setRamos(res.data);
  };

  const deleteRamo = async (id_ramo) => {
    await axios.delete(`${URI}${id_ramo}`);
    getRamos();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_ramo`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>ID Ramo</th>
                <th>ID Carrera</th>
                <th>ID Periodo</th>
                <th>Nombre</th>
                <th>Horas Ayudantia</th>
                <th>Semestre</th>
                <th>Seccion</th>
                <th>Precodigo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ramos.map((ramo) => (
                <tr key={ramo.id_ramo}>
                  <td>{ramo.id_ramo}</td>
                  <td>{ramo.id_carrera}</td>
                  <td>{ramo.id_periodo}</td>
                  <td>{ramo.nombre_ramo}</td>
                  <td>{ramo.horas_ayudantia_ramo}</td>
                  <td>{ramo.semestre_ramo}</td>
                  <td>{ramo.seccion_ramo}</td>
                  <td>{ramo.precod_ramo}</td>
                  <td>
                    <Link to={`/admin/editar_ramo/${ramo.id_ramo}`} className='btn btn-primary btn-sm me-2'>
                      Editar
                    </Link>
                    <button onClick={() => deleteRamo(ramo.id_ramo)} className='btn btn-danger btn-sm'>
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

export default CompShowRamo;
