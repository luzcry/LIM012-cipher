
const encode = (text, n) => {

    var myStringCipher = '';  
    var cipherFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        console.log("n", n);
        cipherFormula = ( charCode - 65 + n) % 26 + 65;
        console.log("formula", cipherFormula, n)
        let newChar =  String.fromCharCode(cipherFormula)
        myStringCipher +=newChar;
    }
  
    return myStringCipher;       
}
const decode = (text, n) => {
    let myDecode = '';
    let decodeFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        decodeFormula = (charCode - 13 - n) % 26 + 65;
        console.log("formula", decodeFormula, n);
        let newChar = String.fromCharCode(decodeFormula)
        myDecode +=newChar;
    }
    return myDecode;   
} 

const cipher = {
    encode,
    decode
  };

export default cipher;



