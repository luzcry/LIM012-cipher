
const encode = (text, n) => {
    //let result = [];
    let array = text.value;
    var myStringCipher = '';  
    var cipherFormula;
    for (let index = 0; index < array.length; index++) {
        let charCode = array.charCodeAt(index)
        console.log("n", n);
        
        cipherFormula = ( charCode - 65 + 33) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
        let newChar =  String.fromCharCode(cipherFormula)
        myStringCipher +=newChar;
    }
   /* console.log("result", result, result.toString())
    let changeCaracter = result.toString().replace(/,/g, "");
    */
    return myStringCipher;       
}
const decode = (text, n) => {
    let result = [];
    let array = text.value;
    for (let index = 0; index < array.length; index++) {
        let charCode = array.charCodeAt(index)
        let newChar = String.fromCharCode((charCode-13-n) % 26 + 65)
        result.push(newChar);
    }
    console.log("result", result, result.toString())
    let changeCaracter = result.toString().replace(/,/g, "");
    return changeCaracter;     
    // decipherFormula = ( numberOfTheLetter -13 - 33) % 26 + 65; // 
} 

const cipher = {
    encode,
    decode
  };

export default cipher;



