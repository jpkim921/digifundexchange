import styles from "./layout.module.css"

export default Layout = ({children}) => (
    <div className={styles.container}>{children}</div>
)