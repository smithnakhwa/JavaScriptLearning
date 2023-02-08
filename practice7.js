
for (let index =2014; index <= 2050; index++) {
    let date=new Date("01-01-"+index);
    if(date.getDay()===0)
    {
        console.log(`January is being a Sunday ${index}`);
    }    
}

