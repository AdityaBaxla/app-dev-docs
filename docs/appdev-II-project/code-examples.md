# Reference Code

Here's a Markdown guide for running your first Flask application:

# Running Your First Flask Application

This guide will walk you through the steps to create and run your first Flask application.

## 1. Set Up the Project Directory

1. Create a directory for your Flask project:

```bash
mkdir my_flask_app
cd my_flask_app
```

2. Set up a virtual environment:

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

## 2. Install Flask

With the virtual environment activated, install Flask:

```bash
pip install Flask
```

## 3. Create Your First Flask Application

1. Create a file named `app.py` in your project directory:

```bash
touch app.py
```

2. Open `app.py` in your text editor and add the following code:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

### Explanation:

- **`Flask(__name__)`**: Creates an instance of the Flask class.
- **`@app.route('/')`**: A route decorator to bind the URL `/` to the `hello_world` function.
- **`app.run(debug=True)`**: Runs the Flask application in debug mode, allowing for automatic restarts and error messages during development.

## 4. Running the Flask Application

To run your Flask application:

```bash
# Ensure your virtual environment is activated
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Run the application
python app.py
```

You should see output similar to:

```bash
 * Serving Flask app 'app.py'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment.
Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## 5. Accessing Your Application

Open your web browser and go to:

```
http://127.0.0.1:5000/
```

You should see the message "Hello, World!" displayed on the page.

## 6. Modifying the Application

Feel free to modify the `app.py` file to experiment with different routes and functionality. For example, you can add another route:

```python
@app.route('/about')
def about():
    return 'This is the about page.'
```

After saving your changes, refresh your browser to see the updates.

## 7. Stopping the Application

To stop the Flask application, press `CTRL+C` in your terminal.

## 8. Next Steps

Now that you have your first Flask application running, you can explore more advanced topics such as:

- Working with templates using Jinja2.
- Handling forms and user input.
- Integrating with databases like SQLite.
- Implementing user authentication.

Refer to the [Flask documentation](https://flask.palletsprojects.com/) for more in-depth tutorials and guides.
