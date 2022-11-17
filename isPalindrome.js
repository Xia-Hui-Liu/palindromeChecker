const isPalindrome = (string) => {
    if(string === '') return null;
    if(string.length>1 && string.split("").reverse().join("") === string){
        return true;
    }
    return false
}


module.exports = isPalindrome;