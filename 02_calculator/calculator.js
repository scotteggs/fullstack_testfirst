function createCalculator (num) {
  var calcObj = {};
  var amount = 0
  calcObj.value = function () {
    return amount;
  };
  calcObj.add = function (num) {
    amount = amount + num;
  };
  calcObj.subtract = function (num) {
    amount = amount - num;
  };
  return calcObj;
};

