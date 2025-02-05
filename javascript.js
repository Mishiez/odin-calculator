let operation="+";
let num1=15;
let num2=15;

const calculate = (operation,num1,num2)=>{
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