/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        tColor: "var(--color-text)",
        muted: "var(--text-muted)",
        bColor: "var(--color-border)",
        surface: "var(--color-surface)",
        input: "var(--color-input)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
