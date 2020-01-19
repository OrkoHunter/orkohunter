# orkohunter.net

This is the source code of my personal website. Quick links -

* Home: https://orkohunter.net
* Blog: https://orkohunter.net/blog/
  * Tech posts: https://orkohunter.net/categories/tech/
  * Non-Tech posts: https://orkohunter.net/categories/non-tech/
* Wall: https://orkohunter.net/wall/
* Contact: https://orkohunter.net/#contact
* CV: https://orkohunter.net/files/cv.pdf

Powered by the [Academic theme](https://sourcethemes.com/academic/) for [Hugo](https://gohugo.io/). Hosted on GitHub Pages.

# Usage

The theme is a submodule inside `themes/academic`.

If the repository is cloned for the first time, do the following to to fetch submodule.
```
git submodule update --init
```

To update submodule
```
git submodule update --remote --merge
```

Compile
```
hugo
```

Run local server
```
hugo server -D
```

Display available updates to Academic.
```
cd themes/academic
git fetch
git log --pretty=oneline --abbrev-commit --decorate HEAD..origin/master
cd ../../
```
