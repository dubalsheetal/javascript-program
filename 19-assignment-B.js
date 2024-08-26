class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahi];
console.log(array);
console.log(`==============================================================`);
console.log(`****1. Find all the employees working in ‘TCS’*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_company == "TCS") {
        console.log(`Employee name : ${element.emp_name} and Company is : ${element.emp_company}`);
    }
}

console.log(`==============================================================`);
console.log(`****2. Find the ‘Finance’ department employees*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_dept == "Finance") {
        console.log(`Employee name : ${element.emp_name} and Dept name is : ${element.emp_dept}`);
    }
}

console.log(`==============================================================`);
console.log(`****3. Find the employees whose name starts with ‘R’*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_name.startsWith("R")) {
        console.log(`Employee name : ${element.emp_name} and Dept name is : ${element.emp_dept}`);
    }
}

console.log(`==============================================================`);
console.log(`****4. Find the employees whose salary is greater than 75000*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_salary > 75000) {
        console.log(`Employee name : ${element.emp_name} and company name is : ${element.emp_company} and salary is : ${element.emp_salary}`);
    }
}

console.log(`==============================================================`);
console.log(`****5. Find the emp’s whose salary greater than or equal 50000 and from ‘IT’ department*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_salary >= 50000 && element.emp_dept == "IT") {
        console.log(`Employee name : ${element.emp_name} and company name is : ${element.emp_company} and id is :${element.emp_id} and dept name is : ${element.emp_dept} and salary is : ${element.emp_salary}`);
    }
}

console.log(`==============================================================`);
console.log(`****6. Find out all  the employees from company "Infy"*****`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.emp_company == "Infy") {
        console.log(`Employee name : ${element.emp_name} and company name is : ${element.emp_company} `);
    }
}