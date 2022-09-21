import React from "react";
import MoviePage from "./MoviePage";

function TopPage(props){
    return(
        <div>
            <button onClick={()=> {props.changeStateFunction('MoviePage')}}>MoviePage</button>
        </div>
    )
}
export default TopPage;