import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DarkModeToggle from "./components/ui/dark-mode-toggle";

// Helper: apply the theme class to <html>
const applyThemeClass = (theme: "light" | "dark") => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Determine preferred theme (localStorage > system preference)
const getPreferredTheme = (): "light" | "dark" => {
  const stored = localStorage.getItem("theme") as "light" | "dark" | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// Apply theme before first paint
applyThemeClass(getPreferredTheme());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <App />
      {/* Floating theme toggle available on every route */}
      <DarkModeToggle />
    </>
  </React.StrictMode>
);
