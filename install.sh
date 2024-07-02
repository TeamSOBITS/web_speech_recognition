#! /bin/bash


echo "╔══╣ Install: web_speech_recognition (STARTING) ╠══╗"


sudo apt-get update

echo "Install ROS www"
sudo apt-get install -y \
    ros-${ROS_DISTRO}-roswww 

echo "Install future"
python3 -m pip install future


# Install "sobits_msgs"
cd ~/catkin_ws/src/
git clone https://github.com/TeamSOBITS/sobits_msgs.git
cd ~/catkin_ws/src/speech_recognition_vosk/


echo "╚══╣ Install: web_speech_recognition (FINISHED) ╠══╝"