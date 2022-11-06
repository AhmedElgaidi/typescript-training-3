// number
const age: number = 23;

// string
let userName: string = "Ahmed Elgaidi";

// boolean
let isLoggedIn: boolean = false;

// any
let bla: any = 3;
bla = true;
bla = {};
bla = [1, 2, 3];

// null and undefined
let tt: null = null;

let ss: undefined = undefined;

// Built In objects
let date: Date = new Date();

// array
let skills: string[] = ["test", "test"];
let booleanArray: boolean[] = [true, false];
let numbersArray: number[] = [1, 2, 3];
let arr: (string | boolean | number)[] = ["test", 1, true];
arr.push("test"); // okay
// arr.push(new Date())

// multi-dimension array
// Order doesn't matter!! unlike tuple!
let users: (boolean | string | number)[][] = [
  ["ahmed", 23, true],
  ["ali", 20, false],
];

// Tuples (order matters!!)
// Define an array with fixed number of elements + known data types
// We don't write a pipleline of data types into array!!

let tuples: [string, number] = ["maha", 23];
tuples = ["ali", 23443]; // true
// tuples =[23423 , 'maha'] // order matters!!

// object
let userrr: {
  name: string;
  isAdmin: boolean;
} = {
  name: "ali",
  isAdmin: true,
};

// function
// The type annotation for functions is "what does it return at the end?"
// It might returns a string, number, object, another function, nothing, trigger another function, etc...

// [note]: void means it returns nothing (or undefined | null) !! just run some code!! void is the absence of type!!!

// const func1 = () => {}; // be like this
const func1: () => void = () => {
  // this is a function that returns nothing!! (The anotation here is "() => void")
  console.log("bla bla");
  return; // this still not returning nothing!!
};

const returnNumber: () => string = () => {
  return "hello, world";
};

const returnString: () => number = () => {
  return 2;
};

const returnBoolean: () => boolean = () => {
  return false;
};

const returnAny: () => any = () => {
  //   return "ster";
  //   return 2;
  //   return true;
  //   return {};
  //   return [];
  //   return null;
};

// Untill now, we expericend the arrow function, right?
// What about regular or anonymous function?

// Regular function/ named:
function doTest() {
  // code
}

// Anonymous function:
const doAnotherTest = function () {
  // code
};

// So, the annotation type is easy too!!

// Regular/ named
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous
const subtract = function (x: number, y: number): number {
  return x - y;
};

// Chaning

// if our code a special lines that may return a number and other may return nothing, we can do chaining then!!
const whoIsBigger = (x: number, y: number): void | number => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return undefined;
  }
};
// console.log(whoIsBigger(2, 2));

// Passig object to a function | Destructuring

const obj = {
  name: "ahmed",
  age: 23,
};

const userStatus = (obj: { name: string; age: number }): void => {
  console.log(`${obj.name} has ${obj.age} years now!!!`);
};

// userStatus(obj);

// Spread operators
const sum = (...args: number[]): void | number => {
  let result: number = 0;
  for (let num of args) {
    result += num;
  }
  console.log("the result: ", result);
  return result;
};

// sum(1, 1, 1)

// let's destructurea variable
let user1234 = {
  username: "Ahmed Elgaidi",
  isAdmin: true,
};

// [Note] when we see the colon, it means annotation
const { username, isAdmin }: { username: string; isAdmin: boolean } = user1234;

// console.log(username, isAdmin);

// [Note] Avoid using annotation type any

// Interfaces
import { UserInterface, Message } from "./interfaces";

const ourNewUser = {
  username: "Ahmed",
  age: 23,
  isAdmin: false,
  greet() {
    return `Welcome, ${this.username}`;
  },
};

// Let's play with the user data and save it in our database

function registerUser(userData: UserInterface): void {
  console.log("Saving the user data into our DB...");
  console.log(`${userData.username} is saved successfully.`);
  console.log(userData.greet());
}

// registerUser(ourNewUser);

// const alertMessage = (message): void => {
//   message.showMsg();
// };

// alertMessage({
//   showMsg() {
//     console.log("Hello, from show message func...");
//   },
// });
/*













*/
// Classes and Inheritance

