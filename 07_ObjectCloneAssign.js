console.log(`=========By Shallow Cloning==========`);
const arrayNums=[20,3,4,56,90,400,49];
const arrayNumShallowClone=arrayNums;
arrayNumShallowClone.push(55,66);
console.log(`Original Array ----> [${arrayNums}]`);
console.log(`Shallow Cloned Array ----> [${arrayNumShallowClone}]`);

console.log(`========By Deeping Cloning==========`);
const arrayNumsDeepClone=[... arrayNums];
arrayNums.push(10,25);
console.log(`Original Array ----> [${arrayNums}]`);
console.log(`Deeped Cloned Array ----> [${arrayNumsDeepClone}]`);
console.log(`==========Merging Two Array==========`);
const arrayEven=[2,30,40,8];
const mergeArray=[... arrayNums,...arrayEven];
console.log(`Merging The ArrayNums with arrayEven ----> [${mergeArray}]`);

const employee_info = {

    emp_id: 27,
    
    emp_name: "John Doe", salary: {
    
    july_month: "40,0000 INR",
    
    aug_month: "50,0000 INR",
    
    jun_month: "65,0000 INR"
    
    },
    
    address: {
    
    locality: {
    
             colony: "OM Vrindavan Society", 

             street: "Kanch Pokli, 431202"
    
    },
    
    city: "Mumbai",
    
    state: "Maharashtra",
    
    country: "India"
    
    },
     mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`=============Employee Details=============`);
for (const key in employee_info.address) {
        
       
        console.log(key,employee_info.address[key]);  
        
    
}
for (const key in employee_info.mobiles) {
        
       
    console.log(key,employee_info.mobiles[key]);  
    

}
let employee_info_clone=JSON.parse(JSON.stringify(employee_info));
console.log(employee_info_clone);
console.log(`===========Chaning July Month Salary in cloned Object========`);
employee_info_clone.salary.july_month="80,000 INR";
employee_info.address.country="United Kingdom";
console.log(`Original Object July_month Salary ----> "${employee_info.salary.july_month}"`);
console.log(`Deep Cloned Object July_month Salary ----> "${employee_info_clone.salary.july_month}" `);
console.log(`==========Changing The Country in original Object==========`);
console.log(`Original Object  country ----> "${employee_info.address.country}"`);
console.log(`Deep Cloned Object  country ----> "${employee_info_clone.address.country}" `);



