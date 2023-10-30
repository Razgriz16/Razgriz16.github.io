import React from 'react';
import './admin.css';
import Navbar from '../../Componentes/Navbar';
import Foooter from '../../Componentes/Footer';
import CompShowEstudiante from '../../Momentaneo/ShowEstudiante';
import CompShowRamo from '../../Momentaneo/ShowRamo';
import CompShowCarrera from '../../Momentaneo/ShowCarrera';
import CompShowFacultad from '../../Momentaneo/ShowFacultad';
import CompShowAdmin from '../../Momentaneo/ShowAdmin';
import CompShowEncargado from '../../Momentaneo/ShowEncargado';
import 'bootstrap/dist/css/bootstrap.min.css';

function Estd() {
    return (
        <div className="tabla-estudiantes">
            <Navbar />
            <p className="text-center" style={{ fontSize: '25px', padding: '10px' }}>Bienvenido, Admin. Administre los datos.</p>

            <div className="container" style={{marginBottom: '80px'}}>
                <h1>Tabla estudiante</h1>
                <CompShowEstudiante></CompShowEstudiante>

                <h1>Tabla ramo</h1>
                <CompShowRamo></CompShowRamo>

                <h1>Tabla carrera</h1>
                <CompShowCarrera></CompShowCarrera>

                <h1>Tabla Facultad</h1>
                <CompShowFacultad></CompShowFacultad>

                <h1>Tabla Administradores</h1>
                <CompShowAdmin></CompShowAdmin>

                <h1>Tabla Encargado</h1>
                <CompShowEncargado></CompShowEncargado>
            </div>

            <Foooter />
        </div>
    );
}

export default Estd;
