import cipher from './cipher.js';

let offsetCypher = document.querySelector("#offset1");
console.log(offsetCypher);

let Message = document.querySelector("#texto1");
console.log(Message);

let offsetDecode = document.querySelector("#offset2");
console.log()

let Message2 = document.querySelector("#text2");

const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
  alert(`Hola! Mucho gusto en conocerte`);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  alert(`Hola! Mucho gusto en conocerte`);
});

console.log(cipher);
