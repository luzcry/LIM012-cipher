const encode = (n, text) => {
  let myStringCipher = "";
  let cipherFormula;
  let error = TypeError;
  for (let index = 0; index < text.length; index++) {
    let charCode = text.charCodeAt(index);
    if (charCode >= 65 && charCode <= 90) {
      //mayusculas
      cipherFormula = ((charCode - 65 + n) % 26) + 65;
      let newChar = String.fromCharCode(cipherFormula);
      myStringCipher += newChar;
    } else if (charCode >= 97 && charCode <= 122) {
      //minusculas
      cipherFormula = ((charCode - 97 + n) % 26) + 97;
      let newChar = String.fromCharCode(cipherFormula);
      myStringCipher += newChar;
    } else if (
      (charCode >= 32 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64)
    ) {
      //caracteres especiales
      let newChar = String.fromCharCode(charCode);
      myStringCipher += newChar;
    }
    //typeError
  }
  try {
    if (n == " ") throw error;
    if (n == "0" && text == "0") throw error;
    if (n == null) throw error;
    if (encode == 0) throw error;
  } catch (error) {
    throw new error();
  }

  return myStringCipher;
};

const decode = (n, text) => {
  let myDecode = "";
  let decodeFormula;
  let error = TypeError;
  for (let index = 0; index < text.length; index++) {
    let charCode = text.charCodeAt(index);
    //mayusculas
    if (charCode >= 65 && charCode <= 90) {
      decodeFormula = ((charCode - 13 - n) % 26) + 65;
      let newChar = String.fromCharCode(decodeFormula);
      myDecode += newChar;
      //minusculas
    } else if (charCode >= 97 && charCode <= 122) {
      decodeFormula = ((charCode - 45 - n) % 26) + 97;
      let newChar = String.fromCharCode(decodeFormula);
      myDecode += newChar;
      //caracteres especiales
    } else if (
      (charCode >= 32 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64)
    ) {
      let newChar = String.fromCharCode(charCode);
      myDecode += newChar;
    }
  }
  //typeError
  try {
    if (text === null) throw error;
    if (text === "0") throw error;
    if (text === " ") throw error;
  } catch (error) {
    throw new error();
  }

  return myDecode;
};

const cipher = {
  encode,
  decode
};

export default cipher;
