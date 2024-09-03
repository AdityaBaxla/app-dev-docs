# Variables

variables are what stores data. There are multiple ways to declare variables.

variables can be declared by let, const, var and also without any keyword

```js
let user = "John";
const age = 25;
var message = "Hello";
```

### variable naming

There are two limitations on variable names in JavaScript:

- The name must contain only letters, digits, or the symbols $ and \_.
- The first character must not be a digit.

## let

variables declared with let keyword are block scoped, meaning they will only be accessible inside the the block or function in which they are declared in. They can be resigned to a different literal.

```js
let name = "Aditya";
let car = "Maruti";
car = "Hyundai"; // car is reassigned
```

## const

These variables are meant to be constants the value of which will not change late on in your code. Variables declared with const keyword are block scoped, meaning they will only be accessible inside the the block or function in which they are declared in. They **cannot** resigned to a different literal.

```js
const plane = "Boeing";
plane = "Airbus"; // this will give an error
```

## var

It is the old way of declaring variable, it should be avoided in code if possible, but questions will still be asked about var. They are function scope, meaning they will be only accessible inside the function they are declared in, although they will still be accessible if declared inside a block.

:::warning
there are many more differences between the way var and let/cost behave which we will discuss later
:::

## variable without any keyword

they are always global scope, that means they will be accessible no matter where they are declared. It is discouraged to use this method of variable creation as it will pollute the global scope.

```js
food = "pasta";
```
