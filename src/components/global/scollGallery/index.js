import Image from "next/image";

import styles from "./scrollGallery.module.scss";

export default function ScrollGallery() {
    return (
        <section className={styles.section}>
            <ul>
                <li>
                    <Image
                        src="/img/xiao.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                </li>
                <li>
                    <Image
                        src="/img/xiao.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                    <div className={styles.verified}></div>
                </li>
                <li>
                    <Image
                        src="/img/xiao.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                </li>
            </ul>
        </section>
    )
}