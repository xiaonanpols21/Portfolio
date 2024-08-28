import styles from "./heroGallery.module.scss";

export default function HeroGallery() {
    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Desktop gallerij</h3>
            <div className={styles.imgBig}>
                <div className={`verified ${styles.verified}`}></div>
            </div>

            <fieldset className={styles.fieldset}>
                <legend className="visually-hidden">Gallerij knoppen</legend>
                <label>
                    <input type="radio" name="header-gallery" value="img-1" defaultChecked={true} />
                    <span></span>
                </label>
                <label>
                    <input type="radio" name="header-gallery" value="img-2"/>
                    <span></span>
                </label>
                <label>
                    <input type="radio" name="header-gallery" value="img-3"/>
                    <span></span>
                </label>
            </fieldset>
            
        </section>
    )
}