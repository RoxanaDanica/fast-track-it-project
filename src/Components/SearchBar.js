import React, { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTextChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;