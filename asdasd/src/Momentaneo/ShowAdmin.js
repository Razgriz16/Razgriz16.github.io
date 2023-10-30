import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/admin/admin/';

const CompShowAdmin = () => {
  const [administradores, setAdministradores] = useState([]);

  useEffect(() => {
    getAdministradores();
  }, []);

  const getAdministradores = async () => {
    const res = await axios.get(URI);
    setAdministradores(res.data);
  };

  const deleteAdministrador = async (rut_administrador) => {
    await axios.delete(`${URI}${rut_administrador}`);
    getAdministradores();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_administrador`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>Rut</th>
                <th>ID Rol</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {administradores.map((administrador) => (
                <tr key={administrador.rut_administrador}>
                  <td>{administrador.rut_administrador}</td>
                  <td>{administrador.id_rol}</td>
                  <td>{administrador.correo_administrador}</td>
                  <td>{administrador.contraseña_administrador}</td>
                  <td>
                    <Link
                      to={`/admin/editar_administrador/${administrador.rut_administrador}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteAdministrador(administrador.rut_administrador)}
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

export default CompShowAdmin;
