function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  let newStr = [];
  for (i = str.length; i >= 0; i--) {
    newStr.push(str[i]);
  };
  return newStr.join('');
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
