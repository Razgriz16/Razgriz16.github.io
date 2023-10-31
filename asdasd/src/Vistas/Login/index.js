import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="form-container">
      <section className="card">
        <h3>Ingrese sus credenciales</h3>

<div>
  <input
    type="text"
    className="input"
    placeholder="Rut"
  />
</div>
<div>
  <input
    type="password"
    className="input"
    placeholder="Contraseña"
  />
</div>


        <div className="button-container">
          <button>
            <Link className="access-button" to="/estudiante">
              Acceder
            </Link>
          </button>
        </div>
        <div>
  <p className="parrafo">
    <a href="https://gestion-clave.ucm.cl/#/">¿Olvidó su contraseña?</a>
  </p>
</div>
      </section>
    </form>
  );
}
export default Login;
