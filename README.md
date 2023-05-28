# Largest-Numbers-In-Arrays-JS
This GitHub project provides a code solution to the "Return Largest Numbers in Arrays" challenge from FreeCodeCamp's JavaScript Algorithms and Data Structures course. The challenge involves returning an array consisting of the largest number from each provided sub-array. The input array contains exactly four sub-arrays.

## Solution Overview
The solution is implemented in JavaScript and follows a straightforward approach. It utilizes nested for loops to iterate through the input array and find the largest number in each sub-array. The largest numbers are stored in a new array, which is then returned as the final result.

## Code Snippet
```js
function largestOfFour(arr) {
  var largestArr = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    largestArr.push(max);
  }

  return largestArr;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
```

## Usage
To use this solution, you can simply copy the provided code snippet and incorporate it into your JavaScript project. The largestOfFour function takes an array as input and returns a new array containing the largest number from each sub-array. You can modify the input array according to your requirements.

Feel free to contribute to this project by suggesting improvements, optimizations, or additional features.

Note: This solution assumes that the input array always contains exactly four sub-arrays.
