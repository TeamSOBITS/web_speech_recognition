<a name="readme-top"></a>

[JP](README.md) | [EN](README_en.md)

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

# web_speech_recognition

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <a href="#launch-and-usage">Launch and Usage</a>
    <li><a href="#milestone">Milestone</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- INTRODUCTION -->
## Introduction

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is an API-based voice recognition function that runs in the browser.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This section describes how to set up this repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

First, please set up the following environment before proceeding to the next installation stage.

| System  | Version |
| ------------- | ------------- |
| Ubuntu | 20.04 (Focal Fossa) |
| ROS | Noetic Ninjemys |
| Python | 3.8 |

> [!NOTE]
> If you need to install `Ubuntu` or `ROS`, please check our [SOBITS Manual](https://github.com/TeamSOBITS/sobits_manual#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Go to the `src` folder of ROS.
   ```sh
   $ roscd
   # Or just use "cd ~/catkin_ws/" and change directory.
   $ cd src/
   ```
2. Clone this repository.
   ```sh
   $ git clone https://github.com/TeamSOBITS/web_speech_recognition
   ```
3. Navigate into the repository.
   ```sh
   $ cd web_speech_recognition/
   ```
4. Install the dependent packages.
   ```sh
   $ bash install.sh
   ```
5. Compile the package.
   ```sh
   $ roscd
   # Or just use "cd ~/catkin_ws/" and change directory.
   $ catkin_make
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LAUNCH AND USAGE EXAMPLES -->
## Launch and Usage

### 1. Launch the launch file
* Japaneese
  ```sh
  roslaunch web_speech_recognition web_speech_recognition_jp.launch
  ```

* English
  ```sh
  roslaunch web_speech_recognition web_speech_recognition_en.launch
  ```

### 2. Start your browser

Open your browser and access the following link.

`http://<your host name>:8000/web_speech_recognition/`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Regarding Nodes

### Services:
 * /speech_recognition

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MILESTONE -->
## Milestone

- [x] OSS
    - [x] Improved documentation
    - [x] Adding License

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- 変更履歴 -->
<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [ROS Noetic](http://wiki.ros.org/noetic)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TeamSOBITS/web_speech_recognition.svg?style=for-the-badge
[contributors-url]: https://github.com/TeamSOBITS/web_speech_recognition/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TeamSOBITS/web_speech_recognition.svg?style=for-the-badge
[forks-url]: https://github.com/TeamSOBITS/web_speech_recognition/network/members
[stars-shield]: https://img.shields.io/github/stars/TeamSOBITS/web_speech_recognition.svg?style=for-the-badge
[stars-url]: https://github.com/TeamSOBITS/web_speech_recognition/stargazers
[issues-shield]: https://img.shields.io/github/issues/TeamSOBITS/web_speech_recognition.svg?style=for-the-badge
[issues-url]: https://github.com/TeamSOBITS/web_speech_recognition/issues
[license-shield]: https://img.shields.io/github/license/TeamSOBITS/web_speech_recognition.svg?style=for-the-badge
[license-url]: https://github.com/TeamSOBITS/web_speech_recognition/blob/feature/oss/LICENSE
