const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true, //Allows the use of Node.js APIs in this web app
    },
  });

  mainWindow.loadFile('index.html'); //For loading the main HTML file

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
