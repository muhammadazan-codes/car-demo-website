import { useEffect } from "react"
import { useTheme } from "../hooks/useTheme"

export function ThemeEffect() {
  const { theme } = useTheme()

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return null
}