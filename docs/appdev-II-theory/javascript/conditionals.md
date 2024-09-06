# Conditional Statements : `if`, `else if`, `else`, and `switch`

Conditional statements are essential in programming for controlling the flow of execution based on certain conditions. In JavaScript, the most common conditional structures are `if`, `else if`, `else`, and `switch`. These statements allow your program to make decisions and execute different blocks of code depending on whether specific conditions are met.

## `if` Statement

The `if` statement is used to execute a block of code only if a specified condition evaluates to `true`. If the condition is `false`, the code inside the `if` block is skipped.

### Syntax

```javascript
if (condition) {
  // Code to execute if condition is true
}
```

### Example

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult."); // This will be printed
}
```

In this example, since the value of `age` is 18 (which is greater than or equal to 18), the condition evaluates to `true`, and the message `"You are an adult."` is printed to the console.

## `else` Statement

The `else` statement is used to specify a block of code to execute if the `if` condition is `false`. `else` can only use use after `if` or `else if` statements.

### Syntax

```javascript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

### Example

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor."); // This will be printed
}
```

Here, the condition `age >= 18` is `false`, so the code inside the `else` block is executed, and `"You are a minor."` is printed.

## `else if` Statement

The `else if` statement allows you to test multiple conditions in sequence. If the first `if` condition is `false`, the program checks the next `else if` condition. If all conditions are `false`, the `else` block (if provided) will be executed.

### Syntax

```javascript
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if all conditions are false
}
```

### Example

```javascript
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C"); // This will be printed
} else {
  console.log("Grade: F");
}
```

In this example, `score` is 75, which does not satisfy the first two conditions but satisfies `score >= 70`, so `"Grade: C"` is printed.

## Multiple `if` vs `if else if `

### Example

```javascript
let number = 5;

if (number > 3) {
  console.log("Greater than 3"); // This will be printed
}

if (number > 2) {
  console.log("Greater than 2"); // This will also be printed
}

if (number > 4) {
  console.log("Greater than 4"); // This will be printed
}
```

In this example, all three conditions are checked independently. Even though `number` is greater than 3, all the other `if` statements are still evaluated, resulting in multiple outputs.

### Example

```javascript
let number = 5;

if (number > 3) {
  console.log("Greater than 3"); // This will be printed
} else if (number > 2) {
  console.log("Greater than 2"); // This will be skipped
} else if (number > 4) {
  console.log("Greater than 4"); // This will also be skipped
}
```

In this case, once the first condition `number > 3` is found to be `true`, the rest of the conditions are not checked.

### When to Use Which
- Use **multiple `if`** when conditions are independent of each other, and you need to evaluate each one, even if some conditions are already true.
- Use **`if else if`** when conditions are mutually exclusive, and only the first `true` condition should be acted upon.

:::tip
Both structures have their uses, and choosing the right one depends on the specific logic of your program.
:::


## `switch` Statement

The `switch` statement is another way to test multiple conditions, especially when comparing a variable to several potential values. It evaluates an expression, matching its value to a `case` label. If a match is found, the corresponding code block is executed. The `default` case is executed if no matching case is found.

### Syntax

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no matching case is found
}
```

:::info
`break` is used to get out of the current block, whenever program encounters a `break` statement all the code in the current block is skipped. Also used for breaking out of loops.
:::

### Example

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // This will be printed
    break;
  default:
    console.log("Invalid day");
}
```

In this example, the value of `day` is `3`, so the case for `3` is matched, and `"Wednesday"` is printed. The `break` statement is used to prevent the code from continuing into the next case.

### `default` in `switch`

The `default` case in a `switch` statement works similarly to the `else` statement. It handles any case that doesn't match a specific `case` value.

```javascript
let color = "yellow";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Unknown color"); // This will be printed
}
```

Since `"yellow"` doesn't match either `"red"` or `"blue"`, the `default` case is executed, and `"Unknown color"` is printed.

## Ternary Operator (`? :`)

The ternary operator is a shorthand way to write `if-else` statements. It takes three operands: a condition, a result if the condition is `true`, and a result if the condition is `false`.

### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example

```javascript
let age = 20;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // Outputs: Allowed
```

In this example, the condition `age >= 18` is `true`, so the expression `"Allowed"` is assigned to `access`.
