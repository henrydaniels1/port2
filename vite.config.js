import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( {

  // resolve: {
  //   alias: {
  //     '@material-tailwind/react': 'path_to_node_modules/@material-tailwind/react'
  //   },
  // },

  plugins: [react()],
})
