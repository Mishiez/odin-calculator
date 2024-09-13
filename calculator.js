const num1=56;
const num2=37;
const operator="/";

function addOperators(){
    return num1+num2;
}
function subtractOperators(){
    return num1-num2;
}
function multiplyOperators(){
    return num1*num2;
}
function divideOperators(){
    return num1/num2;
}

function operate(){
    const operators={
        "+":(a,b)=>addOperators(),
        "-":(a,b)=>subtractOperators(),
        "*":(a,b)=>multiplyOperators(),
        "/":(a,b)=>divideOperators()
    };
    let result=operators[operator](num1,num2);
    return result;
}