function range(n1,n2){
    if((n1>=50 && n1<=90)||(n2>=50 && n2<=99))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(range(12,101));
console.log(range(52,80));
console.log(range(15,99));