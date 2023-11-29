import React from "react";
import "./preguntas.css";
import Navbar from "../../Navbar/index";
import Footer from "../../Footer/index";

const VistaPreguntas = () => {
  return (
    <>
      <Navbar />
      <div className="vista-estudiantes">
        <div className="contenido">
          <p style={{ fontSize: "25px", textAlign: "center" }}>
            Preguntas Frecuentes
          </p>

          <div className="Titulo">
            <p>
              Entendiendo el PPA (Promedio Ponderado Anual)
            </p>
            <p>
              El Promedio Ponderado Anual, o PPA, es una métrica crucial en el
              ámbito educativo. Este indicador resume el rendimiento académico a
              lo largo de un año, teniendo en cuenta la ponderación de las
              diferentes asignaturas.
            </p>
          </div>

          <div className="preguntas">
            <p>¿Cómo se calcula el PPA?</p>
            <p>
              El PPA se obtiene al multiplicar la calificación de cada
              asignatura por el número de créditos correspondientes, sumando
              estos valores y dividiendo el resultado entre el total de
              créditos. Este método proporciona una visión más precisa del
              desempeño, destacando la importancia de cada materia en el
              resultado final.
            </p>
          </div>

          <div className="preguntas">
            <p>¿Por qué es importante el PPA?</p>
            <p>
              El PPA refleja de manera integral el rendimiento del estudiante,
              considerando tanto la calidad como la cantidad de sus logros
              académicos. Es una herramienta valiosa para evaluar el progreso a
              lo largo del tiempo y ayuda a tomar decisiones informadas sobre
              la trayectoria educativa.
            </p>
          </div>

          <div className="preguntas">
            <p>¿Por qué no puedo postular?</p>
            <p>
              Si no puedes postular, debes revisar que cumplas con los
              requisitos solicitados:
              <br />
              1- Tener aprobada la asignatura a la que deseas postular.
              <br />
              2- Tener un promedio en asignatura superior a 4.5.
              <br />
              3- Tener un PPA mayor a 4.5.
              <br />
              4- No haber superado el máximo de 8 horas de ayudantía semanal.
            </p>
          </div>

          <div className="preguntas">
            <p>¿Cuáles son las fechas?</p>
            <p>
              Las fechas de postulación se indican siempre en el inicio de la
              página, si tienes dudas puedes acercarte a secretaria y consultar.
            </p>
          </div>

          <div className="preguntas">
            <p>¿A cuántas ayudantías puedo postular?</p>
            <p>
              Puedes postular a todas las ayudantías que tu dispongas, siempre
              y cuando la sumatoria de horas de estas no superen el máximo de 8
              horas semanales.
            </p>
          </div>

          <p style={{ textAlign: "center" }}>
            Conoce tu PPA, comprende tu éxito académico.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default VistaPreguntas;
