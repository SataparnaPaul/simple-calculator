import React from "react"
import ButtonComponent from "./ButtonComponent"
import '../App.css'

export default function ButtonCOntainer(props){
    const BUTTONS =["1","2","3","4","5","6","7","8","9","0","+","-","*","/","AC"]
    return (
        <div className="bttn">
        { BUTTONS.map((btn) =>(
    
        <ButtonComponent onClick={props.onClick} text={btn} />
    
    ))}
    </div>
    );
    
}