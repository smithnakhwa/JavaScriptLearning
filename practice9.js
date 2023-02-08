function nextChrismas(){
    let date1=new Date();
    let date2=new Date("2023-12-25");
 
    result=(date2.getTime()-date1.getTime());
    result=Math.round(result/86400000);
    console.log(result);
    
}
nextChrismas();