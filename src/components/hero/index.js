import data from "../../../public/data/data.json";
import DarkMode from "../darkMode";
import ScrollGallery from "../global/scollGallery";

import styles from "./hero.module.scss";

export default function Hero() { 
    const imgData = data.headerImages;

    return (
        <section className={styles.section}>
            <DarkMode/>
            <ScrollGallery data={imgData} />
        </section>
    )
}