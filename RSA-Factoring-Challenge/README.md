# RSA Factoring Challenge

    By Julien Barbier

## Background Context

**Before you continue reading, start this song in the background :)**

https://youtu.be/tGSUjuSBt1A

We have sniffed an unsecured network and found numbers that are used to encrypt very important documents. It seems that those numbers are not always generated using large enough prime numbers. Your mission should you choose to accept it, is to factorize these numbers as fast as possible before the target fixes this bug on their server - so that we can decode the encrypted documents.

**This project is NOT mandatory** at all. It is 100% optional. Doing any part of this project will add a project grade of over 100% to your average. Your score won't get hurt if you don't do it, but if your current average is greater than your score on this project, your average might go down. Have fun!
Resources

**Read or watch:**

-    [RSA]( "RSA")
-    [How does HTTPS provide security?](https://stackoverflow.com/questions/3968095/how-does-https-provide-security "How does HTTPS provide security?")
-    [Prime Factorization](https://privacycanada.net/mathematics/prime-factorization/ "Prime Factorization")
-    [Why RSA?](https://jaredatandi.hashnode.dev/rsa-factoring "Why RSA?")

Requirements
---------

## General

    You can choose the language of your choice.
    OS needs to be Standard Ubuntu 20.04 LTS/

Tasks
------

### 0\. Factorize all the things!
#advanced

Factorize as many numbers as possible into a product of two smaller numbers.

-    Usage: `factors <file>`
     -    where `<file>` is a file containing natural numbers to factor.
     -    One number per line
     -    You can assume that all lines will be valid natural numbers greater than 1
     -    You can assume that there will be no empy line, and no space before and after the valid number
     -    The file will always end with a new line
-    Output format: `n=p*q`
     -    one factorization per line
     -    `p` and `q` don't have to be prime numbers
     -    See example
-    You can work on the numbers of the file in the order of your choice
-    Your program should run without any dependency: You will not be able to install anything on the machine we will run your program on
-    Time limit: Your program will be killed after 5 seconds if it hasn't finish
-    Push all your scripts, source code, etc... to your repository
-    we will only run your executable `factors`
```
julien@ubuntu:~/factors$ cat tests/test00
4
12
34
128
1024
4958
1718944270642558716715
9
99
999
9999
9797973
49
239809320265259
julien@ubuntu:~/factors$ time ./factors tests/test00
4=2*2
12=6*2
34=17*2
128=64*2
1024=512*2
4958=2479*2
1718944270642558716715=343788854128511743343*5
9=3*3
99=33*3
999=333*3
9999=3333*3
9797973=3265991*3
49=7*7
239809320265259=15485783*15485773

real    0m0.009s
user    0m0.008s
sys 0m0.001s
julien@ubuntu:~/factors$
```

**Repo:**

-    GitHub repository: `RSA-Factoring-Challenge`
-    File: `factors`

### 1\. RSA Factoring Challenge
#advanced

RSA Laboratories states that: for each RSA number `n`, there exist prime numbers `p` and `q` such that

`n` = `p × q`. The problem is to find these two primes, given only `n`.

This task is the same as task 0, except:

-    `p` and `q` are always prime numbers
-    There is only one number in the files

How far can you go in less than 5 seconds?

-    Read: [RSA Factoring Challenge](https://en.wikipedia.org/wiki/RSA_Factoring_Challenge "RSA Factoring Challenge")
```
julien@ubuntu:~/RSA Factoring Challenge$ cat tests/rsa-1
6
julien@ubuntu:~/RSA Factoring Challenge$ ./rsa tests/rsa-1
6=3*2
julien@ubuntu:~/RSA Factoring Challenge$ cat tests/rsa-2
77
julien@ubuntu:~/RSA Factoring Challenge$ ./rsa tests/rsa-2
77=11*7
julien@ubuntu:~/RSA Factoring Challenge$ [...]
julien@ubuntu:~/RSA Factoring Challenge$ cat tests/rsa-15
239821585064027
julien@ubuntu:~/RSA Factoring Challenge$ ./rsa tests/rsa-15
239821585064027=15486481*15485867
julien@ubuntu:~/RSA Factoring Challenge$ cat tests/rsa-16
2497885147362973
julien@ubuntu:~/RSA Factoring Challenge$ ./rsa tests/rsa-16
2497885147362973=49979141*49978553
julien@ubuntu:~/RSA Factoring Challenge$ [...]
```

Repo:

-    GitHub repository: `RSA-Factoring-Challenge`
-    File: `rsa`
