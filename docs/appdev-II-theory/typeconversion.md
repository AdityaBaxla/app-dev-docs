# Type Conversion

Javascript for the most part automatically converts datatype to whatever seems logical (to the language, but not to humans) when used in functions or operators are used on it. There are certain times this behavior is not so obvious, or we need to explicitly convert datatype for our use case.

## String Conversion

Whenever we are displaying a value, it is automatically converted to string. The behavior of string conversion is predictable.

```js
console.log(true); // Output : true
console.log(1); // Output : 1
console.log(null); // Output : null
```

:::info
true become "true" and so on.
:::

we can explicitly convert values to string using `String(value)`

```js
let num = 576;
let str = String(num);
console.log(typeof str); // string
```

:::info
`typeof` is an operator which returns the datatype of a literal / variable
:::

## Number conversion

number conversion can get a little tricky sometimes, so hang on

for mathematical operations like \*,/,-,\*\* javascript tries to convert both sides to number, if not possible it will give the result as `NaN`.

```js
console.log("2" * "3"); // both converted to string -> 6
console.log(true / "10"); // boolean values are converted into 0 or 1 -> 0.1
console.log(7 ** "2"); // 49
console.log("hello" - 55); // NaN
```

To explicitly convert another datatype to number we use `Number()` or `parseInt()`, it's recommended to use the former.

```js
let str_num = "123";
let num = Number(str_num);
console.log(typeof num); // number
```

:::warning
boolean true is converted to 1 and boolean false is converted to 0, but string "true" and "false" will give NaN as result when using the above operations.
:::

## Boolean Conversion

Values that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, become `false`
Other values become `true`

Similarly we can use `Boolean()` to convert other types to boolean value.

```js
console.log(Boolean("")); // false
console.log(0); // false
console.log(1); // true
```

:::warning
"0" is not an empty string therefore is converted to `true`. In javascript a non-empty string is always `true`
:::
