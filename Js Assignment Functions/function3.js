
function isEven(n) {
    return n % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }
 let arr=[1,3,5,4,2]
 let evenNum = arr.filter(n => n%2==0)
 console.log(evenNum)
 console.log(isEven(3))
 console.log(isEven(4))