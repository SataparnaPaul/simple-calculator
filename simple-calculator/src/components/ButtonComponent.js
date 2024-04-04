import React from "react"
import '../App.css';


export default function ButtonComponent(props){
    return(
        <span>
    <button onClick={() =>{props.onClick(props.text)}}>{props.text}</button>
    </span> );
}