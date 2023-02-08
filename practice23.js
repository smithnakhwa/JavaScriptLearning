function fAndL(str){
      if(str.length>1)
      {
        let char1=str.charAt(0);
        let char2=str.charAt(str.length-1);

        return char2+str.slice(1,str.length-1)+char1;

      }
      else{
        return str;
      }
}
console.log(fAndL("a"));
console.log(fAndL("ab"));
console.log(fAndL("abc"));