import React, { useState } from 'react'

const AddCategory = ({ setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.currentTarget.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!(inputValue === '')){
            setCategories([inputValue, ...categories])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h4>{inputValue}</h4>
            <input 
            type= "text" 
            placeholder="Search for any Gifs!!"
            onChange = { handleInputChange }
            value = {inputValue}
            ></input>
        </form>
    )
}

export default AddCategory;