let date=new Date();
switch(date.getUTCDay()){
    case 0 : console.log(`Today is : Sunday`);
    break;
    case 1 : console.log(`Today is : Monday`);
    break;
    case 2 : console.log(`Today is : Tuesday`);
    break;
    case 3: console.log(`Today is : Wednesday`);
    break;
    case 4 : console.log(`Today is : Thrusday`);
    break;
    case 5: console.log(`Today is : Friday`);
    break;
    case 6 : console.log(`Today is : Saturday`);


}
//the above code can be modified in below code
const day=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
console.log(`Today is : ${day[date.getDay()]}`);

function gethour(num){
    let zone=" AM";
    if(num>12){
        num-=12;
        zone=" PM"
    }
    return num+zone;

}
 console.log(`Current time is : ${gethour(date.getHours())} :  ${date.getMinutes()} : ${date.getSeconds()}`);

