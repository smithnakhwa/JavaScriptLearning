console.log(`==========Checking Hoisting For Variable==============`);
console.log(varVariable);// Var can Be Hoisted
console.log(letVariable);// Let  cannot  Be Hoisted
console.log(constVariable);// Const cannot  Be Hoisted
var varVariable="I am Var";
let letVariable="I am let ";
const constVariable="I am const";
console.log(`=========Checking Hoisting For Function============`);
normalFunction();// Normal Function can Be Hoisted
function normalFunction(){
    console.log(`I am Normal Function`);
}
functionExpression();//Function Expression Cannot be Hoisted
var functionExpression=function(){
    console.log(`I am function Expression`);
}
 

