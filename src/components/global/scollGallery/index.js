"use client";
import { useEffect, useRef } from 'react';

import Image from "next/image";

import styles from "./scrollGallery.module.scss";

export default function ScrollGallery() {
    const ulRef = useRef(null);

    useEffect(() => {
        if (ulRef.current) {
            const liElement = ulRef.current.querySelector('li');
            const gap = parseInt(window.getComputedStyle(ulRef.current).gap);
            ulRef.current.scrollLeft = liElement.clientWidth + gap;
        }
    }, []);

    return (
        <section className={styles.section}>
            <ul ref={ulRef}>
                <li>
                    <Image
                        src="/img/h-1.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                </li>
                <li>
                    <Image
                        src="/img/h-1.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                    <div className={styles.verified}></div>
                </li>
                <li>
                    <Image
                        src="/img/h-1.jpg"
                        width={300}
                        height={260}
                        alt="Xiao Nan Pols"
                    />
                </li>
            </ul>
        </section>
    )
}