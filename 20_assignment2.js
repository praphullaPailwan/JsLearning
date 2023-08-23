class Employess{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_Anil=new Employess(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employess(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employess(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employess(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employess(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employess(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh=new Employess(99,"Mahesh","HR",85000,"Infy");
const arrayEmployess=[emp_Anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahesh];
console.log("----------------------step 1-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_company=="TCS") {
        console.log(`Employe Details : Name : ${emp.emp_name}, Company : ${emp.emp_company}`);
    }
}
console.log("----------------------step 2-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_dept=="Finance") {
        console.log(`Employe Details : Name : ${emp.emp_name}, Department : ${emp.emp_dept}`);
    }

}
console.log("----------------------step 3-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_name.startsWith("R")) {
        console.log(`Employe Details : Id : ${emp.emp_id }, Name : ${emp.emp_name}, Department : ${emp.emp_dept} , Salary : ${emp.emp_salary} , Company : ${emp.emp_company}  `);
    }
}
console.log("----------------------step 4-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_salary>75000) {
        console.log(`Employe Details : Name : ${emp.emp_name}, Department : ${emp.emp_company} , Salary : ${emp.emp_salary}`);
    }

}
console.log("----------------------step 5-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_salary>=50000&&emp.emp_dept=="IT") {
        console.log(`Employe Details : Id : ${emp.emp_id }, Name : ${emp.emp_name}, Department : ${emp.emp_dept} , Salary : ${emp.emp_salary} , Company : ${emp.emp_company}  `);
    }

}
console.log("----------------------step 6-------------------------");
for (const emp of arrayEmployess) {
    if (emp.emp_company=="Infy") {
        console.log(`Employe Details : Id : ${emp.emp_id }, Name : ${emp.emp_name}, Department : ${emp.emp_dept} , Salary : ${emp.emp_salary} , Company : ${emp.emp_company}  `);
    }

}

