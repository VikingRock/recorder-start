'use strict';

var newRec = document.querySelector('.recordings__new.icon');
var openRec = document.querySelector('.recordings__open.icon');
var checkboxShow = document.getElementById('show');

var baseUrl = 'http://org.eclipse.ui.intro/runAction?pluginId=com.workfusion.studio.recorder.ui.model.editor&class=com.workfusion.studio.recorder.ui.model.proxy.action.'
var newRecUrl = baseUrl + 'StartRecordingCommandHandlerProxy';
var openRecUrl = baseUrl + 'OpenRecordingCommandHandlerProxy';
var showWelcomeUrl = baseUrl + 'ShowWelcome';

newRec.addEventListener('click', createNewRec);
openRec.addEventListener('click', openExistingRec);
checkboxShow.addEventListener('click', switchWelcome);

function createNewRec() {
  window.open(newRecUrl, '_self');
}

function openExistingRec() {
  window.open(openRecUrl, '_self');
}

function switchWelcome() {
  var xhr = new XMLHttpRequest();
  xhr.timeout = 10000;
  xhr.open('GET', showWelcomeUrl + this.checked);
  xhr.send();
}
