const personalDetails={
    name:"Smith Nakhwa",
    age:22,
    Qualification:"BE/B.Tech",
    hobby:"Playing Chess",



}
const collegeDetails={
    collegeName:"Fabtech Technical Campus",
    collegeLocation:"Sangola",
    naacRating:"A+",
    courses:"Engineering and Diploma"
}
Object.assign(personalDetails,collegeDetails);
console.log(`==========Two Object Merge ===========`);
console.log(personalDetails);
let friends=["rohit","noor","kartik"];
Object.freeze(friends);
console.log(`===========My Friends Are==============`);
for (const iterator of friends) {
    console.log(iterator);
    
}
console.log(`===========Reverse Word===============`);
var str="Codemind Technology";
let m=str.indexOf("Technology");
let n=str.length;
let sub="";
for (let index = m; index < n; index++) {
    let ch=str.charAt(index);
    sub=ch+sub;


    
}
let res=str.split(" ");
res[0]=res[0]+" "+sub;
console.log(`Old String : "${str}"`);

console.log(`Modified String: "${res[0]}"`);

