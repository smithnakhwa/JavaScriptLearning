let str="I am very good IT Developer";
let count=0;
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    char=char.toLowerCase();
    if(char=="a" || char=="e" || char=="i" || char=="u" || char=="o")
    {
       count++;
    }
  
    
    
}
console.log(`The Total number of vowels for string "I am very good IT Developer" is--->  ${count}`);
let sum=0;
for (let index = 1; index < 6; index++) {
    let cube=index*index*index;
    sum=sum+cube;
    
}
function sumOfCube(){
    let sum=0;
for (let index = 1; index < 6; index++) {
    let cube=index*index*index;
    sum=sum+cube;
    
}
console.log(`The sum of Cube of numbers from 1 to 5 is--> ${sum}`);

}
sumOfCube();
function oddPositionChars(string) {
    let result="";

    for (let index = 0; index < string.length; index++) {
        let char=string.charAt(index);
        if(index%2!==0 && char!==" ")
        {
            result=result.concat(char);

        }
     
        
    }
    console.log(`Thw odd posititon chars in "${string}" are---> ${result}`);
    
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be Angular IT Champ");