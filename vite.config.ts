import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "")

    return {
        plugins: [react()],
        base: env._BASE,
        css: {
            devSourcemap: true,
            postcss: "./postcss.config.js",
            modules: {
                localsConvention: "camelCaseOnly",
            },
        },
        build: {
            cssMinify: false,
        },
        envPrefix: "_"
    }
})
