// const express = require("express");
// const app = express();
// const routes = require("./routes/route");
// const helmet = require("helmet");
// const status = require('express-status-monitor')

// app.use(express.json());
// app.use("/", routes);

// // Use the helmet middleware
// app.use(helmet());

// app.use(status())

// // Set Content Security Policy
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'"],
//       styleSrc: ["'self'"],
//       fontSrc: ["'self'"],
//       imgSrc: ["'self'", "data:"],
//       connectSrc: ["'self'"],
//       objectSrc: ["'none'"],
//       mediaSrc: ["'self'"],
//       frameSrc: ["'none'"],
//       formAction: ["'self'"],
//       upgradeInsecureRequests: [],
//     },
//   })
// );

// // ================== content security policy ==========================

// const port = process.env.PORT;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






// function findLargestAndSmallest(arr) {
//   let largest = arr[0]; 
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) largest = arr[i];
//       if (arr[i] < smallest) smallest = arr[i];
//   }
//   return { largest, smallest };
// }




// /**
//  * 2,3,666,4,5,0
//  * 
//  * 
//  * 
//  */





// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > largest) {
//           secondLargest = largest;
//           largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//           secondLargest = arr[i];
//       }
//   }
//   return secondLargest;
// }


let arr = [1,2,3,4,5]

// for(let i=0;i<arr.length;i++){
// console.log(arr[i]);

// }




function isSorted(arr) {
  for (let i = 0; i < arr.length -1; i++) {
    console.log(arr[i],arr[i+1]);
      if (arr[i] > arr[i + 1]) {
        
          return false;
      }
  }
  return true;
}


// console.log(isSorted([1, 2, 3, 4, 5]));
isSorted(arr)

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[j]) {
          j++;
          arr[j] = arr[i];
      }
  }
  return j + 1;
}


// function rotateArray(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, arr.length - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arr.length - 1);
  
//   function reverse(arr, start, end) {
//       while (start < end) {
//           let temp = arr[start];
//           arr[start] = arr[end];
//           arr[end] = temp;
//           start++;
//           end--;
//       }
//   }
// }



// function findMissingNumber(arr) {
//   let n = arr.length;
//   let total = (n * (n + 1)) / 2;
//   let sum = arr.reduce((acc, num) => acc + num, 0);
//   return total - sum;
// }



// function findMajorityElement(arr) {
//   let count = 0;
//   let candidate = null;
//   for (let num of arr) {
//       if (count === 0) {
//           candidate = num;
//       }
//       count += (num === candidate) ? 1 : -1;
//   }
//   return candidate;
// }


