class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    
    this.emp_dept = emp_dept;
    
    this.emp_id = emp_id;
    
    this.emp_name = emp_name;
    
    this.emp_salary=emp_salary;
    
    this.emp_company=emp_company;
    }
}
    
    const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
    
    const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
    
    const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
    
    const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
    
    const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
    
    const emp_viny = new Employee (88, "Vinayak","IT", 75000, "TCS");
    
    const emp_mahi = new Employee (99, "Mahesh","HR", 85000, "Infy");
    const array_emps=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_sonali,emp_rishi,emp_viny];
    const wipro_emp=array_emps.filter(currentvaule=>  {return currentvaule.emp_company=="Wipro"} );
    const it_hr_dept=array_emps.filter(currentvaule=>  {return currentvaule.emp_dept=="IT" || currentvaule.emp_dept=="HR"} );
    const id_greater50=array_emps.filter(currentvaule=>  {return currentvaule.emp_id>50} );
     const name_startwith=array_emps.filter(currentvaule=>  {
        if(currentvaule.emp_name.startsWith("A" )|| currentvaule.emp_name.startsWith("V" ) || currentvaule.emp_name.startsWith("M"))
        {
            return currentvaule;
        }
    });
    console.log(`=========All Wipro Employee========`);
    wipro_emp.forEach(value=>console.log(value));
    console.log(`=========All The  Employees In 'IT' OR 'HR'========`);
    it_hr_dept.forEach(value=>console.log(value));
    console.log(`========= Employees 'ID' Greater Than "50"========`);
    id_greater50.forEach(value=>console.log(value));
    console.log(`=========All The Employees who Names StartsWith 'A' OR 'V' OR 'M'========`);
    name_startwith.forEach(value=>console.log(value));
    let count=0;

const average_salary=array_emps.reduce((preivousValue,currentvalue)=>{
     count++;
      return preivousValue+currentvalue.emp_salary;
},0)/count;
console.log(`========Average Salary Of All the Dept=========`);
console.log(`The average Salary OF All employees IS: "${average_salary}"`);
let count1=0;
let sum=array_emps.filter(currentvalue=> {return currentvalue.emp_dept=="IT"}).reduce((preivousValue,currentvalue)=>{
    count1++
    return preivousValue+currentvalue.emp_salary},0);
    console.log(`========Average Salary Of "IT" Dept===========`);
const average_salaryOfIT=sum/count1;
console.log(`The average Salary of "IT" Dept Employees is: "${ average_salaryOfIT}"`);


    
