
export const encode = (text, n) => {

    let myStringCipher = '';  
    let cipherFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        console.log("n", n);
        if (charCode >= 65 && charCode <= 90){
            cipherFormula = (charCode - 65 + n) % 26 + 65;
            console.log("formula", cipherFormula, n)
            let newChar =  String.fromCharCode(cipherFormula);
            myStringCipher += newChar;
        } else if(charCode === 32) {
            myStringCipher += ' ';
            
        } else if (charCode >= 97 && charCode <=122) {
            cipherFormula = (charCode - 97 + n) % 26 + 97;
            let newChar =  String.fromCharCode(cipherFormula);
             myStringCipher += newChar;
        }
    }
    return myStringCipher;       
}

export const decode = (text, n) => {
    let myDecode = '';
    let decodeFormula;
    for (let index = 0; index < text.length; index++) {
        let charCode = text.charCodeAt(index)
        if (charCode >= 65 && charCode <= 90){
            decodeFormula = (charCode - 13 - n) % 26 + 65;
            console.log("formula", decodeFormula, n);
            let newChar = String.fromCharCode(decodeFormula)
            myDecode +=newChar;
        }
        else if (charCode === 32) {
            myDecode += ' ';
        } else if  (charCode >= 97 && charCode <=122) {
            decodeFormula = (charCode - 45 - n) % 26 + 97;
            let newChar =  String.fromCharCode(decodeFormula);
            myDecode += newChar;
        } 
    }
    return myDecode;   
}

const cipher = {
    encode,
    decode
  };

export default cipher;



