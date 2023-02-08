function mOf3Or7(num){
    if(num%7==0 || num%3==0)
    {
        return true;

    }
    else{
        return false;
    }
}
console.log(mOf3Or7(12));
console.log(mOf3Or7(14));
console.log(mOf3Or7(10));
console.log(mOf3Or7(11));
console.log(mOf3Or7(12));
console.log(mOf3Or7(12));