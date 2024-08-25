import data from "../../../public/data/data.json";
import DarkMode from "../darkMode";
import ScrollGallery from "../global/scollGallery";

import styles from "./hero.module.scss";

console.log(data)

export default function Hero() {
    return (
        <section className={styles.section}>
            <DarkMode/>
            <ScrollGallery/>
        </section>
    )
}