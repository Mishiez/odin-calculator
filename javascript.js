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