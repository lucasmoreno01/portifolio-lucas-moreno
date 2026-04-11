export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#111217",
        primary: "#3B82F6",
        secondary: "#8B5CF6",

        text: {
          DEFAULT: "#FFFFFF",
          muted: "#9CA3AF",
        },

        border: "#1F2937",
      },
    },
  },
  plugins: [],
}
