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
    const setOfEmployees=new Set();
    setOfEmployees.add(emp_anil);
    setOfEmployees.add(emp_radha);
    setOfEmployees.add(emp_rishi); 
    setOfEmployees.add(emp_sonali);
    setOfEmployees.add(emp_monika);
    setOfEmployees.add(emp_viny );
    setOfEmployees.add(emp_mahi);
    console.log(`=======The Employee who Work in "TCS"========`);
    setOfEmployees.forEach((employeeObject)=> {
        if(employeeObject.emp_company=="TCS")
        console.log(`Emp Name: ${employeeObject.emp_name}, Company:${employeeObject.emp_company}`);
    });
    console.log(" ");
    let sum=0;
    let count=0;
    console.log(`===========Salary Is Greater Than "50,000/-" ============`);
    setOfEmployees.forEach((employeeObject)=> {
        if(employeeObject.emp_salary>=50000)
        console.log(`${employeeObject.emp_id}===> Name: ${employeeObject.emp_name}, Dept: ${employeeObject.emp_dept}, Company: ${employeeObject.emp_company}, Salary: ${employeeObject.emp_salary}`);
        sum+=employeeObject.emp_salary;
        count++;

    });
    console.log(" ");

    console.log(`======== Sum Of All Employees Salary ============`);
    console.log(`Total Salary is==> ${sum}`);
    console.log(" ");

    console.log(`======== Average  Salary ============`);
    console.log(`Average Salary is==> ${sum/count}`);
    console.log(" ");
console.log(`=========Employees Who's Dept is "IT" or "HR" And Has Salary Greater Than Equal to "75,000/-" ==========`);
    setOfEmployees.forEach((employeeObject)=> {
        if((employeeObject.emp_dept=="IT"||employeeObject.emp_dept=="HR") && employeeObject.emp_salary>=75000 )
        console.log(`${employeeObject.emp_id}===> Name: ${employeeObject.emp_name}, Dept: ${employeeObject.emp_dept}, Company: ${employeeObject.emp_company}, Salary: ${employeeObject.emp_salary}`);
        
      

    });
    
    
    
 