import Image from "next/image";
import Link from "next/link";

import styles from "./socials.module.scss";

export default function Socials() {
    return (
        <ul className={`socials-about ${styles.ul}`}>
            <li>
                <Link href="https://github.com/xiaonanpols21" target="_blank">
                    <figure>
                        <Image
                            src="/img/icons/github.svg"
                            width={26}
                            height={25}
                            alt="Github"
                        />
                        <figcaption>xiaonanpols21</figcaption>
                    </figure>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/xiao-nan-pols-b839951b5/" target="_blank">
                    <figure>
                        <Image
                            src="/img/icons/linkedin.svg"
                            width={26}
                            height={25}
                            alt="Github"
                        />
                        <figcaption>Xiao Nan Pols</figcaption>
                    </figure>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/xiaonanpols21/" target="_blank">
                    <figure>
                        <Image
                            src="/img/icons/insta.svg"
                            width={26}
                            height={25}
                            alt="Github"
                        />
                        <figcaption>xiaonanpols21</figcaption>
                    </figure>
                </Link>
            </li>
        </ul>
    )
}