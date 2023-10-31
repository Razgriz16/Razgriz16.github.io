import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/admin/facultad/';

const CompShowFacultad = () => {
  const [facultades, setFacultades] = useState([]);

  useEffect(() => {
    getFacultades();
  }, []);

  const getFacultades = async () => {
    const res = await axios.get(URI);
    setFacultades(res.data);
  };

  const deleteFacultad = async (id_facultad) => {
    await axios.delete(`${URI}${id_facultad}`);
    getFacultades();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_facultad`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {facultades.map((facultad) => (
                <tr key={facultad.id_facultad}>
                  <td>{facultad.id_facultad}</td>
                  <td>{facultad.nombre_facultad}</td>
                  <td>
                    <Link
                      to={`/admin/editar_facultad/${facultad.id_facultad}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteFacultad(facultad.id_facultad)}
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

export default CompShowFacultad;
