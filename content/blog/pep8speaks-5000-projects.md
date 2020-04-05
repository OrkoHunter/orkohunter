---
date: "2020-04-05"
title: "PEP8Speaks - Now helping 5,000 open source projects write neat and clean Python"
subtitle: "A blog post to celebrate this milestone! 💖"
summary: "I made the first commit to PEP8Speaks in Dec 2016. More than 5000 open source projects are now using this bot
to write neat and clean Python. It is a free and open source software and financially sponsored by Python Software
Foundation and Weblate.org"
draft: false
categories: ["Tech"]
slug: "pep8speaks-5000-projects"
---

# What is this project? 🐍
_PEP8Speaks = [PEP 8](https://pep8.org) + Speaks_

GitHub: https://github.com/OrkoHunter/pep8speaks

PEP 8 is Python's recommended coding style convention, popular across software written in Python language.

PEP8Speaks is a GitHub app which reviews the Python code style in Pull Requests.

# How did it start? 📜

**My primary motivation to create this project was to reduce the workload of code maintainers and reviewers in Open Source.**
They spend a valuable amount of time doing code reviews. Checking and fixing code style is something that can be automated.
Hence, it must be!

I made the first commit in December 2016. I was in my third year of college. In my first two summer breaks,
I had been contributing to Open Source projects in Python,
mainly because of the Google Summer of Code program. And in a few months, I was about to be a GSoC mentor,
which meant doing code reviews.
PEP8Speaks came alive out of my personal need.

# Users and adoption 📈

Creating and maintaining the project was not the hardest part. After the initial few months, I rant out of all my ideas.
So, the development slowed down. Hence I wanted other projects to start using it.

More users meant a lot of things.
I got to work on new features, optimizations, security, etc. Being very young in my career, meant
this was a wonderful way to do Software development.

**PEP8Speaks is useful for an open source project which has many contributors i.e. organizations**.
It is not very helpful if you are the only
one working on your project. Hence most of the time, if someone finds it useful, they have to convince all the maintainers
in their organization to start using it.

Larger orgs are more hesitant in adding new things as a requirement or dependency because they are worried that it
would not work properly.
Hence, I needed to **build trust in the project**.

## Growth efforts

In short, organic growth requires me to do the following -

1. **Being open for feature requests.**

   Many cool features in PEP8Speaks are not my original ideas, but recommendations from the community.
   
   Developers rarely want
   to change the way they work. Instead, they love bending (customizing) the tools they use.
   
   _If only PEP8Speaks were to support this new feature A,_  
   _if only PEP8Speaks supported this feature B,_
   _...we would love to adopt it!_
    
2. **Implementing feature requests.**

   One way of gaining trust in the community is to listen to the issues and incoming Pull Requests. These users helped
   a lot in spreading the word.
   
   And so, I need to address all the feature requests.
   But it is also limited by the time I have. So, I need to pick among those requests.

3. **Having a helpful README**

   Every knowledge required to install and customize PEP8Speaks has to be on the README. And also, in a visually discoverable way.
   Having a _kickass_ README is a must.

4. **Spreading the word at the right places**

   I was [a speaker at the SciPy 2017 conference](https://www.youtube.com/watch?v=7tcJi378B2M) in Austin.
   In the lightning talks session, [I talked about PEP8Speaks](https://www.youtube.com/watch?v=dtgiYrf2bv8).
   The ballroom had close to a thousand Python developers. (SciPy conference is a yearly "pilgrimage" in the Scientific Python world.)
   
   And this is the reason, a lot of PEP8Speaks users include scientific Python projects. 


> **PEP8Speaks bot has commented on [around 17,000 pull requests](https://github.com/search?o=desc&q=commenter%3Apep8speaks&s=&type=Issues).**

## Most popular users

| Logo | Organization | Description |
|-|-|-|
| ![](https://avatars1.githubusercontent.com/u/21206976?v=4&s=100) | [Pandas](https://github.com/pandas-dev/pandas) | Powerful data manipulation tools for Python |
| ![](https://avatars0.githubusercontent.com/u/476009?v=4&s=100) | [Adobe](https://github.com/adobe) | Open source from Adobe |
| ![](https://avatars0.githubusercontent.com/u/623819?v=4&s=100) | [openSUSE](https://github.com/openSUSE) | Linux distribution |
| ![](https://avatars0.githubusercontent.com/u/58386951?v=4&s=100) | [PyTorch Lightning](https://github.com/PyTorchLightning/pytorch-lightning) | The lightweight PyTorch wrapper for ML researchers. |
| ![](https://avatars3.githubusercontent.com/u/1284191?v=4&s=100) | [xarray (PyData)](https://github.com/pydata/xarray) | N-D labeled arrays and datasets in Python (Python for Data) |
| ![](https://avatars2.githubusercontent.com/u/963197?s=100&v=4) | [SunPy](https://github.com/sunpy) | Python for Solar Physics |
| ![](https://avatars0.githubusercontent.com/u/847984?v=3&s=100) | [Astropy](https://github.com/astropy) | Astronomy in Python |
| ![](https://avatars3.githubusercontent.com/u/17349883?v=3&s=100) | [Scikit Learn Contrib](https://github.com/scikit-learn-contrib) | scikit-learn compatible projects |
| ![](https://avatars1.githubusercontent.com/u/897180?s=100&v=4) | [Scikit Image](https://github.com/scikit-image) | Image processing in Python |
| ![](https://avatars0.githubusercontent.com/u/1284937?v=4&s=100) | [Spyder IDE](https://github.com/spyder-ide/spyder) | The Scientific Python Development Environment |
| ![]() | [NetworkX](https://github.com/NetworkX/NetworkX) | Python library for graph theory and complex networks |
| ![]() | [Statsmodels](https://github.com/statsmodels/statsmodels) | Statistical modeling and econometrics in Python |

> GitHub API allows me to find out all the users of the project.
> I keep the [list of all organizations and users](https://github.com/OrkoHunter/pep8speaks/wiki/List-of-users-and-orgs) on the public wiki. 

# Sponsorship 💳

Even though the project is a free and open source software, it needs to be hosted on a server to work. The server receives around 3,000 API requests per minute.
I deployed it on Heroku because it was free of cost.
Heroku gave a limited number of hours per month for the servers to run. Within 1 year, the app started exhausting all the hours
very quickly. And then I had to pay for the server costs.

In March 2019, I wrote a case to receive funding for the project. https://github.com/OrkoHunter/pep8speaks/wiki/Funding

I [wrote](https://github.com/OrkoHunter/pep8speaks/wiki/PSF-Grant-application) to the PSF for the
[Python Software Foundation grant](https://www.python.org/psf/grants/). They agreed to cover one year of server costs. 🎉

The project also received funding from [Weblate](https://weblate.org) and [CCExtractor](https://ccextractor.org/), which is amazing!

# Future of the project ⏳
 
The project does not have many bugs, but I do receive one or two issues in the repository per month. I have a local setup with
few Jupyter Notebooks where I
do the debugging and I fix the problem for them. My main concern is that debugging PEP8Speaks is not straightforward.
I want to make the development process smooth. This means the project can be maintained by more people, not one person.

PEP8Speaks can be installed on public repositories with a few clicks, but running on private repositories is not trivial.
I have written the [instructions to do it](https://github.com/OrkoHunter/pep8speaks/wiki/Instructions-to-deploy-a-fork).
There are currently [9 private forks](https://github.com/search?q=pep8speaks&type=Users) of PEP8Speaks, that I know of.
But, I want to make it easier for private repositories to start using it. Just like
running CircleCI or Codecov on private repos.

The last most important thing in my mind is to improve the infrastructure. Write more developer-focused documentation, technical spec
of the project and support new contributions.

Cheers!
