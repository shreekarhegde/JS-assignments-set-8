function filterValues(array){
    result = [];
    array.forEach(function(element){
        if(element){
            result.push(element);
        }
    })
    return result;
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
