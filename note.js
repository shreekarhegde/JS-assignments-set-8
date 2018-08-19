
var a = 7;
changeKeys = ['D'];
function change(changeKeys, a) {
    var found = [];
    var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    keys.forEach(function (element) {
         changeKeys.find(function (key) {
            if(key == element){
          var length = keys.indexOf(key) + a;
          console.log(length,keys);
          if(length >= keys.length) 
          {
              length = length % keys.length;
              console.log(length,'...');
            }
            else{
                length = keys.length;
            }
            found.push(keys[length]);     
        }
        })

    })
    return found;
}

console.log(change(changeKeys, a));