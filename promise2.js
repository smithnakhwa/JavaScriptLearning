let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am The first promise");
    },4000);
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am The Second Promise");
    },4000);
})
p1.then((value)=>{

    console.log(value);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am promise Inside another Promise");
        },4000);
    })}).then((value)=>{
    console.log(value);
})
