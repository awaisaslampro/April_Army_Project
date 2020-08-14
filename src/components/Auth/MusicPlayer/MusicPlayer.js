import React from 'react';
import $ from 'jquery';
import jquery from 'jquery';
import '../../../layout/style/MusicPlayer.css'
import { Link } from 'react-router-dom';

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    checkTouchScreen();
  })
  
  $(document).ready(function() {
    (function(window, undefined) {
  
      'use strict';
  
      var AudioPlayer = (function() {
  
        // Player vars!
        var
          docTitle = document.title,
          player = document.getElementById('ap'),
          playBtn,
          // playSvg,
          // playSvgPath,
          prevBtn,
          nextBtn,
          // plBtn,
          repeatBtn,
          // volumeBtn,
          progressBar,
          preloadBar,
          curTime,
          durTime,
          trackTitle,
          audio,
          index = 0,
          playList,
          volumeBar,
          wheelVolumeValue = 0,
          volumeLength,
          repeating = false,
          seeking = false,
          rightClick = false,
          apActive = false,
          // playlist vars
          plPlaylist = document.getElementById('navMenu'),
          pl,
          plUl,
          plLi,
          tplList =
          '<li class="player_playlist_item pl-list" data-track="{count}">' +
            '<div class="pl-list__track">' +
              '<div class="pl-list__icon"></div>' +
              '<div class="pl-list__eq">' +
                '<div class="eq">' +
                  '<div class="eq__bar"></div>' +
                  '<div class="eq__bar"></div>' +
                  '<div class="eq__bar"></div>' +
                  '<div class="eq__bar"></div>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="song_block pl-list__title">{title}</div>' +
          '</li>',
          // settings
          settings = {
            volume: 1,
            changeDocTitle: true,
            confirmClose: true,
            autoPlay: false,
            buffered: true,
            notification: true,
            playList: []
          };
  
        function init(options) {
  
          if (!('classList' in document.documentElement)) {
            return false;
          }
  
          if (apActive || player === null) {
            return 'Player already init';
          }
  
          settings = extend(settings, options);
  
          // get player elements
          playBtn = player.querySelector('.play_btn');
          // playSvg = playBtn.querySelector('.glyphicon-play');
          // playSvgPath = playSvg.querySelector('path');
          prevBtn = player.querySelector('.prev_btn');
          nextBtn = player.querySelector('.next_btn');
          repeatBtn = player.querySelector('.repeat_btn');
          curTime = player.querySelector('.time_played');
          durTime = player.querySelector('.full_time');
          trackTitle = player.querySelector('.song_playing');
          progressBar = player.querySelector('.line_played');
          preloadBar = player.querySelector('.line_preload');
  
          playList = settings.playList;
  
          playBtn.addEventListener('click', playToggle, false);
          repeatBtn.addEventListener('click', repeatToggle, false);
  
          progressBar.closest('.progress-bar-wrapper').addEventListener('mousedown', handlerBar, false);
          progressBar.closest('.progress-bar-wrapper').addEventListener('mousemove', seek, false);
  
          document.documentElement.addEventListener('mouseup', seekingFalse, false);
  
          // volumeBar.closest('.volume').addEventListener('mousedown', handlerVol, false);
          // volumeBar.closest('.volume').addEventListener('mousemove', setVolume);
          // volumeBar.closest('.volume').addEventListener(wheel(), setVolume, false);
  
          // document.documentElement.addEventListener('mouseup', seekingFalse, false);
  
          prevBtn.addEventListener('click', prev, false);
          nextBtn.addEventListener('click', next, false);
  
          apActive = true;
  
          // Create playlist
          renderPL();
  
          // Create audio object
          audio = new Audio();
          audio.volume = settings.volume;
          audio.preload = 'auto';
  
          audio.addEventListener('error', errorHandler, false);
          audio.addEventListener('timeupdate', timeUpdate, false);
          audio.addEventListener('ended', doEnd, false);
  
          // volumeBar.style.height = audio.volume * 100 + '%';
          // volumeLength = volumeBar.css('height');
  
          if (settings.confirmClose) {
            window.addEventListener("beforeunload", beforeUnload, false);
          }
  
          if (isEmptyList()) {
            return false;
          }
          audio.src = playList[index].file;
          trackTitle.innerHTML = playList[index].title;
  
          if (settings.autoPlay) {
            audio.play();
            // playBtn.classList.add('is-playing');
            $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
            $('#npAction').text(function(i, text) {
              if (text === "PAUSED...") {
                return " ";
              }})
            plLi[index].classList.add('pl-list--current');
            notify(playList[index].title, {
              icon: playList[index].icon,
              body: 'Now playing'
            });
          }
        }
  
        function changeDocumentTitle(title) {
          if (settings.changeDocTitle) {
            if (title) {
              document.title = title;
            } else {
              document.title = docTitle;
            }
          }
        }
  
        function beforeUnload(evt) {
          if (!audio.paused) {
            var message = 'Music still playing';
            evt.returnValue = message;
            return message;
          }
        }
  
        function errorHandler(evt) {
          if (isEmptyList()) {
            return;
          }
          var mediaError = {
            '1': 'MEDIA_ERR_ABORTED',
            '2': 'MEDIA_ERR_NETWORK',
            '3': 'MEDIA_ERR_DECODE',
            '4': 'MEDIA_ERR_SRC_NOT_SUPPORTED'
          };
          audio.pause();
          curTime.innerHTML = '--';
          durTime.innerHTML = '--';
          progressBar.style.width = 0;
          preloadBar.style.width = 0;
          // playBtn.classList.remove('is-playing');
          $('#play_circle').addClass('glyphicon-play').removeClass('glyphicon-pause');
          $('#npAction').text(function(i, text) {
            if (text === "NOW PLAYING") {
              return "";
            }
          })
          // playSvgPath.setAttribute('d', playSvg.getAttribute('data-play'));
          plLi[index] && plLi[index].classList.remove('pl-list--current');
          changeDocumentTitle();
          // throw new Error('Houston we have a problem: ' + mediaError[evt.target.error.code]);
        }
  
        /**
         * UPDATE PL
         */
        function updatePL(addList) {
          if (!apActive) {
            return 'Player is not yet initialized';
          }
          if (!Array.isArray(addList)) {
            return;
          }
          if (addList.length === 0) {
            return;
          }
  
          var count = playList.length;
          var html = [];
          playList.push.apply(playList, addList);
          addList.forEach(function(item) {
            html.push(
              tplList.replace('{count}', count++).replace('{title}', item.title)
            );
          });
          // If exist empty message
          if (plUl.querySelector('.pl-list--empty')) {
            plUl.removeChild(pl.querySelector('.pl-list--empty'));
            audio.src = playList[index].file;
            trackTitle.innerHTML = playList[index].title;
          }
          // Add song into playlist
          plUl.insertAdjacentHTML('beforeEnd', html.join(''));
          plLi = pl.querySelectorAll('li');
        }
        
  
        /**
         *  PlayList methods
         */
        function renderPL() {
          var html = [];
  
          playList.forEach(function(item, i) {
            html.push(
              tplList.replace('{count}', i).replace('{title}', item.title)
            );
          });
  
          pl = create('div', {
            'className': 'player_playlist',
            'id': 'pl',
            'innerHTML': '<ul class="pl-ul">' + (!isEmptyList() ? html.join('') : '<li class="pl-list--empty">PlayList is empty</li>') + '</ul>'
          });
          
          plPlaylist.parentNode.insertBefore(pl, plPlaylist.nextSibling);
  
          plUl = pl.querySelector('.pl-ul');
          plLi = plUl.querySelectorAll('li');
  
          pl.addEventListener('click', listHandler, false);
        }
  
        function listHandler(evt) {
          evt.preventDefault();
  
          if (evt.target.matches('.pl-list__title') || evt.target.matches('.pl-list__track') || evt.target.matches('.pl-list__icon') || evt.target.matches('.pl-list__eq') || evt.target.matches('.eq')) {
            var current = parseInt(evt.target.closest('.pl-list').getAttribute('data-track'), 10);
            if (index !== current) {
              index = current;
              play(current);
            } else {
              playToggle();
            }
          } else {
            if (!!evt.target.closest('.pl-list__remove')) {
              var parentEl = evt.target.closest('.pl-list');
              var isDel = parseInt(parentEl.getAttribute('data-track'), 10);
  
              playList.splice(isDel, 1);
              parentEl.closest('.pl-ul').removeChild(parentEl);
  
              plLi = pl.querySelectorAll('li');
  
              [].forEach.call(plLi, function(el, i) {
                el.setAttribute('data-track', i);
              });
  
              if (!audio.paused) {
  
                if (isDel === index) {
                  play(index);
                }
  
              } else {
                if (isEmptyList()) {
                  clearAll();
                } else {
                  if (isDel === index) {
                    if (isDel > playList.length - 1) {
                      index -= 1;
                    }
                    audio.src = playList[index].file;
                    trackTitle.innerHTML = playList[index].title;
                    progressBar.style.width = 0;
                  }
                }
              }
              if (isDel < index) {
                index--;
              }
            }
          }
        }
  
        function plActive() {
          if (audio.paused) {
            plLi[index].classList.remove('pl-list--current');
            return;
          }
          var current = index;
          for (var i = 0, len = plLi.length; len > i; i++) {
            plLi[i].classList.remove('pl-list--current');
          }
          plLi[current].classList.add('pl-list--current');
        }
  
        /**
         * Player methods
         */
        function play(currentIndex) {
  
          if (isEmptyList()) {
            return clearAll();
          }
  
          index = (currentIndex + playList.length) % playList.length;
  
          audio.src = playList[index].file;
          trackTitle.innerHTML = playList[index].title;
  
          // Change document title
          changeDocumentTitle(playList[index].title);
  
          // Audio play
          audio.play();
  
          // Show notification
          notify(playList[index].title, {
            icon: playList[index].icon,
            body: 'Now playing',
            tag: 'music-player'
          });
  
          // Toggle play button
          playBtn.classList.add('is-playing');
         // playSvgPath.setAttribute('d', playSvg.getAttribute('data-pause'));
  
          // Set active song playlist
          plActive();
        }
  
        function prev() {
          play(index - 1);
        }
  
        function next() {
          play(index + 1);
        }
  
        function isEmptyList() {
          return playList.length === 0;
        }
  
        function clearAll() {
          audio.pause();
          audio.src = '';
          trackTitle.innerHTML = 'queue is empty';
          curTime.innerHTML = '--';
          durTime.innerHTML = '--';
          progressBar.style.width = 0;
          preloadBar.style.width = 0;
          playBtn.classList.remove('is-playing');
         // playSvgPath.setAttribute('d', playSvg.getAttribute('data-play'));
          if (!plUl.querySelector('.pl-list--empty')) {
            plUl.innerHTML = '<li class="pl-list--empty">PlayList is empty</li>';
          }
          changeDocumentTitle();
        }
  
        function playToggle() {
          if (isEmptyList()) {
            return;
          }
          if (audio.paused) {
  
            if (audio.currentTime === 0) {
              notify(playList[index].title, {
                icon: playList[index].icon,
                body: 'Now playing'
              });
            }
            changeDocumentTitle(playList[index].title);
  
            audio.play();
  
            playBtn.classList.add('is-playing');
           // playSvgPath.setAttribute('d', playSvg.getAttribute('data-pause'));
          } else {
            changeDocumentTitle();
            audio.pause();
            playBtn.classList.remove('is-playing');
            //playSvgPath.setAttribute('d', playSvg.getAttribute('data-play'));
          }
          plActive();
        }
  
        function volumeToggle() {
          if (audio.muted) {
            if (parseInt(volumeLength, 10) === 0) {
              volumeBar.style.height = settings.volume * 100 + '%';
              audio.volume = settings.volume;
            } else {
              volumeBar.style.height = volumeLength;
            }
            audio.muted = false;
           // volumeBtn.classList.remove('has-muted');
          } else {
            audio.muted = true;
            volumeBar.style.height = 0;
           // volumeBtn.classList.add('has-muted');
          }
        }
  
        function repeatToggle() {
          if (repeatBtn.classList.contains('is-active')) {
            repeating = false;
            repeatBtn.classList.remove('is-active');
          } else {
            repeating = true;
            repeatBtn.classList.add('is-active');
          }
        }
  
        function plToggle() {
         // plBtn.classList.toggle('is-active');
          pl.classList.toggle('h-show');
        }
  
        function timeUpdate() {
          if (audio.readyState === 0) return;
  
          var barlength = Math.round(audio.currentTime * (100 / audio.duration));
          progressBar.style.width = barlength + '%';
  
          var
            curMins = Math.floor(audio.currentTime / 60),
            curSecs = Math.floor(audio.currentTime - curMins * 60),
            mins = Math.floor(audio.duration / 60),
            secs = Math.floor(audio.duration - mins * 60);
          (curSecs < 10) && (curSecs = '0' + curSecs);
          (secs < 10) && (secs = '0' + secs);
  
          curTime.innerHTML = curMins + ':' + curSecs;
          durTime.innerHTML = mins + ':' + secs;
  
          if (settings.buffered) {
            var buffered = audio.buffered;
            if (buffered.length) {
              var loaded = Math.round(100 * buffered.end(0) / audio.duration);
              preloadBar.style.width = loaded + '%';
            }
          }
        }
  
        /**
         * TODO shuffle
         */
        function shuffle() {
          if (shuffle) {
            index = Math.round(Math.random() * playList.length);
          }
        }
  
        function doEnd() {
          if (index === playList.length - 1) {
            if (!repeating) {
              audio.pause();
              plActive();
              playBtn.classList.remove('is-playing');
              //playSvgPath.setAttribute('d', playSvg.getAttribute('data-play'));
              return;
            } else {
              play(0);
            }
          } else {
            play(index + 1);
          }
        }
  
        function moveBar(evt, el, dir) {
          var value;
          if (dir === 'horizontal') {
            value = Math.round(((evt.clientX - el.offset().left) + window.pageXOffset) * 100 / el.parentNode.offsetWidth);
            el.style.width = value + '%';
            return value;
          } else {
            if (evt.type === wheel()) {
              value = parseInt(volumeLength, 10);
              var delta = evt.deltaY || evt.detail || -evt.wheelDelta;
              value = (delta > 0) ? value - 10 : value + 10;
            } else {
              var offset = (el.offset().top + el.offsetHeight) - window.pageYOffset;
              value = Math.round((offset - evt.clientY));
            }
            if (value > 100) value = wheelVolumeValue = 100;
            if (value < 0) value = wheelVolumeValue = 0;
            volumeBar.style.height = value + '%';
            return value;
          }
        }
  
        function handlerBar(evt) {
          rightClick = (evt.which === 3) ? true : false;
          seeking = true;
          seek(evt);
        }
  
        function handlerVol(evt) {
          rightClick = (evt.which === 3) ? true : false;
          seeking = true;
          setVolume(evt);
        }
  
        function seek(evt) {
          if (seeking && rightClick === false && audio.readyState !== 0) {
            var value = moveBar(evt, progressBar, 'horizontal');
            audio.currentTime = audio.duration * (value / 100);
          }
        }
  
        function seekingFalse() {
          seeking = false;
        }
  
        function setVolume(evt) {
          evt.preventDefault();
          volumeLength = volumeBar.css('height');
          if (seeking && rightClick === false || evt.type === wheel()) {
            var value = moveBar(evt, volumeBar.parentNode, 'vertical') / 100;
            if (value <= 0) {
              audio.volume = 0;
              audio.muted = true;
             // volumeBtn.classList.add('has-muted');
            } else {
              if (audio.muted) audio.muted = false;
              audio.volume = value;
             // volumeBtn.classList.remove('has-muted');
            }
          }
        }
  
        function notify(title, attr) {
          if (!settings.notification) {
            return;
          }
          if (window.Notification === undefined) {
            return;
          }
          attr.tag = 'AP music player';
          window.Notification.requestPermission(function(access) {
            if (access === 'granted') {
              var notice = new Notification(title.substr(0, 110), attr);
              setTimeout(notice.close.bind(notice), 5000);
            }
          });
        }
  
        /* Destroy method. Clear All */
        function destroy() {
          if (!apActive) return;
  
          if (settings.confirmClose) {
            window.removeEventListener('beforeunload', beforeUnload, false);
          }
  
          playBtn.removeEventListener('click', playToggle, false);
         // volumeBtn.removeEventListener('click', volumeToggle, false);
          repeatBtn.removeEventListener('click', repeatToggle, false);
         // plBtn.removeEventListener('click', plToggle, false);
  
          progressBar.closest('.progress-container').removeEventListener('mousedown', handlerBar, false);
          progressBar.closest('.progress-container').removeEventListener('mousemove', seek, false);
          document.documentElement.removeEventListener('mouseup', seekingFalse, false);
  
          volumeBar.closest('.volume').removeEventListener('mousedown', handlerVol, false);
          volumeBar.closest('.volume').removeEventListener('mousemove', setVolume);
          volumeBar.closest('.volume').removeEventListener(wheel(), setVolume);
          document.documentElement.removeEventListener('mouseup', seekingFalse, false);
  
          prevBtn.removeEventListener('click', prev, false);
          nextBtn.removeEventListener('click', next, false);
  
          audio.removeEventListener('error', errorHandler, false);
          audio.removeEventListener('timeupdate', timeUpdate, false);
          audio.removeEventListener('ended', doEnd, false);
  
          // Playlist
          pl.removeEventListener('click', listHandler, false);
          pl.parentNode.removeChild(pl);
  
          audio.pause();
          apActive = false;
          index = 0;
  
          playBtn.classList.remove('is-playing');
          // playSvgPath.setAttribute('d', playSvg.getAttribute('data-play'));
          // volumeBtn.classList.remove('has-muted');
          // plBtn.classList.remove('is-active');
          repeatBtn.classList.remove('is-active');
  
          // Remove player from the DOM if necessary
          // player.parentNode.removeChild(player);
        }
  
        /**
         *  Helpers
         */
        function wheel() {
          var wheel;
          if ('onwheel' in document) {
            wheel = 'wheel';
          } else if ('onmousewheel' in document) {
            wheel = 'mousewheel';
          } else {
            wheel = 'MozMousePixelScroll';
          }
          return wheel;
        }
  
        function extend(defaults, options) {
          for (var name in options) {
            if (defaults.hasOwnProperty(name)) {
              defaults[name] = options[name];
            }
          }
          return defaults;
        }
  
        function create(el, attr) {
          var element = document.createElement(el);
          if (attr) {
            for (var name in attr) {
              if (element[name] !== undefined) {
                element[name] = attr[name];
              }
            }
          }
          return element;
        }
  
        function getTrack(index) {
          return playList[index];
        }
  
        Element.prototype.offset = function() {
          var el = this.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
          return {
            top: el.top + scrollTop,
            left: el.left + scrollLeft
          };
        };
  
        Element.prototype.css = function(attr) {
          if (typeof attr === 'string') {
            return getComputedStyle(this, '')[attr];
          } else if (typeof attr === 'object') {
            for (var name in attr) {
              if (this.style[name] !== undefined) {
                this.style[name] = attr[name];
              }
            }
          }
        };
  
        // matches polyfill
        window.Element && function(ElementPrototype) {
          ElementPrototype.matches = ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function(selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        }(Element.prototype);
  
        // closest polyfill
        window.Element && function(ElementPrototype) {
          ElementPrototype.closest = ElementPrototype.closest ||
            function(selector) {
              var el = this;
              while (el.matches && !el.matches(selector)) el = el.parentNode;
              return el.matches ? el : null;
            };
        }(Element.prototype);
  
        /**
         *  Public methods
         */
        return {
          init: init,
          update: updatePL,
          destroy: destroy,
          getTrack: getTrack
        };
  
      })();
  
      window.AP = AudioPlayer;
      
      
  
    })(window);
  
    // TEST: image for web notifications
    var iconImage = 'http://funkyimg.com/i/21pX5.png';
  
    window.AP.init({
      playList: [{
        'icon': iconImage,
        'title': '',
        'file': 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Hitman.mp3'
      }, {
        'icon': iconImage,
        'title': '',
        'file': 'https://a.clyp.it/zbh0qeyo.mp3'
      }, {
        'icon': iconImage,
        'title': '',
        'file': 'https://a.clyp.it/bthbgqcs.mp3'
      }, {
        'icon': iconImage,
        'title': '',
        'file': 'https://a.clyp.it/lygki3hx.mp3'
      }, {
        'icon': iconImage,
        'title': '',
        'file': 'https://a.clyp.it/enddsv44.mp3'
      }]
    });
  
  
    $(document).ready(function() {
      $(".pl-list__download").on("click", function() {
        var trackPlaying = $(this).closest(".pl-list");
        console.log(window.AP.getTrack(trackPlaying.attr("data-track")));
      });
    });
  
    (function() {
      $('.back_btn').on('click', function() {
        $('.player_playlist').toggleClass('playlist_on');
        $('.glyphicon-menu-left').toggleClass('back_btn_on');
        $('.waves').toggleClass('waves_up');
        $('.album_wrap').toggleClass('album_up');
        $('.song_playing').toggleClass('song_playing_up');
        $('.timeline_wrap').toggleClass('timeline_wrap_up');
        $('.player_btns').toggleClass('player_btns_up');
        $('.line_played').toggleClass('line_played_up');
        $('.full_line').toggleClass('full_line_up');
        $('.time_of_song').toggleClass('time_of_song_up');
        $('.progress-bar-pointer').toggleClass('progress-bar-pointer_up');
        $('.line_preload').toggleClass('line_preload_up');
      })
    })();
  
    (function() {
      $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $('.hamburger-menu').toggleClass('slide');
        $('.back_btn').toggleClass('slide');
        $('.nav_menu').toggleClass('open');
        $('.player_fade').toggleClass('player_fade_on');
      })
    })();
  
    (function() {
      $('.play_btn').on('click', function() {
        $('#play_circle').toggleClass('glyphicon-play').toggleClass('glyphicon-pause');
        $('#npAction').text(function(i, text) {
          return text === "" ? "" : "";
        })
      })
    })();
  
    (function() {
      $('.random_btn').on('click', function() {
        $('.random_btn').toggleClass('random_btn_on');
      })
    })();
  
    (function() {
      $('.repeat_btn').on('click', function() {
        $('.repeat_btn').toggleClass('repeat_btn_on');
  
      })
    })();
  
    // ???????? ????????? ??????
    function preventSelection(element) {
      var preventSelection = false;
  
      function addHandler(element, event, handler) {
        if (element.attachEvent)
          element.attachEvent('on' + event, handler);
        else
        if (element.addEventListener)
          element.addEventListener(event, handler, false);
      }
  
      function removeSelection() {
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        } else if (document.selection && document.selection.clear)
          document.selection.clear();
      }
  
      function killCtrlA(event) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        if (sender.tagName.match(/INPUT|TEXTAREA/i))
          return;
        var key = event.keyCode || event.which;
        if (event.ctrlKey && key == 'A'.charCodeAt(0)) // 'A'.charCodeAt(0) ????? ???????? ?? 65
        {
          removeSelection();
          if (event.preventDefault)
            event.preventDefault();
          else
            event.returnValue = false;
        }
      }
      // ?? ???? ???????? ????? ??????
      addHandler(element, 'mousemove', function() {
        if (preventSelection)
          removeSelection();
      });
      addHandler(element, 'mousedown', function(event) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
      });
     
      addHandler(element, 'mouseup', function() {
        if (preventSelection)
          removeSelection();
        preventSelection = false;
      });
    
      addHandler(element, 'keydown', killCtrlA);
      addHandler(element, 'keyup', killCtrlA);
    }
    preventSelection(document);
  });
  
  function checkTouchScreen() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('body').addClass('touch-screen');
      return true;
    } else {
      $('body').removeClass('touch-screen');
      return false;
    }
  }
  //https://codepen.io/MichaelMammoliti/pen/VYEWZg













