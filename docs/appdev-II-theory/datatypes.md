# Datatype !!!!stuff remaining

Javascript datatypes can be classified into two broad categories

- Primitives
- Object

## Primitive Datatype

Primitive data types are the most basic data types in JavaScript. They include:

- string
- number
- bigint
- boolean
- symbol
- undefined
- null

:::tip
primitives are directly stored in the memory (not as reference), the consequent of this is when we write `x = y` when y is primitive datatype, then the value of x is a copy of the value of y. Meaning both are actually different and changing y won't change x. This is not the case of Objects.
:::

The most important primitive datatype for our course is string, number, boolean, undefined and null.

### string

literals enclosed with \`\` (backticks), '' (single quotes) or "" (double quotes) are strings

```js
"This is a String";
""; // empty string
"a"; // single character is also string
"*"; // any character is string
```

'' (single quotes) and "" (double quotes) are practically the same, but backticks have something special about it. We can put values of variable directly inside the string with `${}` syntax when using backtick, which are called template strings.

```js
let me = "Aditya";
let hobby = "cycling";

let aboutme = `${me} likes ${cycling}`;
```

`aboutme` here will store the value `Aditya like cycling`.

### number

numerical values are numbers, javascript treats both floating point and integers as number. Apart from regular numbers, we have three special numeric value `Infinity`, `-Infinity` and `NaN`. The `typeof` these special numeric values is number.

:::warning
mathematical operations don't give error in javascript, if the expressions don't make sense it will give `NaN`
:::

```js
let num = 100;
num = 3.14;
```

### boolean

boolean has two values `true` and `false`.

```js
let isButtonClicked = false;
```

### undefined

It is a special value that denotes the the value has not been assigned.

```js
let brand;
console.log(brand); // Output : undefined
```

### null

It represents the deliberate absence of value, typically given by the programmer. You can think of it as saying a variable is empty or nothing.

:::warning
`typeof null` does not return `null`, instead it returns `object`. It is considered as an error in the working of typeof but it was never changed to maintain compatibility with old code.
:::

## object

Objects are used as a collection of data or complex structures. They are key value pairs like dict in python, but can also store functions which are called methods when attached to object. The simplest way to define an object is using the `{}` syntax, however there are other ways too. Objects can have properties and methods.

```js
let obj = {}; // empty object

const phone = {
  processor: "Snapdragon 860",
  brand: "Samsung",
  year: 2021,
};
```

:::tip
Objects can be declared with `const`, the entities inside the object can modified but the variable cannot be reassigned to a different literal.
:::

We will discuss more about objects in the objects section.

### typeof operator

The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check. Apart from the types discussed here, typeof gives the result of function when we as the typeof function.

```js
typeof undefined; // "undefined"

typeof 0; // "number"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Math; // "object"

typeof null; // "object"

typeof console.log; // "function"
```
