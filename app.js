// Exercise 1 — Hoisting & Scoping Challenge
console.log(name);
var name = "Jone";

function test() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(y);
}

test();
console.log(x);

// 1-●	Predict the output before running the code.
// undefined
// y = 20   x=> error

//●	Explain how hoisting works with var.
// it will excute the clg caust js know there is a var called name and then it will assign a value of it
//●	Identify the difference between function scope and block scope.
// ---> function scope = a variable availble inside a function
// ---> with let and const block scop can't use a variable out of the scope in var we can

//Exercise 2 — Constructor Functions & Prototypal Inheritance
// ●	Create a Person constructor with name and age.
function Person(name, age)
{
    this.name = name
    this.age=age
}

//●	Add a greet() method to Person.prototype.
Person.prototype.greet = function ()
{
    console.log("Hello" + this.name); 
}
//●	Create an Employee constructor with employeeId and position.
function Employee(name, age,employeeId, position)
{
    Person.call(this, name, age);
    this.employeeId = employeeId;
    this.position = position;
}
// ●	Make Employee inherit from Person using Object.create().
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// ●	Override the greet() method in Employee.prototype.
Employee.prototype.greet = function () {
    console.log("Hello"+ this.name+ "Your Position :"+ this.position);
};
//●	Create at least three employees and demonstrate inheritance.

let employee1 = new Employee("Farah", 25, 101, "Developer");
let employee2 = new Employee("Ahmad", 28, 102, "Designer");
let employee3 = new Employee("Sara", 24, 103, "Tester");

employee1.greet();
employee2.greet();
employee3.greet();

console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.employeeId);
console.log(employee1.position)