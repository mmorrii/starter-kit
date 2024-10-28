import { Outlet } from "react-router-dom"
import Navigation from "./Navigation.tsx"
import styles from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation />

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout