function stringTemplateAssign(){
    console.log(`========Use String template========= `);
  console.log(`My dream company is"Cisco"`);
  var hobby1="chess ";
  var hobby2="drawing ";
  var hobby3="internet Suffering ";
  console.log(`My Hobbies are: ${hobby1.concat(hobby2,hobby3)}`);
  
  }
  stringTemplateAssign();
  console.log(``);
  
  
  
  
  
  
  var stringHandsOn= function(str){
    console.log(`============stringHandOn==============`);
    console.log(`The given String ${str}`);
    var length=str.length;
    console.log(`The length of String is: ${length}`);
    var trimstr=str.trim();
    var trimstrlength=trimstr.length;
    console.log(`trim String: ${trimstr}`);
    console.log(`Total extra spaces count is: ${length-trimstrlength}`);
    var words=trimstr.split(" ");
    console.log(`Total no. of Words in the trim String is: ${words.length}`);
    console.log(`Index of "good" is:${trimstr.indexOf("good")}`);
     console.log(`The substring starting from Index 22 is:${trimstr.slice(22)}`);
    console.log(`The Given String Ends with word "up" :${trimstr.endsWith("up")}`);
     console.log(`The Given String starts with  word "Hey" :${trimstr.startsWith("Hey")}`);
   
  
  }
  stringHandsOn("   Hey you are doing good, keep it up   ");
  