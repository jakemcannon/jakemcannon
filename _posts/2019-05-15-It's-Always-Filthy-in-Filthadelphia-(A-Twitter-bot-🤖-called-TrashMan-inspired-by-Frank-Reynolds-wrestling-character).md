I attended my schools hackathon, [OwlHacks](https://owlhacks.com/), in the Spring 2019 semester and my primary goal was to create a new side-project that would allow me to learn new technologies. Furthermore, I thought it would be a nice bonus if this project could be related to Philadelphia and take advantage of [OpenDataPhilly](https://www.opendataphilly.org/); a catalog of public data in the Philadelphia region. Thus, TrashMan, a bot that finds the nearest public waste bin for a Twitter user was created.



![WavdxuN](/assets/images/WavdxuN.png)



## Why Trash?

It's no secret that Philadelphia has a public waste & litter problem; many know the overused Filth-adelphia moniker by now. The complaints of the current waste/litter state are almost as ubiquitous as the litter.

- [Philadelphia is so dirty the city wants residents and business owners to help collect trash](https://www.philly.com/philly/news/pennsylvania/philadelphia/litter-philadelphia-trash-streets-department-recycle-20181019.html)
- [Philly’s litter problem is no mystery. Why won’t City Hall step up and solve it? : Opinion](https://www.philly.com/philly/opinion/commentary/litter-street-sweeping-philadelphia-neighborhood-clean-up-20181005.html)
- [Open Thread: How can Philly combat its litter problem?](https://philly.curbed.com/2018/10/25/18024402/open-thread-philly-trash-litter-waste)
- [New map reveals the state of litter in Philly, block by block](https://philly.curbed.com/2018/2/15/17012334/philadelphia-litter-trash-index-map)
- …..

At the current time of this blog post, the current backlash, [Philadelphia’s new version of street sweeping is…dusty](https://billypenn.com/2019/04/17/philadelphias-new-version-of-street-sweeping-is-dusty/), involves the new trash blower program. That is, to clean the streets of debris in place of street sweepers as Philadelphians can't be bothered to move their vehicles. 

In short, for whatever reason, any ideas I have about projects that exist in the realm of public service always revolve around waste management or litter. Not to mention, public trash pickup has been trending lately evident by things like the viral [#trashtag](https://www.forbes.com/sites/trevornace/2019/03/12/trashtag-challenge-goes-viral-as-people-share-beforeafter-photos-of-their-cleanup/#22e64e3a95e8) challenge making the rounds on Twitter and Reddit.



![MO-trash-opener-mark-likosky-940x5401](/assets/images/MO-trash-opener-mark-likosky-940x5401.jpg)



## How does it work?

This project was relatively simple. For me, this project was a light introduction to some technology, such as databases and API's that I plan to learn over the summer.

#### In short the app does the following:

- Get's the users specific latitude and longitude coordinates from the their tweet
- Calculates the shortest distance from them to the nearest public waste bin
- Returns the Google Maps walking route to the user

#### In more detail the app does the following:

The inital blueprint for the project was to use the Twitter API and Google Maps API to perform the apps main objective. However, in the end, the Google Maps api was not needed for reasons I will touch on later.

**To begin**, I followed [CS Dojo's tutorial](https://www.youtube.com/watch?v=W0wWwglE1Vc&t=998s) on YouTube for creating a Twitter bot. I used the [Tweepy](https://www.tweepy.org/) library to interact with the Twitter API. This allowed me to get a quick prototype that's purpose was to only reply to specific Tweets. The bot's goal was the following:

- Look for new Tweet's
- Specifically, look for a keyword like <code>#nearme</code> within the tweets to let the bot know what the users purpose was
- Tweet back to the user with a custom url that provided them with walking directions to the nearest waste bin

**Next, calculating the shortest distance**

The Twitter api allows you to get a users location provided they have location servies enabled as well as gave Twitter access. The location comes in two forms. The general location such as <code>Philadelphia, PA</code> or a *specific* location in the form of <code>latitude, longitude</code> coordinates; this is what I needed!

After getting the user's location the next step was to find the waste bin with the ***shortest distance***, in other words, the nearest waste bin. This was rather simple to achieve but upon an initial investigation my thoughts were related to graphs and the Google Maps API. So I choose to work with the [Google Maps - Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start).

I quickly ran into obstacles though. First, the Distance Matrix API is free up to a certain amount of API requests. Although, I don't believe that this project would recieve so much traffic that it would hit these limits it was still not ideal, nonetheless.

Secondly, the Distance Matrix API was not efficient. It would take roughly 10 minutes to return a result and tweet to a user. Without doing more research I imagine this is because the API is doing some kind of complex graph algorithm or shortest path algorithm behind the scenes. There are roughly 900+ public waste bins in the city and the API was calculating the distance from the users location to every public waste bin and then updating the location with the shortest path before it would return a tweet.



![Screen Shot 2019-05-19 at 2.14.14 PM](/assets/images/Screen Shot 2019-05-19 at 2.14.14 PM.png)



**The solution?**

Before I impemented the Google Maps API solution I knew finding a *distance* or *shortest distance* involved some kind of distance formula; the type you might have some familiarity with from a math or calculus class. However, I anticipated that this would not be an easy formula; I really wasn't sure. Would the calculation be a straight line? The shortest walking distance navigating city streets? Is it relevant that the bot is only analyzing distances within a few miles radius of a city as oppssed to across states or countries? Ponder [this](https://stackoverflow.com/questions/55092618/gps-is-the-haversine-formula-accurate-for-distance-between-two-nearby-gps-poin) StackOverflow post to see what I mean.

> Do you mean the distance over the road? Do you go by bike, or by car? Or by plane? And do you mean the mathematically shortest distance as a straight line? The shortest possible distance over the surface of the earth? - [Wouter van Nifterick](https://stackoverflow.com/users/38813/wouter-van-nifterick)



So, my intention was to use Google Maps API to abstract this complexity away. But with the current Google Maps API solution not feasible I had to look elsewhere. Thus, I found myself looking in more grandular detail on how distance *is* calculated and concluded with the [haversine formula](https://en.wikipedia.org/wiki/Haversine_formula).



##  Conclusion

In the end I am not optimistic that this bot will solve Philly's waste problems or that the bot will even be used.

Despite the app's practicality I am quite happy with this project. It allowed me to learn some new technologies that I hope to continue learning over the summer as I plan to build a full stack web application. Secondly I won my first hackthon prize at the first hackthon I attended. Lastly, and best of all, I got to use Frank Reynolds as my apps avatar.
