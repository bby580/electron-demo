import {app, BrowserWindow} from 'electron'
import path from "node:path";

// Vite 服务器地址，这里使用了web文件夹中的入口
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL+'web/'
app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 1100, height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  window.loadURL(VITE_DEV_SERVER_URL||'')
  window.show()
  window.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'f12') {
      if (window.webContents.isDevToolsOpened()) {
        window.webContents.closeDevTools()
      } else {
        window.webContents.openDevTools()
      }
      event.preventDefault()
    }

  })
})
