const maskUtil = require("./mask/index");
module.exports = function (str, customDelimiters) {
    this.str = str;
    this.error = false;
    this.delimiter = maskUtil.getDelimiter(this.str) || customDelimiters;
    if (!this.delimiter){
      this.error = true;
    }
    this.charSet = maskUtil.calculateCharSet(this.str, this.delimiter)
    this.mask = function (value) {
      if(this.error){
        return {
          value, mask: value, error: 'Delimiter not found! please use the Delimiters from the list [" ", "/", "-", "@", "%", "*", "#", "$"] Or pass custom  Delimiter as a second argument while creating the instance!'
        }
      }
      else{
        return maskUtil.formatter({ value, config: { delimiter: this.delimiter, charSet: this.charSet } })
      }
    }
}
