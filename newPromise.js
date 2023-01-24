let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am The first promise");
    },4000);
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve();
    },4000);
})
p1.then((value)=>{console.log("P1 Promise Is fulfilled")},(error)=>{console.log(error);});
p2.then((value)=>{console.log("P2 Promise Is fulfilled")},(error)=>{console.log(error);});