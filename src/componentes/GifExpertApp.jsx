import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

   return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />  {/* Actualiza el estado de los nombre de las categoria inicial, */}
            <hr />
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}/> )
                }
            </ol>
        </>
    )
}

export default GifExpertApp