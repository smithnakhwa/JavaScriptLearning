function lastDigit(n1,n2,n3){

    if((n1%10==n2%10)&&(n2%10==n3%10)&&(n1%10==n3%10))
    {
        return true;
    }
    else{
        return false;

    }

}
console.log(lastDigit(20,30,400));
console.log(lastDigit(-20,30,400));
console.log(lastDigit(20,-30,400));
console.log(lastDigit(20,30,-400));