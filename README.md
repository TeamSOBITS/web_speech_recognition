# web_speech_recognition

### 日本語の音声認識を使う場合：
ROSのメッセージのやり取りの仕様により、日本語で送ったメッセージはUNICODE型で認識結果を返しますが.  
pythonのClient側で# coding:utf-8を書いていると自動的に変換されるみたいです.  
## Get Started

### Open shell and type these commands.

```
sudo apt-get install ros-kinetic-roswww 
```
### How to use
```
roslaunch web_speech_recognition web_speech_recognition_en.launch
```
or
```
roslaunch web_speech_recognition web_speech_recognition_jp.launch
```

### Browse and enjoy it!

Open your browser, and access to:

`http://<your host name>:8000/web_speech_recognition/`

#### Service name
    /speech_recognition
