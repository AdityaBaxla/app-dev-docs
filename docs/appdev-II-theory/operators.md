# Operators

Operators are symbols that act on operand and perform a specific mathematical or logical operation.

Mathematical Operators are :

- Addition +
- Subtraction -
- Multiplication \*
- Division /
- Remainder %
- Exponentiation \*\*

First 4 are obvious, lets discuss the rest

## Remainder or Modulus `%`

When we write `a % b` It gives the remainder when a is divided by b.

```js
console.log(10 % 3); // 1
```

## Exponentiation `**`

When we write `a ** b` It gives the result of a raised to the power b.

```js
console.log(2 ** 3); // 8
console.log(16 ** (1 / 2)); // 4
```

## Operator Precedence

We learnt BODMAS rule in school, operator precedence is like that, it decides which operator will act on the operator first when multiple operators can act on operands.

Find the whole table here : [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

For our use case we only need a few of them.

| …   | Operation      | Symbol |
| --- | -------------- | ------ |
| 14  | Unary Plus     | `+`    |
| 14  | Unary Negation | `-`    |
| 13  | Exponentiation | `**`   |
| 12  | Multiplication | `*`    |
| 12  | Division       | `/`    |
| 11  | Addition       | `+`    |
| 11  | Subtraction    | `-`    |
| …   | …              | …      |
| 2   | Assignment     | `=`    |
| …   | …              | …      |

The ones at the top have higher precedence.

## Associativity

Within operators of the same precedence, the language groups them by associativity. Left-associativity (left-to-right) means that it is interpreted as `(a OP1 b) OP2 c`, while right-associativity (right-to-left) means it is interpreted as a `OP1 (b OP2 c)`.

Most math operators are left-associative, apart from exponentiation `**` operator which is right-associative.

## remove bracket from line 1

```js
const a = 4 ** (3 ** 2); // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

## `+` operator

The `+` operator in JavaScript can be used for both numerical addition and string concatenation, depending on the data types of the operands involved.

### Numerical Addition:

- **Numbers:** When both operands are numbers, the `+` operator performs standard numerical addition. For example:
  ```javascript
  let result = 5 + 3; // result is 8
  ```
- **Boolean values:** Boolean values are converted to numbers before addition. `true` becomes 1 and `false` becomes 0.
  ```javascript
  let result = true + false; // result is 1
  ```

### String Concatenation:

- When both operands are strings, the `+` operator concatenates them, joining them together into a single string.
  ```javascript
  let result = "Hello" + " world"; // result is "Hello world"
  ```
- If either operand is a number, it is converted to a string before concatenation.

  ```javascript
  let result = "5" + 3; // result is "53"

  let f = true + "5";
  console.log(f); // true5
  ```

### Other Data Types:

- **Objects:** When one or both operands are objects, the `+` operator is not defined for them. Attempting to use it will result in a `TypeError`.
- **Arrays:** When one or both operands are arrays, the `+` operator is not defined for them. Attempting to use it will result in a `TypeError`.
- **Undefined and null:** When either operand is `undefined` or `null`, the `+` operator treats them as 0 for numerical addition or an empty string for string concatenation.

```js
let s = "my" + "string";
console.log(s); // mystring

let c = "1" + "orange";
console.log(c); // 1orange

let e = 1 + "2";
console.log(e); // 12

let f = true + "5";
console.log(f); // true5
```

We discussed `+` is left-associative which has some consequences when used when used with different datatypes.

```js
console.log(1 + 2 + "3"); // 33
console.log("1" + 2 + 3); // 123
```

## Unary `+` Number Conversion

The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

## `-`, `*`, `/`, `%` and `**`

Things to keep in mind :

- These operators try to convert both sides to number when operating, if unsuccessful in conversion to number they return `NaN`.
- `null` is considered 0.
- Boolean `true` is considered as 1 and `false` as 0.
- Operations with `undefined` create `NaN`.

```js
console.log("5" - 4); // 1
console.log("5" - "5"); // 0
console.log("2" ** true); // 2
console.log(5 ** null); // 1
console.log("a" * 5); // NaN
```

## Assignment

Note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like x = 2 \* 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

```js
let a, b, c;

a = b = c = 2 + 2;
```
