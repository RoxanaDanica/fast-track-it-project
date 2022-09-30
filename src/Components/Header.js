import React from "react";

function Header(props) {
    return(
        <div>
           <button>Rating</button>
           <button>Date</button>
           <button>Genre</button>
           <button>Name</button>
           <button onClick={()=> {props.changeStateFunction('TopPage')}}>TopPage</button>
           <button onClick={()=> {props.changeStateFunction('MoviePage')}}>MoviePage</button>
        </div>
    )
}

export default Header;