
const encode = (text, n) => {
    let result = [];
    let array = text.value;
    for (let index = 0; index < array.length; index++) {
        let charCode = array.charCodeAt(index)
        let newChar = String.fromCharCode((charCode-65+n) % 26 + 65)
        result.push(newChar);
         }
        console.log("result", result, result.toString())
        let changeCaracter = result.toString().replace(/,/g, "");
        return changeCaracter;       
}
const decode = (text, n) => {
    let result = "";
    n = (26 -n) % 26;
    result = encode(text,n);
    return result;      
} 

const cipher = {
    encode,
    decode
  };

export default cipher;



