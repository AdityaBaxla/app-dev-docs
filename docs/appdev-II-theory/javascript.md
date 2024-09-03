# Javascript

## Introduction

Javascript was made to add some interactivity to html pages, it's still used for that purpose but it has evolved much more than the original use case. In today's world you can make backend as well as frontend with javascript. Javascript is the most important language when it comes to making web apps.

::: warning
Javascript can be very lenient with errors, be very careful when using properties. Even if a property is not defined you can access the property who's value will come as `undefined`
:::

<!-- ::: details
This is a details block.
:::

::: info
This is an info box.
:::

::: tip
This is a tip.
::: -->

Javascript runs on browser, for chrome its V8 engine, SpiderMonkey for firefox, and more.
On the server or computer the most common javascript runtime is Node.js, which itself runs on **v8 engine**.

### Great things about Javascript

- Well integrated with HTML/CSS.
- Simple and fast to learn.
- Supported by all major browsers.

For this course we would specify where if the javascript code is running on the browser or node.js. There are some differences between the two runtime. We will mention it whenever we come across these differences. As of now you just need to know they are two of the major ways js runs.

## Getting Started

You need to have any modern browser, and thats it you can start writing you javascript code. So simple !

- open up your browser
- goto console by pressing F12 or ctrl + shift + j (Windows) | Cmd + Option + J (Mac) to open up the browser console.
- open the console tab
- start writing you javascript code

```js
alert("my first js code");
```

This particular console window is very useful to write and test small snippets of code, but you can't save it and of course its not where you can develop large applications.

### Running javascript in html file

If you like to save your code, you need to write it in a file. Lets create a `index.html` file and write code in it.

```html
<html>
  <head></head>
  <body>
    <script>
      // write javascript code here
      console.log("hello from html");
    </script>
  </body>
</html>
```

you can open this `index.html` file in a browser and open up the console to view the execution of this code. However this approach has a problem, every time you change the code you need to refresh the page to see this change in code.

:::info
Usually, when we put a line of code into the console, and then press Enter, it executes. To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.
:::

### Running javascript in external .js file

When the code becomes larger we like to separate it different file. This is where external javascript file comes to save us.

- create a index.html file
- create a app.js file in the same folder
- write the javascript file path in `src` attribute in script

```html{4} [html]
<html>
  <head></head>
  <body>
    <script src="app.js">
    </script>
  </body>
</html>
```

```js
console.log("greetings from external javascript file");
```

you can add multiple different javascript file this way. Try it out !

::: warning
when a source attribute is given to script tag, any code written inside script tag is ignored
:::

### Fundamentals

Javascript is considered a scripting language that means no compiling step need.

It is loosely structured, there is no fixed way as in no need of main functions to run the code.

#### Reserved Keywords

There are few keywords that are reserved for language purpose so you can use it to name variables and functions.
few keywords include enum, public, undefined, implements etc. You don't need to remember these keywords, you'll get used to the important ones as you keep coding in javascript.

#### Literals

literals are values that can be assigned to variables. The value `1` is a literal and so is `"MAD - 2"`

#### Statement

A piece of code that can be executed

#### Expression

code when executed returns a value
