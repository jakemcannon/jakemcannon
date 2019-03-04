---
layout: post
title:  "YouTube Search"
date:   2019-02-19 23:02:00 -0500
categories: jekyll update
---
My first blog post about my first project. This should be fun…

In the summer of 2018 I had yet to take any programming classes at my school and I was starting to get anxious. So, like everyone on the internet learning to program, I decided to teach myself Python. I found many tutorials but I found [Berkley’s 61A](https://cs61a.org/) course the best. At this point I felt ready for a small side-project that I could sink my teeth into but I really did not want a tutorial project so I brainstormed ideas. I came up with an idea to automate the task of video editing, one of my hobbies, in Python.

# So what does it do?

This Python script searches through the subtitles of a YouTube video and collects data on keywords. It also, and more importantly, downloads the video and cuts the video at the location - time interval - your keyword was found. My intent was to automate some of the more boring parts of video editing. Additionally, I noticed that this was a sort of trope often found in a certain genre of videos. That being documentaries, news segments, video essays, etc. I’ve created a demonstration video here. Notice how these small montage of clips sequentially have the same word being repeated from different sources. The purpose was to fire off this script on a batch of YouTube links while I was working on more important segments of the video and the clips would then auto-generate. A tedious part of video editing is clipping the beggining and ending off of videos.

# How does it work & challenges

Using youtube-dl it first downloads the subtitles and checks for the users desired keyword(s). If they exist then it collects all the timestamps of where that word occurred for every video and then using FFMPEG cuts them at that interval

The biggest challenge was probably gluing everything together. Early on I had everything working in individual units of code. I could execute this on one YouTube link. The issue was OOP before I knew what OOP was. I am kind of to blame here for this. I knew OPP was probably an approach so solving this challenge but things got in the way. School was starting, work was getting busy, interview season was starting and I was reluctant to learn a new topic. So the project went on the back burner and after I learned OPP in class I wired this up in no time.

# Quricks, Thoughts, and the Ugly 🤢

- <code>.srt</code> files are a lot cleaner that `.vtt` files if you need to read them with human eyes, however, YouYube-dl wont allow you to downlaod an srt file while skipping the download for the video. You can however do it with `.vtt` files.

- I don't yet know much about computer hardware but I'm quite sure this is project is quite intensive for most computers.

- Finally the below code is.. I'm not sure, probably not the best code. I'm calling a bash command within another bash command from python. Essentialy calling an FFMPEG call from Python but instead of supplying it a video file on your local machine I'm calling a YouTube -dl command. I tried to not have `shell = True` in the code but I couldn't find a good solution. The purpose for all of this to avoid having to have the user download the entire youtube video and then cur only a 5 second segment from another video.

  ```python
  subprocess.call("ffmpeg -i $(youtube-dl -f 22+audio[ext=mp4]/mp4 --get-url " + self.name + ") -ss " + caption.start + " -to " + caption.end + " " + output + str(i) + ".mp4", shell=True)
  ```

# Conclusion

Ultimately, I'm happy with the project. I'm mostly happy that is not a tutorial project and I have a project that I was also intersted in. I'm not sure that it is a "resume" project in the sense that it is not a fully featured web app with a front end. There's plethora of content online, albeit some not so good, that deals with what a "substantial side project is or is not. However, at the moment it is all that I have and I can say that it is not a tutorial project.