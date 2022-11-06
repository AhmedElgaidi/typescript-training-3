"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sounds = void 0;
// number
const age = 23;
// string
let userName = "Ahmed Elgaidi";
// boolean
let isLoggedIn = false;
// any
let bla = 3;
bla = true;
bla = {};
bla = [1, 2, 3];
// null and undefined
let tt = null;
let ss = undefined;
// Built In objects
let date = new Date();
// array
let skills = ["test", "test"];
let booleanArray = [true, false];
let numbersArray = [1, 2, 3];
let arr = ["test", 1, true];
arr.push("test"); // okay
// arr.push(new Date())
// multi-dimension array
// Order doesn't matter!! unlike tuple!
let users = [
    ["ahmed", 23, true],
    ["ali", 20, false],
];
// Tuples (order matters!!)
// Define an array with fixed number of elements + known data types
// We don't write a pipleline of data types into array!!
let tuples = ["maha", 23];
tuples = ["ali", 23443]; // true
// tuples =[23423 , 'maha'] // order matters!!
// object
let userrr = {
    name: "ali",
    isAdmin: true,
};
// function
// The type annotation for functions is "what does it return at the end?"
// It might returns a string, number, object, another function, nothing, trigger another function, etc...
// [note]: void means it returns nothing (or undefined | null) !! just run some code!! void is the absence of type!!!
// const func1 = () => {}; // be like this
const func1 = () => {
    // this is a function that returns nothing!! (The anotation here is "() => void")
    console.log("bla bla");
    return; // this still not returning nothing!!
};
const returnNumber = () => {
    return "hello, world";
};
const returnString = () => {
    return 2;
};
const returnBoolean = () => {
    return false;
};
const returnAny = () => {
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
function add(x, y) {
    return x + y;
}
// Anonymous
const subtract = function (x, y) {
    return x - y;
};
// Chaning
// if our code a special lines that may return a number and other may return nothing, we can do chaining then!!
const whoIsBigger = (x, y) => {
    if (x > y) {
        return x;
    }
    else if (y > x) {
        return y;
    }
    else {
        return undefined;
    }
};
// console.log(whoIsBigger(2, 2));
// Passig object to a function | Destructuring
const obj = {
    name: "ahmed",
    age: 23,
};
const userStatus = (obj) => {
    console.log(`${obj.name} has ${obj.age} years now!!!`);
};
// userStatus(obj);
// Spread operators
const sum = (...args) => {
    let result = 0;
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
const { username, isAdmin } = user1234;
const ourNewUser = {
    username: "Ahmed",
    age: 23,
    isAdmin: false,
    greet() {
        return `Welcome, ${this.username}`;
    },
};
// Let's play with the user data and save it in our database
function registerUser(userData) {
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
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    changeDescription() {
        this.description =
            this.description + "======================changed from parent class";
        console.log(this.description);
    }
    changePrice() {
        this.price = this.price + 100;
        console.log(this.price, "   ======================changed from parent class");
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
    changePrice() {
        this.price += 200;
        console.log(this.price);
    }
}
const newGuitar = new Guitar("Egyptian Guitar", "Really good and cheap guitar", 100);
// newGuitar.changeDescription();
// newGuitar.changePrice();
// Accessors
class User {
    constructor() {
        this._username = "Ahmed Eglaidi";
    }
    // [get accessor] if i want to access this private property just as public but (without modification)
    get username() {
        return this._username;
    }
    // [ set accessor] it 's like a if else statement
    set username(value) {
        if (value === "elbotanist") {
            this._username = value;
        }
        else {
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
    static connect() {
        console.log("Trying to connect to the database now....");
    }
}
DB_Contection.isConnected = false;
// Now, I can acess this method without creating instance of this class!!
// Amazing, right?
//console.log(DB_Contection.isConnected);
//DB_Contection.connect()
// abstract class
// namespace
// -it's just an object!
// - everything in it has to be exported!!
var Sounds;
(function (Sounds) {
    Sounds.bark = "woawwwwwwwwwww";
    function shutup() {
        console.log("it's silent now.");
    }
    Sounds.shutup = shutup;
    let Human;
    (function (Human) {
        function speak() {
            console.log("A person is talking right now.");
        }
        Human.speak = speak;
    })(Human = Sounds.Human || (Sounds.Human = {}));
})(Sounds = exports.Sounds || (exports.Sounds = {}));
// console.log(Sounds.bark)
// Sounds.shutup()
// Sounds.Human.speak()
// Generics:
// generic functions
function printName(name) {
    return name;
}
// console.log(printName<string[]>(["one", "two"]));
// console.log(printName<number[]>([1, 2, 3]));
// console.log(printName<boolean[]>([true, false, true]));
// console.log(printName<number>(1));
// console.log(printName<string>("bla bla"));
// console.log(printName<boolean>(true));
// console.log(printName<{}>({ name: "ahmed elgiai" }));
function printArrayOfAnyThing(arr) {
    for (let el of arr) {
        console.log(el);
    }
}
// }
// printArrayOfAnyThing<number>([1, 2, 3, 4]);
// printArrayOfAnyThing(["one", "two", "three"]);
// generic classes
// if we want to only specifiry data types to be used in our generic class an block the rest
class Tools {
    // class Tools<T> {
    constructor(tools) {
        this.tools = tools;
    }
    print() {
        for (let el of this.tools) {
            console.log(el);
        }
    }
}
// const tools1 = new Tools<number>([1, 2, 2, 34]);
const tools2 = new Tools([true, false]);
// interface with functions
function introduceYourself(arg) {
    console.log(`${arg.name} has ${arg.age} years and his active status is ${arg.isActive} `);
}
// another way: interface with function with generics
function introduceYourself2(arg) {
    console.log(`${arg.name} has ${arg.age} years and his active status is ${arg.isActive}----- `);
}
introduceYourself2({
    name: "Ahmed Elgaidi",
    age: 23,
    isActive: true,
});
