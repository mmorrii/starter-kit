import { useDarkMode } from "../hooks/useDarkMode.ts"
import styles from "./ToggleButton.module.css"
import clsx from "clsx"
import Icon from "./Icon.tsx"

const ToggleButton = () => {
    const { darkMode, setDarkMode } = useDarkMode()

    if (darkMode) {
        document.documentElement.setAttribute("data-theme", "dark")
    } else {
        document.documentElement.setAttribute("data-theme", "light")
    }

    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)} className={styles.container}>
                <span className={clsx(styles.slider, { [styles.dark]: darkMode })}></span>
                <span className={clsx(styles.icon, styles.sun)}><Icon name="sun" size="100%" color="black" /></span>
                <span className={clsx(styles.icon, styles.moon)}><Icon name="moon" size="100%" /></span>
            </button>
        </>
    )
}

export default ToggleButton