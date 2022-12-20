console.log(`===========TCS Interview Elagiblity checking===============`)
var interviewEligibilty= function(gradScore,hscScore,sscScore,candidate_name){
  var result= (gradScore>=70|| hscScore>=80||sscScore>=90)?`congrats ${candidate_name} you are eligible for TCS interveiw`:`Unfortunatily ${candidate_name} you are not eligible for interview`;
console.log(result);
}
interviewEligibilty(80,86,90 ,"Smith");
interviewEligibilty(70,65,55 ,"Rohit");
interviewEligibilty(60,79,88 ,"Karthik") ;