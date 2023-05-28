function largestOfFour(arr) {

  var largestArr = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];

    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
    largestArr.push(max)
  }
  return largestArr;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
