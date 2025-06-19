import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

 function getRandomElement(arr){
  return  arr[Math.floor((Math.random()*arr.length))];

 }

 function finalexcuse(){
  let randomwho = getRandomElement(who)
   let randomact = getRandomElement(action)
    let randomwhat = getRandomElement(what)
     let randomwhen = getRandomElement(when)

     return `${randomwho} ${randomact} ${randomwhat} ${randomwhen}`

 }
 

 document.getElementById("excuse").innerHTML = finalexcuse()

}






