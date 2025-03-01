let operator="";
let num1="";
let num2="";

const operate = (operator,num1,num2)=>{
    switch (operator){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "x":
            return num1 * num2;
            break;  
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
        default:
            return "Operation not recognized";
    }
}

const buttons = document.getElementsByTagName("button");
const display = document.getElementById("display");
let result;




Array.from(buttons).forEach(button=>
    button.addEventListener("click",showNumber)
);

function showNumber(event){
    const button = event.target;
    if (button.value=="del"){
        deleteControl();
    }
    else if(button.value=="equal-sign"){
        display.innerHTML = operate(operator,parseFloat(num1),parseFloat(num2));
        result = operate(operator,parseFloat(num1),parseFloat(num2));
        operator = '';
        num1 = result;   
    }
    else if(button.value=="clear"){
        clearControl();  
    }
    else{
        display.innerHTML += button.value;
    }
}

function clearControl(){
    num1 = "";
    num2 = "";
    operator = "";
    display.innerHTML = '';
}

function deleteControl(){
    display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length - 1);
}

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
    
numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            num1 += e.target.innerText;
            console.log(num1)
        } else { // Read second number
            num2 += e.target.innerText;
            console.log(num2)
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;

            console.log(num1); // Print the first number
            console.log(operator); // Print the operator

        }
        

        else { // If equals button clicked
            console.log(num2); // Print 2nd number
            console.log(result);

            operate(operator,parseFloat(num1),parseFloat(num2));
            num1 = result;
            num2 = '';
        }

    });
});








//SOLUTION A
/*
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            num1 += e.target.innerText;
            console.log(num1)
        } else { // Read second number
            num2 += e.target.innerText;
            console.log(num2)
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;

            console.log(num1); // Print the first number
            console.log(operator); // Print the operator

        } else { // If equals button clicked
            console.log(num2); // Print 2nd number

            operate(operator,parseInt(num1),parseInt(num2));
        }

    });
});
*/