import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from '../../Momentaneo/Axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar';
import Foooter from '../../Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const URI = 'http://localhost:8000/admin/postulacion/';

function Estd() {
    const [postulaciones, setPostulaciones] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const postulacionesPerPage = 10;
    const [ramosInfo, setRamosInfo] = useState({});
    const [periodosInfo, setPeriodosInfo] = useState({});

    useEffect(() => {
        getPostulaciones();
    }, []);

    const getPostulaciones = async () => {
        const res = await axios.get(URI);
        setPostulaciones(res.data);
    };

    const deletepostulacion = async (id_postulacion) => {
        const postulacionToDelete = postulaciones.find(postulacion => postulacion.id_postulacion === id_postulacion);
        const confirmDelete = window.confirm(`¿Está seguro de que desea eliminar ID Postulación ${postulacionToDelete.id_postulacion}?`);
    
        if (confirmDelete) {
        await axios.delete(`/admin/postulacion/${id_postulacion}`);
        getPostulaciones();
    }
};

useEffect(() => {
    // Realizar la solicitud para obtener la información de todos los estudiantes
    const fetchRamosInfo = async () => {
        try {
            const res = await axios.get('http://localhost:8000/admin/ramo/');
            const ramosInfo = res.data.reduce((map, ramo) => {
                map[ramo.id_ramo] = {
                    nombreR: ramo.nombre_ramo,
                };
                return map;
            }, {});
            setRamosInfo(ramosInfo);
        } catch (error) {
            console.error('Error al cargar información de ramos:', error);
        }
    };
    // Llamar a la función al montar el componente
    fetchRamosInfo();
  }, []); // Asegúrate de que este array de dependencias esté vacío para que se ejecute solo una vez
  
  useEffect(() => {
    // Realizar la solicitud para obtener la información de todos los periodos
    const fetchPeriodosInfo = async () => {
        try {
            const res = await axios.get('http://localhost:8000/admin/periodo/');
            const periodosInfo = res.data.reduce((map, periodo) => {
                map[periodo.id_periodo] = {
                    añoP: periodo.año_periodo,
                    semP: periodo.semestre_periodo,
                };
                return map;
            }, {});
            setPeriodosInfo(periodosInfo);
        } catch (error) {
            console.error('Error al cargar información de periodos:', error);
        }
    };
    // Llamar a la función al montar el componente
    fetchPeriodosInfo();
  }, []); // Asegúrate de que este array de dependencias esté vacío para que se ejecute solo una vez


    const indexOfLastPostulaciones = (currentPage + 1) * postulacionesPerPage;
    const indexOfFirstPostulaciones = indexOfLastPostulaciones - postulacionesPerPage;
    const currentPostulaciones = postulaciones.slice(indexOfFirstPostulaciones, indexOfLastPostulaciones);

    return (
        <div className='admin-container'>
            <div className="tabla-postulaciones">
                <Navbar />
                <p className="text-center" style={{ fontSize: '25px', padding: '10px' }}>
                    Bienvenido, Admin. Administre los datos.
                </p>

                <div className="container" style={{ marginBottom: '80px' }}>
                    <h1>Postulaciones</h1>
                    <Link to={`/admin/crear_postulacion`} className='btn btn-success'>
                        Crear
                    </Link>
                    <table className='table table-striped'>
                        <thead className='table-primary'>
                            <tr>
                                <th>ID Postulacion</th>
                                <th>Rut Estudiante</th>
                                <th>ID Ramo</th>
                                <th>ID Periodo</th>
                                <th>Estado</th>
                                <th>Horas</th>
                                <th>Fecha</th>
                                <th>Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPostulaciones.map((postulacion) => (
                                <tr key={postulacion.id_postulacion}>
                                    <td>{postulacion.id_postulacion}</td>
                                    <td>{postulacion.rut_estudiante}</td>
                                    <td>[{postulacion.id_ramo}] {ramosInfo[postulacion.id_ramo]?.nombreR}</td>
                                    <td>[{postulacion.id_periodo}] {periodosInfo[postulacion.id_periodo]?.añoP}/{periodosInfo[postulacion.id_periodo]?.semP}</td>
                                    <td>{postulacion.estado_postulacion}</td>
                                    <td>{postulacion.horas_solicitud_ayudantia}</td>
                                    <td>{postulacion.fecha_postulacion}</td>
                                    <td>
                                        <Link
                                            to={`/admin/editar_postulacion/${postulacion.id_postulacion}`}
                                            className="btn btn-primary"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deletepostulacion(postulacion.id_postulacion)}
                                            className="btn btn-danger"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Siguiente'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(postulaciones.length / postulacionesPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={({ selected }) => setCurrentPage(selected)}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
                <div style={{ marginBottom: '80px' }}></div>

                <Foooter />
            </div>
        </div>
    );
}

export default Estd;
