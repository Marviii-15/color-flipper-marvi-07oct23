const letras = ["a", "b", "c", "d", "e", "f", "a", "b", "c"];
let colorHex = "";
let numeroRandom;
let Randomizer;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener ("click", function (){
    getRandomNumber();

    document.body.style.backgroundColor = (`#${colorHex}`);
    color.textContent = (`#${colorHex}`);
    colorHex ="";
});

function getRandomNumber(){
for (let i = 0; i < 6; i++) {
    numeroRandom = Math.floor(Math.random()*9);
    Randomizer = Math.floor(Math.random()*2);
    console.log (Randomizer)
  if (Randomizer === 1) {
    colorHex += numeroRandom;
  } else if (Randomizer === 0) {
    colorHex += letras[numeroRandom]
   }
 }   
}