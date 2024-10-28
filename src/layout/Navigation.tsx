import { NavLink } from "react-router-dom"
import ToggleButton from "../components/ToggleButton.tsx"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.image}>
                    <img src="/vite.svg" alt="Vite Logo" />
                </div>
                <h1>React Starter Kit</h1>
            </div>

            <nav className={styles.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <ToggleButton />
        </header>
    )
}

export default Navigation