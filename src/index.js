import cipher from './cipher.js';

/*const fixedStr =  ["D", "E", "F","G","H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C"];
const normalStr = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let offset = 0; */
//let char = 0;
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let message = document.querySelector("#texto1");
//let cadena = 0;
//codigo ascii
function convertText () {
  let n = str.charCodeAt(); 
  document.querySelector("#section1").innerHTML =  (`Tu texto es ${n}`);
}
convertText();

let offsetCypher = document.querySelector("#offset1");


//let offsetDecode = document.querySelector("#offset2");

//let Message2 = document.querySelector("#text2");

const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
  document.querySelector("#section1").innerHTML = (`Tu texto es ${cipher.encode(message, offsetCypher)}`);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  document.querySelector("#section2").innerHTML = (`Tu texto es ${message}`);
});

