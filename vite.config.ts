import {defineConfig} from 'vite'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'
import path from 'node:path';
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: { // 这里修改了配置文件入口
        index: resolve(__dirname, 'web/index.html')
      },
    },
  },
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: {},
    }),
  ]
})
