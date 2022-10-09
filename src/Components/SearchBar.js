import React, { useState } from "react";

import '../Styles/SearchBar.css'

function SearchBar(props) {
    const [inputText, setInputText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.searchMovieFunction(inputText);
    }

    function handleTextChange(event) {
        setInputText(event.target.value)
    }

    return (
        <div className="SearchBar-div">
            <form className="SearchBar-form" onSubmit={handleSubmit}>
                <input className="SearchBar-input" type="text" placeholder="Search for a movie..." onChange={handleTextChange} />
                <button className="SearchBar-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;