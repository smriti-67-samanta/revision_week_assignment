// 1...   Given an array of students:
//------------------------------------
//const students = [
  //{ name: "Alice", marks: 85 },
 // { name: "Bob", marks: 92 },
 // { name: "Charlie", marks: 70 },
//];
//Using filter() and reduce(), find the average marks of students who scored above 80.

//ANS=>

    const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 70 },
];



    let res=students.filter(student=>student.marks>80)
    console.log(res)

    let average=res.reduce((sum, student, index, array) => {
  sum += student.marks;
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);
console.log(average)



//2....Q2. Write a function to sort an array of objects by age, and then return
//  the total of the top 3 oldest people’s ages.
//-----------------------------------------------------------------------------
//const people = [
  //{ name: "A", age: 21 },
  //{ name: "B", age: 42 },
 // { name: "C", age: 29 },
 // { name: "D", age: 36 },
//];

//ANS=>

    const people = [
  { name: "A", age: 21 },
  { name: "B", age: 42 },
  { name: "C", age: 29 },
  { name: "D", age: 36 },
];

const sorted=people.sort((a,b)=>b.age-a.age)
console.log(sorted)


const totalOfThree=people.slice(0, 3)
                         .reduce((sum, person) => sum + person.age, 0);               
                         
            console.log(totalOfThree)



//Q3. Predict and explain the output:
//-------------------------------------
console.log(a);
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();

//output=> undefined,undefined