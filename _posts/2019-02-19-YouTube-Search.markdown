---
layout: post
title:  "YouTube Search"
date:   2019-02-19 23:02:00 -0500
categories: jekyll update
---
My first blog post about my first project. 🙃

In the summer of 2018 I had yet to take any programming classes at my school and I was starting to get anxious. So, like everyone on the internet learning to program, I decided to teach myself Python. I found many tutorials but I found [Berkley’s 61A](https://cs61a.org/) course the most helpful. At this point I felt ready for a small side-project that I could sink my teeth into but I really did not want a tutorial project so I brainstormed ideas. I came up with an idea to automate the task of video editing, one of my hobbies, in Python.

# So what does it do?

This Python script searches through the subtitles of a YouTube video and collects data on keywords. It also, and more importantly, downloads the video and cuts the video at the location - time interval - your keyword was found. My intent was to automate some of the more boring parts of video editing. Additionally, I noticed that this was a sort of trope often found in a certain genre of videos. That being documentaries, news segments, video essays, etc. I’ve created a demonstration video here. Notice how these small montage of clips sequentially have the same word being repeated from different sources. The purpose was to fire off this script on a batch of YouTube links while I was working on more important segments of the video and the clips would then auto-generate. A tedious part of video editing is clipping the beggining and ending off of videos.

# How does it work & challenges

Using youtube-dl it first downloads the subtitles and checks for the users desired keyword(s). If they exist then it collects all the timestamps of where that word occurred for every video and then using FFmpeg cuts them at that interval.

One of the biggest challenges was reading a file that was full of duplicates and blank lines. The problem was that while I was finding my keywords and their timestamps I was also downloading duplicate clips; one for every duplicated line. In hindseight this was not such a difficult problem but at the time of making this I still had not officially taken any programming classes at my school. Thus I was stuck on it for quite some time. 

```
money boosted board pays me to talk
about their boards in these videos they
about their boards in these videos they
 
about their boards in these videos they
don't pay me at all see I am an adviser
don't pay me at all see I am an adviser
 
don't pay me at all see I am an adviser
to boosted boards so like I like work
to boosted boards so like I like work
 
to boosted boards so like I like work
for them it's like a it's like mostly
for them it's like a it's like mostly
```

Here is how it was solved:

We skip blanks lines and keep note of the previous line. Therefore if the keyword is in the current line and the current line is not the same as the previous line then we get the timestamp and download the clips. In other words, we only ever look at the first unique line and the subsequent duplicates will be skipped thus we wont downlaod any  duplicates of our desired clip.

```python
def download_clip(self, keyword):
        prevline = ""
        i = 0
        for caption in webvtt.read(self.sub_name):
            for line in caption.text.split("\n"):
                if line == " ":
                    continue
                elif line != prevline and keyword in line:
                    prevline = line
                    output = self.clean_title()
                    i+=1
                    subprocess.call("ffmpeg -i $(youtube-dl -f 22+audio[ext=mp4]/mp4 --get-url " + self.name + ") -ss " + caption.start + " -to " + caption.end + " " + output + str(i) + ".mp4", shell=True)
```



Lastly the only other major hurdle in this project was glueing all the pieces together. As I mention I hadn't yet taken any programming classes but after taking Java 1 at my school I was quickly able to wire all the pieces together using Object-Oriented programming.

# Quricks, Thoughts, and the Ugly 🤢

- <code>.srt</code> files are a lot cleaner that `.vtt` files if you need to read them with human eyes, however, YouYube-dl wont allow you to downlaod an srt file while skipping the download for the video. You can however do it with `.vtt` files.

- I don't yet know much about computer hardware but I'm quite sure this is project is quite intensive for most computers.

- Finally the below code is.. I'm not sure, probably not the best code. I'm calling a Bash command within another Bash command from Python. Essentialy calling an FFmpeg call from Python but instead of supplying it a sorce video file on my local machine I'm calling a  youtube-dl command. I tried to not have `shell = True` in the code but I couldn't find a good solution. The purpose for all of this to avoid having the user download the entire YouTube video if they only need a 5 second segment from the video.

  ```python
  subprocess.call("ffmpeg -i $(youtube-dl -f 22+audio[ext=mp4]/mp4 --get-url " + self.name + ") -ss " + caption.start + " -to " + caption.end + " " + output + str(i) + ".mp4", shell=True)
  ```

# Conclusion

Ultimately, I'm happy with the project. I'm mostly happy that is not a tutorial project and I have a project that I was also intersted in. I'm not sure that it is a "resume" project in the sense that it is not a fully featured web app with a front end. There's plethora of content online, albeit some not so good, that deals with what a "substantial side project is or is not. However, at the moment it is all that I have and I can say that it is not a tutorial project.