#!/usr/bin/env python
#coding:utf-8
import rospy
from std_msgs.msg import String
from web_speech_recognition.srv import SpeechRecognition

"""
sobit_mini用音声認識サービスノード
基本的な使い方は、web_speech_recognitionと同じ（引数でtimeoutの秒数を与えるだけ）
serverが呼ばれたタイミングでsobit_miniの目と耳の制御を行う
"""

head_status_publisher_g = rospy.Publisher("/sobit_mini_head/status", String, queue_size=10)

def server(srv):
    head_status_publisher_g.publish("recording")

    try:
        speech_recognition_server = rospy.ServiceProxy("/speech_recognition", SpeechRecognition)
        recognition_result = speech_recognition_server(srv.timeout_sec)

        head_status_publisher_g.publish("normal")
        return recognition_result

    except rospy.ServiceException, e:
        rospy.logerr(e)
        head_status_publisher_g.publish("normal")


def main():
    rospy.init_node("web_speech_recognition_server_for_sobit_mini")
    rospy.loginfo("[web_speech_recognition_server_for_sobit_mini] start")

    rospy.Service("/web_speech_recognition_server_for_sobit_mini", SpeechRecognition, server)

    rospy.spin()

if __name__ == "__main__":
    main()
