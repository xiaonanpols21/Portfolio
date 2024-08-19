import Link from "next/link";

import styles from "./navigation.module.scss";

export default function Navigation() {
    return (
        <ul className={styles.ul}>
            <li><Link href="">Over mij</Link></li>
            <li><Link href="">Mijn projecten</Link></li>
            <li><Link href="">Ervaringen</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
    )
}