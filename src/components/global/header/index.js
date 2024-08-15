import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Image
                    src="/img/logo.svg"
                    width={120}
                    height={35}
                    alt="Xiao Logo"
                />

                <button>
                    <Image
                        src="/img/icons/menu.svg"
                        width={15}
                        height={12}
                        alt="Menu"
                    />
                </button>

                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="">Over mij</Link></li>
                        <li><Link href="">Mijn projecten</Link></li>
                        <li><Link href="">Ervaringen</Link></li>
                        <li><Link href="">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <section className={styles.openMenu}>
                <h2 className="visually-hidden">Open menu</h2>
                <ul>
                    <li><Link href="">Over mij</Link></li>
                    <li><Link href="">Mijn projecten</Link></li>
                    <li><Link href="">Ervaringen</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
            </section>
        </>
    )
}