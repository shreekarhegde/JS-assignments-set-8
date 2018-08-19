function move(array,thisElement,here){
	if(array.length == 0){
	return 'empty array';
	}else if((thisElement == null|| thisElement == undefined || thisElement>array.length)){
	return 'element not present at the given index';
	}else{
	 element = array.splice(thisElement,1).pop();
	 array.splice(here,0,element);
	return array;
	}
}
console.log(move([10,20,30,40,50],2,7));

        