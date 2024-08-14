# Frequently Asked Questions

### Table of content

[[toc]]

## Project Requirements

#### Q: For the RBAC, do I need to use Flask-Security, or can I implement custom logic?

A: Using flask-security is recomended but you can implement custom user login using Flask's session object, but ensure it meets the project’s requirements.

#### Q: Is the use flask-restful mandatory ?
A: flask-restful is not mandatory, however sending data through API's are mandatory. You can have your own implementation.

#### Q: Do I need to use Vue.js as a CDN, or is CLI mandatory?

A: Use of Vue.js CDN as well as CLI are allowed.

#### Q: Can I use Vue.js 3 ?

A: Yes, both Vue.js 2 as well as Vue.js 3 are allowed.

#### Q: Is it mandatory to use ChartJS, or can I use Matplotlib for plotting?

A: You can you use any charting library for showing visual data.

#### Q: How many marks will be deducted if I fail to implement Celery tasks, and what is the weightage?

A: The weightage for Celery jobs is significant, but failing to implement them won't fail the entire project. Marks will be deducted accordingly.

#### Q: Is it necessary to set up a daily mail system as shown in the live session?

A: Its not mandatory to follow live sessions, as per project requirement you can either setup mail, g-chat or SMS.

#### Q: Is setting up mail through Mailhog or other email testing tool accepted?

A: Yes, demonstration through mail testing tools are fine.

#### Q: Can I use third-party libraries like PrimeVue or Vue Material for UI components?

A: Yes, you can use third-party libraries, but ensure you understand and can explain their implementation in the viva.

#### Q: Is it necessary to use Redis and Celery, or can RabbitMQ be used instead?

A: Redis and Celery are mandatory however, RabbitMQ maybe allowed if you encounter issues with Redis, get confirmation from instructors.

#### Q: Is the ER diagram mandatory, or can relations between tables be defined in words?

A: While defining relations in words is acceptable, submitting an ER diagram is recommended.

#### Q: Can I use SQLAlchemy for database management?

A: Yes, SQLAlchemy is a commonly used ORM for Flask applications and is acceptable.
E
#### Q: I am unable to send emails to Gmail but can send them to Mailhog. Is this sufficient?

A: Sending emails to Mailhog for testing is  accepted.

#### Q: Use of Vuex mandatory?

A: It's not mandatory

#### Q: Can I build the project in windows?
#### Q: Is the use of WSL mandatory?



---

## Submission 

#### Q: When are the plagiarism test results released?

A: The results are typically released within a few days after the current submission window ends, but it can vary depending on the queue.

#### Q: Can I enroll in the next term without penalty and with full assessment?

A: Yes you can enroll in the next term.

#### Q: Will I be automatically enrolled for the project in the next term, or do I need to register again?

A: 

#### Q: Can invalid submissions be resubmitted?

A: Make sure to only submit when you are sure of the project, incase of invalid submission contact the course instructors.

#### Q: I accidentally submitted the wrong file. Can I resubmit?

A: Resubmission after the deadline will not be allowed.

#### Q: I am getting a message that I am not eligible for project submission after submitting the project. What should I do?

A: This is the normal behavior of the submission portal, we have received you project.

---

## Zipping File


#### Q: I am unable to submit my project due to exceeding file size limits. What can I do?

A: Try reducing the file size by removing non-essential files and folders. Check for hidden files as well.

#### Q: How do I reduce the file size for submission?

A: Remove unnecessary files and folders like `node_modules`, `.venv`, `.git`, and large static files. Consider compressing images. Incase database is very large, it can also be deleted, you can add it in viva.

#### Q: I'm using Mac OS for zipping and its not passing validation.

A: It's hit or miss with MacOS zipping process, try to zip programmatically or upload your folder to google drive and download a zipped version from google drive.

#### Q: How can I zip my project folder programmatically?

A: You can use tools like `7z` or `gzip` from the terminal. You can google how to install and use them for your particular operating system.

#### Q: What should be the format for the submission ZIP file?

A: One `root` folder, inside the root folder only `report.pdf` and `code` folder should be present. You can keep all you frontend, backend and other folders inside `code`. 



---

## Validation 

#### Q: My validation passed, can I submit my project?

A: If validation has passed, you can submit.

#### Q: What does a checksum failure mean, and how do I fix it?

A: A checksum failure indicates that code has been changed since you submitted your project. In such case you can download your project from the portal in presence of viva examiner and run your application.

#### Q: After submitting, I received a message that I am not eligible for project submission. Is my submission valid?

A: This is normal, we have received your project.

#### Q: I am having trouble with validation. What should I do?

A: Ensure all files are correctly formatted, and all guidelines are followed. If issues persist, contact support.

---


## Technical Issues


#### Q: Redis shows a connection error. What should I do?

A: Check that the Redis service is running and correctly configured. If issues persist, try restarting the service.


#### Q: My project report is based on a previous submission. Will it be flagged for plagiarism?

A: If the content is largely reused, it may be flagged. Ensure you make significant updates to avoid this.

---

## Miscellaneous

#### Q: How do I view my marks/grades after passing the level?

A: Check the results tab, usually located at the top right of the portal.

#### Q: What is the expected content of the submission video?

A: Provide a walkthrough of your app, explaining key features and implementation. The video should be concise and within the time limit.

#### Q: Should I delete the `node_modules` folder before submitting?

A: Yes, delete the `node_modules` folder and other non-essential directories to reduce file size. `node_modules` can be installed with `npm install` command in the frontend root folder.

#### Q: Can I make small code changes after running a checksum and before the demo?

A: Minor changes may be allowed, but seek permission from your proctor during the viva.
