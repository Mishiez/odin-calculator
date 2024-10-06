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

let display=document.querySelector("p");

const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener("click",click);
});
function click(){
  let buttonClicked=document.getElementById(this.id).value;
  display.innerHTML+=buttonClicked;
}

const clearButton=document.querySelector("#clear");
clearButton.addEventListener("click",clearDisplay);
function clearDisplay(){
  display.innerHTML="";
}

const deleteButton=document.querySelector("#delete");
deleteButton.addEventListener("click",deletePreviousEntry);
function deletePreviousEntry(){
  const str=display.innerText;
  const newStr=str.slice(0,-1);
  display.innerHTML=newStr;
}
