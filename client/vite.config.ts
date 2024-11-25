import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //! looks like vite has no in-build error boundary
  // server: {
  //   hmr: {
  //     overlay: false   // Disable the Vite error overlay
  //   } 
  // }
 
})
