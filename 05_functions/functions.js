function concat_string () {
	var arr = [];
	for (var i = 0; i < arguments.length; i++) {
	    arr.push(arguments[i]);
	}
	return arr.join("");
	
}// Functions.js


function yourFunctionRunner (){
	var str = "";
	for (var i = 0; i < arguments.length; i++) {
		str += arguments[i]();
	}
	return str;
}


var makeAdder = function (num1) {
	// var num1 = 2
    return function (num2){
        return (num1 + num2);
    };
};



var once = function(func) {
	var hasRan = false;
	return function(){
		if (hasRan == false) {
			func();
			hasRan = true;
		} 
	}
}


var hasRan = true
if(hasRan){
	someFunction();
	hasRan = false;
}