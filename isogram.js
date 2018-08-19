function isogram(string) {
    string = string.toLowerCase();
    console.log(string);
    for (var i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) != string.lastIndexOf(string[i])) {
            {
                return false;
            }
            
        }
    }
    return true;
}
console.log(isogram('moOse'));
console.log(isogram('aba'));
