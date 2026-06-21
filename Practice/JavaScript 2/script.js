let a =document.createElement("div");
a.innerHTML="Hello World <b> By kashif</b>";
// a.className="ronaldo";
a.setAttribute("class", "created");
a.id="ronaldo";
document.body.querySelector(".box:nth-child(2)").appendChild(a);
