let a = document.createElement("h1");
a.innerText = "Hello World";
document.body.appendChild(a);

a.style.color = "red";  
a.style.fontSize = "50px";

a.addEventListener("click", () => {
    a.style.color = "blue";
});