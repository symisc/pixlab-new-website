"use strict";

const themeToggler = document.querySelectorAll(".theme-toggler");

// Apply system theme based on user preference or saved theme
const applySystemTheme = () => {
  const themeIcons = document.querySelectorAll(".theme-toggler i");
  const isDarkSchemePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  // Apply theme and update icons
  const applyTheme = (isDark) => {
    document.body.classList.toggle("dark-theme", isDark);
    themeIcons.forEach((icon) => {
      icon.classList.replace(isDark ? "uil-moon" : "uil-sun", isDark ? "uil-sun" : "uil-moon");
    });
  };

  applyTheme(savedTheme ? savedTheme === "dark" : isDarkSchemePreferred);
};

// Toggle Theme
themeToggler?.forEach((themeButton) => {
  themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update icons based on the theme
    themeButton.querySelectorAll("i").forEach((icon) => {
      icon.classList.replace(isDarkMode ? "uil-moon" : "uil-sun", isDarkMode ? "uil-sun" : "uil-moon");
    });
  });
});

applySystemTheme();
