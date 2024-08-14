import Image from "next/image";

import styles from "./header.module.scss";

export default function Header() {
    return (
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
        </header>
    )
}