function nearest(n1,n2){
    if((Math.abs(n1-100))<(Math.abs(n2-100)))
    {
        return n1;
    }
    else{
        return n2;
    }
}
console.log(nearest(90,89));
console.log(nearest(-90,-89));
console.log(nearest(90,90));