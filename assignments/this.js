/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of "this" inside a function will be the window object whenever a function
is contained inside the global scope 

* 2. The object before that dot is "this" when a function is called by a 
preceding dot

* 3. "This" refers to the specific instance of the object that is created 
and returned by the constructor function whenever a constructor function is used

* 4. "This" is defined when the JS method "Call" or "apply" is used.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan")

const obj1 = {name: "George", location: "jungle"};

// console.log(obj1);

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');
  
// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman);
newman.speak.apply(jerry);