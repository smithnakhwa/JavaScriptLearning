function myLove(){
    console.log("===========myLove function============");
    console.log("I Love javaScript");
}
function details(){
    console.log("===========details function============");
    console.log("My name is Smith Nakhwa");
}
function personalDetails(firstName,lastName,collegeName){
    console.log("==========personalDetails function=========");
    console.log(firstName);
    console.log(lastName);
    console.log(collegeName);

}
function swapValueDude(value1,value2){
    console.log("===========swapValueDude Function=============");
console.log("before swaping value1=",value1,"and value2=",value2);
var temp;
temp=value1;
value1=value2;
value2=temp;
console.log("after  swaping value1=",value1,"and value2=",value2);

}
function addThreeValues(value1,value2,value3){
    console.log("===========addThreeValues function=============");
    return value1+value2+value3;

}
myLove();
details();
personalDetails("smith","Nakhwa","Fabtech Technical Campus");
swapValueDude("virat","Anushka");
swapValueDude(1000,2000);
var addition=addThreeValues(10.23,600,40);
console.log("The addition of Three value is",addition);
addition=addThreeValues("Hello","Good","Morning");
console.log("The addition of Three value is",addition);
