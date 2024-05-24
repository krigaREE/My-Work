// nTH element of Fibonacci sequence

// function nthFibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//
//     }
//     return fib[n];
//
// }


// Recursive nTH element of Fibonacci sequence

// function recursiveFibonacci(n) {
//     if(n < 2) {
//         return n;
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }


// Recursive factorial of a number
//
// function recursiveFactorial(n) {
//     if( n === 0 ) {
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }


// Linear Search

// function linearSearch(arr, target) {
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === target) {
//           return i;
//       }
//   }
//     return -1
// }


// Binary Search

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//
//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if(target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return  -1
// }


// 1
// function requestNumber(n) {
// let sum = (n * (n - 1) / 2)  + n
//  return sum
//   }
