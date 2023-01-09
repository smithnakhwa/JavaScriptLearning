const array_number=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`=======Element and Index=========`);
array_number.forEach((element,index) => {
    console.log(`The element is: ${element} and It's Index is: ${index}`);
    
});
console.log(`========Positive Number==========`);
const arrayOfPositive=[];
array_number.forEach((element) => {
    if(element>=0){
        arrayOfPositive.push(element);

    }
});
console.log(`The positive numbers in Array are: [${arrayOfPositive}]`);
console.log(`========Negative Number==========`);
const arrayOfNegative=[];
array_number.forEach((element) => {
    if(element<0){
        arrayOfNegative.push(element);

    }
});
console.log(`The Negative numbers in Array are: [${arrayOfNegative}]`);
console.log(`======= Even Number==========`);
array_number.forEach((element) => {
    if(element%2==0){
        console.log(element);

    }
});
console.log(`========Sum Of All Values=======`);
let sum=0;
array_number.forEach(element => {
   sum+=element;
    
});
console.log(`The Sum of All Elements is: ${sum }`);
console.log(`=======All Even Position Number==========`);
array_number.forEach((element,index) => {
    if(index%2==0){
        console.log(element);

    }
});
