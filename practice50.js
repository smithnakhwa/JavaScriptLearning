function firstCap(str){
    str=str.split(" ");
    for (let index = 0; index < str.length; index++) {
         str[index]=str[index][0].toUpperCase()+str[index].slice(1);
        
    }
    str=str.join(" ");
    console.log(str);

}
firstCap("i am smith");