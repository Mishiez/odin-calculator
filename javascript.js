let operation;
let num1;
let num2;

const operate = (operation,num1,num2)=>{
    switch (operation){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;   
        case "/":
            return num1 / num2;
        default:
            return "Operation not recognized";
    }
}

const buttons = document.getElementsByTagName("button");
const display = document.getElementById("display");

Array.from(buttons).forEach(button=>
    button.addEventListener("click",showNumber)
);

function showNumber(event){
    const button = event.target;
    //if ((button.value!="del") || (button.value!="equal-sign") || (button.value!="clear-button")){
        display.innerHTML += button.value;
   // }
}