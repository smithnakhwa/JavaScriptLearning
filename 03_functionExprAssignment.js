var square= function(num){
    console.log("=======Square=========");
    console.log("Square of num",num,"is:",num*num);
}
square(25);
console.log("typeof variable square is:",typeof square);
var rectangle=function(width,length){
    console.log("========Area of Rectangle========");
    console.log("Area of rectangle of length: 499 and width: 917 is:",width*length);
}
rectangle(917,499);
var swapValues=function(value1,value2){
    console.log("===========swapValueDude Function=============");
console.log("before swaping value1=",value1,"and value2=",value2);
var temp;
temp=value1;
value1=value2;
value2=temp;
console.log("after  swaping value1=",value1,"and value2=",value2);

}
swapValues("virat","Anushka");
swapValues(1000,2000);
var string= function(name){
    console.log("============Operation on String=============");
    console.log("total character available in the String are:",name.length);
    console.log("character at index six is:",name.charAt(6));
    console.log("character at index eleven is:",name.charAt(11));
    console.log("last character in the given string is:",name.charAt((name.length-1)));
    console.log("The very First character is:",name.charAt(0));
    console.log("the length of the string is:",name.length,"and it's Square is:",(name.length)*(name.length));
}
string("JS the most popular language");
