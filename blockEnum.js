Array.prototype.myEach = function(x) {
  for (i = 0; i < this.length; i++) {
    x(this[i]);
  };

  return this;
};


Array.prototype.myMap = function(f) {
  var res = [];
  var tmp = function(el) {
    res.push(f(el));
  };

  this.myEach(tmp);
  return res;
};

var tmp = function(sum, x) {
  return sum + x;
};


Array.prototype.myInject = function(x) {
  var res = 0;
  var tmp = function(el) {
    res = x(res, el) ;
  }
  this.myEach(tmp);
  return res;

};
var tmp2 = function(x) {
  return x * 2;
};

console.log([1,2,3].myInject(tmp));
