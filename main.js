const { app, BrowserWindow } = require("electron");

const firstWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  firstWindow();
});
