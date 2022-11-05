let btns = document.querySelectorAll(".button");
let numberBtns = document.querySelectorAll(".numberBtn");
let displayText = document.querySelector(".display");
let delBtn = document.querySelector(".deleteAll");
let operatorBtns = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector(".equals");
let decimalBtn = document.querySelector(".decimal");
let bBtn = document.querySelector(".backspace");

let valA = "";
let valB = "";
let operator = "";
let result = "";
let toBeCleared = false;
let canAddMoreZeros = false;
let canAddDecimal = true;

btns.forEach(btn => btn.addEventListener("mousedown", btnMouseDown));
btns.forEach(btn => btn.addEventListener("mouseup", btnMouseUp));
numberBtns.forEach(btn => btn.addEventListener("click", numberBtnClicked));
delBtn.addEventListener("click", deleteAll);
operatorBtns.forEach(btn => btn.addEventListener("click", operatorBtnClicked));
equalsBtn.addEventListener("click", doMaths);
decimalBtn.addEventListener("click", decimalBtnClicked);
bBtn.addEventListener("click", iDontDoAnything);

function iDontDoAnything(){
    displayText.textContent = "Im hacker button";
}

function btnMouseDown(e){
    e.target.setAttribute("id", "mouseDown");
}
function btnMouseUp(e){
    e.target.removeAttribute("id");
}
function decimalBtnClicked(e){
    isTextTooLong();

    if(canAddDecimal){

        if(toBeCleared){
            deleteAll();
            toBeCleared = false;
        }

        if(valB === ""){
            valB = "0";
        }
        valB += ".";
        if (valA === ""){
            displayText.textContent = valB;
        } else {
            displayText.textContent = valA + operator + valB;
        }
        canAddDecimal = false;
        canAddMoreZeros = true;
    }
}
function numberBtnClicked(e){
    let number = e.target.textContent;
    if(toBeCleared){
        deleteAll();
        toBeCleared = false;
    }
    
    if (!canAddMoreZeros && number === "0"){
        return;
    }
    
    valB += number;
    
    if (valA === ""){
        displayText.textContent = valB;
    } else {
        displayText.textContent = valA + operator + valB;
    }
    isTextTooLong();
}
function operatorBtnClicked(e){
    
    let btnVal = e.target.textContent;
    toBeCleared = false;
    canAddMoreZeros = true;
    
    isDecimalLast();
    
    if (valB === ""){
        operator = btnVal;
        displayText.textContent = valA + operator;
    }else if(operator === ""){
        operator = btnVal;
        displayText.textContent += btnVal;
        valA = valB;
        valB = "";
    } else {
        doMaths();
        operator = btnVal;
        displayText.textContent += btnVal;
    }
    canAddDecimal = true;
    isTextTooLong();
}
function isDecimalLast(){
    let str = displayText.textContent;
    if (str.charAt(str.length - 1) === "."){
        str = str.slice(0, -1);
        valB = valB.slice(0, -1);
        displayText.textContent = str;
    }
}
function doMaths() {
    if (valA === "" || valB === ""){
        return;
    }
    let x = parseFloat(valA);
    let y = parseFloat(valB);
    if (operator === "+"){
        result = x + y;
    } else if (operator === "-"){
        result = x - y;
    } else if(operator === "*"){
        result = x * y;
    } else if(operator === "/"){
        result = x / y;
    } else {console.log("error...")}
    displayText.textContent = result;
    valA = result;
    valB = "";
    operator = "";
    canAddDecimal = true;
    toBeCleared = true;
}
function deleteAll(){
    displayText.textContent = "0";
    valA = "";
    valB = "";
    operator = "";
    result = "";
    canAddDecimal = true;
}
function isTextTooLong(){
    let ittl = displayText.textContent;
    console.log(ittl.length);
    if (ittl.length > 20){
        displayText.textContent = "Dont test my limits !@&#";
        return;
    }
}
// max delka hodnoty
// zaokrouhlovani - nekdy to hazi blbosti pri desetinnych cislech