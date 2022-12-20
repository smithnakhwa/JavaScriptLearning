console.log(`===================Voting Eligibility==================`);
var votingEligibility= function(age)
{
    if(age<=0 || age>120)
    console.log(`invalid Data:${age}`);
    else{
        if(age<18 && age>0)
        console.log(`Sorry you are not eligible for voting:${age}`);
        else
        console.log(`You are eligible for voting :${age}`);

    }
    
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`===============Grade System=============`);
function gradeCalculation(marks){
    if(marks<=0 || marks>100)
    console.log(`Please provide the valid marks:${marks}`);
    else{
        if(marks>=90 && marks<=100)
        console.log(`Funtastic marks:${marks},Your grade is A+`);
        if(marks>=75 && marks<90)
        console.log(`Excellent marks ${marks},Your grade is A`);
        if(marks>=50 && marks<75)
        console.log(`Good marks ${marks},Your grade is B`);
        if(marks>=35 && marks<50)
        console.log(`Marks is ${marks},Your grade is C ,Need improvement`);

    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);