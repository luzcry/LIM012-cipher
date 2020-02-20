import cipher from './cipher.js';

const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
  let message = document.querySelector("#text1").value;
  let offsetCypher = parseInt(document.getElementById('offset1').value, 10)
  document.querySelector("#section1").innerHTML = (` ${cipher.encode( offsetCypher,message)}`);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  let Message2 = document.querySelector("#text2").value;
  let offset = parseInt(document.getElementById('offset2').value, 10)
  document.querySelector("#section2").innerHTML = (` ${cipher.decode(offset, Message2 )}`);
});
