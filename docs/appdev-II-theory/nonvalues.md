# Non Values

In this section we'll be talking about `NaN`, `null` and `undefined`

In JavaScript, certain values are classified as "non-values" because they represent the absence of a meaningful value. The most common non-values are `NaN`, `undefined`, and `null`. These values are often encountered in different scenarios, and understanding their differences is crucial for writing robust JavaScript code.

## `undefined`

### What is `undefined`?

`undefined` is a primitive value that represents the absence of a value. It is automatically assigned to variables that have been declared but not yet assigned a value.

```javascript
let x;
console.log(x); // undefined
```

### When do we get `undefined`?

- **Variable Declaration Without Initialization**: When a variable is declared but not initialized, it is automatically assigned `undefined`.

  ```javascript
  let y;
  console.log(y); // undefined
  ```

- **Missing Function Arguments**: If a function is called with fewer arguments than it is defined to accept, the missing arguments are assigned `undefined`.

  ```javascript
  function add(a, b) {
    console.log(a); // 1
    console.log(b); // undefined
  }
  add(1);
  ```

- **Accessing Non-Existent Object Properties**: When you try to access a property of an object that doesn't exist, the result is `undefined`.

  ```javascript
  let obj = { name: "Alice" };
  console.log(obj.age); // undefined
  ```

- **Return Value of Functions with No Return Statement**: A function that does not explicitly return a value returns `undefined` by default.

  ```javascript
  function greet() {
    console.log("Hello");
  }
  let result = greet(); // "Hello"
  console.log(result); // undefined
  ```

## `null`

### What is `null`?

`null` is a special value that represents the intentional absence of any object value. Unlike `undefined`, which is set by JavaScript when a variable is not initialized, `null` is typically assigned by the programmer to indicate "no value."

```javascript
let x = null;
console.log(x); // null
```

### When do we get `null`?

- **Explicit Assignment**: `null` is usually assigned explicitly by the developer to indicate that a variable should hold "no value."

  ```javascript
  let user = null;
  ```

- **DOM Methods**: Some DOM methods return `null` when an element is not found.

  ```javascript
  let element = document.getElementById("non-existent-id");
  console.log(element); // null
  ```

## `NaN`

### What is `NaN`?

`NaN` stands for "Not-a-Number" and is a value representing a computational error that results in a non-numeric value when performing arithmetic operations.

```javascript
let result = 0 / 0;
console.log(result); // NaN
```

### When do we get `NaN`?

- **Invalid Mathematical Operations**: When an arithmetic operation results in a non-numeric value, `NaN` is returned.

  ```javascript
  console.log(0 / 0); // NaN
  console.log("abc" * 3); // NaN
  ```

- **Parsing Errors**: `NaN` is returned when `parseInt` or `parseFloat` cannot convert a string to a number.

  ```javascript
  console.log(parseInt("abc")); // NaN
  ```

- **Attempting to Operate on `NaN`**: Any operation on `NaN` will result in `NaN`.

  ```javascript
  console.log(NaN + 5); // NaN
  ```

## Comparing `undefined`, `null`, and `NaN`

### Equality (`==`) vs. Strict Equality (`===`)

JavaScript provides two ways to compare values: the equality operator (`==`) and the strict equality operator (`===`).

- **Equality Operator (`==`)**: The equality operator performs type coercion, meaning it converts the operands to the same type before making the comparison.

  ```javascript
  console.log(null == undefined); // true
  console.log(NaN == NaN); // false
  ```

- **Strict Equality Operator (`===`)**: The strict equality operator compares both value and type, so no type conversion is performed.

  ```javascript
  console.log(null === undefined); // false
  console.log(NaN === NaN); // false
  ```

### Subtle Differences

- **`NaN` is not equal to itself**: Unlike other non-values, `NaN` is unique because it is not equal to itself. To check if a value is `NaN`, use `Number.isNaN()`.

  ```javascript
  console.log(NaN === NaN); // false
  console.log(Number.isNaN(NaN)); // true
  ```

- **`undefined` and `null` are loosely equal**: The equality operator (`==`) considers `undefined` and `null` as equal, but they are not strictly equal.

  ```javascript
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  ```

## The `typeof` Operator

### Overview

The `typeof` operator returns a string indicating the type of the unevaluated operand. It is commonly used to check the type of a variable.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
```

### `typeof` and Non-Values

- **`undefined`**: The `typeof` operator returns `"undefined"` for variables that are `undefined`.

  ```javascript
  let x;
  console.log(typeof x); // "undefined"
  ```

- **`null`**: Interestingly, the `typeof` operator returns `"object"` for `null`, which is widely considered a bug in JavaScript, but it's a behavior you should be aware of.

  ```javascript
  let y = null;
  console.log(typeof y); // "object"
  ```

- **`NaN`**: `NaN` is of type `"number"`.

  ```javascript
  console.log(typeof NaN); // "number"
  ```

### Common Scenarios

- **Checking for `null`**: Since `typeof null` returns `"object"`, checking for `null` should be done using a direct comparison.

  ```javascript
  let z = null;
  console.log(z === null); // true
  ```

- **Using `typeof` with Functions**: The `typeof` operator returns `"function"` when applied to a function.

  ```javascript
  function myFunc() {}
  console.log(typeof myFunc); // "function"
  ```

## Conclusion

Understanding `undefined`, `null`, and `NaN`, as well as how to compare them and how the `typeof` operator works, is essential for effective JavaScript programming. Each of these non-values serves a specific purpose and can be a powerful tool when used correctly.
