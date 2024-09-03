# Operators

operators are symbols that act on operand and perform a specific mathematical or logical operation.

Mathematical Operators are :

- Addition +
- Subtraction -
- Multiplication \*
- Division /
- Remainder %
- Exponentiation \*\*

First 4 are obvious, lets discuss the rest

## Remainder or Modulus %

When we write `a % b` It gives the remainder when a is divided by b.

```js
console.log(10 % 3); // 1
```

## Exponentiation \*\*

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

## + operator with string

When use `+` is used with string, it does not convert it to number, instead it used to concatenate the string.

```js
let s = "my" + "string";
console.log(s) // mystring

let c = "1" + "orange"
console.log(c) // 1orange

let e = 1 + "2"
console.log(e) // 12

let f =
```

## Assignment

Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like x = 2 \* 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
