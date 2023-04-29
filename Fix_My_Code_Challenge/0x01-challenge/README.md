0x01. Fix my code

 By Guillaume, CTO at Holberton School

 Weight: 1


Background Context

Fix my code is a new type of project, where we'll jump into an existing code base and fix it!

Sometime you will know the language, sometime not.

Please download the repository 0x01-Fix_My_Code_Challenge and use it as initial files for all solutions.

You should not recode everything, just fix it!

This project is NOT mandatory at all. It is 100% optional. Doing any part of this project will add a project grade of over 100% to your average. Your score won't get hurt if you don't do it, but if your current average is greater than your score on this project, your average might go down. Have fun!

Requirements

General

Allowed editors: vi, vim, emacs

All your files will be compiled on Ubuntu 14.04 LTS

All your files should end with a new line

A README.md file, at the root of the folder of the project is mandatory

More Info

Manual QA Review

It is your responsibility to request a review for this project from a peer before the project's deadline. If no peers have been reviewed, you should request a review from a TA or staff member.

Tasks

0\. Server status

#advanced

I just started a new Flask project and the first thing I'm putting in place is a route for the status of my API (super important for a load balancer implementation).

But I don't know why it's not working...

Could you look at it and fix it please?

My code is here

$ python -m api.v1.app 

 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)

....

$ curl -XGET http://0.0.0.0:5000/api/v1/status

{

  "error": "Not found"

}

$

Repo:

GitHub repository: Fix_My_Code_Challenge

Directory: 0x01-challenge

File: status_server/

1\. My square

#advanced

I love geometry!

Look my square, it's perfect? No? Should I change something?

Repo:

GitHub repository: Fix_My_Code_Challenge

Directory: 0x01-challenge

File: square.py

2\. Step 2: User model

#advanced

I'm running into a serious problem!

I just start my OOP project and nothing works...

Could you help me please? My code is here.

Thank you!

Repo:

GitHub repository: Fix_My_Code_Challenge

Directory: 0x01-challenge

File: user.py

3\. Blog access

#advanced

I finished and deployed my Rails blog but people are contacting me because they can't access any of my blog posts... Weird, it works for me...

Could you take a look and fix it? My code base is here.

Also, when you're done, could you add a new feature please?

I would like to add a boolean online for each Post object with a default value true. With this boolean, I will be able to hide/show some blog posts from the listing. I will also need a way to change this boolean in the Post#edit route. Could you do this for me?

Thank you!

Repo:

GitHub repository: Fix_My_Code_Challenge

Directory: 0x01-challenge

File: blog

4\. Never leave the office

#advanced

I'm coming back from 2 weeks of holidays in France and when I arrived at the office, the first words from my marketing co-worker were: "Hi, how was your holiday? by the way, I think I broke the website..."

WHAT???

Ok, let's jump on it and fix it!

Arf, I have also the pagination to fix... I didn't have time before my break to look at it...

Repo:

GitHub repository: Fix_My_Code_Challenge

Directory: 0x01-challenge

File: react-blog
