const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`The Array is ---> [${arrayNumber}]`);
console.log(`Total Elements Present in the Array is--> "${arrayNumber.length}"`);
console.log(`The first element of Array is: "${ arrayNumber[0] }" and the last element of Array is: "${arrayNumber[arrayNumber.length-1]}" `);
console.log(`The Third last Element is---> "${arrayNumber[arrayNumber.length-3]}"`);
const tempArray=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%2==0)
    {
        tempArray.push(arrayNumber[index]);
    }    
}
console.log(`All Even Numbers in the Array are--> "${tempArray}"`);
tempArray.splice(0);
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%2!==0)
    {
        tempArray.push(arrayNumber[index]);
    }    
}
console.log(`All Odd Numbers in the Array are--> "${tempArray}"`);
const tempArray1=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2==0)
    {
        tempArray1.push(arrayNumber[index]);
    }    
}
console.log(`All Even Position Element in the Array are--> "${tempArray1}"`);
tempArray1.splice(0);
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2!==0)
    {
        tempArray1.push(arrayNumber[index]);
    }    
}
console.log(`All Odd Position Element in the Array are--> "${tempArray1}"`);
let sum=0;
for (let index = 0; index < arrayNumber.length; index++) {
    sum=sum+arrayNumber[index];
    
}
console.log(`The Sum Of All Elements In the Array is---> ${sum}`);
const multi5=[ ];
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%5==0)
    {
        multi5.push(arrayNumber[index]);
    }    
}
console.log(`The Elements Which Are Multiple of 5 in the Array are--> "${multi5}"`);
function availableNumber(num) {
    if(arrayNumber.indexOf(num)==-1)
    {
        return false;
    }
    else{
        return true;
    }
    
}
console.log(`Is number 115 available in ArrayNumber?---> ${availableNumber(115)}`);
console.log(`Is number 23 available in ArrayNumber?---> ${availableNumber(23)}`);
arrayNumber.splice(3,0,55,66);
console.log(`The new Array is Adding "55" and "66"---> ${arrayNumber}`);
arrayNumber.splice(4,3);
console.log(`The new Array after Delete Three elements starting From index 4---> ${arrayNumber}`);






