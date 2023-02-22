// 1. var,let ,const 
// breakup with var
const numbers = [1,2,3,4,5,6,7,8];
let salary = 450;
salary = 500;

// 2. default perameters 
function calculationSalary(salary,tax=0.25,bonus=0){
    const remainig = salary - salary*tax;
    const total = remainig + bonus;
    return total;
}

// 3. template string 
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculationSalary(10000,0,0)} </p>
    <p>Others: ${numbers[2]} </p>
</div>
`;

// 4. arrow function 
const doubleIt = x => x * 2;
const calculateSalary2 = (salary,tax,bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [12,13,14,15,16,17];
const newAges = [...ages,22,23,24];

// 6. distructuring
const {x, y, ...z} = { x: 45, y: 30, z: 32, name: 'Sakib Al Hasan', salary: 450000,};
const [a,b,...r] = [12,13,14,15,16];