0x00. Shell, Navigation
======================

-   By Julien Barbier

![](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-low_level_programming/212/cisfun.jpg)

Resources
---------

**Read or watch**:

-   [Linux navigation](https://intranet.alxswe.com/rltoken/wpsA1kZvIz5_aVkvXuKN5Q)
-   [Linux - looking around](https://intranet.alxswe.com/rltoken/q1dtRMnA99cyFF4ALjoX_w)
-   [Linux - manipulating files](https://intranet.alxswe.com/rltoken/t97eLJ6U-HwjZTe4QfxKdw)

**Or in your terminal**:

-   `man pwd`
-   `man ls`
-   `man cd`
-   `man less`
-   `man touch`
-   `man cp`
-   `man mv`
-   `man rm`
-   `man mkdir`
-   `man rmdi`r

**Extra resources**:

-   [Linux - /tmp](https://intranet.alxswe.com/rltoken/czGvASt_M8PW05Ubdp8EBw)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/cbOGeLNvliyLR8bzoLGGiQ "explain to anyone"), **without the help of Google**:

### General

-   How to navigate in an Unix system
-   How to list files and directories
-   How to display the content of a file
-   How to create a file or directory
-   How to remove a file or directory
-   How to move or copy a file or directory

### Copyright - Plagiarism

-   You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
-   You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
-   You are not allowed to publish any content of this project.
-   Any form of plagiarism is strictly forbidden and will result in removal from the program.

Requirements
------------

-   All tasks **must be** done inside the sandbox `Ubuntu 20.04`
-   Your sandbox **must be available at the end of this project** - the Checker will access to it at midnight for running the correction!



Tasks
-----

### 0. Create me!

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, create an empty file so_cool`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the creation of the new file



### 1. More of me

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, copy the file `school` to `/tmp`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the copy of the file



### 2. To old

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, rename the file `old_school` to `new_school` (in the same directory)

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the renaming of the file



### 3. Not here

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, move the file `not_here` to `/tmp/right_school`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the move of the file



### 4\. Hello, puts

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, move the file `not_here` to `/tmp/right_school`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the move of the file



### 5\. Hello, printf

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, create an empty file so_cool`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the creation of the new file


### 6\. Size is not grandeur, and territory does not make a nation

mandatory

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, create an empty file so_cool`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the creation of the new file


 
### 7\. Intel

#advanced

Access your sandbox and:

-   Change your working directory to `/root`
-   Then, create an empty file so_cool`

**Advices**

-   Don’t forget to validate your current working directory
-   Don’t forget to display the list of files of your current directory to validate the creation of the new file


### 8\. UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity

#advanced

Write a C program that prints exactly `and that piece of art is useful" - Dora Korpar, 2015-10-19`, followed by a new line, to the standard error.

-   You are not allowed to use any functions listed in the NAME section of the man (3) `printf` or man (3) `puts`
-   Your program should return 1
-   Your program should compile without any warnings when using the `-Wall` `gcc` option

```
julien@ubuntu:~/c/0x00$ gcc -Wall -Werror -Wextra -pedantic -std=gnu89 -o quote 101-quote.c
julien@ubuntu:~/c/0x00$ ./quote
and that piece of art is useful" - Dora Korpar, 2015-10-19
julien@ubuntu:~/c/0x00$ echo $?
1
julien@ubuntu:~/c/0x00$ ./quote 2> q
julien@ubuntu:~/c/0x00$ cat q
and that piece of art is useful" - Dora Korpar, 2015-10-19
julien@ubuntu:~/c/0x00$ grep printf < 101-quote.c
julien@ubuntu:~/c/0x00$ grep put < 101-quote.c
julien@ubuntu:~/c/0x00$

```

**Repo:**

-   GitHub repository: `alx-low_level_programming`
-   Directory: `0x00-hello_world`
-   File: `101-quote.c`
