function convert(str){
    if(str.length>3){
       console.log( str.replace(str.slice(0,3),(str.slice(0,3)).toLowerCase()));
    }
    else{
        console.log(str.toUpperCase());
    }
}
convert("Python");
convert("Py");
convert("JAVAScript")