console.log(`Current Date`);
let date =new Date();
let dd=date.getUTCDate();
let mm=date.getUTCMonth()+1;
let yy=date.getUTCFullYear();
if(mm<10){
    mm="0"+mm;

}
if(dd<10){
    mm="0"+dd;
    
}
console.log(`${mm}-${dd}-${yy}`);
console.log(`${mm}/${dd}/${yy}`);
console.log(`${dd}-${mm}-${yy}`);
console.log(`${dd}/${mm}/${yy}`);