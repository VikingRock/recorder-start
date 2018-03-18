'use strict';

var TIMEOUT = 10000;
var recentList = document.querySelector('.recordings__list');
var infoItem = recentList.querySelector('p');
var dataJsonUrl = 'http://localhost:8080/test.json';

function getRecordings() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataJsonUrl);
  xhr.setRequestHeader('Content-Type', 'application/javascript');
  xhr.timeout = TIMEOUT;

  xhr.onload = function(evt) {
    var stringData = evt.target.response;

    try {
      var recent = JSON.parse(stringData);

      recent.recordings.forEach(function(rec) {
        renderRecent(rec, recentList);
      });
      infoItem.classList.add('invisible');

    } catch (e) {
      if(stringData === '') {
        showInfo('No recent recordings found');
      } else {
        showInfo('Error while getting recordings');
      }
    }
  };

  xhr.onloadstart = function() {
    showInfo('load started');
  };

  xhr.ontimeout = showInfo('Connection error');
  xhr.onerror = showInfo('Connection error');
  xhr.send();
}

function showInfo(text) {
  infoItem.innerText = text;
}

function renderRecent(content, list) {
  var recordingTemplate = document.getElementById('recent-template');
  var element = {};

  if ('content' in recordingTemplate) {
    element = recordingTemplate.content.childNodes[1].cloneNode(true);
  } else {
    element = recordingTemplate.childNodes[1].cloneNode(true);
  }

  element.querySelector('a').textContent = content.name;
  element.querySelector('a').setAttribute('href', content.path);

  list.appendChild(element);
}

getRecordings();
