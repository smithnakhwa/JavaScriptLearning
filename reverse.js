let id="Suoyg is my name";
const array=id.split(" ");
const n=(array.length)/2;
let k=array.length-1;
for (let index = 0; index < n-1; index++) {
    const temp=array[index];
    array[index]=array[k];
    array[k]=temp;
    k--;
    
}
console.log(array.join(" "));