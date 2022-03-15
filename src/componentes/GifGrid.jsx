import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3> {/* Nombre del personaje que quiere que salga en el giphy */}
            { loading && <p className='animate__animated animate__flash animate__infinite animate__slow'>Loading...</p> }
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem /* Esto devuelve 10 card con su imagen y titulo */
                            key={img.id}
                            {...img}
                        />)
                    )
                }
            </div>
        </>
    )
}

export default GifGrid