// string
let myName = 'Jose';
// myName = 20; error
// number
let myAge = 27.5;
// myAge = 'Jose'; error
// boolean
let hasHobbies = false;
// hasHobbies = 1; error
// assign Types
let myRealAge;
myRealAge = 27;
myRealAge = '27';
// array
let hobbies = ['Cooking', 'Sports'];
hobbies = [100];
//hobbies = 100
// tuples the order matters
let address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green; // type enum
console.log(myColor);
// any
let car = 'BMW';
car = { brand: 'BMW', series: 3 };
// functions
function returnMyName() {
    return myName;
}
//void
function sayHello() {
    console.log('hello');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply("hello", 2)); error
//function types
let myMultiply;
myMultiply = multiply;
// objects
let userData = {
    name: 'Jose',
    age: 27,
};
// complex object
let complex = {
    data: [100, 3.99, 10],
    output(all) {
        return this.data;
    },
};
let complex2 = {
    data: [100, 3.99, 10],
    output(all) {
        return this.data;
    },
};
// union types
let myRealRealAge = true;
myRealRealAge = '27';
// check types
let finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
