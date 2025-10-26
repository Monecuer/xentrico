import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8B5CF6",
          gold: "#FFD700"
        }
      }
    },
  },
  plugins: [],
}
export default config
