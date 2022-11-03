let btns = document.querySelectorAll(".button");
let numberBtns = document.querySelectorAll(".numberBtn");
let displayText = document.querySelector(".display");
let delBtn = document.querySelector(".deleteAll");

btns.forEach(btn => btn.addEventListener("mousedown", btnMouseDown));
btns.forEach(btn => btn.addEventListener("mouseup", btnMouseUp));
numberBtns.forEach(btn => btn.addEventListener("click", numberBtnClicked));
delBtn.addEventListener("click", deleteAll);

function btnMouseDown(e){
    e.target.setAttribute("id", "mouseDown");
}
function btnMouseUp(e){
    e.target.removeAttribute("id");
}
function numberBtnClicked(e){
    let number = e.target.textContent;
    console.log(number);
    displayText.textContent += number;
}
function deleteAll(){
    displayText.textContent = "";
}

// budu mit prvni a druhou value, kliknutim plus minus atd se
// vyhodnoti ty dve value do jedne, ulozi se mi to +-*/
// a zacnu psat druhou value.. pak zas muzu kliknout treba =
// a vyhodnoti se to a ulozi
// max delka hodnoty... ???