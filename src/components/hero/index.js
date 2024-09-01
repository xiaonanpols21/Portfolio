import data from "../../../public/data/data.json";
import DarkMode from "../darkMode";
import ScrollGallery from "../global/scollGallery";
import HeroGallery from "../heroGallery";
import Projecten from "../projecten";

import styles from "./hero.module.scss";

export default function Hero() { 
    const imgData = data.headerImages;

    return (
        <>
            <section className={styles.section}>
                <h3 className="visually-hidden">Begin pagina</h3>
                <DarkMode/>
                <ScrollGallery data={imgData} />
                <HeroGallery/>

                <div className={styles.headerContent}>
                    <h1>Creative developer</h1>
                    <p>lorem ipsum dolor sit</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Orci velit id id volutpat. Feugiat pharetra non mi pharetra quis.</p>
                    <button>Mijn projecten</button>
                </div>
            
            </section>
            <Projecten/>
        </>
    )
}