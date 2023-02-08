function largest(n1,n2,n3){
    return (n1>n2?n1:n2)>n3?(n1>n2?n1:n2):n3;
}

console.log(largest(1,0,1));
console.log(largest(0,-10,-20));
console.log(largest(1000,510,440));