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
    if (button.value=="del"){
        deleteControl();
    }
    else if(button.value=="equal-sign"){
        display.innerHTML = "equal-sign";   
    }
    else if(button.value=="clear"){
        clearControl();  
    }
    else{
        display.innerHTML += button.value;
    }
}

function clearControl(){
    display.innerHTML = '';
}

function deleteControl(){
    display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length - 1);
}