# Introduction to Vue.js

Vue.js is a progressive JavaScript framework used for building user interfaces. Unlike other monolithic frameworks, Vue is designed to be incrementally adoptable, meaning you can start small and gradually introduce more advanced features as needed. Vue.js 2 is known for its simplicity, flexibility, and ease of integration with other projects and libraries.

## What is Vue.js ?

Vue.js 2 is a lightweight framework that enables developers to create dynamic and interactive web applications. It follows a component-based architecture, where each piece of the user interface is encapsulated within a component. This modular approach makes Vue.js ideal for both small projects and large-scale applications.

### Key Features of Vue.js

- **Reactive Data Binding:** Vue.js provides reactive data binding, which means that any changes to the data automatically update the DOM (Document Object Model) in the browser.
- **Component-Based Structure:** Vue.js encourages the use of components to create reusable and encapsulated UI elements.
- **Computed Properties:** Vue.js allows you to define computed properties, which are automatically recalculated when their dependencies change.
- **Directives:** Vue.js uses directives like `v-bind`, `v-if`, `v-for`, and `v-model` to extend HTML functionality and simplify the development process.
- **Vue CLI (Command Line Interface):** Although not required, Vue CLI provides a powerful toolset for building and managing Vue.js projects.

## Getting Started Using CDN

Getting started with Vue.js 2 is incredibly easy, especially when using a CDN (Content Delivery Network). You can include Vue.js directly in your HTML file without the need for any installation or setup.

### Set Up the HTML File

Create a simple HTML file with the following structure:

```html{8}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 2 Example</title>
    <!-- Include Vue.js from a CDN -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  </head>
  <body>
    <div id="app">
      <!-- Vue.js will take control of this element -->
      <h1>{{ message }}</h1>
    </div>

    <script>
      // Initialize a new Vue instance
      new Vue({
        el: "#app",
        data: {
          message: "Hello, Vue.js 2!",
        },
      });
    </script>
  </body>
</html>
```

### Understanding the Code

Let's break down the code:

1. **Vue.js CDN**: The script tag includes Vue.js from a CDN (`https://cdn.jsdelivr.net/npm/vue@2`). This is the easiest way to start using Vue.js without installing anything.
2. **HTML Structure**: We have a simple HTML structure with a `div` element that has an `id` of `app`. Vue.js will manage the content inside this `div`.
3. **Vue Instance**: In the script section, we create a new Vue instance by calling `new Vue()`. We pass an options object to the Vue constructor with two properties:
   - `el`: The element that Vue.js will manage (`#app` in this case).
   - `data`: An object containing the data that the Vue instance will use. Here, we define a `message` property with the value `"Hello, Vue.js 2!"`.

### Running the Code

To see Vue.js in action, open the HTML file in a web browser. You should see the message "Hello, Vue.js 2!" displayed on the screen. This message is rendered by Vue.js using the `{{ message }}` syntax, which is known as "Mustache" syntax.

### Experimenting with Vue.js

You can now start experimenting with Vue.js by modifying the data in the Vue instance or adding new elements to the HTML file. For example, you can add a button that changes the `message` when clicked:

```html
<button @click="message = 'You clicked the button!'">Click Me</button>
```

This button uses the `@click` directive to listen for click events and update the `message` property accordingly.
