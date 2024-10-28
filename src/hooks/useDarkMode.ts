import { useLocalStorage } from "usehooks-ts"
import { useEffect } from "react"

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage<boolean>("darkMode", true)

    useEffect(() => {
        if (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches) {
            setDarkMode(false)
        }
    }, [])

    return {
        darkMode: darkMode,
        setDarkMode: (state: boolean) => setDarkMode(state),
    }
}