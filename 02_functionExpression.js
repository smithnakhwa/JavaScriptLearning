var myName="Mohit";
//Function Expression 
var showResult = function show(){
    console.log("show........");

};
showResult();
var sub=function(num1,num2){
    var result=num1-num2;
    console.log("substraction.........",result);
    return result;
}
var result=sub(45,20);
console.log(result);