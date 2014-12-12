var range = function(start, end) {
  if (end <= start) {
    return [end];
  }

  return [start].concat(range(start + 1, end));
};

var exp = function(base, power) {
  if (power === 0) {
    return 1;
  }

  return base * exp(base, power - 1);
};

var fibs = function(n) {
  if (n === 3) {
    return [0, 1, 1];
  }

  if (n === 2) {
    return [0, 1];
  }

  if (n === 1) {
    return [0];
  }

  var n2 = fibs(n - 2)[n - 3];
  //console.log(n2);
  var n1 = fibs(n - 1)[n - 2];
  //console.log(n1);
  var n0 = n2 + n1;

  return fibs(n - 1).concat(n1 + n2);
};

var bSearch = function(arr, target) {
  if (arr.length === 0) {
    return null;
  }
  var mid = Math.round((arr.length - 1) / 2);

  if (arr[0] % 1 === 0) {
    for (i = 0; i < arr.length; i++) {
      arr[i] = [arr[i], i];
    };
  }

  if (arr[mid][0] === target) {
    return arr[mid][1];
  }
  else if (arr[mid][0] < target) {
    var new_arr = arr.slice(mid + 1, arr.length);
    return bSearch(new_arr, target);
  }
  else {
    var new_arr = arr.slice(0, mid);
    return bSearch(new_arr, target);
  };

};

var makeChange = function(amount, coins) {
  if (amount <= 0) {
    return [];
  }
  var i = 0;
  while(amount < coins[i]) {
    i ++;
  };
  return makeChange(amount - coins[i], coins).concat(coins[i]);
};

var merge = function(arr1, arr2) {
  var res = [];
  var length_arr1 = arr1.length;
  var length_arr2 = arr2.length;

  var i = 0;
  var j = 0;
  while (i < length_arr1 && j < length_arr2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    }
    else {
      res.push(arr2[j]);
      j++;
    }
  };
  ///check slice in js
/*
  if (i >= length_arr1){
    res.concat(arr2.slice(j, length_arr2));
  }
  if (j >= length_arr2) {
    res.concat(arr1.slice(i, length_arr1));
  }
*/
  while(i < length_arr1) {
    res.push(arr1[i]);
    i++
  }
  while(j < length_arr2) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

var merge_sort = function(arr) {
  if (arr.length === 1){
    return arr;
  }

  var mid = Math.round((arr.length - 1) / 2);
  var arr1 = arr.slice(0, mid);
  var arr2 = arr.slice(mid, arr.length);

  return merge(merge_sort(arr1), merge_sort(arr2));
};



var subsets = function(arr) {
  if (arr.length === 0) {
    return [arr];
  }

  var last_item = arr[arr.length - 1];
  var pop_item = arr.pop();
  var left_arr = arr;


console.log("left_arr " + left_arr);
console.log("last_item " + last_item);

  var tmp_push = function(el) {
    return el.concat([last_item]);
  };
  var tmp_result = subsets(left_arr);
  return tmp_result.concat(tmp_result.map(tmp_push));

}
 console.log(subsets([1, 2, 3]));
