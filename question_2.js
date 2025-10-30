//Q: 9
//Employee Performance Analysis
//You are given an array of employees:
//------------------------------------------

//const employees = [
  //{ name: "Amit", dept: "Tech", salary: 70000, rating: 4.8 },
  //{ name: "Neha", dept: "Tech", salary: 60000, rating: 4.2 },
  //{ name: "Ravi", dept: "HR", salary: 55000, rating: 4.7 },
  //{ name: "Sonia", dept: "Tech", salary: 75000, rating: 4.9 },
 // { name: "Karan", dept: "Finance", salary: 50000, rating: 3.9 },
//];

//Tasks:
//Use filter() to get only "Tech" department employees.

//Use another filter() to keep only employees with rating > 4.5.

//Sort them by salary (highest → lowest).

//Use reduce() to calculate the total salary of these filtered employees.


//ANS=>

    const employees = [
  { name: "Amit", dept: "Tech", salary: 70000, rating: 4.8 },
  { name: "Neha", dept: "Tech", salary: 60000, rating: 4.2 },
  { name: "Ravi", dept: "HR", salary: 55000, rating: 4.7 },
  { name: "Sonia", dept: "Tech", salary: 75000, rating: 4.9 },
  { name: "Karan", dept: "Finance", salary: 50000, rating: 3.9 },
];

const techEmployee=employees.filter(employee=>employee.dept=="Tech")
console.log(techEmployee)

const higherRating=techEmployee.filter(employee=>employee.rating>4.5)
console.log(higherRating)

const sorted=higherRating.sort((a,b)=> b.salary-a.salary)
console.log(sorted)

const totalSalary=sorted.reduce((acc,cur)=>acc+ cur.salary,0)
console.log(totalSalary)