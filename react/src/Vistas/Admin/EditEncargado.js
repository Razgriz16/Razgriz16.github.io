import axios from '../../Momentaneo/Axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/admin/encargado/';

const CompEditEncargado = () => {
    const [rut_evaluador, setRut_evaluador] = useState('');
    const [id_facultad, setId_facultad] = useState('');
    const [id_rol, setId_rol] = useState('');
    const [nombre_evaluador, setNombre_evaluador] = useState('');
    const [apellido1_evaluador, setApellido1_evaluador] = useState('');
    const [apellido2_evaluador, setApellido2_evaluador] = useState('');
    const [contraseña_evaluador, setContraseña_evaluador] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id_evaluador } = useParams();
    const [facultades, setFacultades] = useState([]);

    useEffect(() => {
        getEvaluadorByRut();
    }, []);

    const getEvaluadorByRut = async () => {
        try {
            const res = await axios.get(URI + id_evaluador);
            setRut_evaluador(res.data.rut_evaluador);
            setId_facultad(res.data.id_facultad);
            setId_rol(res.data.id_rol);
            setNombre_evaluador(res.data.nombre_evaluador);
            setApellido1_evaluador(res.data.apellido1_evaluador);
            setApellido2_evaluador(res.data.apellido2_evaluador);
            setContraseña_evaluador(res.data.contraseña_evaluador);
        } catch (error) {
            console.error('Error al obtener datos del encargado:', error);
        }
    };

    useEffect(() => {
        getFacultades();
      }, []);
    
      const getFacultades = async () => {
        const res = await axios.get('http://localhost:8000/admin/facultad/');
        setFacultades(res.data);
      };


    const handleRutEvaluadorChange = (e) => {
        setRut_evaluador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, rut_evaluador: '' }));
    };

    const handleIdFacultadChange = (e) => {
        setId_facultad(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_facultad: '' }));
    };

    const handleIdRolChange = (e) => {
        setId_rol(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_rol: '' }));
    };

    const handleNombreEvaluadorChange = (e) => {
        setNombre_evaluador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, nombre_evaluador: '' }));
    };

    const handleApellido1EvaluadorChange = (e) => {
        setApellido1_evaluador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, apellido1_evaluador: '' }));
    };

    const handleApellido2EvaluadorChange = (e) => {
        setApellido2_evaluador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, apellido2_evaluador: '' }));
    };

    const handleContraseñaEvaluadorChange = (e) => {
        setContraseña_evaluador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, contraseña_evaluador: '' }));
    };

    const update = async (e) => {
        e.preventDefault();

        // Validar campos
        const newErrors = {};
        if (!rut_evaluador) {
            newErrors.rut_evaluador = 'El campo Rut es obligatorio';
        }
        if (!id_facultad) {
            newErrors.id_facultad = 'El campo ID Facultad es obligatorio';
        }
        if (!nombre_evaluador) {
            newErrors.nombre_evaluador = 'El campo Nombre es obligatorio';
        }
        if (!apellido1_evaluador) {
            newErrors.apellido1_evaluador = 'El campo Apellido Paterno es obligatorio';
        }
        if (!apellido2_evaluador) {
            newErrors.apellido2_evaluador = 'El campo Apellido Materno es obligatorio';
        }
        if (!contraseña_evaluador) {
            newErrors.contraseña_evaluador = 'El campo Contraseña es obligatorio';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Detener el envío del formulario si hay errores
        }

        // Enviar el formulario si no hay errores
        try {
            await axios.put(URI + id_evaluador, {
                rut_evaluador,
                id_facultad,
                id_rol: 2,
                nombre_evaluador,
                apellido1_evaluador,
                apellido2_evaluador,
                contraseña_evaluador,
            });
            navigate('/admin/encargado');
        } catch (error) {
            console.error('Error al actualizar el encargado:', error);
        }
    };

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Edita al encargado</h2>
                <form onSubmit={update}>

                    <div className='row'>

                        <div className='col-md-6 mb-3'>
                            <label className='form-label'>Rut</label>
                            <input
                                value={rut_evaluador}
                                onChange={handleRutEvaluadorChange}
                                type='text'
                                className={`form-control ${errors.rut_evaluador ? 'is-invalid' : ''}`}
                            />
                            {errors.rut_evaluador && <div className='invalid-feedback'>{errors.rut_evaluador}</div>}
                        </div>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input
                                value={nombre_evaluador}
                                onChange={handleNombreEvaluadorChange}
                                type='text'
                                className={`form-control ${errors.nombre_evaluador ? 'is-invalid' : ''}`}
                            />
                            {errors.nombre_evaluador && (
                                <div className='invalid-feedback'>{errors.nombre_evaluador}</div>
                            )}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label'>Apellido Paterno</label>
                            <input
                                value={apellido1_evaluador}
                                onChange={handleApellido1EvaluadorChange}
                                type='text'
                                className={`form-control ${errors.apellido1_evaluador ? 'is-invalid' : ''}`}
                            />
                            {errors.apellido1_evaluador && (
                                <div className='invalid-feedback'>{errors.apellido1_evaluador}</div>
                            )}
                        </div>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label'>Apellido Materno</label>
                            <input
                                value={apellido2_evaluador}
                                onChange={handleApellido2EvaluadorChange}
                                type='text'
                                className={`form-control ${errors.apellido2_evaluador ? 'is-invalid' : ''}`}
                            />
                            {errors.apellido2_evaluador && (
                                <div className='invalid-feedback'>{errors.apellido2_evaluador}</div>
                            )}
                        </div>



                    </div>

                    <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <label className='form-label'>ID Facultad</label>
                        <select
                            value={id_facultad}
                            onChange={handleIdFacultadChange}
                            className={`form-control ${errors.id_facultad ? 'is-invalid' : ''}`}
                        >
                            <option value=''>Seleccione una facultad</option>
                            {facultades.map((facultad) => (
                                <option key={facultad.id_facultad} value={facultad.id_facultad}>
                                    {facultad.id_facultad} - {facultad.nombre_facultad}
                                </option>
                            ))}
                        </select>
                        {errors.id_facultad && <div className='invalid-feedback'>{errors.id_facultad}</div>}
                    </div>
                        <div className='col-md-6 mb-3'>
                        <label className='form-label'>ID Rol</label>
    <input
        value="2 - Evaluador" // Valor fijo con mensaje
        readOnly // Hacer el campo de solo lectura
        type='text'
        className='form-control'
    />
                        </div>

                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_evaluador}
                            onChange={handleContraseñaEvaluadorChange}
                            type='text'
                            className={`form-control ${errors.contraseña_evaluador ? 'is-invalid' : ''}`}
                        />
                        {errors.contraseña_evaluador && (
                            <div className='invalid-feedback'>{errors.contraseña_evaluador}</div>
                        )}
                    </div>

                    <button type='submit' className='btn btn-primary mb-1 mr-1'>
                        Guardar Cambios
                    </button>
                    <Link to='/admin/encargado' className='btn btn-secondary mb-1 mr-1'>
                        Volver atrás
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CompEditEncargado;