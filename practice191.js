function sum(x){
    return ((Math.abs(100-x))<=20)||((Math.abs(400-x))<=20);
}
console.log(sum(10));
console.log(sum(90));
console.log(sum(99));
console.log(sum(199));