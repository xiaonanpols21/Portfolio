"use client";
import { useEffect, useRef } from 'react';
import Image from "next/image";
import styles from "./scrollGallery.module.scss";

export default function ScrollGallery({ data }) {
    const ulRef = useRef(null);

    // Begin met de 2e card
    useEffect(() => {
        if (ulRef.current) {
            const liElement = ulRef.current.querySelector('li');
            const gap = parseInt(window.getComputedStyle(ulRef.current).gap, 10);
            ulRef.current.scrollLeft = liElement.clientWidth + gap;
        }
    }, []);
    
    return (
        <section className={styles.section}>
            <h3 className="visually-hidden">Mobiele slider</h3>
            <ul ref={ulRef}>
                {data.map((item, key) => (
                    <li key={key}>
                        <Image
                            src={item.url}
                            width={300}
                            height={260}
                            alt={item.alt}
                        />
                        
                        {item.verified && <div className="verified"></div>}
                    </li>
                ))}
            </ul>
        </section>
    );
}
