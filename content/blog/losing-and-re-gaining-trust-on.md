+++
date = "2017-01-20"
title = "Losing and Re-Gaining trust on .gitignore"
subtitle = ""
summary = ""
draft = false
categories = ["Tech"]
slug = "losing-and-regaining-truct-on-gitignore"
+++

I would like to share an interesting story of a problem which I’ve faced many times since I started using git. This story is about “losing and re-gaining trust on .gitignore”.

**Event :** Create a Python app. Run it, test it and Boom! Now it’s time to push it to GitHub.

```
git init .
git remote add https://github.com/iamsosmart/notsomuch.git
git push -u origin master
```

_Shit, Shit, Shit ! I wasn’t supposed to push the pyc_ files. Oh this looks so lame.

If you’re amateur enough, not to feel uncomfortable after pushing those files, you’re golden. Else, you’ll think of something called .gitignore which helps in ignoring unwanted files to be added in your git repository.

You’ll then search for a good gitignore file for Python and Google will give you exactly what you want, [Python.gitignore](https://github.com/github/gitignore/blob/master/Python.gitignore).

```
wget -O .gitignore https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore
git add -A
git commit -m "Added .gitignore file"
```

Now, you’ll try to remove the pyc files, using rm -rf *.pyc. But as soon as you'll do this, (and if you're using oh-my-zsh), you'll see a cross on your prompt. That means, git has _detected_ a change.

*But wait? Why is git detecting changes to pyc files, when I’ve already added the gitignore!*

Now, if you’re me, you’ll feel betrayed by git. You’ll make a few calls and send messages to people, and say *“gitignore is not obeying me”*, and they’ll hang up on you, saying *“it must be your fault”*.

Believe me, even the “future me” would have said the same.

So, the problem is that once you have staged a file, gitignore won’t have anything to do with it. So, if you’ll remove the staged file (pyc files, in this case), git will say to you that you’ve deleted them.

Later on, I googled the string “gitignore not working” and O thanks to stackoverflow, I was rescued.

After adding the .gitignore, simply do this

```
git rm -rf --cached .
git add .
```

Or, instead of `rm -rf *.pyc`

, I must have done

`git rm -rf *.pyc`

Ta-da ! And that’s when, my friends, the trust I have in git’s simplicity increased by a tini-tiny bit.

Thank you for reading.

When a python script is compiled, it generates compiled code as pyc files, also called byte code.

