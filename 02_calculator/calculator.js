function createCalculator (num) {
  var calcObj = {};
  calcObj.amount = 0
  
  calcObj.value = function () {
    return this.amount;
  };
  calcObj.add = function (num) {
    this.amount += num;
  };
  calcObj.subtract = function (num) {
    this.amount -= num;
  };
  return calcObj;
};

