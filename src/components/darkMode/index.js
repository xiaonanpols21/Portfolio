import styles from "./darkMode.module.scss";

export default function DarkMode() {
    return (
        <label className={styles.label}>
            <input type="checkbox"/>
            <span></span>
        </label>
    ) 
}