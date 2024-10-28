import { NavLink } from "react-router-dom"
import styles from "./NotFoundPage.module.css"
import Icon from "../components/Icon.tsx"

const NotFoundPage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1>This page is not found</h1>
                <hr />
                <div>
                    <NavLink to="/" className="link">
                        <span>Back to home page</span>
                        <Icon name="arrowRight" size={18} color="#37E29D" />
                    </NavLink>
                </div>
            </section>
        </main>
    )
}

export default NotFoundPage