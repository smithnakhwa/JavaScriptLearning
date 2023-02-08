function hAndM(num){
    let hours=0;
    let minutes=0;
    hours=Math.floor(num/60);
    minutes=num%60;
    return hours+" hrs "+minutes+" min "
}
console.log(hAndM(71));
console.log(hAndM(450));
console.log(hAndM(1441));