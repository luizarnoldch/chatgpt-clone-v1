"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="[&_svg]:size-4">
      {/* Muestra el ícono del Sol cuando el tema es light y el ícono de la Luna cuando es dark */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeButton