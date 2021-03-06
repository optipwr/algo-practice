// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//     let start = 1;
//     while(start <= n) {
//         if(start % 3 === 0) {
//             if(start % 5 === 0) {
//                 console.log('fizzbuzz', start);
//             }else {
//                 console.log('fizz', start);
//             } 
//         } else if (start % 5 === 0) {
//             console.log('buzz', start);
//         } else {
//             console.log(start);
//         }
//         start++;
//     }
// }

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if(i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(45);
module.exports = fizzBuzz;
