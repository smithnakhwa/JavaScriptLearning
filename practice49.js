function replace(str){
    let fake="";
    let split= str.split('');
    for (let index = 0; index < split.length; index++) {
     let num=split[index].charCodeAt(0)+1;
    let ch=String.fromCharCode(num); 
    fake+=ch;
    
   }
   return fake;
}
console.log(replace("PYTHON"));
console.log(replace("W3R"));
console.log(replace("php"));