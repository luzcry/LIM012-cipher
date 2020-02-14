
const encode = (text, n) => {
    let offset = n.value
    let result = [];
    let array = text.value;
    for (let index = 0; index < array.length; index++) {
        let charCode = array.charCodeAt(index)
        let newChar = String.fromCharCode((charCode-65+offset) % 26 + 65)
        result.push(newChar);
    }
    console.log("result", result, result.toString())
    return result
}
const decode = (text, n) => {
    let offset = n.value
    let result = [];
    let array = text.value;
    for (let index = 0; index < array.length; index++) {
        let charCode = array.charCodeAt(index)
        let newChar = String.fromCharCode((charCode-65-offset) % 26 + 65)
        result.push(newChar);
    }
    console.log("result", result, result.toString())
    return result
    
} 

const cipher = {
    encode,
    decode
  };

export default cipher;

