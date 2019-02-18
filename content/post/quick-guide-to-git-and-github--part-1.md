+++
date = "2017-01-25"
title = "Quick guide to git and github (Part 1)"
subtitle = ""
summary = ""
draft = false
categories = ["Tech"]
slug = "quick-guide-to-git-and-github-1"
+++

> Before we start, make sure you have an account on GitHub. Go to [https://github.com](https://github.com/). Pick a username, enter your email id and choose a password. Next, choose _unlimited personal repositories for free_. In the final step you can give some input to github and voila ! You are now a github user. (If you are redirect from KWoC, use the username there.) There is plethora of git guides over internet, some are really good and some really suck. I here am writing a simple blog for the newbies who have successfully made an account over github and are really excited about it.

**GitHub** is a web-based Git repository hosting service, which offers some of the distributed revision control and source code management(SCM) functionality of Git as well as adding its own features. Unlike Git, which is strictly a command-line tool, GitHub provides a web-based graphical interface and desktop as well as mobile integration

Or simply

**Github connects you with other people who are interested in sharing and creating together.**

So there are really two ways to begin with. Here goes the first one.

Create a repository : Repository is what you call the stuff you are going to upload and work on. Go to https://github.com/new and create a repository. Let’s name it hello-world. 
Add some description, or you might want to add it later. Initialize it with a Readme. It's a good practice and let's you clone it immediately. (Yeah right, see below)

Clone it : Open your console, move to the directory where you want to work and do this.

```
$ git clone https://github.com/username/hello-world.git
```

This will create a directory in your computer. Now, this isn’t a simple directory. It is a ‘clone’ of the github repository. You can say that the files in it are controlled by the version control system git and tracked with the repository on github. Note : If you have not installed git, see [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Do this,

```
$ cd hello-world
$ git remote -v
origin https://github.com/<username>/hello-world.git (fetch)
origin https://github.com/<username>/hello-world.git (push)
```

This shows that the link to repository of yours at github is known by the name origin over here.

Now, you will have to configure your name and your email address which you will be using for making the commits (don’t worry about what it means right now, we will cover it soon). This configuring is ideally done only once in a lifetime of your system (or unless you purposely remove your ~/.gitconfig file but that’s the story of another time).

```
$ git config --global user.name "ABC XYZ"
$ git config --global user.email "abc@xyz.com"
```

Now another way of this is first you create the directory on your computer. Navigate inside it and do

```
$ git init
```

This will initialize an empty git repository inside it. Later, you can add the link to the repository by the git remote command like this

```
$ git remote add origin https://github.com/<username>/hello-world
```

You can always use `git remote -v` command to track the aliases.

Making the first change : Okay now we are in condition of adding some files or code to this repository. I am going to make a python file with hello world program and publish the change over the github repository too. 
So make a new file say hello.py inside the directory, open it with your favorite editor and write the one line code to print whatever you want. Why just hello world? (Because dmr did it!) Now write it and save the file.

The first thing you should always do is to see whether you have done any changes or not in the repository. This can be done by

`$ git status`

After the changes you made, you must be getting this after git status

```
On branch master
 Your branch is up-to-date with 'origin/master'.
 Untracked files:
 (use "git add <file>..." to include in what will be committed)
 hello.py
 nothing added to commit but untracked files present (use "git add" to track)Add, Commit, Push! : In your console, do this.

$ git add .
```

This adds all the files in the track which you have changed. 
Now it’s time to commit that change. By committing, git understands that you want the change to be in record. Every commit is accompanied with a message that appears on the log (git log). A commit should represent one logical change only which should be supported by a relevant commit message. The convention is to write the commit in the verbal form ie. tell the computer to do that for you. Do this

`$ git commit -m "add hello.py"`

You’ve made your first commit! But it won’t be appearing over github, because you made the changes locally. You need to push it over the web. For that, you use

`$ git push`

Or,

`$ git push origin`

to say git where actually you are pushing it to. Or,

`$ git push origin master`

to say git over what branch on origin you are pushing it to.

That’s it! You’ve published your changes to your GitHub repository.

NOTE : This is a very basic start. There are more concepts to be explored. You can search for specifics. StackOverflow also has great resources. We’ll leave the nitty gritties of Git for another day.

Happy Coding!

