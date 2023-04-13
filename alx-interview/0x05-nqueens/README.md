0x05. N Queens
==============

AlgorithmPython

-   By Alexa Orrico, Software Engineer at Holberton School
-   Weight: 1


Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be interpreted/compiled on Ubuntu 14.04 LTS using `python3` (version 3.4.3)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/usr/bin/python3`
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `PEP 8` style (version 1.7.*)
-   All your files must be executable

Tasks
-----

### 0\. N queens

mandatory

![](http://www.crestbook.com/files/Judit-photo1_602x433.jpg)\
Chess grandmaster [Judit Polgár](https://alx-intranet.hbtn.io/rltoken/fZ1ecpPEmVL9nvkBn8WQGg "Judit Polgár"), the strongest female chess player of all time

The N queens puzzle is the challenge of placing N non-attacking queens on an N×N chessboard. Write a program that solves the N queens problem.

-   Usage: `nqueens N`
    -   If the user called the program with the wrong number of arguments, print `Usage: nqueens N`, followed by a new line, and exit with the status `1`
-   where N must be an integer greater or equal to `4`
    -   If N is not an integer, print `N must be a number`, followed by a new line, and exit with the status `1`
    -   If N is smaller than `4`, print `N must be at least 4`, followed by a new line, and exit with the status `1`
-   The program should print every possible solution to the problem
    -   One solution per line
    -   Format: see example
    -   You don't have to print the solutions in a specific order
-   You are only allowed to import the `sys` module

Read: [Queen](https://alx-intranet.hbtn.io/rltoken/ghWqI1wvx6g-Ul7nrufMKA "Queen"), [Backtracking](https://alx-intranet.hbtn.io/rltoken/-hgZbgRFkwmxaKnLnCIuEQ "Backtracking")

```
julien@ubuntu:~/0x08. N Queens$ ./0-nqueens.py 4
[[0, 1], [1, 3], [2, 0], [3, 2]]
[[0, 2], [1, 0], [2, 3], [3, 1]]
julien@ubuntu:~/0x08. N Queens$ ./0-nqueens.py 6
[[0, 1], [1, 3], [2, 5], [3, 0], [4, 2], [5, 4]]
[[0, 2], [1, 5], [2, 1], [3, 4], [4, 0], [5, 3]]
[[0, 3], [1, 0], [2, 4], [3, 1], [4, 5], [5, 2]]
[[0, 4], [1, 2], [2, 0], [3, 5], [4, 3], [5, 1]]
julien@ubuntu:~/0x08. N Queens$

```

**Repo:**

-   GitHub repository: `alx-interview`
-   Directory: `0x05-nqueens`
-   File: `0-nqueens.py`