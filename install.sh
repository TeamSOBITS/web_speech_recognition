#! /bin/bash


echo "╔══╣ Install: web_speech_recognition (STARTING) ╠══╗"


sudo apt-get update

echo "Install ROS www"
sudo apt-get install -y \
    ros-${ROS_DISTRO}-roswww 

echo "Install future"
python3 -m pip install future



echo "╚══╣ Install: web_speech_recognition (FINISHED) ╠══╝"