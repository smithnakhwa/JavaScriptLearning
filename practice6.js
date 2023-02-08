function leapYear(year){
    if((year%4==0 && year%100!=0) || (year%400==0 && year%100==0)){
        console.log(`The Year ${year} is a leap year`);
    }
    else{
        console.log(`The Year ${year} is not a leap year`);
    }
}
leapYear(2016);
leapYear(2000);
leapYear(1700);
leapYear(1800);
leapYear(100);