// Main Music Function

function MusicPlayer() {
    return (
        <>
        {/* <AuthNavbar/> */}
        
        <div className="player" id="ap">
  <audio></audio>
  <div className="player_body">
    <div className="hamburger-menu">
      <div className="bar"></div>
    </div>
    <div className="nav_menu" id="navMenu">
      {/* <div className="nav_list">
        <div className="nav_item">
          <p></p>
          <a href="https://www.linkedin.com/in/vladislav-kubyshkin-b15b18128" target="_blank">Vladislav Kubyshkin</a>
        </div>
        <div className="nav_item">
          <p></p>
          <a href="https://dribbble.com/rezashintia" target="_blank">Reza Shintia Dewi</a>
        </div>
      </div> */}
    </div>

    {/* <div className="player_playlist" id="pl_playlist">
      <ul className="player_playlist_list jAudio--playlist">
        
   <div className="player_playlist_item">
          <div className="song_block">
            <h6>Song name</h6>
            <p>Song artist</p>
          </div>
          <div className="song_time">
            <div>0:00</div>
          </div>
        </div> 
        
      </ul>
    </div>  */}

    <div className="player_fade"></div>
    <div className="player_content">
      <div className="player_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2">
              <div className="back_btn"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></div>
            </div>
            <div className="col-xs-8">
              <div className="header_name text-center" id="nowPlay">
                <span id="npAction"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div className="album_wrap">
        <div className="no_album_img"><div className="jAudio--thumb"></div></div>
        
      </div>



      <div className="song_playing text-center">
   {/* <div className="song_name"><span id="npName">Hi Dribbble!</span></div>
        <div className="artist_name"><span id="npArtist">Reza Shintia Dewi</span></div>  */
        
        }

      </div>
      <div className="timeline_wrap">

   {/* <div className="timeline">
          <div className="line_played"></div>
          <div className="full_line"></div>
        </div>  */}

        <div className='timeline progress-bar-wrapper'>
          <div className='full_line'></div>
          <div className="line_preload"></div>
          <div className='line_played'>
            <span className='progress-bar-pointer'></span>
          </div>
        </div>

        <div className="time_of_song">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-2">
                <span className="time_played">00:00</span>
              </div>
              <div className="col-xs-2 col-xs-offset-8">
                <span className="full_time">00:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player_btns">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2">
              <div className="random_btn text-center" id="random"><span className="glyphicon glyphicon-random" aria-hidden="true"></span></div>
            </div>
            <div className="col-xs-2">
              <div className="prev_btn text-center" id="btnPrev" data-action='prev'><span className="glyphicon glyphicon-backward" aria-hidden="true"></span></div>
            </div>
            <div className="col-xs-3">
              <div className="play_btn text-center" id="play" data-action='play'>
                <span className="glyphicon glyphicon-play" id="play_circle" aria-hidden="true"></span>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="next_btn text-center" id="btnNext" data-action='next'><span className="glyphicon glyphicon-forward" aria-hidden="true"></span></div>
            </div>
            <div className="col-xs-2">
              <div className="repeat_btn text-center" id="repeat"><span className="glyphicon glyphicon-retweet" aria-hidden="true"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="waves">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 275 223.7" style={{enableBackground:'new 0 0 275 223.7'/*, space="preserve"*/}}>
       

        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="137.5" y1="-19.8534" x2="137.5" y2="92.9036">
          <stop  offset="0.104" style={{stopColor:'#FF8FCF', stopOpacity:'0' }}></stop>
          <stop  offset="1" style={{stopColor:'#FF8FCF', stopOpacity:'0.5' }}></stop>
        </linearGradient>
        <path className="st0" d="M258.3,68c-21.8-6.7-21.5-47.8-31-48.3c-15.4-0.9-26.7,107.3-47.7,108c-16.6,0.6-26.8-67-46.7-66.3
          c-14.7,0.5-20,37.9-31.3,37.3c-18.2-0.9-24-98.7-36-98.7C54.7,0,49.5,82,36,82.3C25.4,82.6,18,32.1,8.3,33C3.2,33.5,0.7,47.8,0,51.7
          v172h275v-158C270.3,67.9,265,70,258.3,68z"/>
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="137.5" y1="26.8924" x2="137.5" y2="157.8649">
          <stop  offset="0" style={{stopColor:'#33D4FA',stopOpacity:'0'}}></stop>
          <stop  offset="1" style={{stopColor:'#33D4FA', stopOpacity:'0.7'}}></stop>
        </linearGradient>
        <path className="st1" d="M261.8,94.7c-19.3,3.2-28.2-24.1-48.5-24.3c-22.5-0.2-29.2,33.3-47.3,32.2c-24.6-1.5-32.5-64.7-52-64.2
          C98.1,38.8,92.6,81,77.3,80.8c-16.6-0.2-25.5-50.3-36-49C29.8,33.3,29.8,95.4,17,96.5c-4.7,0.4-7-7.8-17-9.8v137h275V87.4
          C271.7,90.5,267.5,93.7,261.8,94.7z"/>
        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="137.5" y1="6.0051" x2="137.5" y2="144.9296">
          <stop  offset="3.960396e-02" style={{stopColor:'#33D4FA',stopOpacity:'0'}}></stop>
          <stop  offset="1" style={{stopColor:'#00B2FA'}}> </stop>
        </linearGradient>
        <path className="st2" d="M275,223.7V87.8c-6.2,4.4-15.4,9.1-26,8.9c-29.2-0.7-36.9-39.1-61.2-38.7c-22.1,0.4-29.1,32.4-46,30.3
          c-22.8-2.8-26.7-63.5-42.2-63.7c-16.5-0.1-25.2,68.9-42,68.5c-13.7-0.3-22.4-46.7-32.5-45c-4.3,0.8-8.1,10.3-10.7,16.8
          C12.3,70.5,11.7,74.4,8,79c-2.7,3.4-5.8,5.4-8,6.7v138H275z"/>
        </svg>
    </div>
  </div>
</div>

{/* <div id="preloader">
  <div id="status">
     <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  </div>
</div> */}



        </>
    )
}
export default MusicPlayer;