import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full border-gray-300 hover:border-green-500 dark:border-gray-600 dark:hover:border-green-400 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      ) : (
        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
