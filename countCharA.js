
function countCharA(input)
{
    var count=0;
    for (let index = 0; index < input.length;index++) {

        var char=input.charAt(index);
        if (char=="a" || char=="A") {
            count++;
            
        }
    }
    return count;
}  
console.log(`the no .of "A" or "a" present in "I AM Learning JavaScript, The Language of internet"`);
console.log(countCharA("I AM Learning JavaScript, The Language of internet"));
console.log(`the no .of "A" or "a" present in "My favorite movie is LAggAn"`);
console.log(countCharA("My favorite movie is LAggAn"));
