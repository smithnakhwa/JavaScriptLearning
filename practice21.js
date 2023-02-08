function checkString(str){
    if(str.slice(0,2)=="Py")
    {
        return str;
    }
    else{
        return "Py"+str;
    }

}
console.log(checkString("Python"));
console.log(checkString("thon"));
