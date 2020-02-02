$(function () {
  var ros = new ROSLIB.Ros({
    url: 'ws://' + location.hostname + ':9090'
  });
  var language = new ROSLIB.Param({
    ros: ros,
    name: "language"
  });

  var candidates_num = new ROSLIB.Param({
    ros: ros,
    name: "candidates_num"
  });

  const SpeechRecognitionServer = new ROSLIB.Service({
    ros: ros,
    name: '/speech_recognition',
    serviceType: 'web_speech_recognition/SpeechRecognition'
  });

  var showMenuString = function (lang) {
    console.log('lang selected: ' + lang);
    lang_name = $('#lang-selector li:eq(0)').text();
    for (var i = 0; i < $('#lang-selector li').length; i++) {
      if ($('#lang-selector li:eq(' + i + ')').data('value') == lang) {
        lang_name = $('#lang-selector li:eq(' + i + ')').text();
      }
    }
    setLanguage(lang);
    $('#continuous').text(_('continuous'));
    $('#once').text(_('once'));
    $('#speak').text(_('speak'));
    $('#language').text(_('language'));
    $('#detail-label').text(_('detail'));
    $('#lang-label').text(_('language'));
    $('#lang').text(lang_name);
    $('#status-label').text(_('status'));
    $('#progress-label').text(_('progress_result'));
    $('#clear-result').text(_('clear'));
    $('#result-label').text(_('result'));
    $('#publish-detail-label').text(_('publishdetail'));
    $('#topic-alt-button').text(_('change'));
  };

  var SpeechRecognition = window.webkitSpeechRecognition
    || window.mozSpeechRecognition
    || window.oSpeechRecognition
    || window.msSpeechRecognition
    || window.SpeechRecognition;

  if (!SpeechRecognition) $('body').html('<h1>This Browser is not supported.</h1>');

  var speech_recog = new SpeechRecognition();

  language.get(function (value) {
    if (value != null) {
      console.log('language : ' + value);
      speech_recog.lang = value;
    }
    else {
      speech_recog.lang = 'en-US';
    }
  });
  candidates_num.get(function (value) {
    if (value != null) {
      console.log('candidates_num: ' + value);
      speech_recog.maxAlternatives = value;
    } else {
      speech_recog.maxAlternatives = 5;
    }
  });
  speech_recog.continuous = true;
  speech_recog.interimResults = true;
  // speech_recog.maxAlternatives = 5;

  speech_recog.onsoundstart = function () {
    console.log('recog start.');
    $('#status').text(_('sound start'));
  };

  speech_recog.onspeechstart = function () {
    console.log('onspeechstart');
    $('#status').text(_('speech start'));
  };

  speech_recog.onspeechend = function () {
    console.log('onspeechend');
    $('#status').text(_('speech end'));
  };
  speech_recog.onnomatch = function () {
    console.log('recog nomatch.');
    $('#status').text(_('nomatch'));
  };

  speech_recog.onerror = function (e) {
    console.log('recog error.: ' + e.error);
    $('#status').text(_('error') + ': ' + e.error);
    if (e.error == "no-speech") {//NO-SPEACH
      isSpeaking = false;
    }
  };

  speech_recog.onsoundend = function () {
    console.log('recog soundend.');
    $('#status').text(_('soundend'));
  };

  speech_recog.onaudioend = function () {
    console.log('recog audioend.');
  };

  var addRow3 = function (col1, col2, col3) {
    return '<tr><td>' + col1 + '</td><td>' + col2 + '</td><td>' + col3 + '</td></tr>';
  };

  function result(texts, confidence) {
    this.texts = texts;
    this.confidence = confidence;
  }

  let finalTranscript = [];
  let interimTranscript = [];
  let isResult = false;
  speech_recog.onresult = function (event) {
    isResult = true;
    interimTranscript = [];
    var recentResults = event.results[event.results.length - 1];
    console.log(recentResults);
    var recognition_result = [];
    var recognition_interim_result = [];
    var table = '<table class="table table-striped table-bordered table-condenced">';
    table += addRow3(_('number'), _('word'), _('confidence'));
    for (var i = 0; i < recentResults.length; ++i) {
      var word = recentResults[i].transcript;
      var conf = recentResults[i].confidence;
      if (recentResults.isFinal) {
        recognition_result[i] = new result(word, conf);
        // finalTranscript.push(word);
      } else {
        recognition_interim_result[i] = new result(word, conf);
        // interimTranscript.push(word);
      }

    }
    //console.log(finalTranscript);
		/*
        console.log(recognition_result);
        console.log("sort");
		console.log(recognition_result);
        }*/
    if (recognition_result.length > 0) {
      recognition_result.sort(function (base, target) {
        if (base.confidence < target.confidence) return 1;
        if (base.confidence > target.confidence) return -1;
        return 0;
      });
      for (var i = 0; i < recognition_result.length; ++i) {
        table += addRow3(i + 1, recognition_result[i].texts, recognition_result[i].confidence);
        finalTranscript.push(recognition_result[i].texts);
      }
      table += '</table>';
      $('#messages').prepend(table);
    } else if (recognition_interim_result.length > 0) {
      recognition_interim_result.sort(function (base, target) {
        if (base.confidence < target.confidence) return 1;
        if (base.confidence > target.confidence) return -1;
        return 0;
      });
      $('#progress').text(_(recognition_interim_result[0].texts));
      for (var i = 0; i < recognition_interim_result.length; ++i) {
        interimTranscript.push(recognition_interim_result[i].texts);
      }
    }
    isResult = false;
  };

  const sleepBySetTimeout = function (sec) {
    return new Promise(function (resolve) {
      setTimeout(function () { resolve() }, sec * 1000);
    })
  };

  const sleepBySetInterval = function (sec) {
    var spanedSec = 0;
    return new Promise(function (resolve) {
      var id = setInterval(function () {
        spanedSec++;
        if (spanedSec >= sec || finalTranscript.length != 0 || isSpeaking == false) {
          clearInterval(id);
          speech_recog.stop();
          isSpeaking = false;
          console.log('speak off');
          resolve()
        }
      }, 1000);
    })
  };

  const sleepBySetIntervalForResultWait = function (sec) {
    var spanedSec = 0;
    return new Promise(function (resolve) {
      var id = setInterval(function () {
        spanedSec++;
        if (spanedSec >= sec || isResult == false || isSpeaking == false) {
          clearInterval(id);
          resolve()
        }
      }, 100);
    })
  };

  const check_recognize = function () {
    if (finalTranscript.length != 0)
      document.getElementById('sucsess-sound').play();
    else
      document.getElementById('error-sound').play();

    $('#speak').text(_('speak'));
    $('#speak').addClass('btn-default');
  }

  var isSpeaking = false;
  const SpeechRecognitionCallback = async function (request, response) {
    var time = request.timeout_sec;
    finalTranscript = [];
    console.log('Received service request on ' + SpeechRecognitionServer.name + ': ' + time + " [sec].");
    if (!isSpeaking) {
      document.getElementById('sound-file').play();
      console.log('speak on');
      speech_recog.start();
      isSpeaking = true;
      $('#status').text(_('start recognition'));
      $('#speak').text(_('stop'));
    } else {
      console.log('speak off');
      speech_recog.stop();
      isSpeaking = false;
      $('#status').text(_('stop recognition'));
      $('#speak').text(_('speak'));
    }//else
    await sleepBySetInterval(time);//speech time
    await sleepBySetIntervalForResultWait(1);
    await check_recognize();
    console.log("result");
    console.log(finalTranscript);
    console.log(interimTranscript);
    if (finalTranscript.length == 0) {
      response['transcript'] = interimTranscript;
    } else {
      response['transcript'] = finalTranscript;
    }
    return true;
  };
  SpeechRecognitionServer.advertise(SpeechRecognitionCallback);

  $('#speak').on('click', function () {
    if (!isSpeaking) {
      document.getElementById('sound-file').play();
      console.log('speak on');
      speech_recog.start();
      isSpeaking = true;
      $('#status').text(_('start recognition'));
      $('#speak').text(_('stop'));
    } else {
      console.log('speak off');
      speech_recog.stop();
      isSpeaking = false;
      $('#status').text(_('stop recognition'));
      $('#speak').text(_('speak'));
    }
  });

  $('#once').on('click', function () {
    if (speech_recog.continuous) {
      $('#speak').text(_('speak')).removeAttr('disabled');
      $('#once').addClass('btn-primary');
      $('#continuous').removeClass('btn-primary');
      speech_recog.abort();
    }
  });

  $('#continuous').on('click', function () {
    if (!speech_recog.continuous) {
      $('#speak').text(_('speak')).attr('disabled', 'disabled');
      $('#continuous').addClass('btn-primary');
      $('#once').removeClass('btn-primary');
      $('#once').addClass('btn-default');
      speech_recog.abort();
      speech_recog.start();
    }
  });

  $('#detail').click(function () {
    if (this.checked) {
      console.log('detail enabled');
      speech_recog.abort();
      speech_recog.interimResults = true;
      speech_recog.start();
    } else {
      console.log('detail disabled');
      speech_recog.abort();
      speech_recog.interimResults = false;
      speech_recog.start();
    }
  });

  $('#publish-detail').click(function () {
    if (this.checked) {
      console.log('publish detail enabled');
      isPublishDetail = true;
    } else {
      console.log('publish detail disabled');
      isPublishDetail = false;
    }
  });

  $('#lang-selector li').click(function () {
    var lang = $(this).data('value');
    console.log('lang selected: ' + $(this).text() + ' ' + lang);
    showMenuString(lang);
    speech_recog.lang = lang;
    speech_recog.start();
  });

  $('#clear-result').click(function () {
    console.log('clear result');
    $('#messages').html('');
  });

  /*$('#topic-alt-button').click(function(e) {
      if (topic != $('#topic-name').val()) {
          topic = $('#topic-name').val();
          console.log('topic changed to ' + topic);
          tabletVoice = new ROSLIB.Topic({
              ros: ros,
              name: topic,
              messageType: 'google_speech_recognition/SpeechRecognitionCandidates.msg'
          });
      }
      var alt = parseInt($('#alternative').val());
      if (alt) {
          console.log('alternative: ' + alt);
          speech_recog.maxAlternatives = alt;
      }
      speech_recog.stop();
  });*/

  showMenuString();


});
