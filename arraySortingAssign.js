const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`=========Reversing The Array=========`);
array_roll_numbers.reverse();
console.log(`The Reverse Array Is: [${array_roll_numbers}]`);
console.log(` `);
console.log(`=========Using Sort Method On Array Without Any Custom Logic=========`);
array_roll_numbers.sort();
console.log(` `);
console.log(`The Array After Using "Sort()" Without Using Any Custom Logic:[${array_roll_numbers}]`);
console.log(` `);

console.log(`=========Using Sort Method On Array Using Custom Logic=========`);
array_roll_numbers.sort((a,b)=>{
    return a>b? 1 : -1;
});
console.log(`The Array After Using "Sort()" Using  Custom Logic:[${array_roll_numbers}]`);
let greatest=array_roll_numbers[array_roll_numbers.length-1];
let smallest=array_roll_numbers[0];
console.log(` `);
console.log(`========The Greatest Number in the Array========`);
console.log(`The Greatest Number in The Array is: "${greatest}"`);
console.log(` `);

console.log(`========The Smallest Number in the Array========`);
console.log(`The Smallest Number in The Array is: "${smallest}"`);
console.log(` `);

console.log(`===========Remove Duplicates Values from The array===========`);
const unquieArrayValues=[...new Set(array_roll_numbers)];
console.log(`The Orignal Array before Removing Duplicates Values: [${array_roll_numbers}]`);
console.log(`The Array After Removing Duplicates Values: [${unquieArrayValues}] `);

