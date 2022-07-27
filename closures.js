

// 1. print output:
//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());        //1
// alert(counter());        //2
// alert(counter());        //3
// alert(counter());        //4

output: [1,2,3,4] ["The function IncreaseCounter() is increase the counter value and update the increase counter value every time it is called in the window alert "] 


// 2.print output
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

output: [1] [0]

// 3. print output
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

output: [3,3,3]

// 4.Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
//area of rectangle = l*b

const outerFunc = function(l){ 

    return function(b){    
        let area = l * b;
        console.log(`The area of reactangle = ${area}`);
        
    }
}
const innerFunc = outerFunc(7);  //length

innerFunc(9);        //breadth

// 5.Take a variable in outer function and create an inner function to increase the counter every time it is called

Ans: ["closures"]

// 6."Print Output

// var a = 12;
// (function () {
//   alert(a);            //12
// })();

output: [12]

// 7.
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);              //12
//   };
// })();
// x();

output: [12] 

// 8.
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg +  "\n" +
//         "innerArg = "  + innerArg +  "\n" +
//         "outerVar = " + outerVar +  "\n" +
//         "innerVar = "  + innerVar +  "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);

output:
 ["outerArg = 123",
    "innerArg = 456",
    "outerVar = a",
    "innerVar = b",
    "globalVar = xyz"]