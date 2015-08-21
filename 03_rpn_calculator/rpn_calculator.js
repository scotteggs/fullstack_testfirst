var RPNCalculator = function(){
    this.array = [];

};

RPNCalculator.prototype.value = function(){
    return this.array[(this.array.length)-1];
};


RPNCalculator.prototype.push = function(num){
    this.array.push(num);
};

RPNCalculator.prototype.plus = function(){
    if (this.array.length < 1){
        throw "rpnCalculator is empty";
    } else {
    this.array.push(this.array.pop()+this.array.pop());
    }
};

RPNCalculator.prototype.minus = function(){
    if (this.array.length < 1){
        throw "rpnCalculator is empty";
    } else {
    var v1 = this.array.pop();
    var v2 = this.array.pop();
    this.array.push(v2-v1);
    }
};

RPNCalculator.prototype.divide = function(){
    if (this.array.length < 1){
        throw "rpnCalculator is empty";
    } else {
    var v1 = this.array.pop();
    var v2 = this.array.pop();
    this.array.push(v2/v1);
    }
};

RPNCalculator.prototype.times = function(){
    if (this.array.length < 1){
        throw "rpnCalculator is empty";
    } else {
    var v1 = this.array.pop();
    var v2 = this.array.pop();
    this.array.push(v2*v1);
    }
};
