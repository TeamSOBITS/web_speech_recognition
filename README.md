<a name="readme-top"></a>

[JP](README.md) | [EN](README_en.md)

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

# web_speech_recognition

<!-- 目次 -->
<details>
  <summary>目次</summary>
  <ol>
    <li>
      <a href="#概要">概要</a>
    </li>
    <li>
      <a href="#セットアップ">セットアップ</a>
      <ul>
        <li><a href="#環境条件">環境条件</a></li>
        <li><a href="#インストール方法">インストール方法</a></li>
      </ul>
    </li>
    <li><a href="#実行操作方法">実行・操作方法</a></li>
    <li><a href="#マイルストーン">マイルストーン</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#参考文献">参考文献</a></li>
  </ol>
</details>

<!-- リポジトリの概要 -->
## 概要

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

ブラウザ上で動作する，APIによる音声認識機能です．

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>

<!-- セットアップ -->
## セットアップ

ここで，本リポジトリのセットアップ方法について説明します．

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>

### 環境条件

まず，以下の環境を整えてから，次のインストール段階に進んでください．

| System  | Version |
| ------------- | ------------- |
| Ubuntu | 20.04 (Focal Fossa) |
| ROS | Noetic Ninjemys |
| Python | 3.8 |

> [!NOTE]
> `Ubuntu`や`ROS`のインストール方法に関しては，[SOBITS Manual](https://github.com/TeamSOBITS/sobits_manual#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)を参照してください．

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>

### インストール方法

1. ROSの`src`フォルダに移動します．
   ```sh
   $ roscd
   # もしくは，"cd ~/catkin_ws/"へ移動．
   $ cd src/
   ```
2. 本リポジトリをcloneします．
   ```sh
   $ git clone https://github.com/TeamSOBITS/web_speech_recognition
   ```
3. リポジトリの中へ移動します．
   ```sh
   $ cd web_speech_recognition/
   ```
4. 依存パッケージをインストールします．
   ```sh
   $ bash install.sh
   ```
5. パッケージをコンパイルします．
   ```sh
   $ roscd
   # もしくは，"cd ~/catkin_ws/"へ移動．
   $ catkin_make
   ```

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>


<!-- 実行・操作方法 -->
## 実行・操作方法

### 1. launchファイルの起動
* 日本語
  ```sh
  roslaunch web_speech_recognition web_speech_recognition_jp.launch
  ```

* 英語
  ```sh
  roslaunch web_speech_recognition web_speech_recognition_en.launch
  ```

### 2. ブラウザの起動
ブラウザを開き，以下のリンクにアクセスしてください

`http://<your host name>:8000/web_speech_recognition/`


<p align="right">(<a href="#readme-top">上に戻る</a>)</p>

## ノードに関して

### Services:
 * /speech_recognition

 <p align="right">(<a href="#readme-top">上に戻る</a>)</p>



<!-- マイルストーン -->
## マイルストーン

- [x] OSS
    - [x] ドキュメンテーションの充実
    - [x] ライセンスの追加


現時点のバッグや新規機能の依頼を確認するために[Issueページ][issues-url] をご覧ください．

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>



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

<p align="right">(<a href="#readme-top">上に戻る</a>)</p> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">上に戻る</a>)</p> -->



<!-- 参考文献 -->
## 参考文献

* [ROS Noetic](http://wiki.ros.org/noetic)

<p align="right">(<a href="#readme-top">上に戻る</a>)</p>



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
