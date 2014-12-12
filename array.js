Array.prototype.uniq = function() {
  var res = [];
  for (i = 0; i < this.length; i++)
    {
      if (res.indexOf(this[i]) == -1)
        {
          res.push(this[i]);
        }
    }
  return res;
}

Array.prototype.two_sum = function() {
  var res = [];
  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        var pair = [i, j];
        res.push(pair);
      }
    }
  }

  return res;
}

var myTranspose = function(matrix) {
  var res = matrix;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
      if (j > i) {
        var tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
      }
    }
  }

  return res;
}
