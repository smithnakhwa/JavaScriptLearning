var  global_variable=100;
function outer_function(){
    let local_variable=200;
    let inner_function=function(){//the inner function can access gloabl variable ,outer function variable anf it own variable
        let innerFunction=300;
        console.log(`Global Variable : ${global_variable}`);
        console.log(`Outer Variable:${local_variable}`);
        console.log(`inner Variable:${innerFunction}`);
    }
    return inner_function;
}
outer_function()();