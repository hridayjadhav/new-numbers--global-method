// isFinite()

let num = 5;
console.log(isFinite(num));   //true

let num2 = -5;
console.log(isFinite(num2));  //true

let num3 = 'hriday';
console.log(isFinite(num3));  //false

let num4 = Infinity;
console.log(isFinite(num4));  //false

let num5 = NaN;
console.log(isFinite(num5));  //false


// isNaN()

let nan = -5;
console.log(isNaN(nan));    //false because it's a number and our method is to get IS NOT A NUMBER.

let nan2 = 'hriday';
console.log(isNaN(nan2));   //true becuse It's not a number.

let nan3 = NaN;
console.log(isNaN(nan3));   // true bcz the variale is saying that it's not a number.



// Number.isInteger()

let int = 5;
console.log(Number.isInteger(int));     //true because it's an integer ( which do not have decimal )

let int2 = 5.55;
console.log(Number.isInteger(int2));   // false because it's not an interger, it have decimal.
   
