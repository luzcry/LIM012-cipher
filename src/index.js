import cipher from './cipher.js';

let message = document.querySelector("#text1");

let offsetCypher = document.querySelector("#offset1");

let offsetDecode = document.querySelector("#offset2");

let Message2 = document.querySelector("#text2");

const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
  let offset = offsetCypher.value
  document.querySelector("#section1").innerHTML = (` ${cipher.encode(message, offset)}`);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  let offset = offsetDecode.value
  document.querySelector("#section2").innerHTML = (` ${cipher.decode(Message2, offset)}`);
});

