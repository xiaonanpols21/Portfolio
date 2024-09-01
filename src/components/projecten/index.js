import Image from "next/image";

import styles from "./projecten.module.scss";

export default function Projecten() {
    return (
        <section className={styles.section}>
            <h2>Preview projecten</h2>
            <section>
                <article>
                    <h3>TDMB Dating App</h3>
                    <Image
                        src="/img/thumbnail.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>
                <article>
                    <h3>TDMB Dating App</h3>
                    <Image
                        src="/img/thumbnail.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>
                <article>
                    <h3>TDMB Dating App</h3>
                    <Image
                        src="/img/thumbnail.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>
            </section>
        </section>
        
    )
}