import styles from "./heroGallery.module.scss";

export default function HeroGallery() {
    return (
        <section className={styles.section}>
            <h2 className="visually-hidden">Desktop gallerij</h2>
            <div className={styles.imgBig}></div>

            <fieldset>
                <legend className="visually-hidden">Gallery knoppen</legend>
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