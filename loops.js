const Student={
    name:"Smith",
    roll:24
}
const arrayOfFruits=["mango","Banana","Apple"];
const mapOfEmployee=new Map();
mapOfEmployee.set("empid",101);
mapOfEmployee.set("company","Tcs");
const setOfNumber=new Set();
setOfNumber.add(1);
setOfNumber.add(2);
setOfNumber.add(3);
console.log(Student);
console.log(arrayOfFruits);
console.log(mapOfEmployee);
console.log(setOfNumber);
const StudentKeys=Object.keys(Student);
for (const key in setOfNumber) {
  console.log(arrayOfFruits[key]);
}
console.log(mapOfEmployee.get("empid"));
console.log(setOfNumber.);