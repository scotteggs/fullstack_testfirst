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

var reduce = function (arr, start, func){
	var value = start;
	for (var i = 0; i < arr.length; i++){
		value = func(value, arr[i]);
	} 
	return value;
};


var countWordsInReduce = function(a,b){
	return a + countWords(b);
};


var sum = function (arr){
	return reduce(arr, 0, function(a,b) {
		return a + b;
	});
};



var every = function (arr,func){
	var sensor = true;
	for (var i = 0; i < arr.length; i ++ ){
		if (func(arr[i])===false){
			sensor = false;
		}
	}
	return sensor;
};


var any = function (arr, func) {
	var sensor = false; 
	for (var i = 0; i < arr.length; i ++) {
		if ( func(arr[i])===true) {
			sensor = true;
		}
	}
	return sensor; 
}
















