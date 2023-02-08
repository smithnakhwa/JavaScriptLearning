function random(){
    let random=Math.floor(Math.random()*10);
    let num= prompt("Guess the Number between 1 to 10");
    if(num==random)
    {
        console.log(`Good Work`);
    }
    else{
        console.log(`Not Matched,the number is ${random}`);
    }
}