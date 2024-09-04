Here's a detailed document on the Fetch API, focusing on when it gives errors, when it doesn’t, and how it handles non-20X status codes:

---

# Understanding the Fetch API: Errors, Status Codes, and Response Handling

The Fetch API is a powerful tool for making HTTP requests in JavaScript. It provides a simple interface for fetching resources asynchronously across the network. However, understanding when the Fetch API throws errors, how it handles non-20X status codes, and how to process responses effectively is essential for robust and reliable web applications.

## Basic Fetch Request

A basic `fetch` request is straightforward. You pass the URL of the resource you want to fetch, and the Fetch API returns a promise that resolves to a `Response` object. Here's a simple example:

```javascript
fetch("https://example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));
```

## When Does Fetch Throw Errors?

The Fetch API only throws errors for network-related issues, such as:

- **Network Failures:** If the request fails due to network issues (e.g., no internet connection, DNS lookup failures), the promise returned by `fetch` will be rejected with a `TypeError`.

- **CORS Issues:** Cross-Origin Resource Sharing (CORS) issues, like blocked requests due to missing or incorrect CORS headers, will also result in a rejected promise with a `TypeError`.

### Example:

```javascript
fetch("https://invalid-url")
  .then((response) => response.json())
  .catch((error) => console.error("Network error or CORS issue:", error));
```

In this case, if the URL is invalid or there is a network failure, the `.catch` block will handle the error.

## When Does Fetch Not Throw Errors?

The Fetch API does **not** automatically throw errors for HTTP response status codes like 404 or 500. Instead, it will resolve the promise with a `Response` object, even if the server returns a non-20X status code. It's up to the developer to check the response's status code and handle it accordingly.

### Example:

```javascript
fetch("https://example.com/non-existent-resource")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));
```

In this example, the `.catch` block will only be triggered if the network fails. To handle non-20X status codes, you need to manually check `response.ok` or `response.status` and throw an error if needed.

## Handling Non-20X Status Codes

The `Response` object includes a `status` property that contains the HTTP status code returned by the server. The `ok` property is a shorthand that returns `true` if the status code is between 200 and 299 (inclusive), indicating a successful response. For other status codes, you must implement custom handling logic.

### Example:

```javascript
fetch("https://example.com/resource")
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error("Resource not found (404)");
    } else if (response.status >= 500) {
      throw new Error(`Server error (${response.status})`);
    } else {
      throw new Error(`Unexpected HTTP status: ${response.status}`);
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));
```

### Common Status Code Handling:

- **2XX (Success):** Continue processing the response as usual.
- **3XX (Redirection):** Typically handled by the browser, but you can handle specific redirects if needed.
- **4XX (Client Error):** Indicates a problem with the request (e.g., 404 Not Found, 401 Unauthorized). You should provide appropriate feedback to the user.
- **5XX (Server Error):** Indicates a server-side issue (e.g., 500 Internal Server Error). You might want to retry the request or log the error for further investigation.

## Summary

- **Fetch API** only throws errors for network-related issues, not for HTTP response status codes.
- **Non-20X Status Codes**: Always check the `response.ok` or `response.status` to handle non-20X status codes.
- **Custom Error Handling**: Implement logic for different status codes to provide meaningful feedback and error handling in your application.

By carefully handling these aspects, you can ensure that your web application gracefully manages various scenarios, providing a better user experience and more reliable network communication.

---

This document provides a comprehensive guide to handling errors and status codes when using the Fetch API, helping developers avoid common pitfalls and build robust applications.
