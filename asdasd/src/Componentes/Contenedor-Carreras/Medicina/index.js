import React from 'react'
import "./index.css";
import imgbiome from "../../../assets/medi/biomedico.png"
import imgbiomedica from "../../../assets/medi/biome.png"
import imgmedicina from "../../../assets/medi/medico.png"
import imgquimi from "../../../assets/medi/farmacia.png"

function Medicina() {
  const carrera=[ 
    {
      imagen: imgbiome,
      nombre:"BACHILLERATO EN CIENCIAS BIOMÉDICAS",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgbiomedica,
      nombre:"BIOINGENIERÍA MÉDICA",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgmedicina,
      nombre:"MEDICINA",
      descripcion:"Ver Postulantes a Ayudantias"
    },
    {
      imagen: imgquimi,
      nombre:"QUÍMICA Y FARMACIA",
      descripcion:"Ver Postulantes a Ayudantias"
    },
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
  
  export default Medicina