cmake_minimum_required(VERSION 3.10.2)
project(web_speech_recognition)

find_package(catkin REQUIRED COMPONENTS
  rosbridge_server
  roswww
  message_generation
  std_msgs
)

add_message_files(
  FILES
  SpeechRecognitionCandidates.msg
)

add_service_files(
 FILES
 SpeechRecognition.srv
)
generate_messages(
  DEPENDENCIES std_msgs
)


catkin_package(
  CATKIN_DEPENDS rosbridge_server roswww std_msgs message_runtime
)

include_directories(
  ${catkin_INCLUDE_DIRS}
)

install(DIRECTORY launch/
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}/launch
)

install(DIRECTORY www/
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}/www
)
