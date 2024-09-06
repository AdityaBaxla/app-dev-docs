# API Documentation for AppDev 2 Course

## JavaScript

### DOM Manipulation

- **`getElementById(id)`**  
  Returns the element with the specified ID.

  ```js
  const element = document.getElementById("myElement");
  ```

- **`createElement(tagName)`**  
  Creates a new HTML element.

  ```js
  const newDiv = document.createElement("div");
  ```

- **`querySelector(selector)`**  
  Returns the first element that matches a CSS selector.

  ```js
  const element = document.querySelector(".className");
  ```

- **`getElementsByClassName(className)`**  
  Returns all elements with the specified class name.

  ```js
  const elements = document.getElementsByClassName("myClass");
  ```

- **`addEventListener(event, function)`**  
  Adds an event listener to an element.

  ```js
  element.addEventListener("click", handleClick);
  ```

- **`appendChild(child)`**  
  Appends a child element to the parent element.
  ```js
  parentElement.appendChild(childElement);
  ```

### DOM Properties

- **`innerHTML`**  
  Sets or returns the HTML content of an element.

  ```js
  element.innerHTML = "<p>New content</p>";
  ```

- **`innerText`**  
  Sets or returns the text content of an element.
  ```js
  element.innerText = "Hello, World!";
  ```

---

### JavaScript Utilities

- **`setTimeout(function, milliseconds)`**  
  Executes a function after a specified delay.

  ```js
  setTimeout(() => alert("Hello!"), 2000);
  ```

- **`setInterval(function, milliseconds)`**  
  Repeatedly executes a function with a fixed time delay.

  ```js
  setInterval(() => console.log("Tick"), 1000);
  ```

- **`alert(message)`**  
  Displays an alert dialog with a message.

  ```js
  alert("This is an alert message");
  ```

- **`bind(thisArg)`**  
  Creates a new function with a specific `this` context.

  ```js
  const boundFunc = func.bind(this);
  ```

- **`call(thisArg, arg1, arg2, ...)`**  
  Invokes a function with a specified `this` context and arguments.

  ```js
  func.call(this, arg1, arg2);
  ```

- **`apply(thisArg, [args])`**  
  Invokes a function with a specific `this` context and an array of arguments.
  ```js
  func.apply(this, [arg1, arg2]);
  ```

### Math Methods

- **`Math.max()`**  
  Returns the largest number from a set of numbers.

  ```js
  Math.max(1, 5, 10); // 10
  ```

- **`Math.min()`**  
  Returns the smallest number from a set of numbers.

  ```js
  Math.min(1, 5, 10); // 1
  ```

- **`Math.floor()`**  
  Rounds down a number to the nearest integer.

  ```js
  Math.floor(4.7); // 4
  ```

- **`Math.round()`**  
  Rounds a number to the nearest integer.

  ```js
  Math.round(4.5); // 5
  ```

- **`Math.ceil()`**  
  Rounds up a number to the nearest integer.
  ```js
  Math.ceil(4.2); // 5
  ```

---

### String Methods

- **`length`**  
  Returns the length of a string.

  ```js
  "hello".length; // 5
  ```

- **`charAt(index)`**  
  Returns the character at the specified index.

  ```js
  "hello".charAt(1); // 'e'
  ```

- **`slice(start, end)`**  
  Extracts part of a string between the start and end indices.

  ```js
  "hello".slice(0, 3); // 'hel'
  ```

- **`substring(start, end)`**  
  Similar to slice but does not accept negative indices.

  ```js
  "hello".substring(0, 3); // 'hel'
  ```

- **`toUpperCase()`**  
  Converts a string to uppercase.

  ```js
  "hello".toUpperCase(); // 'HELLO'
  ```

- **`toLowerCase()`**  
  Converts a string to lowercase.

  ```js
  "HELLO".toLowerCase(); // 'hello'
  ```

- **`trim()`**  
  Removes whitespace from both ends of a string.

  ```js
  "  hello  ".trim(); // 'hello'
  ```

- **`split(separator)`**  
  Splits a string into an array of substrings.
  ```js
  "a,b,c".split(","); // ['a', 'b', 'c']
  ```

---

### Objects / Arrays

- **`forEach(callback)`**  
  Executes a function on each array element.

  ```js
  array.forEach((element) => console.log(element));
  ```

- **`map(callback)`**  
  Returns a new array with the results of calling a function on every element.

  ```js
  array.map((num) => num * 2);
  ```

- **`filter(callback)`**  
  Returns a new array with elements that pass a test function.

  ```js
  array.filter((num) => num > 10);
  ```

- **`reduce(callback, initialValue)`**  
  Reduces an array to a single value.

  ```js
  array.reduce((acc, num) => acc + num, 0);
  ```

- **`sort()`**  
  Sorts the elements of an array.

  ```js
  array.sort();
  ```

- **`find(callback)`**  
  Returns the first element that passes a test function.

  ```js
  array.find((num) => num > 10);
  ```

- **`push(element)`**  
  Adds an element to the end of the array.

  ```js
  array.push(5);
  ```

- **`pop()`**  
  Removes the last element from the array.

  ```js
  array.pop();
  ```

