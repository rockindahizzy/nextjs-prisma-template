import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

module.exports = defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        alias: {
            '@': '/src',
        },
    },
})
