// 06_Functional 
var doubler = function (num) {
	return num*2;
};

var map = function (arr, func) {
	for (i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
};


var filter = function (arr, func){
	arr2= [];	
	for (i = 0; i < arr.length; i++) {
		if (func(arr[i])===true){
			arr2.push(arr[i]);
		}
	}
	return arr2;
};

var contains = function (collection, value) {
	sensor = false;
	if (Array.isArray(collection)){
	   	for (i = 0; i < collection.length; i++){
		    if (collection[i] == value){
			    sensor = true;
		    }
	   	}
	} else { if (typeof collection == 'object') {
	    for (i=0; i < Object.keys(collection).length; i++) {
	        if(collection[Object.keys(collection)[i]] == value){
	            sensor = true;
	        }    
	    }
	    } 
	}
	return sensor;
};



var countWords = function(str){
	count = 1;
	for (i=0; i < str.length; i ++){
	    if(str[i] == " ") {
	        count +=1;
	    }	
	}
	return count;
};