function add(){
    displayValue = parseFloat(displayValue) + parseFloat(secondNumber);
    displayValue = Number(displayValue.toFixed(2));
    secondNumber="";
}
function subtract(){
    displayValue = parseFloat(displayValue) - parseFloat(secondNumber);
    displayValue = Number(displayValue.toFixed(2));
    secondNumber="";
}
function multiply(){
    displayValue = parseFloat(displayValue) * parseFloat(secondNumber);
    displayValue = Number(displayValue.toFixed(2));
    secondNumber="";
}
function divide(){
    displayValue = parseFloat(displayValue) / parseFloat(secondNumber);
    displayValue = Number(displayValue.toFixed(2));
    secondNumber="";
}
function operate(){
    let value;
    if(operator_ === "*" && secondNumber != ""){
        multiply();
    }
    if(operator_ === "+" && secondNumber != ""){
        add();
    }
    if(operator_ === "÷" && secondNumber != ""){

        if(parseFloat(secondNumber) === 0){
            header.textContent = "ERROR";
        }
        else{
            divide();
        }

     }
     if(operator_ === "-" && secondNumber != ""){
        subtract();
     }
    return value 
}
function equalReset(){
    if(operator_ === "="){
        displayValue ="";
        secondNumber ="";
        firstC = true;
    }
}

let displayValue = "";
let secondNumber = "";


let operator_ = "";
let firstC = true;
const Zero = document.querySelector(".Zero");
const One = document.querySelector(".One");
const Two = document.querySelector(".Two");
const Three = document.querySelector(".Three");
const Four = document.querySelector(".Four");
const Five = document.querySelector(".Five");
const Six = document.querySelector(".Six");
const Seven = document.querySelector(".Seven");
const Eight = document.querySelector(".Eight");
const Nine = document.querySelector(".Nine");
const header = document.querySelector(".header");
const plus = document.querySelector(".plus");
const multi = document.querySelector(".multiply");
const div = document.querySelector(".divide");
const sub = document.querySelector(".substract");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const backspace = document.querySelector(".backspace")

backspace.addEventListener('click',() =>{
if(parseFloat(header.textContent) != 0){
    if(firstC){
         displayValue = displayValue.slice(0,-1);
    header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber.slice(0,-1);
    header.textContent = secondNumber;
    }
}
else if(displayValue === ""){
    header.textContent = "0";
}

});
Zero.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "0";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "0";
        header.textContent = secondNumber;
    }
});
One.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "1";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "1";
        header.textContent = secondNumber;
    }
});
Two.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "2";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "2";
        header.textContent = secondNumber;
    }
   
});
Three.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "3";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "3";
        header.textContent = secondNumber;
    }
   
});
Four.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "4";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "4";
        header.textContent = secondNumber;
    }
   
});
Five.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "5";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "5";
        header.textContent = secondNumber;
    }
   
});
Six.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "6";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "6";
        header.textContent = secondNumber;
    }
   
});
Seven.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "7";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "7";
        header.textContent = secondNumber;
    }
   
});
Eight.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "8";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "8";
        header.textContent = secondNumber;
    }
   
});
Nine.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "9";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "9";
        header.textContent = secondNumber;
    }
   
});
plus.addEventListener('click',() =>{
    if(!firstC){
        operate();
        header.textContent = displayValue;
        operator_ ="+";
    }
    else if(displayValue != ""){
        operator_ ="+";
        firstC = false; 
    }
});
point.addEventListener('click',() =>{

    if(!header.textContent.includes(".")){

    if(firstC){
        displayValue = displayValue + ".";
        header.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + ".";
        header.textContent = secondNumber;
    }
}
});
multi.addEventListener('click',() =>{
    if(!firstC){
        operate();
        header.textContent = displayValue;
        operator_ ="*";
    }
    else if(displayValue != ""){
        operator_ ="*";
        firstC = false;
    }
});
div.addEventListener('click',() =>{
    if(!firstC){
        operate();
        header.textContent = displayValue;
        operator_ ="÷";
    }
    else if(displayValue != ""){
        operator_ ="÷";
        firstC = false;
    }
});
sub.addEventListener('click',() =>{
    if(!firstC){
        operate();
        header.textContent = displayValue;
        operator_ ="-";
    }
    else if(displayValue != ""){
        operator_ ="-";
        firstC = false;
    }
});
equal.addEventListener('click',() =>{

    operate();
    operator_ = "=";
    header.textContent = displayValue;
    
});

clear.addEventListener('click',() =>{
    
    header.textContent = "0";
    displayValue ="";
    secondNumber ="";
    operator_="";
    firstC = true;

});
