var bubbleSort = function(arr) {
  var sorted = false;
  var tmp;
  while (!sorted) {
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = false;
      }
      else {
        sorted = true;
      }
    };
  };

  return arr;
};

var substrings = function(str) {
  var res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j <= str.length; j++) {
      var tmp = str.substring(i, j);
      if (res.indexOf(tmp) == -1){
        res.push(tmp);
      }
    };
  };
  return res;
};

console.log(substrings("catc"));
