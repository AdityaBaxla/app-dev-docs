when "use strict" is used in the top of a javascript file, it makes it additioinally safe.

Only comments may appear above "use strict".

# Understanding JavaScript's Strict Mode: Making Your Code Safer and Cleaner

_Published on [Medium](https://medium.com) | August 21, 2024_

![JavaScript Strict Mode](https://miro.medium.com/max/1400/1*XJ5H9xvZKzGgF5x1LJ_8ZQ.jpeg)
_Photo by [Markus Spiske](https://unsplash.com/@markusspiske) on [Unsplash](https://unsplash.com)_

JavaScript is a versatile and powerful language, but its flexibility can sometimes lead to unexpected behaviors and hard-to-track bugs. To help developers write more reliable and secure code, ECMAScript 5 introduced **Strict Mode** — a way to opt into a restricted variant of JavaScript that catches common mistakes and "unsafe" actions.

In this article, we'll dive deep into what `"use strict"` does, explore its benefits, and provide practical examples demonstrating how it enforces better coding practices. Whether you're a seasoned developer or just starting with JavaScript, understanding Strict Mode is essential for writing robust and maintainable code.

## What is Strict Mode?

Strict Mode is a feature that enables a stricter parsing and error handling of JavaScript code. By declaring `"use strict";` at the beginning of your scripts or functions, you activate this mode, which enforces a set of rules and restrictions aimed at eliminating some of JavaScript's silent errors and improving performance.

**How to Enable Strict Mode:**

```javascript
"use strict";

// Entire script is in strict mode
function myFunction() {
  // function code
}
```

**Or within a specific function:**

```javascript
function myStrictFunction() {
  "use strict";
  // function code
}

function myNonStrictFunction() {
  // non-strict code
}
```

Now, let's explore the various features and restrictions imposed by Strict Mode, along with examples illustrating their impact.

---

## 1. Prevents Accidental Global Variables

### The Problem:

In non-strict mode, assigning a value to an undeclared variable automatically creates a global variable. This can lead to unintended side effects and make your code harder to debug and maintain.

### Example without Strict Mode:

```javascript
function setValue() {
  value = 10; // Implicit global variable
}

setValue();
console.log(value); // Outputs: 10
```

### Example with Strict Mode:

```javascript
"use strict";

function setValue() {
  value = 10; // Throws ReferenceError
}

setValue(); // Uncaught ReferenceError: value is not defined
```

**Explanation:**
With Strict Mode enabled, assigning a value to an undeclared variable throws a `ReferenceError`, forcing you to explicitly declare variables using `var`, `let`, or `const`.

### Corrected Code:

```javascript
"use strict";

function setValue() {
  let value = 10;
  console.log(value); // Outputs: 10
}

setValue();
```

---

## 2. Eliminates Silent Failures When Assigning to Non-Writable Properties

### The Problem:

In non-strict mode, attempting to assign values to read-only properties fails silently, making it difficult to detect and debug such errors.

### Example without Strict Mode:

```javascript
const obj = {};
Object.defineProperty(obj, "readOnlyProp", {
  value: 42,
  writable: false,
});

obj.readOnlyProp = 100; // Fails silently
console.log(obj.readOnlyProp); // Outputs: 42
```

### Example with Strict Mode:

```javascript
"use strict";

const obj = {};
Object.defineProperty(obj, "readOnlyProp", {
  value: 42,
  writable: false,
});

obj.readOnlyProp = 100; // Throws TypeError
```

**Explanation:**
Strict Mode throws a `TypeError` when trying to write to a non-writable property, helping you catch and fix the mistake immediately.

---

## 3. Disallows Deleting Undeletable Properties

### The Problem:

In non-strict mode, attempting to delete non-configurable properties fails silently.

### Example without Strict Mode:

```javascript
delete Object.prototype; // Fails silently
```

### Example with Strict Mode:

```javascript
"use strict";

delete Object.prototype; // Throws TypeError
```

**Explanation:**
Strict Mode throws a `TypeError` when trying to delete non-configurable properties, ensuring that such critical operations don't go unnoticed.

---

## 4. Requires Unique Parameter Names

### The Problem:

Using duplicate parameter names in functions can lead to unpredictable behavior and bugs.

### Example without Strict Mode:

```javascript
function sum(a, a, c) {
  return a + c;
}

console.log(sum(1, 2, 3)); // Outputs: 5
```

### Example with Strict Mode:

```javascript
"use strict";

function sum(a, a, c) {
  // SyntaxError: Duplicate parameter name not allowed in this context
}
```

**Explanation:**
Strict Mode throws a `SyntaxError` when duplicate parameter names are used, enforcing clearer and more predictable function definitions.

---

## 5. Forbids Octal Literals

### The Problem:

Octal literals (e.g., `012`) can cause confusion and errors, especially since leading zeros are often used inadvertently.

### Example without Strict Mode:

```javascript
const num = 012; // Equivalent to 10 in decimal
console.log(num); // Outputs: 10
```

### Example with Strict Mode:

```javascript
"use strict";

const num = 012; // SyntaxError: Octal literals are not allowed in strict mode
```

**Explanation:**
Strict Mode disallows octal literals, preventing unintended interpretations of numbers. You should use the explicit `0o` prefix for octal numbers.

### Corrected Code:

```javascript
"use strict";

const num = 0o12; // Equivalent to 10 in decimal
console.log(num); // Outputs: 10
```

---

## 6. Restricts the Use of `with` Statement

### The Problem:

The `with` statement makes code harder to understand and optimize by introducing scope ambiguity.

### Example without Strict Mode:

```javascript
const obj = { a: 1, b: 2 };

with (obj) {
  console.log(a); // Outputs: 1
}
```

### Example with Strict Mode:

```javascript
"use strict";

const obj = { a: 1, b: 2 };

with (obj) {
  // SyntaxError: Strict mode code may not include a with statement
}
```

**Explanation:**
Strict Mode completely forbids the use of `with`, encouraging clearer and more maintainable code structures.

---

## 7. Changes `this` Binding in Functions

### The Problem:

In non-strict mode, `this` inside a function defaults to the global object (`window` in browsers), which can lead to unintended side effects.

### Example without Strict Mode:

```javascript
function showThis() {
  console.log(this); // Outputs: Window object
}

showThis();
```

### Example with Strict Mode:

```javascript
"use strict";

function showThis() {
  console.log(this); // Outputs: undefined
}

showThis();
```

**Explanation:**
Strict Mode sets `this` to `undefined` in functions that are called without an explicit context, helping prevent accidental modifications to the global object.

### Corrected Code Using Explicit Context:

```javascript
"use strict";

function showThis() {
  console.log(this);
}

const obj = { name: "Strict Mode" };
showThis.call(obj); // Outputs: { name: "Strict Mode" }
```

---

## 8. Secures the Use of `eval`

### The Problem:

The `eval` function can introduce variables and functions into the surrounding scope, leading to potential security and performance issues.

### Example without Strict Mode:

```javascript
eval("var x = 10;");
console.log(x); // Outputs: 10
```

### Example with Strict Mode:

```javascript
"use strict";

eval("var x = 10;");
console.log(x); // ReferenceError: x is not defined
```

**Explanation:**
In Strict Mode, variables and functions declared inside `eval` are not introduced into the surrounding scope, containing their impact and enhancing security.

---

## 9. Prohibits Deleting Plain Names

### The Problem:

Deleting variables, functions, or arguments by name is not allowed and can lead to unpredictable behavior.

### Example without Strict Mode:

```javascript
var x = 10;
delete x; // Fails silently
console.log(x); // Outputs: 10
```

### Example with Strict Mode:

```javascript
"use strict";

var x = 10;
delete x; // SyntaxError: Delete of an unqualified identifier in strict mode
```

**Explanation:**
Strict Mode throws a `SyntaxError` when attempting to delete plain names, ensuring that variable and function declarations remain intact.

---

## 10. Reserves Future Keywords

### The Problem:

Using certain identifiers that are reserved for future versions of JavaScript can cause conflicts and errors.

### Example without Strict Mode:

```javascript
var public = 10; // Allowed but not recommended
console.log(public); // Outputs: 10
```

### Example with Strict Mode:

```javascript
"use strict";

var public = 10; // SyntaxError: Unexpected strict mode reserved word
```

**Explanation:**
Strict Mode reserves keywords like `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield` to maintain compatibility with future language features.

### Corrected Code:

```javascript
"use strict";

var publicVar = 10;
console.log(publicVar); // Outputs: 10
```

---

## 11. Disallows Setting Properties on Primitive Values

### The Problem:

In non-strict mode, setting properties on primitive values like numbers, strings, or booleans fails silently.

### Example without Strict Mode:

```javascript
(1).prop = "value";
console.log((1).prop); // Outputs: undefined
```

### Example with Strict Mode:

```javascript
"use strict";

(1).prop = "value"; // TypeError: Cannot create property 'prop' on number '1'
```

**Explanation:**
Strict Mode throws a `TypeError` when attempting to set properties on primitive values, highlighting operations that have no effect.

---

## Why Use Strict Mode?

Using Strict Mode in your JavaScript code brings several benefits:

- **Early Error Detection:** It catches common coding mistakes and throws errors, making debugging easier.
- **Enhanced Security:** It restricts certain actions and secures the use of potentially dangerous features like `eval`.
- **Improved Performance:** Some JavaScript engines can optimize strict mode code better due to its predictable behavior.
- **Future-Proofing:** It enforces adherence to modern standards and reserves future keywords, ensuring better compatibility with upcoming language features.

**Best Practice:**
Always enable Strict Mode in your JavaScript code by including `"use strict";` at the beginning of your scripts or functions. This simple addition can save you from numerous headaches down the line and lead to cleaner, more reliable code.

---

## Conclusion

JavaScript's Strict Mode is a valuable tool that helps developers write safer and more efficient code by enforcing stricter parsing and error handling rules. By understanding and leveraging the features of Strict Mode, you can avoid common pitfalls, enhance code maintainability, and ensure better compliance with modern JavaScript standards.

Next time you start a new JavaScript project or function, remember to include `"use strict";` at the top. Embracing Strict Mode is a simple yet effective step towards becoming a more proficient and disciplined JavaScript developer.

**Thank you for reading!**

_If you found this article helpful, feel free to share it with others and leave your thoughts in the comments below. Happy coding!_

---

_Author: [Your Name](https://medium.com/@yourname)_

_Cover Photo by [Markus Spiske](https://unsplash.com/@markusspiske) on [Unsplash](https://unsplash.com)_