// # Modifiers:
// public: you can access it anywhere, anytime
// private: Only within the same class!!
// protected: access them only in (same class or the child classes) -------- protected is just in between (public, private)

// This is our base class (Parent Class)
class Instrument {
  constructor(
    public name: string,
    private description: string,
    protected price: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  changeDescription(): void {
    this.description =
      this.description + "======================changed from parent class";
    console.log(this.description);
  }
  changePrice(): void {
    this.price = this.price + 100;
    console.log(
      this.price,
      "   ======================changed from parent class"
    );
  }
}

// Let's inherit the properties and methods of  the Instrument class into a new Guitar class
// Our Child Class
class Guitar extends Instrument {
  // Can't override/ modify the private property/ method from the child class
  // That's why there is protected modifier!!

  // "description" is marked as private in parent class
  // changeDescription(): void {
  // this.description = "Changed from child class"
  // }

  // "price" is marked as protected in parent class
  changePrice(): void {
    this.price += 200;
    console.log(this.price);
  }
}

const newGuitar = new Guitar(
  "Egyptian Guitar",
  "Really good and cheap guitar",
  100
);

// newGuitar.changeDescription();
// newGuitar.changePrice();

// Accessors

class User {
  private _username: string = "Ahmed Eglaidi";

  // [get accessor] if i want to access this private property just as public but (without modification)
  get username() {
    return this._username;
  }

  // [ set accessor] it 's like a if else statement
  set username(value: string) {
    if (value === "elbotanist") {
      this._username = value;
    } else {
      this._username = "Ahmed Elgaidi"; // Don't change the username
    }
  }
}

let user = new User();
user.username = "elbodtanist";
// console.log(user.username);

// readonly

// static
class DB_Contection {
  static isConnected: boolean = false;
  public static connect(): void {
    console.log("Trying to connect to the database now....");
  }
}

// Now, I can acess this method without creating instance of this class!!
// Amazing, right?
//console.log(DB_Contection.isConnected);
//DB_Contection.connect()

// abstract class

// namespace
// -it's just an object!
// - everything in it has to be exported!!
export namespace Sounds {
  export const bark: string = "woawwwwwwwwwww";
  export function shutup() {
    console.log("it's silent now.");
  }
  export namespace Human {
    export function speak() {
      console.log("A person is talking right now.");
    }
  }
}

// console.log(Sounds.bark)
// Sounds.shutup()
// Sounds.Human.speak()

// Generics:

// generic functions
function printName<T>(name: T): T {
  return name;
}

// console.log(printName<string[]>(["one", "two"]));
// console.log(printName<number[]>([1, 2, 3]));
// console.log(printName<boolean[]>([true, false, true]));
// console.log(printName<number>(1));
// console.log(printName<string>("bla bla"));
// console.log(printName<boolean>(true));
// console.log(printName<{}>({ name: "ahmed elgiai" }));

function printArrayOfAnyThing<T>(arr: T[]): void {
  for (let el of arr) {
    console.log(el);
  }
}
// }
// printArrayOfAnyThing<number>([1, 2, 3, 4]);
// printArrayOfAnyThing(["one", "two", "three"]);

// generic classes

// if we want to only specifiry data types to be used in our generic class an block the rest
class Tools<T extends string | boolean> {
  // class Tools<T> {
  constructor(public tools: T[]) {}

  print(): void {
    for (let el of this.tools) {
      console.log(el);
    }
  }
}

// const tools1 = new Tools<number>([1, 2, 2, 34]);
const tools2 = new Tools<boolean>([true, false]);

// console.log(tools2.print());

// use interfaces with generics in a function:

interface MyUserInterface {
  name: string;
  age: number;
  isActive: boolean;
}
interface MyUserInterface2 {
  name: string;
  age: number;
  isActive: boolean;
  isAdmin: boolean;
}

// interface with functions
function introduceYourself(arg: MyUserInterface): void {
  console.log(
    `${arg.name} has ${arg.age} years and his active status is ${arg.isActive} `
  );
}
// another way: interface with function with generics
function introduceYourself2<T extends MyUserInterface>(arg: T): void {
  console.log(
    `${arg.name} has ${arg.age} years and his active status is ${arg.isActive}----- `
  );
}
introduceYourself2({
  name: "Ahmed Elgaidi",
  age: 23,
  isActive: true,
});
