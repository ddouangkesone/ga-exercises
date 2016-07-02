// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 & i % 5 === 0 & i !== 0){
    console.log('fizzbuzz');
  }
 else if (i % 3 === 0 & i !== 0){
   console.log('buzz');
 }
 else if (i % 5 === 0 & i !== 0){
   console.log('fizz');
 }
 else {
   console.log(i);
 }
 }
