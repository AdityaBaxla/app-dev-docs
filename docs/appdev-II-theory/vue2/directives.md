# What are Directives?

Directives are special HTML attributes provided by Vue.js that add Vue-specific functionality to standard HTML. They enable dynamic rendering, user interaction, event handling, and more, making Vue.js applications highly reactive.

Vue directives start with `v-` and are applied to HTML elements to extend their behavior.

---

## General Syntax for Vue Directives

The syntax of Vue directives follows a specific pattern:

```html
v-<directive_name
  >:<argument>.<modifier>="value"</modifier></argument></directive_name
>
```

- **Directive Name**: The functionality added by Vue, e.g., `v-bind`, `v-if`, etc.
- **Argument (optional)**: An attribute or event name, e.g., `v-bind:src`.
- **Modifier (optional)**: Adds additional details about how the directive should be processed, e.g., `v-on:click.stop`.
- **Value**: The expression or data used by the directive, e.g., `v-bind:src="imageSrc"`.

---

## List of Common Vue Directives

### `v-html`

- **Expects**: `string`
- Inserts raw HTML into the element. Use with caution, as it can lead to security risks if not handled properly.

```html
<div v-html="rawHTML"></div>
```

### `v-show`

- **Expects**: `any`
- Controls the visibility of an element by toggling its CSS `display` property. The element remains in the DOM but hidden.

```html
<p v-show="isVisible">I am visible!</p>
```

### `v-if`

- **Expects**: `any`
- Conditionally renders an element based on the truthiness of an expression. If the condition is false, the element is removed from the DOM.

```html
<p v-if="isVisible">This text is visible!</p>
```

### `v-else` / `v-else-if`

- **Expects**: Used with `v-if` to add alternative conditions.

```html
<p v-if="isVisible">Visible Text</p>
<p v-else>Hidden Text</p>

<p v-if="status === 'loading'">Loading...</p>
<p v-else-if="status === 'error'">Error occurred!</p>
<p v-else>Data Loaded</p>
```

Relate these to conditional statements in Jinja, but emphasize the **real-time reactivity** of Vue.

---

## Looping: `v-for`

- **Expects**: Array, Object, or Number
- Iterates over items and renders an element for each one.

### Example Usage

```html
<ul>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
</ul>
```

### Key Points:

- `v-for` should **always** be used with a `key` for optimal performance.
- Avoid using `v-if` and `v-for` on the **same element**, as `v-if` takes precedence.

---

## Event Handling: `v-on`

- **Expects**: Function | Inline Statement | Object (without argument)
- **Argument**: Event (e.g., `click`, `submit`)

`v-on` is used to listen for events like clicks, form submissions, etc.

### Example Usage

```html
<button v-on:click="handleClick">Click me!</button>

<!-- Inline event handler with $event -->
<button v-on:click="handle('ok', $event)">Click me!</button>
```

When used on a **custom component**, it listens for custom events emitted by the component.

---

## Dynamic Attributes: `v-bind`

- **Expects**: Any valid JavaScript expression
- Binds dynamic data to HTML attributes.

### Example Usage

```html
<!-- Bind a dynamic src attribute -->
<img v-bind:src="imageSrc" />

<!-- Dynamic attribute name -->
<button v-bind:[attrName]="value"></button>

<!-- Shorthand for v-bind -->
<img :src="imageSrc" />

<!-- Class binding -->
<div :class="{ active: isActive }"></div>
<div :class="[classA, classB]"></div>

<!-- Style binding -->
<div :style="{ fontSize: fontSize + 'px' }"></div>
```

- **Shorthand**: The `v-bind` directive can be shortened to `:attr`.
- Class and style binding make it easy to dynamically apply classes and styles based on your data.

---

## Two-Way Data Binding: `v-model`

- **Expects**: Form input elements or components
- Creates a **two-way binding** between a form element and the data.

### Supported Elements:

- `<input>`
- `<select>`
- `<textarea>`
- **Custom Components**

### Example Usage

```html
<input v-model="username" />

<select v-model="selectedOption">
  <option>A</option>
  <option>B</option>
</select>
```

### Modifiers:

- `.lazy` - Triggers the update on change, rather than on input.
- `.number` - Casts the value to a number.
- `.trim` - Trims whitespace from the input.

---

## Vue Directives in Practice

Each directive provides a way to make Vue apps more interactive and responsive by dynamically responding to user input and updating the UI in real-time. By leveraging directives, you can reduce manual DOM manipulation and write more efficient code.

Vue.js directives are an essential part of making Vue components truly reactive, and understanding how they work can dramatically improve the efficiency and readability of your code.
