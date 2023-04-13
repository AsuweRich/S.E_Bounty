0x05. NodeJS Basics
===================

Back-end JavaScript ES6 NodeJS ExpressJS

-   By: Johann Kerbrat, Engineering Manager at Uber Works
-   Weight: 1

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220809T195501Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=43b4a8b5bdaf5cb33711d5acc543430bc22f2a0a5354406c81d145a57b6abe44)

Resources
---------

**Read or watch**:

-   [Node JS getting started](https://alx-intranet.hbtn.io/rltoken/zIYhQPHfn37Hlk3I9gfPGw "Node JS getting started")
-   [Process API doc](https://alx-intranet.hbtn.io/rltoken/Wt69QV2xygB4GEqob26AjQ "Process API doc")
-   [Child process](https://alx-intranet.hbtn.io/rltoken/IS4y9rRCblX71W_oeXpymw "Child process")
-   [Express getting started](https://alx-intranet.hbtn.io/rltoken/XsfrhG9NRLuuaTpVZlZv_g "Express getting started")
-   [Mocha documentation](https://alx-intranet.hbtn.io/rltoken/EBGDj1FwLrK_y4kgxp8hfg "Mocha documentation")
-   [Nodemon documentation](https://alx-intranet.hbtn.io/rltoken/vnDSbLsicMDdxcf5YUSXIg "Nodemon documentation")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/vXmxtc5JH_CeIWReMTNhDA "explain to anyone"), **without the help of Google**:

-   run javascript using NodeJS
-   use NodeJS modules
-   use specific Node JS module to read files
-   use `process` to access command line arguments and the environment
-   create a small HTTP server using Node JS
-   create a small HTTP server using Express JS
-   create advanced routes with Express JS
-   use ES6 with Node JS with Babel-node
-   use Nodemon to develop faster

Requirements
------------

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
-   All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

Provided files
--------------

### `database.csv`

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS

```

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### and...

Don't forget to run `$ npm install` when you have the `package.json`

Tasks
-----

### 0\. Executing basic javascript with Node JS

mandatory

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `0-console.js`

 Done? Help Check your code Get a sandbox

### 1\. Using Process stdin

mandatory

Create a program named `1-stdin.js` that will be executed through command line:

-   It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
-   The user should be able to input their name on a new line
-   The program should display `Your name is: INPUT`
-   When the user ends the program, it should display `This important software is now closing` (followed by a new line)

**Requirements:**

-   Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$
bob@dylan:~$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `1-stdin.js`

 Done? Help Check your code Get a sandbox

### 2\. Reading a file synchronously with Node JS

mandatory

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

-   Create a function named `countStudents`. It should accept a path in argument
-   The script should attempt to read the database file synchronously
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `2-read_file.js`

 Done? Help Check your code Get a sandbox

### 3\. Reading a file asynchronously with Node JS

mandatory

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

-   Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
-   The script should attempt to read the database file asynchronously
-   The function should return a Promise
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$

```

**Tips:**

-   Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `3-read_file_async.js`

 Done? Help Check your code Get a sandbox

### 4\. Create a small HTTP server using Node's HTTP module

mandatory

In a file named `4-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello Holberton School!` in the page body for any endpoint as plain text

In terminal 1:

```
bob@dylan:~$ node 4-http.js
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `4-http.js`

 Done? Help Check your code Get a sandbox

### 5\. Create a more complex HTTP server using Node's HTTP module

mandatory

In a file named `5-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable app and this one must be exported
-   HTTP server should listen on port 1245
-   It should return plain text
-   When the URL path is `/`, it should display `Hello Holberton School!` in the page body
-   When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:

```
bob@dylan:~$ node 5-http.js database.csv
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `5-http.js`

 Done? Help Check your code Get a sandbox

### 6\. Create a small HTTP server using Express

mandatory

Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello Holberton School!` in the page body for the endpoint `/`

In terminal 1:

```
bob@dylan:~$ node 6-http_express.js
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html>
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `6-http_express.js`

 Done? Help Check your code Get a sandbox

### 7\. Create a more complex HTTP server using Express

mandatory

In a file named `7-http_express.js`, recreate the small HTTP server using `Express`:
