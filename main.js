//document.querySelector(".button").forEach(item => item.addEventListener("click", event => {}))

let grd = document.querySelector(".grid-container");
//grd.addEventListener("click", changeColor);

function changeColor(e){
    if(e.target.style.backgroundColor === "black"){
        e.target.style.backgroundColor = "yellow";
        return;
    }
    e.target.style.backgroundColor = "black";
}

let btns = document.querySelectorAll(".button");
btns.forEach(btn => btn.addEventListener("mousedown", mouseDown));
btns.forEach(btn => btn.addEventListener("mouseup", mouseUp));

function mouseDown(e){
    e.target.setAttribute("id", "mouseDown");
}
function mouseUp(e){
    e.target.removeAttribute("id");
}