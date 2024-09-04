# String Methods

s
Strings are one of the most commonly used data types in JavaScript. They are immutable, meaning that once created, their content cannot be changed. However, JavaScript provides a wide array of string methods that allow you to manipulate and interact with strings effectively, you'll get to learn the most important of these.

## Common String Methods

### `length`

- **Purpose**: Returns the number of characters in a string.
- **Syntax**: `string.length`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.length); // 13
```

### `charAt()`

- **Purpose**: Returns the character at a specified index.
- **Syntax**: `string.charAt(index)`
- **Example**:

```javascript
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

### `indexOf()` and `lastIndexOf()`

- **Purpose**:
  - `indexOf()`: Returns the index of the first occurrence of a specified value in a string.
  - `lastIndexOf()`: Returns the index of the last occurrence of a specified value in a string.
- **Syntax**:
  - `string.indexOf(searchValue, fromIndex)`
  - `string.lastIndexOf(searchValue, fromIndex)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 8
```

### `slice()`

- **Purpose**: Extracts a section of a string and returns it as a new string.
- **Syntax**: `string.slice(startIndex, endIndex)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.slice(7, 12)); // "World"
```

### `substring()` and `substr()`

- **Purpose**:
  - `substring()`: Returns the part of the string between the start and end indexes.
  - `substr()`: Returns a portion of the string starting at a specified index and extending for a given number of characters.
- **Syntax**:
  - `string.substring(startIndex, endIndex)`
  - `string.substr(startIndex, length)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.substring(7, 12)); // "World"
console.log(str.substr(7, 5)); // "World"
```

### `toUpperCase()` and `toLowerCase()`

- **Purpose**: Converts a string to uppercase or lowercase.
- **Syntax**:
  - `string.toUpperCase()`
  - `string.toLowerCase()`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
```

### `trim()`

- **Purpose**: Removes whitespace from both ends of a string.
- **Syntax**: `string.trim()`
- **Example**:

```javascript
let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
```

### `replace()`

- **Purpose**: Replaces a specified value with another value in a string.
- **Syntax**: `string.replace(searchValue, newValue)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

### `split()`

- **Purpose**: Splits a string into an array of substrings, based on a specified delimiter.
- **Syntax**: `string.split(separator, limit)`
- **Example**:

```javascript
let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr); // ["Hello", "World!"]
```

### `includes()`

- **Purpose**: Checks whether a string contains a specified value.
- **Syntax**: `string.includes(searchValue, startPosition)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false
```

### `startsWith()` and `endsWith()`

- **Purpose**:
  - `startsWith()`: Checks whether a string starts with a specified value.
  - `endsWith()`: Checks whether a string ends with a specified value.
- **Syntax**:
  - `string.startsWith(searchValue, startPosition)`
  - `string.endsWith(searchValue, endPosition)`
- **Example**:

```javascript
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World!")); // true
```

### `concat()`

- **Purpose**: Concatenates two or more strings and returns a new string.
- **Syntax**: `string.concat(string2, string3, ..., stringN)`
- **Example**:

```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"
```

### `repeat()`

- **Purpose**: Constructs and returns a new string which contains the specified number of copies of the string it was called on.
- **Syntax**: `string.repeat(count)`
- **Example**:

```javascript
let str = "Hello!";
console.log(str.repeat(3)); // "Hello!Hello!Hello!"
```

## Immutability of Strings

It’s important to remember that strings in JavaScript are immutable. This means that once a string is created, it cannot be changed. Methods like `replace()`, `toUpperCase()`, and `concat()` return new strings instead of modifying the original string.

```javascript
let str = "Hello, World!";
let newStr = str.toUpperCase();
console.log(str); // "Hello, World!"
console.log(newStr); // "HELLO, WORLD!"
```

In the example above, the original string `str` remains unchanged after applying the `toUpperCase()` method. The method returns a new string instead.
