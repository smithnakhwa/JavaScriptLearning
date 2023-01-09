function do_homework(callbacks){
    console.log(`doing home work.. Solvin tricky problem`);
    console.log(`finally ,solved `);
    callbacks();
    let complete_homework=function(){
        console.log(`completed Home work, Thank You, Friend`);
    }
    return complete_homework;
}
function copy_homework() {
    console.log(`copy homework from friend's notes`);
    
}
let homework_done=do_homework(copy_homework);//we are passing function as argument........
homework_done();