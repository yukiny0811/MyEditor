'use strict';
const {app, BrowserWindow} = require("electron");

let mainWindow = null;

function createWindow(){
	mainWindow = new BrowserWindow({
		title: app.getName(),
		'overlay-scrollbars': false,
		"title-bar-style": "hidden-inset",
		"always-on-top": true,
		fullscreen: false,
		width: 1500,
		height: 900,
		webPreferences:{
			nodeIntegration: true
		}
	});
	mainWindow.loadFile("index.html");
	mainWindow.setFullScreen(true);
	mainWindow.show();
	mainWindow.on("closed", function(e){
		mainWindow = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", function(){
	if(process.platform !== "darwin"){
		app.quit();
	}
});

app.on("before-quit", function(e){
	
});

app.on("activate", function(){
	if(mainWindow === null){
		createWindow();
	}
});
