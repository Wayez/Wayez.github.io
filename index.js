var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
	this.classList.toggle("active");
	this.nextElementSibling.classList.toggle("show");
    }
}

var c = document.getElementById("comp");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle="#00cc66";
ctx.strokeStyle="#000000";
ctx.lineWidth=5;
ctx.rect(50,20,550,400);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#ff0000";
ctx.rect(50,420,550,400);
ctx.fill();
ctx.stroke();

var c= 8226;
var c2 = 34;

ctx.fillStyle="#ffffff";
ctx.font = "24px Comic Sans MS";
ctx.fillText("Cons",300,450);
ctx.font = "16px Comic Sans MS";
ctx.fillText(String.fromCharCode(c) + "  " + String.fromCharCode(c2) + "Cleaner" + String.fromCharCode(c2)+ " code by giving errors for unused imports and variables", 75,500);
ctx.fillText("     to speed up compilation time", 70, 520);
ctx.fillText(String.fromCharCode(c) + "  Does not handle exceptions", 75, 570);
ctx.fillText(String.fromCharCode(c) + "  Not many libraries for it", 75, 620);
ctx.fillText(String.fromCharCode(c) + "  A high-level language that can do low level things", 75, 670);


ctx.font = "24px Comic Sans MS";
ctx.fillText("Pros",300,50);
ctx.font = "16px Comic Sans MS";
ctx.fillText(String.fromCharCode(c) + "  Servers/Networking", 75, 100);
ctx.fillText(String.fromCharCode(c) + "  Good at dependency management", 75, 150);
ctx.fillText(String.fromCharCode(c) + "  Can use a package with just a link to the site serving the repo", 75, 200);
ctx.fillText(String.fromCharCode(c) + "  Garbage collection is automatic", 75, 250);
ctx.fillText(String.fromCharCode(c) + "  Easily does concurrent programming", 75, 300);
