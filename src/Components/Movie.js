import React from "react";
import '../Styles/Movie.css'

function Movie(props){
    return (
        <div className="Movie-div">
            <img className="Movie-img" src={props.movie.poster_path}/>
            <h2>{props.movie.title}</h2>
            <h3>{props.movie.release_date}</h3>
            <h3>{props.movie.popularity}</h3>
            <h3>{props.movie.overview}</h3>


        </div>
    )
}

export default Movie;