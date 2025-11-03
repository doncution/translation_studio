import { app, BrowserWindow } from 'electron';
import { join } from 'node:path';

/**
 * Creates the main application window and loads the renderer HTML file.
 *
 * The window is intentionally minimal to keep the project skeleton lightweight.
 */
const createMainWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  const rendererPath = join(__dirname, '..', 'public', 'index.html');
  void mainWindow.loadFile(rendererPath);

  return mainWindow;
};

app.on('ready', () => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
