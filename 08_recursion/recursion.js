var factorialIterative = function (num) {
	if (num == 0) {
		return 1;
	} else {
		fact = num;
		for (var i = 1; i<num; i++){
			fact = fact*(num-i);
		}
		return fact;
	}
}; 

var factorial = function (num) {
	if (num==0) {
		return 1;
	} else {
		return num*factorial(num - 1);
	}
}; 

var fib = function (num){
	if (num == 0){
		return 1;
	} else if (num == 1) {
		return 1;
	} else {
		return fib(num-1) + fib(num-2);
	}
};

var type = function(value) {
	var output = Object.prototype.toString.call(value);
    return output.substring(8,output.length-1);
};


var stringify = function (value) {
	//valuetype = type(value);	
		
		if(type(value) == 'Array'){
			var arr = [];

			for (var i = 0;  i < value.length; i++) {
				arr.push(stringify(value[i]));
			}
			return "["+arr.join(",")+"]";

		} else if(type(value) == 'Object') { 
    		var arr = [];

    		for (var key in value) {
        		arr.push('"'+key+'": '+stringify(value[key]));
    		}
    		return "{"+arr.join(",")+"}";

		} else if(type(value) == 'String') {
		    return '"'+String(value)+'"';
		} else {
		    return String(value);
		}
	// possibly refactor if/else
};