import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Valorant']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) }
        // setCategories={setCategories}
      />

      {/* Listado de Gif */}
        { categories.map( (category) =>
          // <li key={category}>{category}</li> 
              <GifGrid 
                key={category} 
                category={category}
              />
          ) 
        }
    </>
  )
}
