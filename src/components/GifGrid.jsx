//*Primero importaciones de react
// import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

//* Importaciones de componentes o Hooks
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//* Importaciones de funciones que no son ni componentes ni hooks
// import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category)

  // console.log({images, isLoading});

  return (
    <>
      <h3>{ category }</h3>
      {/* {
        isLoading ? ( <h2 >Cargando...</h2> ) : null
      } */}
      {
        isLoading && ( <h2 >Cargando...</h2> )
      }

      
      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={image.id}
              // title={title}
              // url={url}
              { ...image } //? Con esto esparcimos todos los atributos de image pasandolos como props
            />
          ))
        }
      </div>
    </>
  )
}


GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}