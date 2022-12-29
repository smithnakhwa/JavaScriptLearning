console.log(`==================Cars Details==================`);
class Vehicle{
    model;
    colour;
    price;
    brand

    constructor(model,colour,price,brand)
    {
        this.model=model;
        this.colour=colour;
        this.price=price;
        this.brand=brand;
        console.log(`Model: ${this.model}, Colour: ${this.colour}, Price: ${this.price}, Brand: ${this.brand}`);

        
    }
    
    
}
let suzuki=new Vehicle("Ciaz","Brown","$10,000-$11,000","SUZUKI");
let tata=new Vehicle("Nexon","Foliage Green","$9,999","TATA");
let toyota=new Vehicle("Glanza","","$800","Toyota");
let hyundai=new Vehicle("Aura","Titan Grey","$879","Hyundai");
let renault=new Vehicle("Kiger","White","$900","Renault");
console.log(`=================College Details=====================`);
class College{
    collegeName;
    location;
    fees;


    constructor(collegeName,location,fees)
    {
        this.collegeName=collegeName;
        this.fees=fees;
        this.location=location;

        
    }
    showDetails()
    {
        console.log(`Name Of The College: ${this.collegeName}, Location: ${this.location}, Fees: ${this.fees}`);

    }
    
    
}
let ftc=new College("Fabtech Technical Campus","Sangola","$200-$3000");
let nhs=new College("Nachiketas High School And Jr.College","Panchgani","$400");
let ues=new College("Uran Education Soceity","Uran","$100");
let dhs=new College("Dronagiri High School And Jr.College","Karanja","$50-$80");
ftc.showDetails();
nhs.showDetails();
ues.showDetails();
dhs.showDetails();
function traverseObject(object){
    console.log(`================traverseObject===================`);
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} : ${element}`);
            
        }
    }
}
traverseObject(nhs);
traverseObject(ftc);
traverseObject(ues);
traverseObject(dhs);
console.log(`===============Fibonacci Series =====================`);
let sum1=0;
let sum2=1;
let res=0;
let count =0;
let store=[];
for (;;) {
    if(count==7)
    {
        break;
    }
    res=sum1+sum2;
    store.push(res);
    sum1=sum2;
    sum2=res;
    count++;
    
}
console.log(`The Fibonacci Series is--->${store}`);
console.log(`==============Prime no. Or not=============`);

function primeNo(num) {
    let count1=0;
   for (let index = 1; index <= num; index++) {
       if(num%index==0){
        count1++;
       }
    
   }    
   if(count1==2)
   {
     console.log(`The Given Number ${num} is Prime Number`);

   }
   else{
    console.log(`The Given Number ${num} is Not Prime Number`);

   }
}
primeNo(11);
primeNo(24);
primeNo(55);