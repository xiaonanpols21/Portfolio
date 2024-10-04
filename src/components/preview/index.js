import Image from "next/image";
import Link from "next/link";

import styles from "./preview.module.scss";

export default function Preview() {
    return (
        <section className={styles.section}>
            <h3>Preview projecten</h3>
            <section>
                <article>
                    <Link href="">
                        <h4>TDMB Dating App</h4>
                        <div>
                            <Image
                                src="/img/thumbnail.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </Link>
                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>
                <article>
                    <Link href="">
                        <h4>TDMB Dating App</h4>
                        <div>
                            <Image
                                src="/img/thumbnail.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </Link>
                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>
                <article>
                    <Link href="">
                        <h4>TDMB Dating App</h4>
                        <div>
                            <Image
                                src="/img/thumbnail.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </Link>
                    <label className={styles.label}>
                        <input type="checkbox"/>
                        <span></span>
                    </label>
                </article>


                
            </section>
        </section>
        
    )
}