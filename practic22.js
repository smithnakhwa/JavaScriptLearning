function checkString(str,index){
   str=str.replace(str.charAt(index),"");
   return str;

}
console.log(checkString("Python",0));
console.log(checkString("Python",3));
console.log(checkString("Python",5));
