// occurance of all number in array using loop

console.log(` occurance of all number in array using loop`);

function occurance(givenarray) {
    // finding largest
    let largest =givenarray[0];
        for (let i = 1; i < givenarray.length; i++) {
            if (givenarray[i]>largest) {
                largest = givenarray[i]
            }   
        }
        console.log(largest);
// occurance
let count=0; let resultArray=[];
for (let i = 0; i < largest; i++) {
    let num = givenarray[i]
    for (let j = 0; j < givenarray.length; j++) {
        if (givenarray[j] === num ) {
            if(givenarray[j]!=null)
            {
                givenarray[j]=null;
                count++;

            }
        }
    }
    if (num != undefined) {
        console.log(`num ${num} occurance ${count}`);
        count =0   
    }  
}
}
occurance([11,2,33,44,11,555,2]);