0x0A. Prime Game
================

AlgorithmPython

-   By: Carrie Ybay, Software Engineer at Holberton School
-   Weight: 1

Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be interpreted/compiled on Ubuntu 14.04 LTS using `python3` (version 3.4.3)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/usr/bin/python3`
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `PEP 8` style (version 1.7.x)
-   All your files must be executable

Tasks
-----

### 0\. Prime Game

mandatory

Maria and Ben are playing a game. Given a set of consecutive integers starting from `1` up to and including `n`, they take turns choosing a prime number from the set and removing that number and its multiples from the set. The player that cannot make a move loses the game.

They play `x` rounds of the game, where `n` may be different for each round. Assuming Maria always goes first and both players play optimally, determine who the winner of each game is.

-   Prototype: `def isWinner(x, nums)`
-   where `x` is the number of rounds and `nums` is an array of `n`
-   Return: name of the player that won the most rounds
-   If the winner cannot be determined, return `None`
-   You can assume `n` and `x` will not be larger than 10000
-   You cannot import any packages in this task

Example:

-   `x` = `3`, `nums` = `[4, 5, 1]`

First round: `4`

-   Maria picks 2 and removes 2, 4, leaving 1, 3
-   Ben picks 3 and removes 3, leaving 1
-   Ben wins because there are no prime numbers left for Maria to choose

Second round: `5`

-   Maria picks 2 and removes 2, 4, leaving 1, 3, 5
-   Ben picks 3 and removes 3, leaving 1, 5
-   Maria picks 5 and removes 5, leaving 1
-   Maria wins because there are no prime numbers left for Ben to choose

Third round: `1`

-   Ben wins because there are no prime numbers for Maria to choose

**Result: Ben has the most wins**

```
carrie@ubuntu:~/0x0A-primegame$ cat main_0.py
#!/usr/bin/python3

isWinner = __import__('0-prime_game').isWinner

print("Winner: {}".format(isWinner(5, [2, 5, 1, 4, 3])))

carrie@ubuntu:~/0x0A-primegame$

```

```
carrie@ubuntu:~/0x0A-primegame$ ./main_0.py
Winner: Ben
carrie@ubuntu:~/0x0A-primegame$

```

**Repo:**

-   GitHub repository: `alx-interview`
-   Directory: `0x0A-primegame`
-   File: `0-prime_game.py`
