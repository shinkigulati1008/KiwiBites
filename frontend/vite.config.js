import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        rewrite: (path) => {
          console.log('Proxying request:', path);
          return path.replace(/^\/api/, '');
        }
      }
    }
  }
});
