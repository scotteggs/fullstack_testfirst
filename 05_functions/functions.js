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


function makeAdder(num) {
	
}