import React, { useState } from "react";

function Task(props){
    return (
        <li onClick = {() => {
            props.onChecked(props.id);
        }}
        >
            {props.text}
        </li>
    )
}
export default Task;



/*const [isClicked, setClickedState] = useState(false);
    function handleClick() {
        !isClicked ? setClickedState(true) : setClickedState(false);
    } 
    */
/*      <li style = {{ textDecoration: isClicked ? "line-through" : "none" }}
            onClick = {handleClick}
        >
            {props.text}
        </li> */