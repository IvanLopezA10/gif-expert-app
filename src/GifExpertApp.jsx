import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory =(newCategory)=>{
        //setCategories([ newCategory,...categories ]);
        if ( categories.includes(newCategory) ) return;
        setCategories((categories)=>[newCategory,...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory={(value)=>onAddCategory(value)}
        />
        {   categories.map(category => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            )) 
        }
            
    </>
  )
}

export default GifExpertApp
