'use strict';

//var Test = require('test');
var TIMEOUT = 10000;

function getReviews() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'test.json');
  xhr.setRequestHeader('Content-Type', 'application/javascript');
  xhr.timeout = TIMEOUT;

  xhr.onload = function(evt) {
    var stringData = evt.target.response;

    try {
      var recent = JSON.parse(stringData);
      recent.recordings.forEach(function(rec) {
        renderRecent(rec);
      });
    } catch (e) {
      console.log('wrong JSON format');
    }
  };

  xhr.onloadstart = function() {
    console.log('load started');
  };

  xhr.ontimeout = addError;
  xhr.onerror = addError;

  function addError() {
    console.log('connection error');
  }

  xhr.send();
}

function renderRecent(content) {
  var recordingTemplate = document.getElementById('recent-template');
  var element = {};

  if ('content' in recordingTemplate) {
    element = recordingTemplate.content.childNodes[1].cloneNode(true);
  } else {
    element = recordingTemplate.childNodes[1].cloneNode(true);
  }

  element.querySelector('a').textContent = content.name;
  element.querySelector('a').setAttribute('href', content.path);

  var recentList = document.querySelector('.recordings__list');
  recentList.appendChild(element);
}

getReviews();
