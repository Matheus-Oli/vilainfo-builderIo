import { useLanguage } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 rounded-full border-gray-300 hover:border-green-500 dark:border-gray-600 dark:hover:border-green-400 transition-colors"
          aria-label="Toggle language"
        >
          <Languages className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem
          onClick={() => setLanguage("pt")}
          className={`cursor-pointer ${language === "pt" ? "bg-green-50 dark:bg-green-900/20" : ""}`}
        >
          <span className="mr-2">🇧🇷</span>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "bg-green-50 dark:bg-green-900/20" : ""}`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
