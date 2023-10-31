
import React from "react";
import "./app.css";
import { BrowserRouter, useRoutes} from "react-router-dom";
import Login from '../Login'
import Estudiante from '../Estudiante'
import Admin from '../Admin'
import CompCreateEstudiante from '../../Momentaneo/CreateEstudiante';
import CompEditEstudiante from "../../Momentaneo/EditEstudiante";
import CompEditRamo from "../../Momentaneo/EditRamo";
import CompCreateRamo from "../../Momentaneo/CreateRamo";
import CompEditCarrera from "../../Momentaneo/EditCarrera";
import CompCreateCarrera from "../../Momentaneo/CreateCarrera";
import CompEditFacultad from "../../Momentaneo/EditFacultad";
import CompCreateFacultad from "../../Momentaneo/CreateFacultad";
import CompEditAdmin from "../../Momentaneo/EditAdmin";
import CompCreateAdmin from "../../Momentaneo/CreateAdmin";
import CompEditEncargado from "../../Momentaneo/EditEncargado";
import CompCreateEncargado from "../../Momentaneo/CreateEncargado";
import Encargadoxdd from "../../Momentaneo/Encargadoxdd";
import Educacion from "../E_Educacion/Index";
import EMedicina from "../E_Medicina/Index";
import EIngenieria from "../E_Ingenieria/Index.js";
import EBasicas from "../E_Basicas/Index.js";
import ESociales from "../E_Sociales/Index.js";
import ESalud from "../E_Salud/Index.js";
import EAgraria from "../E_Agraria/Index.js";
import EReligion from "../E_Religion/Index.js";
//import CompShowEstudiante from '../../estudiante/ShowEstudiante';


const AppRutas = () => useRoutes([
  {path: "/", element: <Login/>},
  {path: "/sign-in", element: <Login/>},
  {path: "/estudiante", element: <Estudiante/>},
  // {path: "/encargado/", element: <Encargadoxdd/>},
  // {path: "/encargado/:id_encargado", element: <Encargadoxdd/>},
  {path: "/encargado/142562369", element: <EMedicina/>},
  {path: "/encargado/623545233", element: <EIngenieria/>},
  {path: "/encargado/122956847", element: <EBasicas/>},
  {path: "/encargado/201712513", element: <Educacion/>},
  {path: "/encargado/201792513", element: <ESociales/>},
  {path: "/encargado/201359027", element: <ESalud/>},
  {path: "/encargado/207410935", element: <EAgraria/>},
  {path: "/encargado/207892351", element: <EReligion/>},
  {path: "/admin", element: <Admin/>},
  {path: "/admin/crear_estudiante", element: <CompCreateEstudiante/>},
  {path: "/admin/editar_estudiante/:id_estudiante", element: <CompEditEstudiante/>},
  {path: "/admin/crear_ramo", element: <CompCreateRamo/>},
  {path: "/admin/editar_ramo/:id", element: <CompEditRamo/>},
  {path: "/admin/crear_carrera", element: <CompCreateCarrera/>},
  {path: "/admin/editar_carrera/:id", element: <CompEditCarrera/>},
  {path: "/admin/crear_facultad", element: <CompCreateFacultad/>},
  {path: "/admin/editar_facultad/:id", element: <CompEditFacultad/>},
  {path: "/admin/crear_administrador", element: <CompCreateAdmin/>},
  {path: "/admin/editar_administrador/:id_administrador", element: <CompEditAdmin/>},
  {path: "/admin/crear_encargado", element: <CompCreateEncargado/>},
  {path: "/admin/editar_encargado/:id_evaluador", element: <CompEditEncargado/>},
])

function App() {
  return (
    <BrowserRouter> 
      <AppRutas/>
    </BrowserRouter>
  );
}

export default App;
