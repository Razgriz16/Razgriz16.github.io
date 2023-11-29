import axios from '../../Momentaneo/Axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/admin/admin/';

const CompEditAdmin = () => {
    const [rut_administrador, setRut_administrador] = useState('');
    const [id_rol, setId_rol] = useState('');
    const [correo_administrador, setCorreo_administrador] = useState('');
    const [contraseña_administrador, setContraseña_administrador] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id_administrador } = useParams();

    useEffect(() => {
        getAdministradorByRut();
    }, []);

    const getAdministradorByRut = async () => {
        try {
            const res = await axios.get(URI + id_administrador);
            setRut_administrador(res.data.rut_administrador);
            setId_rol(res.data.id_rol);
            setCorreo_administrador(res.data.correo_administrador);
            setContraseña_administrador(res.data.contraseña_administrador);
        } catch (error) {
            console.error('Error al obtener datos del administrador:', error);
        }
    };

    const handleRutChange = (e) => {
        setRut_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, rut_administrador: '' }));
    };

    const handleIdRolChange = (e) => {
        setId_rol(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, id_rol: '' }));
    };

    const handleCorreoChange = (e) => {
        setCorreo_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, correo_administrador: '' }));
    };

    const handleContraseñaChange = (e) => {
        setContraseña_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, contraseña_administrador: '' }));
    };

    const update = async (e) => {
        e.preventDefault();

        // Validar campos
        const newErrors = {};
        if (!rut_administrador) {
            newErrors.rut_administrador = 'El campo Rut es obligatorio';
        }
        if (!correo_administrador) {
            newErrors.correo_administrador = 'El campo Correo es obligatorio';
        }
        if (!contraseña_administrador) {
            newErrors.contraseña_administrador = 'El campo Contraseña es obligatorio';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Detener el envío del formulario si hay errores
        }

        // Enviar el formulario si no hay errores
        try {
            await axios.put(URI + id_administrador, {
                rut_administrador,
                id_rol: 3, // Fijar el valor de ID Rol en 3
                correo_administrador,
                contraseña_administrador,
            });
            navigate('/admin/admin');
        } catch (error) {
            console.error('Error al actualizar el administrador:', error);
        }
    };

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Edita al administrador</h2>
                <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Rut</label>
                        <input
                            value={rut_administrador}
                            onChange={handleRutChange}
                            type='text'
                            className={`form-control ${errors.rut_administrador ? 'is-invalid' : ''}`}
                        />
                        {errors.rut_administrador && (
                            <div className='invalid-feedback'>{errors.rut_administrador}</div>
                        )}
                    </div>
                    <div className='mb-3'>
    <label className='form-label'>ID Rol</label>
    <input
        value="3 - Administrador" // Valor fijo con mensaje
        readOnly // Hacer el campo de solo lectura
        type='text'
        className='form-control'
    />
</div>
                    <div className='mb-3'>
                        <label className='form-label'>Correo</label>
                        <input
                            value={correo_administrador}
                            onChange={handleCorreoChange}
                            type='text'
                            className={`form-control ${errors.correo_administrador ? 'is-invalid' : ''}`}
                        />
                        {errors.correo_administrador && (
                            <div className='invalid-feedback'>{errors.correo_administrador}</div>
                        )}
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_administrador}
                            onChange={handleContraseñaChange}
                            type='text'
                            className={`form-control ${errors.contraseña_administrador ? 'is-invalid' : ''}`}
                        />
                        {errors.contraseña_administrador && (
                            <div className='invalid-feedback'>{errors.contraseña_administrador}</div>
                        )}
                    </div>

                    <button type='submit' className='btn btn-primary mb-1 mr-1'>
                        Guardar Cambios
                    </button>
                    <Link to='/admin/admin' className='btn btn-secondary mb-1 mr-1'>
                        Volver atrás
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CompEditAdmin;
