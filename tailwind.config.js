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

        // App UI/UX Code Page Colors
        aucPrimary: "var(--color-auc-primary)",

        // Annotate Page Colors
        annoPrimary: "var(--color-anno-primary)",
        annoSecondary: "var(--color-anno-secondary)",
        annoSurface: "var(--color-anno-surface)",

        // Mockup and Screenshot Editor Page Colors
        msePrimary: "var(--color-mse-primary)",
        mseSecondary: "var(--color-mse-secondary)",

        // Creative Toolbox Page Colors
        ctbPrimary: "var(--color-ctb-primary)",
        ctbSecondary: "var(--color-ctb-secondary)",

        // Image Background Removal Page Colors
        ibrPrimary: "var(--color-ibr-primary)",
        ibrSecondary: "var(--color-ibr-secondary)",
        ibrSurface: "var(--color-ibr-surface)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
