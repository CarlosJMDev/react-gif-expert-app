import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }
  
  useEffect( () => {
    getImages();
  }, [ ]) //!Si se queda vacia solo se ejecutará la primera vez que se renderice

  return {
    // images: images,
    images,
    isLoading
  }
}
