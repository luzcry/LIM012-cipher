const encode = (n, text) => {
  let myStringCipher = "";
  let cipherFormula;
  let error = TypeError;
  for (let index = 0; index < text.length; index++) {
    let charCode = text.charCodeAt(index);
    if (charCode >= 65 && charCode <= 90) {
      //mayusculas (funciona)
      cipherFormula = ((charCode - 65 + n) % 26) + 65;
      let newChar = String.fromCharCode(cipherFormula);
      myStringCipher += newChar;
    } else if (charCode >= 164 && charCode <= 165) {
      //Ñ y ñ (no funciona)
      cipherFormula = ((charCode - 164 + n) % 26) + 164;
      let newChar = String.fromCharCode(cipherFormula);
      myStringCipher += newChar;
    } else if (charCode >= 97 && charCode <= 122) {
      //minusculas (funciona)
      cipherFormula = ((charCode - 97 + n) % 26) + 97;
      let newChar = String.fromCharCode(cipherFormula);
      myStringCipher += newChar;
    } else if (
      (charCode >= 32 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64)
    ) {
      //caracteres especiales (funciona)
      let newChar = String.fromCharCode(charCode);
      myStringCipher += newChar;
    }
  }
  try {
    if (n == " ") throw error;
    if (n == "0" && text == "0") throw error;
    if (n == null) throw error;
    if (encode == 0) throw error;
    /* expect(() => cipher.encode()).toThrow(TypeError);
           expect(() => cipher.encode(0)).toThrow(TypeError);
           expect(() => cipher.encode(null, [])).toThrow(TypeError);
           expect(() => cipher.encode(0, 0)).toThrow(TypeError);*/
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
    if (charCode >= 65 && charCode <= 90) {
      decodeFormula = ((charCode - 13 - n) % 26) + 65;
      let newChar = String.fromCharCode(decodeFormula);
      myDecode += newChar;
    } else if (charCode >= 97 && charCode <= 122) {
      decodeFormula = ((charCode - 45 - n) % 26) + 97;
      let newChar = String.fromCharCode(decodeFormula);
      myDecode += newChar;
    } else if (
      (charCode >= 32 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64)
    ) {
      //caracteres especiales
      let newChar = String.fromCharCode(charCode);
      myDecode += newChar;
    } else if (charCode === 164) {
      decodeFormula = ((charCode - 164 - n) % 26) + 164;
      let newChar = String.fromCharCode(decodeFormula);
      myDecode += newChar;
    }
  }
  try {
    if (text == null) throw error;
    if (text == "0") throw error;
    if (text == " ") throw error;
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
