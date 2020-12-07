import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {

    const [categories, setCategories ] = useState([]);


    return (
        <div className="mini-navbar">
            <h2>Giffy App!</h2>
            <AddCategory setCategories= {setCategories} categories = {categories}/> 
            <hr />

            <ol>
                {
                    categories.map( (cat) => {
                        return <GifGrid category= {cat} key={cat}/>
                    })
                }
            </ol>
        </div>

    );
}

export default GifExpertApp;