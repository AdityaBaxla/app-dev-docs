Here's a revised and more structured version of your VitePress documentation:

---

# All About Functions in JavaScript

## Ways of Declaring Functions in JavaScript

### Function Declaration vs. Function Expression

#### Function Declaration

A **function declaration** is when a function is defined with the `function` keyword followed by a name. These functions are hoisted to the top of their scope, meaning they can be invoked before the function body is defined.

```js
functionName(1); // Function can be invoked before the body is defined

// This is a function declaration
function functionName(params) {
  return 2 * params;
}
```

#### Function Expression

A **function expression** is when a function is assigned to an identifier using `var`, `let`, or `const`. Unlike function declarations, function expressions are not hoisted, so they cannot be invoked before they are defined.

```js
console.log(functionExpressionVar); // undefined
console.log(functionExpressionVar()); // TypeError: functionExpressionVar is not a function
console.log(functionExpressionLet); // ReferenceError: Cannot access 'functionExpressionLet' before initialization
console.log(functionExpressionLet()); // ReferenceError: Cannot access 'functionExpressionLet' before initialization

// These are function expressions
var functionExpressionVar = function (params) {
  // function body
};

let functionExpressionLet = (params) => {
  // function body
};
```

> **Note:** Due to `var` hoisting, `functionExpressionVar` is `undefined` before it's assigned. But calling `functionExpressionVar()` throws a TypeError because JavaScript does not yet recognize it as a function.

Function expressions declared with `let` or `const` result in a ReferenceError when accessed before their initialization. After the function body is defined, `let`/`const`/`var` work as usual.

## Differences Between Arrow Functions and Regular Functions

In this section, "regular" functions refer to those defined using the `function` keyword, including both function declarations and function expressions.

### `this` Binding

The most crucial difference between arrow functions and regular functions is how they handle the `this` keyword.

#### Dynamic `this` in Regular Functions

In regular functions, `this` is dynamic and refers to the object that calls the function. This means that the value of `this` can change depending on how and where the function is called.

```js
obj = {
  whatsThis() {
    console.log(this);
  },
};

obj.whatsThis(); // Logs the full obj
```

In regular functions, `this` is context-based or dynamic and is determined at runtime.

```js
function showThis() {
  console.log(this.objName);
}

obj1 = {
  objName: "object 1",
};
obj1.showThis = showThis;

obj2 = {
  objName: "object 2",
};
obj2.showThis = showThis;

obj1.showThis(); // object 1
obj2.showThis(); // object 2
```

When a function is called directly, `this` refers to the **Window** object in a browser or the **Global** object in Node.js.

```js
function logThis() {
  console.log(this);
}
logThis(); // Window Object
```

Even if a function is nested within an object, if it's not a method of the object, `this` will refer to the global context.

```js
objOuter = {
  objInner: {
    thisIsMethod() {
      function thisIsNotMethod() {
        console.log(this);
      }
      thisIsNotMethod();
    },
  },
};

objOuter.objInner.thisIsMethod();
```

#### Lexical `this` in Arrow Functions

Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding (lexical) scope at the time they are defined. This value of `this` will not change, regardless of how the arrow function is invoked.

```js
let arrowFunc = () => {
  console.log(this);
};

arrowFunc(); // Window object (no enclosing function)
```

If an arrow function is defined inside another function, `this` will refer to `this` of the enclosing function.

```js
function enclosing() {
  console.log(this); // Window (because the function is in the global context)
  var arrowFunc = () => {
    console.log(this); // Window (inherited from the enclosing function)
  };
  arrowFunc();
}

enclosing();
```

If an arrow function is a method of an object, `this` still refers to the enclosing context.

```js
let obj = {
  a: 1,
  normalFunction() {
    console.log(this.a);
  },
  arrowFunction: () => {
    console.log(this.a);
  },
};

obj.normalFunction(); // 1
obj.arrowFunction(); // undefined (since Window object does not have property 'a')
```

Even if an arrow function is nested deeply, it will still inherit `this` from its lexical scope.

```js
obj = {
  fruit: "apple",
  enclosingFunc() {
    let arrow1 = () => {
      let arrow2 = () => {
        let arrow3 = () => {
          console.log(this.fruit);
        };
        arrow3();
      };
      arrow2();
    };
    arrow1();
  },
};

obj.enclosingFunc(); // apple
```

### `call`, `bind`, and `apply` with Functions

You can use `call`, `bind`, and `apply` to explicitly set the value of `this` in regular functions. However, these methods do not affect `this` in arrow functions.

```js
function showThis() {
  console.log(this);
}

let obj = {
  name: "this is object",
};

showThis(); // Window
showThis.apply(obj); // {name: 'this is object'}
showThis.call(obj); // {name: 'this is object'}
let bound = showThis.bind(obj);
bound(); // {name: 'this is object'}
```

In contrast, arrow functions ignore `call`, `bind`, and `apply`.

```js
let showThis = () => {
  console.log(this);
};

let obj = {
  name: "this is object",
};

showThis(); // Window

showThis.apply(obj); // Window
showThis.call(obj); // Window
let bound = showThis.bind(obj);
bound(); // Window
```

However, if the enclosing context changes, `this` inside an arrow function can change as well.

```js
outerObj = {
  name: "outer object",
  func() {
    let showThis = () => {
      console.log(this);
    };
    showThis();
  },
};

let obj = {
  name: "random object",
};

outerObj.func(); // {name: 'outer object', func: ƒ}
outerObj.func.apply(obj); // {name: 'random object'}
```

### Additional Differences

- **Arguments Binding:** Regular functions have access to the `arguments` object, while arrow functions do not. Instead, arrow functions inherit `arguments` from their parent scope.
- **Constructor Usage:** Arrow functions cannot be used as constructors and will throw an error if called with `new`.

- **Generator Functions:** Arrow functions cannot be used as generator functions and do not have the `yield` keyword.

---

This structure should make your documentation more readable and easier to follow while aligning with the content you’re currently working on.
