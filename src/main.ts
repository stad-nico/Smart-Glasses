import { app, BrowserWindow } from "electron";

function createWindow(): BrowserWindow {
	return new BrowserWindow({
		width: 800,
		height: 600,
	});
}

app.whenReady().then(() => {
	createWindow();
});
