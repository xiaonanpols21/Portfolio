import Image from "next/image";

import styles from "./aboutGallery.module.scss";

export default function AboutGallery() {
    return (
        <ul className={styles.ul}>
            <li>
                <div>
                    <Image
                        src="/img/h-1.jpg"
                        width={274}
                        height={237}
                        alt="Picture of the author"
                    />
                </div>
            </li>
            <li>
                <div>
                    <Image
                        src="/img/h-1.jpg"
                        width={274}
                        height={237}
                        alt="Picture of the author"
                    />
                </div>
            </li>
            <li>
                <div>
                    <Image
                        src="/img/h-1.jpg"
                        width={274}
                        height={237}
                        alt="Picture of the author"
                    />
                </div>
            </li>
            <li>
                <div>
                    <Image
                        src="/img/h-1.jpg"
                        width={274}
                        height={237}
                        alt="Picture of the author"
                    />
                </div>
            </li>
        </ul>
    )
}