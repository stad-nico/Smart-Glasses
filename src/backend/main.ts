import { app, BrowserWindow } from "electron";

function createWindow(): BrowserWindow {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		fullscreen: true,
	});

	// window.maximize();
	window.loadFile("build/index.html");

	return window;
}

app.whenReady().then(() => {
	createWindow();
});
