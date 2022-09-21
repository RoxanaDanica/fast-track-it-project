import React from "react";
import TopPage from "./TopPage";

function MoviePage(props){
    return(
        <div>
            <button onClick={()=> {props.changeStateFunction('TopPage')}}>TopPage</button>
        </div>
    
    )
}

export default MoviePage;