/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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

        // Table-specific colors
        tableBackground: "var(--color-table-background)",
        tableHeader: "var(--color-table-header)",
        tableRowOdd: "var(--color-table-row-odd)",
        tableRowEven: "var(--color-table-row-even)",
        tableTextHeader: "var(--color-table-text-header)",
        tableTextBody: "var(--color-table-text-body)",
        tableHover: "var(--color-table-hover)",

        // AI Photo Editor Page Colors
        apePrimary: "var(--color-ape-primary)",
        apeSecondary: "var(--color-ape-secondary)",
        apeBackground: "var(--color-ape-background)",
        apeTColor: "var(--color-ape-text)",
        apeTGray: "var(--color-ape-text-gray)",
        apeSurface: "var(--color-ape-surface)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
