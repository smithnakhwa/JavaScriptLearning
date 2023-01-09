let message=()=>{
    console.log(`Good Morning, Today is Monday`);
}
let multi=(n1,n2,n3=1)=>{
    console.log(`The Multiplication Of Three number is:${n1*n2*n3}`);

}
let add=(n1,n2,n3,n4,n5)=>{
    return n1+n2+n3+n4+n5;
}
console.log(`=========Message==========`);
message();
console.log(`========Multiplication==========`);
multi(5,5,2);
multi(10,4);
console.log(`========Addition=========`);
console.log(`The Addition is: ${add(100,100,200,349,756)}`);
console.log(`The Addition is: ${add("I am","learning","ES6","features","in depth")}`);
