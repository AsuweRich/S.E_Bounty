0x11. C - printf
================

-   By Julien Barbier, co-founder & CEO


Concepts
--------

*For this project, students are expected to look at these concepts:*

-   [Group Projects](https://alx-intranet.hbtn.io/concepts/111)

    ![image](https://user-images.githubusercontent.com/106776383/236344247-2b57e9f9-c55c-48b3-876e-66e51b475093.png)
    
-   [Pair Programming - How To](https://alx-intranet.hbtn.io/concepts/121)

    ![image](https://user-images.githubusercontent.com/106776383/236344449-2031639b-7029-4240-866d-033097f3aab7.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236344615-d0ca11b9-cd77-456d-b7e4-e1f456e1a18f.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236344696-671de842-bc86-4c5b-9fa0-410f3ae31b04.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236344764-85d97fa3-0680-4cf9-bd91-148da7639901.png)

-   [Flowcharts](https://alx-intranet.hbtn.io/concepts/130)

    ![image](https://user-images.githubusercontent.com/106776383/236608678-2c243234-0ac7-4c1b-9863-d5f941fb5427.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236608821-c8b4e539-569b-4d48-88f0-e0ab52c22261.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236608864-96c7fff5-5539-4ae4-8206-933d61a364b3.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236608907-4c3ee65f-52f3-4246-8ff9-71cf7a94cdd5.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236608970-529d95ae-8bd1-4a8c-b17d-50ef5e698e44.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236608997-34d6d503-d242-4743-a60f-f46c94590940.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236609021-6447b183-98a6-4e19-badf-4904b09bfd21.png)

  
-   [Technical Writing](https://alx-intranet.hbtn.io/concepts/225)

    ![image](https://user-images.githubusercontent.com/106776383/236344938-b189de14-d367-4c83-a211-e67a06a39139.png)
    
    ![image](https://user-images.githubusercontent.com/106776383/236345058-a0877af0-2256-4a15-a363-46f8dd052ec4.png)

Background Context
------------------

Write your own `printf` function.

![](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-low_level_programming/228/printf.png)

*^ In this picture, [Kris](https://twitter.com/krisbredemeier "Kris"), and [Jul](https://twitter.com/cyrjulien "Jul")*

Resources
---------

**Read or watch**:

-   [Secrets of printf](https://www.academia.edu/10297206/Secrets_of_printf_ "Secrets of printf")
-   **Group Projects** concept page (*Don't forget to read this*)
-   **Flowcharts** concept page

**man or help**:

-   `printf (3)`

Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be compiled on Ubuntu 20.04 LTS using `gcc`, using the options `-Wall -Werror -Wextra -pedantic -std=gnu89`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project is mandatory
-   Your code should use the `Betty` style. It will be checked using [betty-style.pl](https://github.com/holbertonschool/Betty/blob/master/betty-style.pl "betty-style.pl") and [betty-doc.pl](https://github.com/holbertonschool/Betty/blob/master/betty-doc.pl "betty-doc.pl")
-   You are not allowed to use global variables
-   No more than 5 functions per file
-   In the following examples, the `main.c` files are shown as examples. You can use them to test your functions, but you don't have to push them to your repo (if you do we won't take them into account). We will use our own `main.c` files at compilation. Our `main.c` files might be different from the one shown in the examples
-   The prototypes of all your functions should be included in your header file called `main.h`
-   Don't forget to push your header file
-   All your header files should be include guarded
-   Note that we will not provide the `_putchar` function for this project


More Info
---------

### Authorized functions and macros

-   `write` (`man 2 write`)
-   `malloc` (`man 3 malloc`)
-   `free` (`man 3 free`)
-   `va_start` (`man 3 va_start`)
-   `va_end` (`man 3 va_end`)
-   `va_copy` (`man 3 va_copy`)
-   `va_arg` (`man 3 va_arg`)

### Compilation

-   Your code will be compiled this way:

```
$ gcc -Wall -Werror -Wextra -pedantic -std=gnu89 *.c
```

-   As a consequence, be careful not to push any c file containing a `main` function in the root directory of your project (you could have a `test` folder containing all your tests files including `main` functions)
-   Our main files will include your main header file (`main.h`): `#include main.h`
-   You might want to look at the gcc flag `-Wno-format` when testing with your `_printf` and the standard `printf`. Example of test file that you could use:

```
alex@ubuntu:~/c/printf$ cat main.c
#include <limits.h>
#include <stdio.h>
#include "main.h"

/**
 * main - Entry point
 *
 * Return: Always 0
 */
int main(void)
{
    int len;
    int len2;
    unsigned int ui;
    void *addr;

    len = _printf("Let's try to printf a simple sentence.\n");
    len2 = printf("Let's try to printf a simple sentence.\n");
    ui = (unsigned int)INT_MAX + 1024;
    addr = (void *)0x7ffe637541f0;
    _printf("Length:[%d, %i]\n", len, len);
    printf("Length:[%d, %i]\n", len2, len2);
    _printf("Negative:[%d]\n", -762534);
    printf("Negative:[%d]\n", -762534);
    _printf("Unsigned:[%u]\n", ui);
    printf("Unsigned:[%u]\n", ui);
    _printf("Unsigned octal:[%o]\n", ui);
    printf("Unsigned octal:[%o]\n", ui);
    _printf("Unsigned hexadecimal:[%x, %X]\n", ui, ui);
    printf("Unsigned hexadecimal:[%x, %X]\n", ui, ui);
    _printf("Character:[%c]\n", 'H');
    printf("Character:[%c]\n", 'H');
    _printf("String:[%s]\n", "I am a string !");
    printf("String:[%s]\n", "I am a string !");
    _printf("Address:[%p]\n", addr);
    printf("Address:[%p]\n", addr);
    len = _printf("Percent:[%%]\n");
    len2 = printf("Percent:[%%]\n");
    _printf("Len:[%d]\n", len);
    printf("Len:[%d]\n", len2);
    _printf("Unknown:[%r]\n");
    printf("Unknown:[%r]\n");
    return (0);
}
alex@ubuntu:~/c/printf$ gcc -Wall -Wextra -Werror -pedantic -std=gnu89 -Wno-format *.c
alex@ubuntu:~/c/printf$ ./printf
Let's try to printf a simple sentence.
Let's try to printf a simple sentence.
Length:[39, 39]
Length:[39, 39]
Negative:[-762534]
Negative:[-762534]
Unsigned:[2147484671]
Unsigned:[2147484671]
Unsigned octal:[20000001777]
Unsigned octal:[20000001777]
Unsigned hexadecimal:[800003ff, 800003FF]
Unsigned hexadecimal:[800003ff, 800003FF]
Character:[H]
Character:[H]
String:[I am a string !]
String:[I am a string !]
Address:[0x7ffe637541f0]
Address:[0x7ffe637541f0]
Percent:[%]
Percent:[%]
Len:[12]
Len:[12]
Unknown:[%r]
Unknown:[%r]
alex@ubuntu:~/c/printf$
```

-   We strongly encourage you to work all together on a set of tests
-   If the task does not specify what to do with an edge case, do the same as `printf`

Tasks
-----

### 0\. I'm not going anywhere. You can print that wherever you want to. I'm here and I'm a Spur for life

mandatory

Write a function that produces output according to a format.

-   Prototype: `int _printf(const char *format, ...);`
-   Returns: the number of characters printed (excluding the null byte used to end output to strings)
-   write output to stdout, the standard output stream
-   `format` is a character string. The format string is composed of zero or more directives. See `man 3 printf` for more detail. You need to handle the following conversion specifiers:
    -   `c`
    -   `s`
    -   `%`
-   You don't have to reproduce the buffer handling of the C library `printf` function
-   You don't have to handle the flag characters
-   You don't have to handle field width
-   You don't have to handle precision
-   You don't have to handle the length modifiers

**Repo:**

-   GitHub repository: `printf`

### 1\. Education is when you read the fine print. Experience is what you get if you don't

mandatory

Handle the following conversion specifiers:

-   `d`
-   `i`
-   You don't have to handle the flag characters
-   You don't have to handle field width
-   You don't have to handle precision
-   You don't have to handle the length modifiers

**Repo:**

-   GitHub repository: `printf`

### 2\. With a face like mine, I do better in print

#advanced

Handle the following custom conversion specifiers:

-   `b`: the unsigned int argument is converted to binary
```
alex@ubuntu:~/c/printf$ cat main.c
#include "main.h"

/**
 * main - Entry point
 *
 * Return: Always 0
 */
int main(void)
{
    _printf("%b\n", 98);
    return (0);
}
alex@ubuntu:~/c/printf$ gcc -Wall -Wextra -Werror -pedantic -std=gnu89 main.c
alex@ubuntu:~/c/printf$ ./a.out
1100010
alex@ubuntu:~/c/printf$
```

**Repo:**

-   GitHub repository: `printf`

### 3\. What one has not experienced, one will never understand in print

#advanced

Handle the following conversion specifiers:

-   `u`
-   `o`
-   `x`
-   `X`
-   You don’t have to handle the flag characters
-   You don’t have to handle field width
-   You don’t have to handle precision
-   You don’t have to handle the length modifiers

**Repo:**

-   GitHub repository: `printf`

### 4\. Nothing in fine print is ever good news

#advanced

Use a local buffer of 1024 chars in order to call `write` as little as possible.

**Repo:**

-   GitHub repository: `printf`

### 5\. My weakness is wearing too much leopard print

#advanced

Handle the following custom conversion specifier:

-   `S` : prints the string.
-   Non printable characters (0 < ASCII value < 32 or >= 127) are printed this way: `\x`, followed by the ASCII code value in hexadecimal (upper case - always 2 characters)
```
alex@ubuntu:~/c/printf$ cat main.c
#include "main.h"

/**
 * main - Entry point
 *
 * Return: Always 0
 */
int main(void)
{
    _printf("%S\n", "Best\nSchool");
    return (0);
}
alex@ubuntu:~/c/printf$ gcc -Wall -Wextra -Werror -pedantic -std=gnu89 main.c
alex@ubuntu:~/c/printf$ ./a.out
Best\x0ASchool
alex@ubuntu:~/c/printf$
```

**Repo:**

-   GitHub repository: `printf`

### 6\. How is the world ruled and led to war? Diplomats lie to journalists and believe these lies when they see them in print

#advanced

Handle the following conversion specifier: `p`.

-`You don’t have to handle the flag characters
-`You don’t have to handle field width
-`You don’t have to handle precision
-`You don’t have to handle the length modifiers

**Repo:**

-   GitHub repository: `printf`

### 7\. The big print gives and the small print takes away

#advanced

Handle the following flag characters for non-custom conversion specifiers:

-   `+`
-   space
-   `#`

**Repo:**

-   GitHub repository: `printf`

### 8\. The big print gives and the small print takes away

#advanced

Handle the following length modifiers for non-custom conversion specifiers:

-   l
-   h
Conversion specifiers to handle: `d`, `i`, `u`, `o`, `x`, `X`

**Repo:**

-   GitHub repository: `printf`

### 9\. Print some money and give it to us for the rain forests

#advanced

Handle the field width for non-custom conversion specifiers.

**Repo:**

-   GitHub repository: `printf`

### 10\. The negative is the equivalent of the composer's score, and the print the performance

#advanced

Handle the precision for non-custom conversion specifiers.

**Repo:**

-   GitHub repository: `printf`


### 11\. It's depressing when you're still around and your albums are out of print

#advanced
Handle the `0` flag character for non-custom conversion specifiers.

**Repo:**

-   GitHub repository: `printf`

### 12\. Every time that I wanted to give up, if I saw an interesting textile, print what ever, suddenly I would see a collection

#advanced

Handle the - flag character for non-custom conversion specifiers.

**Repo:**

-   GitHub repository: `printf`

### 13\. Print is the sharpest and the strongest weapon of our party

#advanced

Handle the following custom conversion specifier:

-   `r` : prints the reversed string

**Repo:**

-   GitHub repository: `printf`

### 14\. The flood of print has turned reading into a process of gulping rather than savoring

#advanced

Handle the following custom conversion specifier:

-   `R`: prints the rot13'ed string

**Repo:**

-   GitHub repository: `printf`


### 15\. *

#advanced

All the above options work well together.

**Repo:**

-   GitHub repository: `printf`
