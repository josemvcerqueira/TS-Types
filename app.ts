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
let myRealAge: any;
myRealAge = 27;
myRealAge = '27';

// array
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];
//hobbies = 100

// tuples the order matters
let address: [string, number] = ['Superstreet', 99];

// enum
enum Color {
	Gray, // 0
	Green = 100, // 1
	Blue, // 2
}

let myColor: Color = Color.Green; // type enum
console.log(myColor);

// any
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// functions
function returnMyName(): string {
	return myName;
}

//void
function sayHello(): void {
	console.log('hello');
}

// argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}

// console.log(multiply("hello", 2)); error

//function types
let myMultiply: (arg1: number, arg2: number) => number;
myMultiply = multiply;

// objects
let userData: { name: string; age: number } = {
	name: 'Jose',
	age: 27,
};

// complex object
let complex: { data: number[]; output: (arg: boolean) => number[] } = {
	data: [100, 3.99, 10],
	output(all: boolean): number[] {
		return this.data;
	},
};

// type alias

type Complex = { data: number[]; output: (arg: boolean) => number[] };

let complex2: Complex = {
	data: [100, 3.99, 10],
	output(all: boolean): number[] {
		return this.data;
	},
};

// union types
let myRealRealAge: number | string | boolean = true;
myRealRealAge = '27';

// check types
let finalValue = 30;
if (typeof finalValue == 'number') {
	console.log('Final value is a number');
}

// never
function neverReturns(): never {
	throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
