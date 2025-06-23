import React from "react";

const DarkModeToggle: React.FC = () => {
  // Check current theme on initial render
  const [isDark, setIsDark] = React.useState(
    () => document.documentElement.classList.contains("dark")
  );

  // Apply theme changes and persist
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setIsDark((prev) => !prev)}
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-md hover:bg-accent transition-colors"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
