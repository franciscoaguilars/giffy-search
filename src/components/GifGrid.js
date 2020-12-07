import React, {useEffect, useState} from 'react'
import GifGridItem from './GifGridItem';
const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);


    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=KnqrOs6orhs7p7WzbKTdNlZ8JhHtdAxJ&q=${encodeURI(category)}&limit=5`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        setImages(gifs);
    }


    return (
        <>
        <h3>{category}</h3>
        <div className = "card-grid">
            {images.map( img => <GifGridItem key = {img.id} title= { img.title } url={img.url}/>)}
        </div>
        </>
    );
}

export default GifGrid;
