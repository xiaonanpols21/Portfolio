import Image from "next/image";
import Divider from "../divider";
import Navigation from "../navigation";
import Socials from "../socials";

import styles from "./header.module.scss";

export default function Header() {
    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Header</h3>
            <header>
                <Image
                    src="/img/logo.svg"
                    width={120}
                    height={35}
                    alt="Xiao Logo"
                />

                <label aria-label="Menu knop">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav>
                    <Navigation/>
                </nav>
            </header>

            <section className={styles.openMenu}>
                <h3 className="visually-hidden">Open menu</h3>
                <Navigation/>
                <Divider/>
                <Socials/>
                <p>© 2024 XIAO</p>
            </section>
        </section>
    )
}