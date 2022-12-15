import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const env = import.meta.env.VITE_FRONTEND_URL

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // server: {
    //     origin: 'http://localhost:5000'
    //   },
    //  build: {
    //     // generate manifest.json in outDir
    //     manifest: true,
    //     rollupOptions: {
    //       // overwrite default .html entry
    //       input: '/path/to/main.js'
    //     }
    //   }
})
// plugins: [react()]