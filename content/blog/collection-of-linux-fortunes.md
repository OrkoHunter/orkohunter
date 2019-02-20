+++
date = "2017-01-30"
title = "Collection of Linux fortunes ❤"
subtitle = ""
summary = ""
draft = false
categories = ["Tech"]
slug = "linux-fortunes"
+++

## fortune | cowsay

![](/img/1*rCj17HZPwiRZRpJb-_IOJw.png)
> This is about how I maintain the space <https://github.com/OrkoHunter/mfdf/blob/master/fortunes>fortune is a Unix program which chooses a random message from its database of quotations and displays in the Shell. There are mainly three types of the quotations; literature, fortunes and riddles. I once tried adding fortune in my ~/.zshrc file so that a new fortune would appear whenever I create a new terminal session. There are many other places for making it appear e.g. Login, Logout, XScreenSaver, etc. However, I later went for

```
fortune | cowsay -f tux
```

cowsay is another program which takes a string and displays in a balloon over acat figure. Note that both of them have to be installed (using apt-get).

### Things to add in your .bashrc, .zshrc, etc.

I’ll now be adding shell commands to generate the messages with random cowsay characters. [Courtesy](https://gist.githubusercontent.com/jackinloadup/732325/raw/422d2175d5561b8d47e19232696c9e043b7b4e37/generate-cowsay).

```
cows[1]=beavis.zen
cows[2]=bong
cows[3]=bud-frogs
cows[4]=bunny
cows[5]=cheese
cows[6]=cower
cows[7]=daemon
cows[8]=default
cows[9]=dragon
cows[10]=dragon-and-cow
cows[11]=elephant
cows[12]=elephant-in-snake
cows[13]=eyes
cows[14]=flaming-sheep
cows[15]=ghostbusters
cows[16]=head-in
cows[17]=hellokitty
cows[18]=kiss
cows[19]=kitty
cows[20]=koala
cows[21]=koshcows[22]=luke-koala
cows[23]=meow
cows[24]=milk
cows[25]=moofasa
cows[26]=moose
cows[27]=mutilated
cows[28]=ren
cows[29]=satanic
cows[30]=sheep
cows[31]=skeleton
cows[32]=small
cows[33]=sodomized
cows[34]=stegosaurus
cows[35]=stimpy
cows[36]=supermilker
cows[37]=surgery
cows[38]=telebears
cows[39]=three-eyes
cows[40]=turkey
cows[41]=turtle
cows[42]=tux
cows[43]=udder
cows[44]=vader
cows[45]=vader-koala
cows[46]=wwwdeclare -i MAX=${#cows[@]}
if [ ! $MAX -gt 0 ]; then
 MAX=6
fiexport last\_fortune=$(cowsay -f ${cows[$[ ( $RANDOM % $MAX ) + 1 ]]} `fortune`)echo $last\_fortunealias mfdf='sh <path\_to\_mfdf.sh>'
```

Now my, [mfdf.sh](https://github.com/orkohunter/mfdf) script adds it to a file and pushes over GitHub.

