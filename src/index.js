import cipher from './cipher.js';

let offset = document.querySelector(".borde")

let Message = document.querySelector(".Message")


document.getElementsByClassName("#boton").addEventListener('click', function(e){
    newButton_Click(document.getElementsByClassName("#boton"),e)
  })

let NormalChart = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let FixedChart = "DEFGHIJKLMNOPQRSTUVWXYZABC"

console.log(cipher);
