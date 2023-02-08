function range(n1,n2){
    return ((n1>=40 && n1<=60) && (n2>=40 && n2<=60)) || ((n1>=70 && n1<=100) && (n2>=70 && n2<=100));

}

console.log(range(44,56));
console.log(range(70,95));
console.log(range(50,89));
// console.log(range());