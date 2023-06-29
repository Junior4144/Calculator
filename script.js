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
            output.textContent = "ERROR";
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
const a = document.querySelectorAll(".btn");

a.forEach(function(b){
  b.addEventListener('mouseover',() =>{
    b.style.backgroundColor = "#9BA99C";
  });
  b.addEventListener('mouseout',() =>{
    b.style.backgroundColor = "#ACBBAD";
  });
  b.addEventListener('mouseup',() =>{
    b.style.backgroundColor = "#9BA99C";
  });
  b.addEventListener('mousedown',() =>{
    b.style.backgroundColor = "#889589";
  });

});

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
const output = document.querySelector(".output");
const top_ = document.querySelector(".top");

backspace.addEventListener('click',() =>{
if(parseFloat(output.textContent) != 0){
    if(firstC){
         displayValue = displayValue.slice(0,-1);
         output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber.slice(0,-1);
        output.textContent = secondNumber;
    }
}
else if(displayValue === ""){
    output.textContent = "0";
}
});
Zero.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "0";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "0";
        output.textContent = secondNumber;
    }
});
One.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "1";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "1";
        output.textContent = secondNumber;
    }
});
Two.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "2";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "2";
        output.textContent = secondNumber;
    }
   
});
Three.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "3";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "3";
        output.textContent = secondNumber;
    }
   
});
Four.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "4";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "4";
        output.textContent = secondNumber;
    }
   
});
Five.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "5";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "5";
        output.textContent = secondNumber;
    }
   
});
Six.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "6";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "6";
        output.textContent = secondNumber;
    }
   
});
Seven.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "7";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "7";
        output.textContent = secondNumber;
    }
   
});
Eight.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "8";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "8";
        output.textContent = secondNumber;
    }
   
});
Nine.addEventListener('click',() =>{
    equalReset();
    if(firstC){
        displayValue = displayValue + "9";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + "9";
        output.textContent = secondNumber;
    }
   
});
plus.addEventListener('click',() =>{
    if(!firstC){
        
        operate();
       
        output.textContent = displayValue;
        operator_ ="+";
        top_.textContent = displayValue + " " + operator_;
    }
    else if(displayValue != ""){
        
        operator_ ="+";
        top_.textContent = displayValue + " " + operator_;
        firstC = false; 
    }
});
point.addEventListener('click',() =>{

    if(!output.textContent.includes(".")){

    if(firstC){
        displayValue = displayValue + ".";
        output.textContent = displayValue;
    }
    else{
        secondNumber = secondNumber + ".";
        output.textContent = secondNumber;
    }
}
});
multi.addEventListener('click',() =>{
    if(!firstC){
        operate();
        output.textContent = displayValue;
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
        output.textContent = displayValue;
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
        output.textContent = displayValue;
        operator_ ="-";
    }
    else if(displayValue != ""){
        operator_ ="-";
        firstC = false;
    }
});
equal.addEventListener('click',() =>{
    if(!top_.textContent.includes("=")){
    top_.textContent = top_.textContent + " " + secondNumber + " =";
    }
    operate();
    operator_ = "=";
    output.textContent = displayValue;
    
});

clear.addEventListener('click',() =>{
    
    output.textContent = "0";
    displayValue ="";
    secondNumber ="";
    operator_="";
    firstC = true;
    top_.textContent = "";
    
});

