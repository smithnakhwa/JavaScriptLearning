function diff(str){
    const array=str.split('');
    if(array.indexOf("b")-array.indexOf("a")==4)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(diff("Chainsbreak"));
console.log(diff("pane borrowed"));
console.log(diff("abCheck"));