- **`shift()`**  
  Removes the first element from the array.

  ```js
  array.shift();
  ```

- **`unshift(element)`**  
  Adds an element to the beginning of the array.

  ```js
  array.unshift(5);
  ```

- **`splice(start, deleteCount)`**  
  Adds/removes elements from an array.

  ```js
  array.splice(2, 1);
  ```

- **`join(separator)`**  
  Joins all array elements into a string.

  ```js
  array.join("-"); // '1-2-3'
  ```

- **`indexOf(element)`**  
  Returns the index of the first occurrence of an element.

  ```js
  array.indexOf(2); // 1
  ```

- **`Object.entries(obj)`**  
  Returns an array of key-value pairs.

  ```js
  Object.entries({ a: 1, b: 2 });
  ```

- **`Object.keys(obj)`**  
  Returns an array of keys of an object.

  ```js
  Object.keys({ a: 1, b: 2 });
  ```

- **`Object.values(obj)`**  
  Returns an array of values of an object.

  ```js
  Object.values({ a: 1, b: 2 });
  ```

- **`Object.freeze(obj)`**  
  Freezes an object, making it immutable.
  ```js
  Object.freeze(obj);
  ```

---

### JSON Methods

- **`JSON.parse(string)`**  
  Parses a JSON string into a JavaScript object.

  ```js
  JSON.parse('{"name": "John"}'); // { name: 'John' }
  ```

- **`JSON.stringify(obj)`**  
  Converts a JavaScript object into a JSON string.
  ```js
  JSON.stringify({ name: "John" });
  ```

---

## Vue.js

### Vue Basics

- **`data()`**  
  Defines the reactive state for a Vue component.

  ```js
  data() {
    return {
      count: 0
    };
  }
  ```

- **`methods()`**  
  Defines functions to be used as methods within a Vue component.

  ```js
  methods: {
    increment() {
      this.count++;
    }
  }
  ```

- **`computed()`**  
  Defines computed properties that depend on reactive data.

  ```js
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
  ```

- **`watch()`**  
  Observes changes to a reactive data property and triggers a function.
  ```js
  watch: {
    count(newValue) {
      console.log('Count changed to:', newValue);
    }
  }
  ```

````

---

### Vue Lifecycle Hooks

- **`beforeCreate()`**
- **`created()`**
- **`beforeMount()`**
- **`mounted()`**
- **`beforeUpdate()`**
- **`updated()`**
- **`beforeDestroy()`**
- **`destroyed()`**

---

### Vue Directives

- **`v-bind`**
 Dynamically binds one or more attributes.
 ```html
 <img v-bind:src="imageSrc">
````

- **`v-model`**  
  Creates two-way data binding on form elements.

  ```html
  <input v-model="message" />
  ```

- **`v-for`**  
  Renders a list of items.

  ```html
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  ```

- **`v-on:`**  
  Attaches an event listener.

  ```html
  <button v-on:click="increment">Click me</button>
  ```

- **`v-if`**  
  Conditionally renders an element.

  ```html
  <p v-if="isVisible">Visible</p>
  ```

- **`v-else`**  
  Specifies an alternate condition for `v-if`.

  ```html
  <p v-else>Hidden</p>
  ```

- **`v-show`**  
  Toggles the visibility of an element.
  ```html
  <p v-show="isVisible">Visible</p>
  ```

---

### Vue Router 3

- **`<router-link>`**  
  Used for navigating between routes.

  ```html
  <router-link to="/about">About</router-link>
  ```

- **`<router-view>`**  
  Displays the matched component for the route.

  ```html
  <router-view></router-view>
  ```

- **`router.push(path)`**  
  Programmatically navigates to a new route.
  ```js
  this.$router.push("/home");
  ```

---

### Vuex 3

- **`Vuex.Store`**  
  Creates a new Vuex store.

  ```js
  const store = new Vuex.Store({
    state: { count: 0 },
    mutations: {
      increment(state) {
        state.count++;
      },
    },
  });
  ```

- **`state`**  
  The Vuex store's reactive state.

  ```js
  store.state.count;
  ```

- **`mutations`**  
  Synchronous functions to modify the state.

  ```js
  mutations: { increment(state) { state.count++ } }
  ```

- **`actions`**  
  Asynchronous functions that commit mutations.

  ```js
  actions: { incrementAsync({ commit }) { commit('increment') } }
  ```

- **`getters`**  
  Functions that return derived state.

  ```js
  getters: {
    doubleCount: (state) => state.count * 2;
  }
  ```

- **`commit()`**  
  Commits a mutation to change the state.

  ```js
  store.commit("increment");
  ```

- **`dispatch()`**  
  Dispatches an action to trigger mutations asynchronously.
  ```js
  store.dispatch("incrementAsync");
  ```

---

## Celery

- **`task()`**  
  Defines a Celery task.

  ```python
  @celery.task
  def my_task():
      return 'Hello, World!'
  ```

- **`result`**  
  Retrieves the result of a Celery task.
  ```python
  result = my_task.delay()
  result.get()  # Blocks until result is ready
  ```
