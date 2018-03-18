'use strict';

var newRec = document.querySelector('.recordings__new.icon');
var openRec = document.querySelector('.recordings__open.icon');
var checkboxShow = document.getElementById('show');

newRec.addEventListener('click', createNewRec);
openRec.addEventListener('click', openExistingRec);
checkboxShow.addEventListener('click', switchWelcome);

function createNewRec() {
  window.open('http://org.eclipse.ui.intro/runAction?pluginId=com.workfusion.studio.recorder.ui.model.editor&class=com.workfusion.studio.recorder.ui.model.proxy.action.StartRecordingCommandHandlerProxy');
}

function openExistingRec() {
  window.open('http://org.eclipse.ui.intro/runAction?pluginId=com.workfusion.studio.recorder.ui.model.editor&class=com.workfusion.studio.recorder.ui.model.proxy.action.OpenRecordingCommandHandlerProxy');
}

function switchWelcome() {
  var xhr = new XMLHttpRequest();
  xhr.timeout = 10000;
  xhr.open('GET', 'http://org.eclipse.ui.intro/runAction?pluginId=com.workfusion.studio.recorder.ui.model.editor&class=com.workfusion.studio.recorder.ui.model.proxy.action.ShowWelcome=' + this.checked);
  xhr.send();
}
