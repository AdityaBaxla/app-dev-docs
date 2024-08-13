# Setting Up Flask-Security

This guide will walk you through setting up Flask-Security in your Flask application, as done in the Study Resources Management project.

## 1. Install Flask-Security-Too

Flask-Security-Too is a fork of the original Flask-Security and is actively maintained. To install it, use:

```bash
pip install Flask-Security-Too
```

## 2. Configure Your Flask Application

1. Create or update your Flask application file (e.g., `app.py`) with the following setup:

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin
from flask_security.utils import hash_password

app = Flask(__name__)

# Set up the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///srm.db'
app.config['SECRET_KEY'] = 'super-secret-key'
app.config['SECURITY_PASSWORD_SALT'] = 'super-secret-salt'

# Initialize extensions
db = SQLAlchemy(app)

# Define models
roles_users = db.Table('roles_users',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer, db.ForeignKey('role.id'))
)

class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users, backref=db.backref('users', lazy='dynamic'))

# Set up user data store
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)

# Create a user to test with (only if no users exist)
@app.before_first_request
def create_user():
    db.create_all()
    if not user_datastore.find_user(email="admin@example.com"):
        user_datastore.create_user(email="admin@example.com", password=hash_password("password"))
    db.session.commit()

@app.route('/')
def home():
    return 'Home Page'

if __name__ == '__main__':
    app.run(debug=True)
```

### Explanation:

- **`Role` and `User` Models**: These models define roles and users. The `User` model is associated with multiple roles through the `roles_users` table.
- **`SQLAlchemyUserDatastore`**: This is used to store and retrieve user and role information from the database.
- **`Security`**: Initializes Flask-Security with your Flask app and user data store.

## 3. Set Up the Database

Before running the application, set up your database:

```bash
# Ensure your virtual environment is activated
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Create the database and tables
python app.py
```

The `@app.before_first_request` decorator ensures that the database tables are created before the first request and a test user is added if no users exist.

## 4. Running the Application

Run your Flask application:

```bash
python app.py
```

## 5. Accessing the Application

You can now access your application at `http://127.0.0.1:5000/`. You should see the "Home Page" message.

To test the user creation, you can check the database for the `admin@example.com` user. You can log in using this user when you implement authentication views.

## 6. Adding Authentication Views (Optional)

If you want to add login and registration views, Flask-Security provides default views that you can use:

```python
@app.route('/profile')
@login_required
def profile():
    return f"Welcome, {current_user.email}!"
```

With these routes and views, Flask-Security handles all the logic for login, logout, and registration.

## 7. Customizing Flask-Security

You can customize Flask-Security by adding more configurations in `app.config`. For example, you can enable or disable features like registration or password recovery:

```python
app.config['SECURITY_REGISTERABLE'] = True
app.config['SECURITY_RECOVERABLE'] = True
```

Refer to the [Flask-Security-Too documentation](https://flask-security-too.readthedocs.io/en/stable/) for more customization options.

## 8. Next Steps

Now that you have Flask-Security set up, you can proceed to:

- Customize templates for login, registration, and other views.
- Integrate Flask-Security with other parts of your application.
- Explore additional features like role-based access control (RBAC), two-factor authentication (2FA), etc.

This setup provides a robust starting point for managing user authentication and security in your Flask application.
