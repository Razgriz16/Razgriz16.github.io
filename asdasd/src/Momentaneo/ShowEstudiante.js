import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/admin/estudiante/';

const CompShowEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        getEstudiantes();
    }, []);

    // PROCEDIMIENTO PARA MOSTRAR LOS ESTUDIANTES
    const getEstudiantes = async () => {
        const res = await axios.get(URI);
        setEstudiantes(res.data);
    };

    // PROCEDIMIENTO PARA BORRAR ESTUDIANTES
    const deleteEstudiante = async (rut_estudiante) => {
        await axios.delete(`${URI}${rut_estudiante}`);
        getEstudiantes();
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={`/admin/crear_estudiante`} className='btn btn-primary mb-3'>
                        Crear
                    </Link>
                    <table className='table table-striped'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Rut</th>
                                <th>ID Carrera</th>
                                <th>ID Rol</th>
                                <th>ID Periodo</th>
                                <th>Nombres</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Correo Institucional</th>
                                <th>Contraseña</th>
                                <th>PPA</th>
                                <th>Año Ingreso</th>
                                <th>Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map((estudiante) => (
                                <tr key={estudiante.rut_estudiante}>
                                    <td>{estudiante.rut_estudiante}</td>
                                    <td>{estudiante.id_carrera}</td>
                                    <td>{estudiante.id_rol}</td>
                                    <td>{estudiante.id_periodo}</td>
                                    <td>{estudiante.nombres_estudiante}</td>
                                    <td>{estudiante.apellido1_estudiante}</td>
                                    <td>{estudiante.apellido2_estudiante}</td>
                                    <td>{estudiante.correo_institucional_estudiante}</td>
                                    <td>{estudiante.contraseña_estudiante}</td>
                                    <td>{estudiante.ppa_estudiante}</td>
                                    <td>{estudiante.año_ingreso_estudiante}</td>
                                    <td>
                                        <Link
                                            to={`/admin/editar_estudiante/${estudiante.rut_estudiante}`}
                                            className='btn btn-primary btn-sm me-2'
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deleteEstudiante(estudiante.rut_estudiante)}
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

export default CompShowEstudiante;
