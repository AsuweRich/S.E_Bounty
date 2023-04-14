0x00. Shell, Navigation
======================

-   By Julien Barbier

![](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-low_level_programming/212/cisfun.jpg)

Resources
---------

**Read or watch**:

-   [Linux navigation](https://intranet.alxswe.com/rltoken/wpsA1kZvIz5_aVkvXuKN5Q)
-   ]Linux - looking around](https://intranet.alxswe.com/rltoken/q1dtRMnA99cyFF4ALjoX_w)
-   ]Linux - manipulating files](https://intranet.alxswe.com/rltoken/t97eLJ6U-HwjZTe4QfxKdw)

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

### C

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be compiled on Ubuntu 20.04 LTS using `gcc`, using the options `-Wall -Werror -Wextra -pedantic -std=gnu89`
-   All your files should end with a new line
-   A `README.md` file at the root of the repo, containing a description of the repository
-   A `README.md` file, at the root of the folder of *this* project, containing a description of the project
-   There should be no errors and no warnings during compilation
-   You are not allowed to use `system`
-   Your code should use the `Betty` style. It will be checked using [betty-style.pl](https://github.com/holbertonschool/Betty/blob/master/betty-style.pl "betty-style.pl") and [betty-doc.pl](https://github.com/holbertonschool/Betty/blob/master/betty-doc.pl "betty-doc.pl")

### Shell Scripts

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your scripts will be tested on Ubuntu 20.04 LTS
-   All your scripts should be exactly two lines long (`$ wc -l file` should print 2)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/bin/bash`

More Info
---------

### Betty linter

To run the Betty linter just with command `betty <filename>`:

-   Go to the [Betty](https://alx-intranet.hbtn.io/rltoken/wQ4sMfsWfxvyfN67Sc11zA "Betty") repository
-   Clone the [repo](https://alx-intranet.hbtn.io/rltoken/wQ4sMfsWfxvyfN67Sc11zA "repo") to your local machine
-   `cd` into the Betty directory
-   Install the linter with `sudo ./install.sh`
-   `emacs` or `vi` a new file called `betty`, and copy the script below:

```
#!/bin/bash
# Simply a wrapper script to keep you from having to use betty-style
# and betty-doc separately on every item.
# Originally by Tim Britton (@wintermanc3r), multiargument added by
# Larry Madeo (@hillmonkey)

BIN_PATH="/usr/local/bin"
BETTY_STYLE="betty-style"
BETTY_DOC="betty-doc"

if [ "$#" = "0" ]; then
    echo "No arguments passed."
    exit 1
fi

for argument in "$@" ; do
    echo -e "\n========== $argument =========="
    ${BIN_PATH}/${BETTY_STYLE} "$argument"
    ${BIN_PATH}/${BETTY_DOC} "$argument"
done

```

-   Once saved, exit file and change permissions to apply to all users with `chmod a+x betty`
-   Move the `betty` file into `/bin/` directory or somewhere else in your `$PATH` with `sudo mv betty /bin/`

You can now type `betty <filename>` to run the Betty linter!


Tasks
-----

### 0\. Preprocessor

mandatory

Write a script that runs a C file through the preprocessor and save the result into another file.

-   The C file name will be saved in the variable `$CFILE`
-   The output should be saved in the file `c`



### 1\. Compiler

mandatory

Write a script that compiles a C file but does not link.

-   The C file name will be saved in the variable `$CFILE`
-   The output file should be named the same as the C file, but with the extension `.o` instead of `.c`.
    -   Example: if the C file is `main.c`, the output file should be `main.o`



### 2\. Assembler

mandatory

Write a script that generates the assembly code of a C code and save it in an output file.

-   The C file name will be saved in the variable `$CFILE`
-   The output file should be named the same as the C file, but with the extension `.s` instead of `.c`.
    -   Example: if the C file is `main.c`, the output file should be `main.s`



### 3\. Name

mandatory

Write a script that compiles a C file and creates an executable named `cisfun`.

-   The C file name will be saved in the variable `$CFILE`



### 4\. Hello, puts

mandatory

Write a C program that prints exactly `"Programming is like building a multilingual puzzle`, followed by a new line.

-   Use the function `puts`
-   You are not allowed to use `printf`
-   Your program should end with the value `0`


### 5\. Hello, printf

mandatory

Write a C program that prints exactly `with proper grammar, but the outcome is a piece of art,`, followed by a new line.

-   Use the function `printf`
-   You are not allowed to use the function `puts`
-   Your program should return `0`
-   Your program should compile without warning when using the `-Wall` `gcc` option


### 6\. Size is not grandeur, and territory does not make a nation

mandatory

Write a C program that prints the size of various types on the computer it is compiled and run on.

-   You should produce the exact same output as in the example
-   Warnings are allowed
-   Your program should return `0`
-   You might have to install the package `libc6-dev-i386` on your Linux (Vagrant) to test the `-m32` `gcc` option


 
### 7\. Intel

#advanced

Write a script that generates the assembly code (Intel syntax) of a C code and save it in an output file.

-   The C file name will be saved in the variable `$CFILE`.
-   The output file should be named the same as the C file, but with the extension `.s` instead of `.c`.
    -   Example: if the C file is `main.c`, the output file should be `main.s`


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
