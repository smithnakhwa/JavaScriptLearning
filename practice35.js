function check(str,ch){
    for (let index = 1; index <=3; index++) {
        if(str.charAt(index)==ch)
        {
            return true;
        }
        
    }
    return false;
}
console.log(check("Python","y"));
console.log(check("JavaScript","a"));
console.log(check("Console","o"));

console.log(check("Console","C"));

console.log(check("Console","e"));

console.log(check("JavaScript","S"));

