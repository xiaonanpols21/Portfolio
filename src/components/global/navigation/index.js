import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <li><Link href="">Over mij</Link></li>
            <li><Link href="">Mijn projecten</Link></li>
            <li><Link href="">Ervaringen</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
    )
}