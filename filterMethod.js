console.log(`=========Finding 'TCS' Empolyees Using "Filter Method()"===========`);
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
    const arrayOfEmployee=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_sonali,emp_rishi,emp_viny];
    const tcsEmpolyee=arrayOfEmployee.filter((currentvalue)=> {
        return currentvalue.emp_company=="TCS";
    });
    tcsEmpolyee.forEach(currentvalue=>console.log(`Company Name: ${currentvalue.emp_company}, NAME:${currentvalue.emp_name}`));