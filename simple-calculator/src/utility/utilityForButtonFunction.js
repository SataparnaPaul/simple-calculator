function onPressButtonDisplay(textPressed,text){
// switch(props){
//     case  "=":
//break;
//     onPressButtonCalculate();
//     case "+":

// }
if(text ==="AC") {
    return ""
}
else if(text ==="="){
    return onPressButtonCalculate(textPressed)
}
else if(text ==="+"){
    return textPressed+text;
}
else if(text ==="-"){
    return textPressed-text;
}
else if(text ==="*"){
    return textPressed*text;
}
else if(text ==="/"){
    return textPressed/text;
}
}

function onPressButtonCalculate(textPressed){
   return eval(textPressed);
}

// function display(text){
//     console.log(text);
// }

export {onPressButtonDisplay};