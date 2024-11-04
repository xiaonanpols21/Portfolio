import Image from "next/image";

import styles from "./aboutGallery.module.scss";

export default function AboutGallery({ data }) {
    return (
        <ul className={styles.ul}>
            {data.map((item, key) => (
                <li key={key}>
                    <div>
                        <Image
                            src={item.url}
                            width={274}
                            height={237}
                            alt={item.alt}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}