 const encode = (text, n) => {
    let myStringCipher = '';  
    let cipherFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        if (charCode >= 65 && charCode <= 90){ //mayusculas (funciona)
            cipherFormula = (charCode - 65 + n) % 26 + 65;
            let newChar =  String.fromCharCode(cipherFormula);
            myStringCipher += newChar;

        } else if(charCode === 32) { //colocar espacios
            myStringCipher += ' ';

        } else if(charCode >= 164 && charCode<=165) { //Ñ y ñ (no funciona)
        cipherFormula = (charCode - 164 + n) % 26 + 164;
        let newChar = String.fromCharCode(cipherFormula);
        myStringCipher += newChar;

        } else if (charCode >= 97 && charCode <=122) { //minusculas (funciona)
            cipherFormula = (charCode - 97 + n) % 26 + 97;
            let newChar =  String.fromCharCode(cipherFormula);
             myStringCipher += newChar;
      
        } else if (charCode >= 33 && charCode <=47) { //caracteres especiales (funciona)
            cipherFormula = (charCode - 33 + n) % 26 + 33;
            let newChar = String.fromCharCode(cipherFormula);
            myStringCipher += newChar;

        } else{
         break;
        }
    }
    return myStringCipher;       
}

 const decode = (text, n) => {
    let myDecode = '';
    let decodeFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        if (charCode >= 65 && charCode <= 90){
            decodeFormula = (charCode - 13 - n) % 26 + 65;
            console.log("formula", decodeFormula, n);
            let newChar = String.fromCharCode(decodeFormula);
            myDecode += newChar;
        }
        else if (charCode === 32) {
            myDecode += ' ';
        } else if  (charCode >= 97 && charCode <=122) {
            decodeFormula = (charCode - 45 - n) % 26 + 97;
            let newChar =  String.fromCharCode(decodeFormula);
            myDecode += newChar;
        } else if (charCode >= 33 && charCode <=47) { //caracteres especiales (no funciona)
            decodeFormula = (charCode - 13 - n) % 26 + 33;
            let newChar = String.fromCharCode(decodeFormula);
            myDecode += newChar;
        
        }else if (charCode === 164) {
            decodeFormula = (charCode - 164 - n) % 26 + 164;
            let newChar = String.fromCharCode(decodeFormula)
            myDecode += newChar;
        } else {
            break;
        }
    }
    return myDecode;   
}

const cipher = {
    encode,
    decode
  };
  
export default cipher;



