console.log(`==============The Object Destructing============`);
const person={
    first_name:'Akshay',
    age:25,
    grad:'BE'
}
console.log(`Before ES6: Assinging object properties to variables`);
let first_name=person.first_name;
let age=person.age;
console.log(`person.first_name and person.age: ${first_name},${age}`);

console.log(`After ES6:Object Destructuring`);
const after={
    fullName:'Akshay',
    old:25,
    isMarried:true
}
let{fullName,old,isMarried}=after;
console.log(`{fullName,old,isMarried}=after :${fullName},${old},${isMarried}`);//after object destructuring was introduced we do not need us (object_name.property) to access it.
console.log(" ");
console.log(`=========Array Destructuring===========`);
const arrayOfNum=[1,2,34,6,8,99,7];
//Accessing array element using index before ES6
console.log(`Accessing array element using index before ES6`);
console.log(`arrayOfNum[0]:${arrayOfNum[0]}`);
console.log(`arrayOfNum[4]:${arrayOfNum[4]}`);
//After ES6- Array destructuring
console.log(`After ES6- Array destructuring`);
let[num1,num2]=arrayOfNum;
console.log(`[num1,num2]=arrayOfNum :${num1},${num2}`);
console.log(`====ArrayDestructuring with default Value=======`);
const fruits=["apple","mango","Banana"];
//ES6 - Array Destructuring with default value or fallback
console.log(`ES6 - Array Destructuring with default value or fallback`);
let[fruit1,fruit2,fruit3="jack Fruit",fruit4="Strawberry"]=fruits;//when default value will be set if the array index is not present otherwise will neglect it 
console.log(fruits);
console.log(`[fruit1,fruit2,fruit3="jack Fruit",fruit4="Strawberry"]=fruits: [${fruit1},${fruit2},${fruit3},${fruit4}]`);