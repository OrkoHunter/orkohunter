+++
date = "2018-04-18"
title = "Peeking over what people search on DC"
subtitle = ""
summary = ""
draft = false
categories = ["Tech"]
slug = "peeking-over-dc-search"
+++

> IS THIS EVEN POSSIBLE?

Well, Yeah.

> BUT YOU PROBABLY NEED TO BE A DC ADMIN TO GET THIS, NO?

Nope. Anyone can do it.

> Holy Schnikes!!!! TELL ME HOW TO DO IT ON DC++!!

Lol, come to Linux already!

---

Note: I shall not be giving out a one-click solution to monitor DC searches intentionally even if it were possible. But if you are dedicated enough, you can figure things out by reading it. Also, I’m not the first person to know about this.

> [What is DC?](https://en.wikipedia.org/wiki/Direct_Connect_%28protocol%29) It’s a peer-to-peer file sharing protocol. Computers connected with each other can share files among them, and if you are on LAN, you get them on a terrific speed.

> GET TO THE POINT!!

Alright, alright.

## Theory

Let’s say Mr X and I are connected to a DC hub. Let’s say it happens that both of us are online at the same time. Mr X searched for `New movies` in their favorite DC client e.g. DC++, LinuxDC++, etc. Their client sends this request to the hub we both are connected, to fetch a search result. The hub then forwards the request to *everyone* who is connected to it and returns the index for Mr X to click and download any file from anyone.

> SO GIVE ME THE SCRIPT. OR DO YOU HAVE THE CODE OR A REPOSITORY?

There isn’t really a script or any code. :/

## Exploit

Because of the theory, we can sit back, stay connected to the hub and receive a holy large amount of data like

- Who joined/left the hub when, their nick and their IP address
- What are people searching for and IP address associated with each query

If you are in KGP, you can [trace back the IP addresses to even room numbers](https://wiki.metakgp.org/w/IP_allocation).

## Technology

Normal DC clients won’t allow us to see these requests. There is a client known as [ncdc](https://dev.yorhel.nl/ncdc) (distributed as a binary) which doesn’t really have a GUI, so you can run it on a terminal (Aah, the feels it gives!)

- Use ncdc to connect to the hub
- Enable logging to a file and set `log_debug` to True
- _Note: This will generate a lot of data if you’re connected to a large hub and thus make sure you keep clearing the log file_
- Use `tail -f /path/to/logfile` to see the queries sent by DC
- Parse the queries and tada!
- Protip: You can feed [Kibana](https://www.elastic.co/products/kibana) the data and visualize them.

You probably will have to set some config in ncdc to change from Passive mode to Active mode or else, some hubs mights ban you. Google properly, read the ncdc documentation and you’ll be fine.

EDIT: [Siddharth Kannan](https://medium.com/@icyflame) used tcpdump to capture the TCP/IP packets which contains the DC query strings as well. Check out the 107,000 search results he accumulated in a week over here stored as `all_packet_info.json`. This is the code he used

```
sudo tcpdump -b -t src 10.109.xx.xx -w incoming-search-`date +%s`.pcap -c 1000;
```

## Live Streaming

It’s hard. But if you really want to live stream the searches and that to be accessible outside of the campus network, there is a hack. You can have a server hosted somewhere outside the network which is going to stream data to the public. Share the URL of this server to people you want to. Create an endpoint over here which can receive data through POST request. Now, use your laptop from inside the network to constantly send requests on to the server. Make sure to use authentication by headers to avoid exploitation!

There’s [some](https://github.com/OrkoHunter/dc-audio/) leftover [code](https://github.com/OrkoHunter/dctrends) if you can find use of them.

Now you have this, here’s something you need to remember: Don’t be dick. That’s all.

Happy Hacking! ✨
