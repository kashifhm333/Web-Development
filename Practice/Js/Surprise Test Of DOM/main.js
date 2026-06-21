let box1 = document.querySelector(".box");
box1.style.backgroundColor = "blue";

let box2 = document.querySelector(".box:nth-child(2)");
box2.style.backgroundColor = "red";

let box3 = document.querySelector(".box:nth-child(3)");
box3.style.backgroundColor = "green";


box2.innerHTML = "Box <b>Kashif</b>";


let element = document.createElement("div");
element.innerHTML = "This is a new element from siiiiii";
document.body.querySelector(".box:nth-child(4)").appendChild(element).style.backgroundColor = "yellow";


