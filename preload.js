const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('Electron', {
  closeWindow: () => ipcRenderer.send('close-window')
});
