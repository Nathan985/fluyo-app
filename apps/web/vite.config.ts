import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: false,
    },
    plugins: [react(), viteConfigPaths()],
});
