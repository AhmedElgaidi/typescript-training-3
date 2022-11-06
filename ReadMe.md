# [TypeScript with iLECHUNO:](https://youtu.be/xjYR5jknVs0)

### 1) Any statically typed language follows one of two ways to assing data types to values

#### 1) Implicit Way:

- It's called "Type annotation"
- It's When telling typescript what exactly data type to use with variables!!

```typescript
let userName: string = "Ahmed Elgaidi";
const age: number = 23;
let skills: string[] = ["web development", "mobile development"];
```

#### 2) Explicit Way:

- It's called "Type Inference"
- It's like an auto mode for use, the typscript checks the given value and based on it It'll assume that it's type of ex. string

```typescript
let userName = "Ahmed";

under the hoode it would be "Type Annotation" for use.
```

### 2) Data Types:

#### 1) Primitive Data Types:

- string
- number
- boolean
- undefined
- null
- void

#### 2) Reference Data Types:

- function
- class
- object
- array

### 3) Data type annotation:

Check the playground code to see examples

### 4) Interfacs:

- It's like a schema you can use it in different places!

#### 5) OOP:

- `Class`
- `Inheritance` (Inherit properites an method from another class)
- ` Passing args into constructor` (Cleaner way of assinging a dynamic value to class intances)
- `Modifiers`
  - `public`: You can access anywhere (current class, child class, instances), anytime
  - `private`: you can only access within the same class
  - `protected`: you can access only from same class and child classes
- `Accessors`
  - `get`:
    - It makes you access a private (propery/ method) from public
    - Benefit: you only can access it - `No modifications!!!`
  - `set`:
    - It makes you modify a private property
    - Benefit: You only can change it just values previously determined!!!
- `readonly`: access only from outside (the same concept of get accessor)
- `static`: you add this to whatever property/ method you want and you can get access to it without creating a new instances of this class!! (Really helpfull)
- `static`: to accesss a property/ method of a class without creating an instance of it.
- `abstract`:
  - It's just a blue print for being extended by other classes
  - You can't create instances of this class!!

#### 6) `Modules& namespaces`:

- `Modules`: (import & export)
- `namespace`: It's actually an object where you put your variables/ functions that you want to export and import them somewhere using the object notation.

#### 7) `Generics`:

The idea is to make code generic to be reusable as much as possible!

- Generic functions
- Generic classes
- generic interfaces `Used especially when passing certain object as a parameter to a function`
