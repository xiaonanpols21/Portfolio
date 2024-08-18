import Image from "next/image";
import Divider from "../divider";
import Navigation from "../navigation";
import Socials from "../socials";

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
                    <Navigation/>
                </nav>
            </header>

            <section className={styles.openMenu}>
                <h2 className="visually-hidden">Open menu</h2>
                <Navigation/>
                <Divider/>
                <Socials/>
                <p>© 2024 XIAO</p>
            </section>

           




        </>
    )
}