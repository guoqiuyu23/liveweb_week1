
document.getElementById("b1").addEventListener("click", clickb1);
document.getElementById("b2").addEventListener("click", clickb2);
document.getElementById("b3").addEventListener("click", clickb3);


let canvas = document.getElementById("myCanvas");
canvas.width = 500;
canvas.height = 500;
let ctx = canvas.getContext("2d");

let mouse = new Image();
mouse.src = "img/mouse_happy.png";

mouse.onload = render;

function render(){
ctx.drawImage(mouse, 0, 0, 500, 500);
}

function clickb1(){
    
    mouse.src = "img/mouse_happy.png";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();

}
function clickb2(){
    mouse.src = "img/mouse_sing.png";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
}
function clickb3(){
    mouse.src = "img/mouse_emo.png";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
}