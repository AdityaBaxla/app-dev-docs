# Methods and Computed Properties in Vue.js [Code]

## Introduction to Methods

In Vue.js, **methods** are functions defined within a Vue component that can be used to perform actions or logic when triggered by events, such as user interactions.

### How Methods Work in Vue

Methods in Vue work similarly to traditional JavaScript functions, but they are tied to the Vue component’s instance, meaning they have access to the component’s data and other properties.

### Why Use Methods?

- **Handling User Interactions**: Methods are ideal for handling events such as clicks, form submissions, and other user interactions.
- **Processing Data**: You can use methods to process or manipulate data before rendering.
- **Keeping Templates Clean**: By moving complex logic out of the HTML, methods help keep your Vue templates clean and more maintainable.

### Example: Defining and Using a Method

In this example, the `greetUser` method is triggered when a button is clicked, showing an alert message:

```html
<div id="app">
  <button @click="greetUser">Greet</button>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    methods: {
      greetUser() {
        alert("Hello, Vue developer!");
      },
    },
  }).mount("#app");
</script>
```

````

- The `@click` directive listens for a button click and calls the `greetUser` method.
- This method could perform any custom logic such as making API calls, processing form inputs, etc.

---

## What Are Computed Properties?

**Computed properties** are special properties in Vue that are automatically calculated based on the component’s data. They are like methods but with one important distinction—they are **cached** and only re-evaluated when their dependencies (the data they rely on) change.

### Why Use Computed Properties?

- **Efficiency**: Because they are cached, computed properties don’t need to recalculate unless necessary, making them more efficient than calling methods repeatedly.
- **Data Derivation**: They are perfect for scenarios where you want to derive new values based on existing state, such as concatenating strings, calculating sums, or filtering arrays.
- **Cleaner Templates**: Similar to methods, computed properties move logic out of the HTML, but they are especially useful when you need dynamic, derived data in your template.

### Example: Using Computed Properties

In this example, a computed property `fullName` automatically updates when `firstName` or `lastName` changes:

```html
<div id="app">
  <input v-model="firstName" placeholder="First Name" />
  <input v-model="lastName" placeholder="Last Name" />
  <p>{{ fullName }}</p>
  <button @click="resetName">Reset Name</button>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        firstName: "John",
        lastName: "Doe",
      };
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    methods: {
      resetName() {
        this.firstName = "";
        this.lastName = "";
      },
    },
  }).mount("#app");
</script>
```

### Key Points:

- `fullName` is a **computed property** that concatenates `firstName` and `lastName`.
- **Reactivity**: Any change to `firstName` or `lastName` automatically updates the `fullName` without needing to call a method.
- The `resetName` method clears both `firstName` and `lastName` by setting them to empty strings.

---

## Methods vs. Computed Properties

### When to Use Methods:

- Use methods when you need to perform an **action** or **side-effect** in response to an event, like user clicks or API calls.
- Methods are not cached, so they are recalculated every time they are called, even if the data has not changed.

### When to Use Computed Properties:

- Use computed properties when you need to **derive data** from existing state, like combining values or calculating totals.
- Computed properties are cached and will only update when their dependencies change, making them more efficient than methods for this purpose.

### Example: Methods vs. Computed Properties

```html
<div id="app">
  <input v-model="firstName" placeholder="First Name" />
  <input v-model="lastName" placeholder="Last Name" />
  <p>{{ fullName }}</p>
  <p>{{ greetUser() }}</p>
  <!-- Method used in a template -->
  <button @click="resetName">Reset Name</button>
</div>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        firstName: "John",
        lastName: "Doe",
      };
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    methods: {
      greetUser() {
        return `Hello, ${this.firstName}!`;
      },
      resetName() {
        this.firstName = "";
        this.lastName = "";
      },
    },
  }).mount("#app");
</script>
```

- The computed property `fullName` is derived from the `firstName` and `lastName` and updates reactively.
- The `greetUser` method is called directly in the template to show a greeting, but it is not cached, so it will be re-executed on every render.

---

## How Methods and Computed Properties Work Together

- **Methods** are ideal for handling user interactions and performing actions.
- **Computed properties** are perfect for dynamically displaying derived data based on component state.

By combining methods and computed properties, you can build highly interactive and efficient Vue components that manage both user interactions and dynamic data effectively.
````
