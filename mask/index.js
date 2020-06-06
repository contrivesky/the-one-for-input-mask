const delimiters = [" ", "/", "-", "@", "%", "*", "#", "$"];
const getDelimiter = (str) => {
    return delimiters.find(delimiter => str.includes(delimiter))
}
const calculateCharSet = (str, delimiter) => {
    if (delimiter) {
        return str.split(delimiter).map(char => char.length)
    }
}

const formatter = ({ value, config }) => {
    let { delimiter, charSet } = config
    let unMaskValue = value.split(delimiter).join("");
    let maskValue = "";
    let count = 0;
    let delimiterPointer = 0;
    unMaskValue.split("").forEach((char, index) => {
        maskValue += char;
        count = count + 1;
        if (!(count % charSet[delimiterPointer]) && (index + 1) !== unMaskValue.length) {
            maskValue += delimiter;
            count = 0;
            if(delimiterPointer+1 === charSet.length){
              delimiterPointer = 0;
            }
            else{
              delimiterPointer = delimiterPointer + 1;
            }
        }
    });
    return { value: unMaskValue, mask: maskValue }
}
module.exports = {
    getDelimiter, calculateCharSet, formatter
}
