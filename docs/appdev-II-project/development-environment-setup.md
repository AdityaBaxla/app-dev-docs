# Development Environment Setup

This guide will walk you through setting up your development environment for the Study Resources Management project. The setup includes installing Python, Flask, Node.js, WSL (if on Windows), Celery, Redis, VSCode, and other necessary tools.

## 1. Installing Python

### Windows

1. Download the latest Python installer from the [official website](https://www.python.org/downloads/).
2. Run the installer and make sure to check the option "Add Python to PATH".
3. Install Python.

### macOS/Linux

Python is usually pre-installed on macOS and Linux. You can check the version with:

```bash
python3 --version
```

If not installed, use:

```bash
# macOS (with Homebrew)
brew install python

# Ubuntu
sudo apt-get update
sudo apt-get install python3
```

## 2. Installing Flask

To install Flask, first, create a virtual environment and then install Flask:

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install Flask
pip install Flask
```

## 3. Installing Node.js

### Windows/macOS/Linux

1. Download the latest Node.js LTS version from the [official website](https://nodejs.org/).
2. Follow the installer instructions.

After installation, verify it by running:

```bash
node -v
npm -v
```

## 4. Setting Up WSL (Windows Subsystem for Linux) (Windows Only)

1. Open PowerShell as Administrator and run:

```powershell
wsl --install
```

2. Restart your computer if required.
3. Once restarted, set up your Linux distribution (e.g., Ubuntu) from the Microsoft Store.

To access WSL, just open a terminal and type `wsl`.

## 5. Installing Redis

### Windows

1. Install Redis from [Memurai](https://www.memurai.com/get-memurai) or [Redis for Windows](https://github.com/microsoftarchive/redis/releases) as Redis is not natively supported on Windows.
2. Follow the installation instructions.

### macOS

Use Homebrew to install Redis:

```bash
brew install redis
brew services start redis
```

### Linux

Install Redis using the package manager:

```bash
sudo apt-get update
sudo apt-get install redis-server
```

Verify Redis is running with:

```bash
redis-cli ping
```

You should receive `PONG` as a response.

## 6. Installing Celery

After setting up your Python environment, install Celery:

```bash
pip install celery[redis]
```

## 7. Setting Up Visual Studio Code (VSCode)

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the following extensions:
   - Python
   - Pylance
   - ESLint
   - Prettier - Code formatter
   - Vue Language Features (if using Vue.js)

## 8. Additional Setup

### Installing Vue.js CLI (Optional)

If your project requires advanced Vue.js features, install the Vue CLI:

```bash
npm install -g @vue/cli
```

### Setting Up Flask-Caching with Redis

Install Flask-Caching to handle caching with Redis:

```bash
pip install Flask-Caching
```

Add the following configuration to your Flask application:

```python
from flask_caching import Cache

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'redis', 'CACHE_REDIS_URL': 'redis://localhost:6379/0'})
```

### Installing Flask-Security (Optional)

If your project requires user authentication:

```bash
pip install Flask-Security-Too
```

### Installing Flask-Excel (Optional)

For exporting data to Excel format:

```bash
pip install Flask-Excel
```

## 9. Running the Application

To start your Flask application:

```bash
# Activate your virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Run the Flask application
flask run
```

To run Celery with Redis:

```bash
celery -A yourappname worker --loglevel=info
```

This setup should get your development environment up and running for the Study Resources Management project. If you encounter any issues, refer to the official documentation for each tool or framework.
