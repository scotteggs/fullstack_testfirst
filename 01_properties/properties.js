function setPropertiesOnObjLiteral (obj) {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function onePlus(num) {
    return num + 1; 
  }
}


function setPropertiesOnArrayObj (obj) {
  obj.hello = function () {
    return "Hello!";
  }
  obj.full = "stack";
  obj[0] = 5;
  obj.twoTimes = function twoTimes (num) {
    return num*2;
  }
}


function setPropertiesOnFunctionObj (obj) {
  obj.year = 2015;
  obj.divideByTwo = function divideByTwo (num) {
    return num / 2;
  }
  obj.prototype.helloWorld = function() {
    return "Hello World";
  };
}