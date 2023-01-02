const car={
    carName: "Creta SX",
    company: "Hyundai",
    launchYear:2017

}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113 BHP"

}
console.log(`=======Merging Two Object using Object.assign==========`);
let assign=Object.assign(car,carEngine);
console.log(assign);
console.log(`=======Merging Two Object using Object.assign==========`);
let spread={...car,...carEngine};
console.log(spread);