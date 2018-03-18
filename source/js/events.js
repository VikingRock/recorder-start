'use strict';

var newRec = document.querySelector('.recordings__new.icon');

newRec.addEventListener('click', createNewRec);

function createNewRec() {
  window.open('http://org.eclipse.ui.intro/runAction?pluginId=com.workfusion.studio.recorder.ui.model.editor&class=com.workfusion.studio.recorder.ui.model.proxy.action.StartRecordingCommandHandlerProxy');
}
