const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');


function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        frame: false,
        transparent: true, 
        resizable: false,
        webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
    })
    win.loadFile("index.html");

}

ipcMain.on('close-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});
app.whenReady().then(createWindow);