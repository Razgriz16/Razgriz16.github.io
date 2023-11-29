import axios from '../../Momentaneo/Axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/admin/estudiante/';

const CompCreateEstudiante = () => {
    const [rut_estudiante, setRut_estudiante] = useState('');
    const [id_carrera, setId_carrera] = useState('');
    const [id_rol, setId_rol] = useState('');
    const [id_periodo, setId_periodo] = useState('');
    const [nombres_estudiante, setNombres_estudiante] = useState('');
    const [apellido1_estudiante, setApellido1_estudiante] = useState('');
    const [apellido2_estudiante, setApellido2_estudiante] = useState('');
    const [correo_institucional_estudiante, setCorreo_institucional_estudiante] = useState('');
    const [contraseña_estudiante, setContraseña_estudiante] = useState('');
    const [ppa_estudiante, setPpa_estudiante] = useState('');
    const [año_ingreso_estudiante, setAño_ingreso_estudiante] = useState('');
    const [horas_ayudantia_estudiante, setHoras_ayudantia_estudiante] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [carreras, setCarreras] = useState([]);
    const [periodos, setPeriodos] = useState([]);



    const handleRutEstudianteChange = (e) => {
        setRut_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, rut_estudiante: '' }));
    };

    const handleIdCarreraChange = (e) => {
        setId_carrera(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_carrera: '' }));
    };

    const handleIdRolChange = (e) => {
        setId_rol(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_rol: '' }));
    };

    const handleIdPeriodoChange = (e) => {
        setId_periodo(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_periodo: '' }));
    };

    const handleNombresEstudianteChange = (e) => {
        setNombres_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, nombres_estudiante: '' }));
    };

    const handleApellido1EstudianteChange = (e) => {
        setApellido1_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, apellido1_estudiante: '' }));
    };

    const handleApellido2EstudianteChange = (e) => {
        setApellido2_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, apellido2_estudiante: '' }));
    };

    const handleCorreoInstitucionalEstudianteChange = (e) => {
        setCorreo_institucional_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, correo_institucional_estudiante: '' }));
    };

    const handleContraseñaEstudianteChange = (e) => {
        setContraseña_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, contraseña_estudiante: '' }));
    };

    const handlePpaEstudianteChange = (e) => {
        setPpa_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, ppa_estudiante: '' }));
    };

    const handleAñoIngresoEstudianteChange = (e) => {
        setAño_ingreso_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, año_ingreso_estudiante: '' }));
    };

    const handleHorasAyudantiaEstudianteChange = (e) => {
        setHoras_ayudantia_estudiante(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, horas_ayudantia_estudiante: '' }));
    };
    useEffect(() => {
        getCarreras();
      }, []);
    
      const getCarreras = async () => {
        const res = await axios.get('http://localhost:8000/admin/carrera/');
        setCarreras(res.data);
      };

      useEffect(() => {
        getPeriodos();
      }, []);
    
      const getPeriodos = async () => {
        const res = await axios.get('http://localhost:8000/admin/periodo/');
        setPeriodos(res.data);
      };


    const store = async (e) => {
        e.preventDefault();

        // Validar campos
        const newErrors = {};
        if (!rut_estudiante) {
            newErrors.rut_estudiante = 'El campo Rut es obligatorio';
        }
        if (!id_carrera) {
            newErrors.id_carrera = 'El campo ID Carrera es obligatorio';
        }
        if (!id_periodo) {
            newErrors.id_periodo = 'El campo ID Periodo es obligatorio';
        }
        if (!nombres_estudiante) {
            newErrors.nombres_estudiante = 'El campo Nombres es obligatorio';
        }
        if (!apellido1_estudiante) {
            newErrors.apellido1_estudiante = 'El campo Apellido Paterno es obligatorio';
        }
        if (!apellido2_estudiante) {
            newErrors.apellido2_estudiante = 'El campo Apellido Materno es obligatorio';
        }
        if (!correo_institucional_estudiante) {
            newErrors.correo_institucional_estudiante = 'El campo Correo Institucional es obligatorio';
        }
        if (!contraseña_estudiante) {
            newErrors.contraseña_estudiante = 'El campo Contraseña es obligatorio';
        }
        if (!ppa_estudiante) {
            newErrors.ppa_estudiante = 'El campo PPA es obligatorio';
        }
        if (!año_ingreso_estudiante) {
            newErrors.año_ingreso_estudiante = 'El campo Año de Ingreso es obligatorio';
        }
        if (!horas_ayudantia_estudiante) {
            newErrors.horas_ayudantia_estudiante = 'El campo Horas de Ayudantía es obligatorio';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Detener el envío del formulario si hay errores
        }

        // Enviar el formulario si no hay errores
        await axios.post(URI, {
            rut_estudiante,
            id_carrera,
            id_rol: 1,
            id_periodo,
            nombres_estudiante,
            apellido1_estudiante,
            apellido2_estudiante,
            correo_institucional_estudiante,
            contraseña_estudiante,
            ppa_estudiante,
            año_ingreso_estudiante,
            horas_ayudantia_estudiante,
        });

        navigate('/admin/estudiante');
    };

    return (

        <div className='form-container'>
            <div className='form'>
                <h2>Crear un nuevo estudiante</h2>
                <form onSubmit={store}>

                    <div className='row'>

                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Rut</label>
                            <input
                                value={rut_estudiante}
                                onChange={handleRutEstudianteChange}
                                type='text'
                                className={`form-control ${errors.rut_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.rut_estudiante && <div className='invalid-feedback'>{errors.rut_estudiante}</div>}
                        </div>

                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Nombres</label>
                            <input
                                value={nombres_estudiante}
                                onChange={handleNombresEstudianteChange}
                                type='text'
                                className={`form-control ${errors.nombres_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.nombres_estudiante && <div className='invalid-feedback'>{errors.nombres_estudiante}</div>}
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Año Ingreso</label>
                            <input
                                value={año_ingreso_estudiante}
                                onChange={handleAñoIngresoEstudianteChange}
                                type='text'
                                className={`form-control ${errors.año_ingreso_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.año_ingreso_estudiante && <div className='invalid-feedback'>{errors.año_ingreso_estudiante}</div>}
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Apellido Paterno</label>
                            <input
                                value={apellido1_estudiante}
                                onChange={handleApellido1EstudianteChange}
                                type='text'
                                className={`form-control ${errors.apellido1_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.apellido1_estudiante && <div className='invalid-feedback'>{errors.apellido1_estudiante}</div>}
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Apellido Materno</label>
                            <input
                                value={apellido2_estudiante}
                                onChange={handleApellido2EstudianteChange}
                                type='text'
                                className={`form-control ${errors.apellido2_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.apellido2_estudiante && <div className='invalid-feedback'>{errors.apellido2_estudiante}</div>}
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>PPA</label>
                            <input
                                value={ppa_estudiante}
                                onChange={handlePpaEstudianteChange}
                                type='text'
                                className={`form-control ${errors.ppa_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.ppa_estudiante && <div className='invalid-feedback'>{errors.ppa_estudiante}</div>}
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Correo Institucional</label>
                            <input
                                value={correo_institucional_estudiante}
                                onChange={handleCorreoInstitucionalEstudianteChange}
                                type='text'
                                className={`form-control ${errors.correo_institucional_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.correo_institucional_estudiante && <div className='invalid-feedback'>{errors.correo_institucional_estudiante}</div>}
                        </div>
                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Contraseña</label>
                            <input
                                value={contraseña_estudiante}
                                onChange={handleContraseñaEstudianteChange}
                                type='text'
                                className={`form-control ${errors.contraseña_estudiante ? 'is-invalid' : ''}`}
                            />
                            {errors.contraseña_estudiante && <div className='invalid-feedback'>{errors.contraseña_estudiante}</div>}
                        </div>

                        <div className='col-md-4 mb-3'>
                            <label className='form-label'>Horas Ayudantia</label>
                            <select
                                value={horas_ayudantia_estudiante}
                                onChange={handleHorasAyudantiaEstudianteChange}
                                type='text'
                                className={`form-control ${errors.horas_ayudantia_estudiante ? 'is-invalid' : ''}`}
                            >
                            <option value=''>Seleccione las horas de ayudantia</option>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>                         
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>                         
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>                         
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>


                            </select>
                            {errors.horas_ayudantia_estudiante && <div className='invalid-feedback'>{errors.horas_ayudantia_estudiante}</div>}
                        </div>

                    </div>

                    <button type='submit' className='btn btn-primary btn-lg mb-1 mr-1' >Guardar Cambios</button>
                    <Link to="/admin/estudiante" className='btn btn-secondary btn-lg mb-1 mr-1'>Volver atrás    </Link>
                </form>
            </div>
        </div>

    )
}

export default CompCreateEstudiante