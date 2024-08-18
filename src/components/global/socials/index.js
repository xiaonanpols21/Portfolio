import Image from "next/image";
import Link from "next/link";

import styles from "./socials.module.scss";

export default function Socials() {
    return (
        <ul className={styles.ul}>
            <li>
                <Link href="">
                    <Image
                        src="/img/icons/github.svg"
                        width={26}
                        height={25}
                        alt="Github"
                    />
                    <span>xiaonanpols21</span>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Image
                        src="/img/icons/github.svg"
                        width={26}
                        height={25}
                        alt="Github"
                    />
                    <span>xiaonanpols21</span>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Image
                        src="/img/icons/github.svg"
                        width={26}
                        height={25}
                        alt="Github"
                    />
                    <span>xiaonanpols21</span>
                </Link>
            </li>
        </ul>
    )
}