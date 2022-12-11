swap("1st","2nd")
function display(){
    console.log("my name is :smith");

}
display();
display();
function show(){
    console.log("my college name: Fabtech Technical campus");
}
show();
function showDetails(myName){
 console.log("Details:",myName);
}
showDetails("Smith nakhwa");
showDetails("Rohit");
showDetails("chess");
function swap(value1,value2){//function defination
    console.log("===========swap two variable values=============");
console.log("before swaping value1=",value1,"and value2=",value2);
var temp;
temp=value1;
value1=value2;
value2=temp;
console.log("after swaping value1=",value1,"and value2=",value2);

    
}
swap(100,200);
swap(2,4);
swap("smith","rohit");
function rajabhai(pasia){
    console.log("Going Market");
    console.log("purchased fresh vegetables");
    console.log("come back");
    return "bag of egetables";
}
var bagOfVegetables=rajabhai(100);
console.log("return=",bagOfVegetables);
