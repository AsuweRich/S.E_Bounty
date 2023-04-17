0x01. Git
======================

-   By Guillaume


Resources
---------

**Read or watch**:

-   [Linux navigation](https://intranet.alxswe.com/rltoken/wpsA1kZvIz5_aVkvXuKN5Q)
-   [Resources to learn Git](https://intranet.alxswe.com/rltoken/EC5rb6yWBWllPB-T8rd0SQ)
-   [About READMEs](https://intranet.alxswe.com/rltoken/yM5FZakIhHB2TWO1PN2PZg)
-   [How to write a Git commit message](https://intranet.alxswe.com/rltoken/SihXX88mKA9TFaIebKX3Rw)

**Resources for advanced tasks** (Read only after finishing the mandatory tasks):

-   [Learning branching](https://intranet.alxswe.com/rltoken/hBgLCXoQaGTcOwr_kmCoEA)
-   [Effective pull requests and other good practices for teams using GitHub](https://intranet.alxswe.com/rltoken/xhKV_qX3eXvyePzeNraEGw)


**Extra resources**:

-   [Linux - /tmp](https://intranet.alxswe.com/rltoken/czGvASt_M8PW05Ubdp8EBw)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/Rfy6VuvRfNAau31z1J_b-w "explain to anyone"), **without the help of Google**:

### General

-   What is source code management
-   What is Git
-   What is GitHub
-   What is the difference between Git and GitHub
-   How to create a repository
-   What is a README
-   How to write good READMEs
-   How to commit
-   How to write helpful commit messages
-   How to push code
-   How to pull updates
-   How to create a branch
-   How to merge branches
-   How to work as collaborators on a project
-   Which files should and which files should not appear in your repo

### Copyright - Plagiarism

-   You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
-   You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
-   You are not allowed to publish any content of this project.
-   Any form of plagiarism is strictly forbidden and will result in removal from the program.

Requirements
------------

### General

-   A `README.md` file at the root of the `alx-pre_course repo`, containing a description of the repository
-   A `README.md` file, at the root of the folder of this project (i.e. `0x01-git`), describing what this project is about
-   Do not use GitHub’s web UI, but the command line to perform the exercise (except for operations that can not possibly be done any other way than through the web UI). You won’t be able to perform many of the task requirements on the web UI, and you should start getting used to the command line for simple tasks because many complex tasks can only be done via the command line.
-   Your answer files should only contain the command, and nothing else

More Info
------------

### Basic Usage

```
$ git clone <repo>
$ touch test
$ git add test
$ git commit -m "Initial commit"
$ git push origin main
```


Tasks
-----

### 0. Create and setup your Git and GitHub account

mandatory

**Step 0 - Create an account on GitHub [if you do not have one already]**

You will need a GitHub account for all your projects at ALX. If you do not already have a github.com account, you can create an account for free [here](https://intranet.alxswe.com/rltoken/hQPhGkQBxYfTYTYDKtrZvw)


**Step 1 - Create a Personal Access Token on Github**

To have access to your repositories and authenticate yourself, you need to create a Personal Access Token on Github.

You can follow [this tutorial](https://intranet.alxswe.com/rltoken/1sEAC5BvAQ1G5VabbAl2iA) to create a token.

Once it’s created, you should have a token that looks like this:
![image](https://user-images.githubusercontent.com/106776383/232298307-a189c3c9-568f-4ca3-921a-e0713c4e0d77.png)


**Step 2 - Update your profile on the Intranet**

Update your Intranet profile by adding your Github username here

If it’s not done the Checker won’t be able to correct your work

![image](https://user-images.githubusercontent.com/106776383/232298807-489247d9-534f-4751-8979-b87cb0aca5f0.png)


**Step 3 - Create your first repository**

Using the graphic interface on the [github website](https://intranet.alxswe.com/rltoken/hQPhGkQBxYfTYTYDKtrZvw), create your first repository.

Name: `alx-pre_course`

Description: `I'm now a ALX Student, this is my first repository as a full-stack engineer`
Public repo

No `README`, `.gitignore`, or license

![image](https://user-images.githubusercontent.com/106776383/232299331-e32eeb81-95ec-49e7-bd1f-347109edf28a.png)


**Step 4 - Open the sandbox**

On the intranet, just under the task, click on the button ![image](https://user-images.githubusercontent.com/106776383/232299994-42db8672-56de-4575-b62d-c81bcdcc018f.png)
 and run to start the machine.
 
 Once the container is started, click on ![image](https://user-images.githubusercontent.com/106776383/232300238-6b99289d-1dc3-41e7-aa6b-0b2609a20a77.png)
 to open a shell where you can start work from.


**Step 5 - Clone your repository**

On the webterm of the sandbox, do the following:

-   Clone your repository
```
root@896cf839cf9a:/# git clone https://{YOUR_PERSONAL_TOKEN}@github.com/{YOUR_USERNAME}/alx-pre_course.git                  
Cloning into 'alx-pre_course'...
warning: You appear to have cloned an empty repository. 
```

**Replace {YOUR_PERSONAL_TOKEN} with your token from step 1**

**Replace {YOUR_USERNAME} with your username from step 0 and 1**

**Pro-Tip**: On windows, use CTRL + A + V to paste in the web terminal


**Step 6 - Create the README.md and push the modifications**

-  Navigate to this new directory. [Tips](https://intranet.alxswe.com/rltoken/_hv6gkuqwPeF_nefdPygcw)
```
root@896cf839cf9a:/# cd alx-pre_course/
root@896cf839cf9a:/alx-pre_course#
```
- Create the file `README.md` with the content `My first readme`. [Tips](https://intranet.alxswe.com/rltoken/_x9a9Mn-U1JDek2ST3ko8g)
```
root@896cf839cf9a:/alx-pre_course# echo 'My first readme' > README.md                                                          
root@896cf839cf9a:/alx-pre_course# cat README.md   
My first readme                                                                                      
```

-  Update your git identity
```
root@896cf839cf9a:/alx-pre_course# git config --global user.email "you@example.com"
root@896cf839cf9a:/alx-pre_course# git config --global user.name "Your Name"
```

-  Add this new file to git, commit the change with this message “My first commit” and push to the remote server / origin  
```
root@896cf839cf9a:/alx-pre_course# git add .
root@896cf839cf9a:/alx-pre_course# git commit -m 'My first commit'
[master (root-commit) 98eef93] My first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
root@896cf839cf9a:/alx-pre_course# git push                                                                                   
Enumerating objects: 3, done.                                                                                                  
Counting objects: 100% (3/3), done.                                                                                             
Writing objects: 100% (3/3), 212 bytes | 212.00 KiB/s, done.                                                                    
Total 3 (delta 0), reused 0 (delta 0)                                                                                           
To https://github.com/{YOUR_USERNAME}/alx-pre_course.git                                                                         
 * [new branch]      master -> master      
 ```
 
 Good job!

You pushed your first file in your **first repository** of the **first task** of your **first ALX School project**.

You can now check your repository on GitHub to see if everything is good.


**Repo:**

-  GitHub repository: `alx-pre_course`
-  File: `README.md`

---

### 1. Repo-session

mandatory

Create a new directory called `0x01-git` in your `alx-pre_course repo`.

Make sure you include a non empty `README.md` in your directory:

-  at the root of your repository `alx-pre_course`
-  AND in the directory `0x01-git`
-  
And important part: **Make sure your commit and push your code to Github - otherwise the Checker will always fail**.

**Repo:**

-  GitHub repository: `alx-pre_course`

---

### 2. Coding fury road

mandatory

For the moment we have an empty project directory containing only a `README.md`. It’s time to code!

-  Inside `0x01-git`:

   - Create these directories at the root of your project: `bash`, `c`, `js`
   - Create these empty files:
   - `c/c_is_fun.c`
   - `js/main.js`
   - `js/index.js`
   - Create a file bash/alx with these two lines inside: `#!/bin/bash` and `echo "ALX"`
   - Create a file bash/school with these two lines inside: `#!/bin/bash` and `echo "School"`
   - Add all these new files to git
   - Commit your changes (message: “Starting to code today, so cool”) and push to the remote server

**Repo:**

-  GitHub repository: `alx-pre_course`
-  Directory: `0x01-git`
-  File: `bash/alx`, `bash/school`, `c/c_is_fun.c`, `js/main.js`, `js/index.js`

---

### 3. Collaboration is the base of a company

mandatory

A branch is like a copy of your project. It’s used mainly for:

-  adding a feature in development
-  collaborating on the same project with other developers
-  not breaking your entire repository
-  not upsetting your co-workers
-  The purpose of a branch is to isolate your work from the main code base of your project and/or from your co-workers’ work.

For this project, create a branch `update_scrip`t and in this branch:

-  Create an empty file named `bash/98`
-  Update bash/alx by replacing `echo "ALX"` with `echo "ALX School"`
-  Update bash/school by replacing `echo "School"` with `echo "The school is open!"`
-  Add and commit these changes (message: “My personal work”)
-  Push this new branch [Tips](https://intranet.alxswe.com/rltoken/npNmc0VkyeeqpZESyP0FWA)
-  Perfect! You did an amazing update in your project and it’s isolated correctly from the **main** branch.

Ho wait, your manager needs a quick fix in your project and it needs to be deployed now:

-  Change branch to `main`
-  Update the file `bash/alx` by replacing `echo "ALX"` with `echo "ALX School is so cool!"`
-  Delete the directory `js`
-  Commit your changes (message: “Hot fix”) and push to the origin
Ouf, hot fix is done!


**Repo:**

-  GitHub repository: `alx-pre_course`
-  Directory: `0x01-git`
-  File: `bash/alx, bash/school, bash/98`

---

### 4. Collaboration: be up to date

mandatory

Of course, you can also work on the same branch as your co-workers and it’s best if you keep up to date with their changes.

For this task – **and only for this task** – please update your file `README.md` in the main branch from GitHub.com. It’s the **only time** you are allowed to update and commit from GitHub interface.

After you have done that, in your terminal:

-  Get all changes of the main branch locally (i.e. your `README.md` file will be updated)
-  Create a new file `up_to_date` at the root of your directory and in it, write the git command line used
-  Add `up_to_date` to git, commit (message: “How to be up to date in git”), and push to the origin


**Repo:**

-  GitHub repository: `alx-pre_course`
-  Directory: `0x01-git`
-  File: `README.md, up_to_date`

