let password="smi0tSh8!s#^";
let special="!@#$%^&*()-+";
let countUpper=0;
let countLower=0;
let countdigits=0;
let countSpecial=0;
let array=special.split("")
for (let index = 0; index < password.length; index++) {
    if(password.charAt(index)>="a" && password.charAt(index)<="z")
    {
        countUpper++;
    }
    if(password.charAt(index)>="A" && password.charAt(index)<="Z")
    {
        countLower++;
    }
    if(password.charAt(index)>="0" && password.charAt(index)<="9")
    {
        countdigits++;
    }
    for (let index2 = 0; index2 < array.length; index2++) {
        if(password.charAt(index)==array[index2])
        {
            countSpecial++;
        }
        
    }
  
    
}
console.log(countLower,countUpper,countdigits,countSpecial);
console.log(array);

