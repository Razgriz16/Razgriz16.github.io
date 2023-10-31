import React from 'react'
import "./index.css";
import imgreligion from "../../../assets/religion/religiones.png"
function CienciasReligiosas() {
  const carrera=[ 
    {
      imagen: imgreligion,
      nombre:"Pedagogía en Religión y Filosofía",
      descripcion:"Ver Postulantes a Ayudantias"
    }
  ]
    return (
      <section className="contenedor-tarjeta" >
        {
          carrera.map (item => (
            <a href='/encargado/122956847'>
          <article className="tarjeta" key={item.nombre}>
            <img src={item.imagen} alt={item.nombre} className=""/>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>  
          </article>
          </a>
          ))
        }
        </section>
    )
  }
  
  export default CienciasReligiosas