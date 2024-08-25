import DarkMode from "../darkMode";
import ScrollGallery from "../global/scollGallery";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.section}>
            <DarkMode/>
            <ScrollGallery/>
        </section>
    )
}