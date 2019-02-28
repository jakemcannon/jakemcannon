---
layout: post
title:  "YouTube Search"
date:   2019-02-19 23:02:00 -0500
categories: jekyll update
---
My first blog post about my first project. This should be fun…

In the summer of 2018 I had yet to take any programming classes at my school and I was starting to get anxious. So, like everyone on the internet learning to program, I decided to teach myself Python. codeascademy.com, DONE. While code academy was a valuable resource it wasn’t quite what I was looking for. Next, I found Berkley’s 61A course invaluable. At this point I felt ready for a small side-project that I could sink my teeth into but I really did not want a tutorial project so brainstormed ideas. I came up with an idea to automate the task of video editing, one of my hobbies, in Python.

# So what does it do?

This Python script searches through the subtitles of a YouTube video and collects data on keywords. It also, and more importantly,  downloads the video and cuts the video at the location - time interval - your keyword was found. My desire to create this project came  nature of video editing. Additionally, I noticed that this was a sort of trope often found in a certain genre of videos. That being documentaries, news segments, video essays, etc. I’ve created a demonstration video here. Notice how these small montage of clips sequentially have the same word being repeated from different sources. The purpose was to fire off this script on a batch of YouTube links while I was working on more important segments of the video and the clips from the script would, in a sense, auto-generate. A tedious part of video editing is clipping the beggining and ending off of videos

# How does it work & challenges

The script takes a text file as input with all the YouTube links that the user would like to search through. Using youtube-dl it first downloads the subtitles and checks for the users desired keyword(s). If they exist then it collects all the timestamps of where that word occurred for every video and then using FFMPEG cuts them at that interval

The biggest challenge was probably gluing everything together. Early on I had everything working in individual units of code. I could execute this on one YouTube link. The issue was OOP before I knew what OOP was. I am kind of to blame here for this. I knew OPP was probably an approach so solving this challenge but things got in the way. School was starting, work was getting busy, interview season was starting and I was reluctant to learn a new topic. So the project went on the back burner and after I learned OPP in class I wired this up in no time.

# Conclusion
