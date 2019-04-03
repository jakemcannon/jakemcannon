---
layout: post
title:  '"Trash Man" public trash can finder'
date:   2019-03-27 23:02:00 -0500
categories: jekyll update
---
This weekend I attended my first hackathon and completed my second side project. Also, won my first hackathon prize! Using Python, the TwitterAPI, and the Google Maps  API my goal was to make a public trash can finder in Philadelphia to help prevent litter.

### How does it work?

In an attempt to help prevent littering in Philadelphia this bot tweets the user a Google Maps link to the nearest public waste bin. It leverages a users current location and subsequently Tweets or displays the closest public trash can in Philadelphia. 

Location services have to be on and once a user tweets to the bot the bot, via a Python script and the Twitter api, will grab the latitude and longitude coordinates of where that tweet was sent from. 



Once we have the users location we then need the location of every public waste bin in Philadelphia. This data was gathered from the [https://www.opendataphilly.org](https://www.opendataphilly.org), a catalog of open data for the Philadelphia region. This data set contained the coordinates for every public waste bin. The next step was to compute the distance from the users location to every waste bin and find the waste bin with the shortest distance. This ended up being very inefficient, more on this later. So with the first iteration of this project, having the users coordinates and all the coordinates of every waste bin, I found the shortest distance via the Google Distance Matrix api. In other words, I made a request to the the api with the starting point as the users location and then calculated the distance for all 900+ waste bins. This took about 10 minutes. After finding the shortest it was a matter of simply tweeting back to the user.



### Challenges

As this project primarily deals with api's and I had not yet worked with an api's this is where many of the difficulties arose.

- #### The first difficulty was dealing with api rate limits, specifically Twitter's. 

  I was either spamming the run button or in some of my code that was called 100+ time there was also a call to the twitter api thus I kept hitting my rate limit. This wasn't so much a difficult problem to solve but more a result of rushing under a deadline in a hackathon

  

- **Google Maps api getting to many requests, expensive, long wait period. **

  - So when implementing my solution I ran into another problem. I was still new to this library that was I think converting JSON into a hybrid python list full of dictioaries that contained lists and so on. So I know the zipcode was burried away in there and on the first iteration of code I simply indexed to the specific index for my first example. But, later, I realized that theses indexes were not all the same so I was getting out of bounds errors. The solution is then to always index to the last possible index <code>[-1]</code> as the last index will always have the zipcode. Now I just need to do it for every trash can and I will have every zipcode for every trash can.

- **Python tuples. Iv'e never worked with them and they were all I could manage to get the Google Maps api to cooperate with. Mostly just syntax issues.**

  

### Conclusion

I am very happy with this project. After my first project, I've been antsy to start a second one but couldn't get the ball moving on what exactly I wanted to build. I was, however, and have been for a while, passionate about trying to use technology to assist the litter and waste problem in Philadelphia. Additionally, I have been wanting to build a project that interacts with API's; This seemed like the next thing to learn and add to my bag collection of projects. So naturally, everything kind of aligned and I was able to build a really cool project at a hackathon this weekend. The best part, I got to use Frank Reynolds as the avatar.



### What's Next

- Get the api working so I don't have to make as many Google Maps "calls" either by my zipcode algorithm solution
- Maybe host on AWS
- ^ This might require a database technology which is cool anyway because I'm trying to learn one like SQL

### Things I learned

- How to interact with api's, my first project with an api!
- Google Maps api
- Twitter api
- Some React
- How to build a Twitter bot 🤖
- How to delpoy a project on AWS










