function range(n1,n2,n3){
    if((n1>=50 && n1<=90)||(n2>=50 && n2<=99)||(n2>=50 && n2<=99))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(range(50,90,99));
console.log(range(5,9,199));
console.log(range(65,9,199));