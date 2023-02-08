function largest(n1,n2){
    if((n1>=40 && n2<=60) && (n2>=40 && n2<=60))
    {
        return n1>n2?n1:n2;
    }
    else{
        return "Number Don't Fit";
    }
}
console.log(largest(45,60));
console.log(largest(25,60));
console.log(largest(45,80));