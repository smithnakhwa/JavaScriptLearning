
    console.log(`============eligibility for Marriage Male========================`);

function maleMarriageEligibility(gender,age,boyName){
    var result= (gender=="Male" && age>=21)?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are Not eligible for Marriage`;
    return result;
}
console.log( maleMarriageEligibility("Male",25,"Billgates") );
console.log( maleMarriageEligibility("Male",17,"Stew Jobs") );
console.log(`============eligibility for Marriage Female========================`);
function femaleMarriageEligibility(gender,age,girlName){
    var result= (gender=="Female" && age>=18)?`Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are Not eligible for Marriage`;
    return result;
}
console.log( femaleMarriageEligibility("Male",25,"Billgates") );
console.log( femaleMarriageEligibility("Male",17,"Stew Jobs") );

