import axios from '../../Momentaneo/Axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/admin/admin/';

const CompCreateAdmin = () => {
    const [rut_administrador, setRut_administrador] = useState('');
    const [correo_administrador, setCorreo_administrador] = useState('');
    const [contraseña_administrador, setContraseña_administrador] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleRutChange = (e) => {
        setRut_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, rut: '' }));
    };

    const handleCorreoChange = (e) => {
        setCorreo_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, correo: '' }));
    };

    const handleContraseñaChange = (e) => {
        setContraseña_administrador(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, contraseña: '' }));
    };

    const store = async (e) => {
        e.preventDefault();

        // Validar campos
        const newErrors = {};
        if (!rut_administrador) {
            newErrors.rut = 'El campo Rut es obligatorio';
        }
        if (!correo_administrador) {
            newErrors.correo = 'El campo Correo es obligatorio';
        }
        if (!contraseña_administrador) {
            newErrors.contraseña = 'El campo Contraseña es obligatorio';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Detener el envío del formulario si hay errores
        }

        // Enviar el formulario si no hay errores
        await axios.post(URI, {
            rut_administrador,
            id_rol: 3, // Fijar el valor de ID Rol en 3
            correo_administrador,
            contraseña_administrador,
        });

        navigate('/admin/admin');
    };

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Crear un nuevo Admin</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Rut</label>
                        <input
                            value={rut_administrador}
                            onChange={handleRutChange}
                            type='text'
                            className={`form-control ${errors.rut ? 'is-invalid' : ''}`}
                        />
                        {errors.rut && <div className='invalid-feedback'>{errors.rut}</div>}
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
                            className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                        />
                        {errors.correo && <div className='invalid-feedback'>{errors.correo}</div>}
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_administrador}
                            onChange={handleContraseñaChange}
                            type='text'
                            className={`form-control ${errors.contraseña ? 'is-invalid' : ''}`}
                        />
                        {errors.contraseña && <div className='invalid-feedback'>{errors.contraseña}</div>}
                    </div>
                    <button type='submit' className='btn btn-primary btn-lg mb-1 mr-1'>
                        Guardar cambios
                    </button>
                    <Link to="/admin/admin" className='btn btn-secondary btn-lg mb-1 mr-1'>
                        Volver atrás
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CompCreateAdmin;
