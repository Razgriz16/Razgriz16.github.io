import React from 'react'
import "./index.css";
import imggeologia from "../../../assets/cienbasi/geologia.png"
import imgestadistica from "../../../assets/cienbasi/estadisticas.png"
import imgmatematica from "../../../assets/cienbasi/matematica.png"
import imgciencias from "../../../assets/cienbasi/ciencias.png"
import imgmatecompu from "../../../assets/cienbasi/matemacompu.png"
function CienciasBasicas() {
  const carrera=[ 
    {
      imagen: imggeologia,
      nombre:"Geología",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgestadistica,
      nombre:"Ingeniería en Estadística",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgmatematica,
      nombre:"Ingeniería Matemática",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgciencias,
      nombre:"Pedagogía en Ciencias",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgmatecompu,
      nombre:"Pedagogía en Matemática y Computación",
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
  
  export default CienciasBasicas