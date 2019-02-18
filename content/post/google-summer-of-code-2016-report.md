+++
date = "2017-01-20"
title = "Google Summer of Code 2016 Report : Stingray"
subtitle = ""
summary = ""
draft = false
categories = ["Tech"]
slug = "gsoc2016-report"
+++

It began 5 months ago, in February. Due to my recent interests in Image Processing, I had made [few](https://github.com/scikit-image/scikit-image/pulls?q=is%3Apr+author%3AOrkoHunter+is%3Aclosed) Pull Requests to the [scikit-image](https://github.com/scikit-image/scikit-image) library, but it did not participate in GSoC. And that, after all those years of consecutive partcipation! (Yes I felt little sad.)

So, the day when Google announced the list of organizations, I started my “org hunt” ! And by the end of the day, I had sorted out the Python-only projects, which included the project [Library of Time Series methods](http://timelabtechnologies.com/ideas.html). The project was to make a library with methods useful to the research in X-ray astronomy. I was thrilled by the idea! Nevertheless, I was not much aware of the astronomical aspects of it.

In next 10–15 days, I submitted my proposal and few Pull Requests, among which I think [refactoring the Lightcurve class](https://github.com/StingraySoftware/stingray/pull/74) helped me understand the core of the library. In the pre-GSoC period, I also contributed in establishing Continuous Integration with [Travis](https://github.com/StingraySoftware/stingray/pull/51) for Unix and [Appveyor](https://github.com/StingraySoftware/stingray/pull/63) for Windows. Meanwhile, Stingray, the library we were working on, was re-designed to become an [Astropy affiliated package](https://github.com/StingraySoftware/stingray/pull/52).

In the wee hours of April 23, the results were announced and I *was* [selected](https://summerofcode.withgoogle.com/projects/#5755858201870336)! My primary and helping mentors were [Daniela Huppenkothen](https://github.com/dhuppenkothen) and [Matteo Bachetti](https://github.com/matteobachetti), both from different time zones, which really helped me in getting my answers as soon as possible.

In the first ten days of the Community Bonding period, my end semester exams were going on. The main medium of the communication between my mentors and me was Slack. And I must say, we totally loved it.

I started off with implementing [Cross Spectra](https://en.wikipedia.org/wiki/Cross-spectrum), basing to a lot of work that was previously done by [Abigail Stevens](https://github.com/abigailStev). Later on, Coherence and Lags were added in the Crossspectrum class, along with their tests and docstring.

After the mid-terms the major work was to add the Covariance spectra, and its “Averaged” counter part as well, along with errors for both. My final PR was to add the simple matrix of Dynamical Powerspectrum, which is open as of now.

Throughout this period, I was able to open [22 Pull requests](https://github.com/StingraySoftware/stingray/pulls?q=is%3Apr+author%3AOrkoHunter+is%3Aclosed) and push [116 commits](https://github.com/StingraySoftware/stingray/commits/master?author=OrkoHunter) to the main repository *i.e.* StingraySoftware/Stingray.

One thing that I would like to share, of many things which I learnt in this perioid, is that numpy booleans are little tricky. For e.g.

```
In []: np.isfinite(100) is True
Out[]: False
```

This is because np.isfinite or similar functions do not return the basic Python bool but an instance of numpy bool. And in the \_\_eq\_\_ magic method of the numpy bool class, it is evaluated to the Python booleans. And so, `np.isfinite(100) == True` would return True.

That is all for now. It was a great experience for me, and I am very thankful to Daniela, Matteo and Abigail for all the help during the summer.

Cheers!

