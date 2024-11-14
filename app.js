// let btns  = document.querySelectorAll("button");
// console.dir(btns);
// btn.onclick = function()
// {
//     console.log("button was clicked!");
// }
// function sayHello()
// {
//     alert("Hello!");
// }
// function sayName()
// {
//     alert("I am iman");
// }
// for(btn of btns)
// {
    // btn.onclick  = sayHello;
    // btn.onmouseenter = function()
    // {
    //     console.log("you entered mouse");
    // }
    // btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",sayName);
// }
// function getrandomcolor()
// {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click",function()
// {
//     let h3  = document.querySelector("h3");
//     let randomcolornew=getrandomcolor();
//     h3.innerText = randomcolornew;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolornew;
// })
// let para = document.querySelector("p");
// para.addEventListener("click",function()
// {
//     console.log("para was clicked!")
// })
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div");
// })
let btn = document.querySelector("button");
// let parar1 = document.querySelector("p");

// btn.addEventListener("click",function()
// {
//     console.log(this);
// })
// let box = document.querySelector(".box");
// function changeColor()
// {
//    console.log(this);
//    this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click",changeColor);
// box.addEventListener("click",changeColor);
// parar1.addEventListener("click",changeColor);
// btn.addEventListener("click",function(event){
// console.log(event);
// console.log("button clicked!");
// })
// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event)
// {
//     // console.log("key was pressed")
//     console.log("code=",event.code);
//     if(event.code=="ArrowUp")
//     {
//         console.log("character moves forward")
//     }else if(event.code=="ArrowDown"){
//         console.log("character moves down");
//     }else if(event.code=="ArrowLeft"){
//         console.log("character moves left");
//     }else if(event.code=="ArrowRight"){
//         console.log("character moves Right");
//     }
// })
// inp.addEventListener("keyup",function()
// {
//     console.log("key was released")
// })
let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // alert("form submitted");
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value)
    // let user = this.elements[0];
    // let pass =this.elements[1];
    //   document.querySelector("#user");
    // let password = document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);
// })
// let user = document.querySelector("#user");
// user.addEventListener("change",function()
// {
//     console.log("input changed");
//     console.log(this.value);
// })
let h3=document.querySelector("h3");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
})
let user = document.querySelector("#usertext");
user.addEventListener("input",function()
{
    h3.innerText = this.value;
})
h3.innerText=user.value;