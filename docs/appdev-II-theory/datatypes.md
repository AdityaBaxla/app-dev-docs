# Datatype

Javascript datatypes can be classified into two broad categories 
- Primitives
- Object

## Primitive Datatype

Primitive data types are the most basic data types in JavaScript. They include:
string
number
bigint
boolean
symbol
undefined
null

:::tip
primitives are directly stored in the memory (not as reference), the consequent of this is when we write `x = y` when y is primitive datatype, then the value of x is a copy of the value of y. Meaning both are actually different and changing y won't change x.
:::

The most important primitive datatype for our course is string, number, boolean, undefined and null.

### string

literals enclosed with \`\`, '' or "" are strings

```js
"This is a String"
"" // empty string
'a' // single character is also string
'*' // any character is string 
```

### number

numerical values are numbers, javascript treats both floating point and integers as number
