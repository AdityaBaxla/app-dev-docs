# What is Scope?

Scoping determines where an item (like a variable or function) is visible or accessible in your code.

How does JavaScript know which variables are accessible by any given statement? How does it handle two variables of the same name? These are the questions we'll address in this section.

## De-Jargonize

### Block

Anything enclosed within curly brackets `{}` is considered a block.

```js [block-example.js]
if (true) {
  // This is block 
}

{
  // This also is block 
}

for (let i = 1; i < 10; i++) {
  // This is block
}
```

::: tip
Blocks define a new scope for variables declared with `let` and `const`.
:::

### Lexical Scope

Lexical scope is determined by the physical placement of functions, blocks, and variable declarations in the code. It relates to where an item was created, not where it was invoked.

## Different Scopes

### Global Scope

Variables declared outside of any block or function are in the global scope.

```js [global-scope.js]
const ball = "football";

function foo() {
  console.log(ball);
}

foo(); // Output : football

const obj = {
  objectProp: ball,
};

console.log(obj.objectProp); // Output : football
```

::: info
The variable `ball` is globally scoped here. Any function or object can access this global variable.
:::

### Function Scope

Variables declared within a function are only accessible within that function and not outside it. `var`, `let`, and `const` have the same scoping within functions.

```js [function-scope.js]
function functionScope() {
  var localVar = "I'm var inside a function";
  let localLet = "I'm let inside a function";
  console.log(localVar); // Output: "I'm var inside a function"
  console.log(localLet); // Output: "I'm let inside a function"
}

functionScope();

console.log(localVar); // Reference Error
console.log(localLet); // Reference Error
```

### Block Scope

`let` and `const` are block scoped, while `var` is not. When `var` is used inside a block, it becomes globally scoped if not contained within a function.

```js [block-scope.js]
{
  var localVar = "I'm var inside a block";
  let localLet = "I'm let inside a block";
  console.log(localVar); // Output: "I'm var inside a block"
  console.log(localLet); // Output: "I'm let inside a block"
}

console.log(localVar); // Output: "I'm var inside a block"
console.log(localLet); // Reference Error
```

### Nested Functions and Blocks

The same scoping rules apply to nested functions and blocks. When using `let` and `const`, their scope will be limited to the block or function they are defined in. When using `var`, it will be scoped to the function it is defined in.

```js [nested-functions.js]
function outerFunction() {
  var outerVariable = "I am outer";

  function innerFunction() {
    console.log(outerVariable); // Output: I am outer
  }

  innerFunction();
}

outerFunction();
console.log(outerVariable); // Reference Error
```

::: warning
Be careful with `var` as it will ignore the block scope and only care about the function it's declared in.
:::

### Arrow Functions

Arrow functions behave similarly to regular functions in terms of scoping but handle the `this` keyword differently.

```js [arrow-functions.js]
const outerFunction = () => {
  var outerVariable = "I am outer";

  const innerFunction = () => {
    console.log(outerVariable); // Output: I am outer
  };

  innerFunction();
};

outerFunction();
console.log(outerVariable); // Reference Error
```

## Scoping inside Objects

Variables declared within an object using `{ x: 10 }` are called properties. These properties can only be accessed through `.` or `[]` notation.

### What is 'this'?

The `this` keyword refers to the object that is currently executing the method. It depends on the context of execution, not the location of the function definition.

```js [this-keyword.js]
const carObj = {
  brand: "Bugatti",
  models: {
    a: "Chiron",
    b: "Veyron",
    run() {
      console.log(`${this.a} is running`);
    },
  },
};

carObj.models.run(); // Output: "Chiron is running"
```

::: details
When using the `this` keyword inside methods, it refers to the object from which the method was called.
:::

### Accessing Object Properties

To access the properties of an object, use the `.` or `[]` notation.

```js [accessing-properties.js]
let brand = "Maruti";

const carObj = {
  brand: "Bugatti",
  models: {
    a: "Chiron",
    b: "Veyron",
  },
  whatBrand() {
    console.log(this.brand); // Output: Bugatti
  },
};

carObj.whatBrand();
```

## Practice Scoping

Try running the following code and observe the output:

```js [practice-scoping.js]
const fullName = "Arpan";

function profile() {
  const fullName = "Beli";
  function sayName() {
    const fullName = "Chuza";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()); // Output: Chuza
```

Hope this helps to clarify JavaScript variable scoping!

### References

- [FreeCodeCamp - JavaScript Lexical Scope Tutorial](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial)
- [You Don't Know JS (2nd Edition)](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed)
