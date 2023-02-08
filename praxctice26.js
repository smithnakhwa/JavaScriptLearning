function fAndL(str){
    if(str.length>=3){
        let char=str.slice(str.length-3);
        // console.log(char);
        return char+str+char;
    }
    else{
        return false;
    }
    
  }
  console.log(fAndL("abc"));
  console.log(fAndL("ab"));
  console.log(fAndL("abcd"));