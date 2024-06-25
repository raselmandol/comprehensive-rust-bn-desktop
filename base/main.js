const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920, //init width
    height: 1080, //init height
    webPreferences: { //set pref--> for Node.js APIs inst
      nodeIntegration: true, //Allows the use of Node.js APIs in this web app
    },
  });

  //set the entry point
  mainWindow.loadFile('index.html'); //For loading the main HTML file 

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
