import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  // Gunakan undefined sebagai inisial agar tidak terjadi mismatch saat hidrasi
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    // 1. Cek local storage atau preferensi sistem
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
  }, []);

  // 2. Efek untuk sinkronisasi class dark di dokumen
  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Mencegah render ikon sebelum theme terdeteksi (opsional, agar tidak flicker)
  if (!theme) return <div className="w-10 h-10" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-500 overflow-hidden group"
    >
      {/* Animasi Ikon: Sun ke Moon dengan efek rotasi & slide */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          className={`h-5 w-5 text-yellow-500 transition-all duration-500 absolute ${
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`} 
        />
        <Moon 
          className={`h-5 w-5 text-sky-400 transition-all duration-500 absolute ${
            theme === "light" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`} 
        />
      </div>
      
      {/* Background Hover Effect */}
      <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
    </Button>
  );
};

export default ThemeToggle;