import React from 'react'
import "./index.css";
import imgagronomia from "../../../assets/agra/agronomia.png"
import imgbiotecnologia from "../../../assets/agra/biotecnologia.png"
import imgrecursosnaturales from "../../../assets/agra/recursosnaturales.png"
import Imgveterinaria from "../../../assets/agra/veterinaria.png"
function Agrarias() {
  const carrera=[ 
    {
      imagen: imgagronomia,
      nombre:"Agronomía",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgbiotecnologia,  
      nombre:"Ingeniería en Biotecnología",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgrecursosnaturales,
      nombre:"Ingeniería en Recursos Naturales",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: Imgveterinaria,
      nombre:"Medicina Veterinaria",
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
  
  export default Agrarias