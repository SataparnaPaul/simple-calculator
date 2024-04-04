import {useState} from "react";
import TextComponent from "./components/TextComponent";
import ButtonContainer from "./components/ButtonCOntainer";
import {onPressButtonDisplay} from "./utility/utilityForButtonFunction";

export default function App (){
  const [expression,setExpression] = useState("");
  const updateExpression = (textPressed) =>{
    setExpression(onPressButtonDisplay(expression,textPressed))
  };
  return (
  <div>
    <div className="text-component">
  <TextComponent  textPressed={expression}/></div>
  <div><ButtonContainer onClick={updateExpression}/></div>
  </div>
  );
}