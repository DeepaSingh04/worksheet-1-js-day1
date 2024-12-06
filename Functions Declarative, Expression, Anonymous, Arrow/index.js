 //error debug

 const multiply = (a, b)=>a*b;
 console.log(multiply(2, 3));

 const doubleArrayValues = (arr, callback)=>{
     return arr.map(callback);
 };
 const double = (x) => x*2;
 const inputArray = [1,2,3];
 conaole.log(doubleArrayValues(inputArray, double));

 