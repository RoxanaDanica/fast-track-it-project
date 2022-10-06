import React from "react";

import "../Styles/MoviePage.css";

function MoviePage(props){
    return(
        <div className="MoviePage-div">
            <img className="MoviePage-img" src={props.movie.poster_path}/>
            <div className="MoviePage-text">
                <h2>{props.movie.title}</h2>
                <h5>{props.movie.release_date}</h5>
                <h5>{props.movie.popularity}</h5>
                <p>{props.movie.overview}</p>
            </div>
        </div>
    )
}

export default MoviePage;