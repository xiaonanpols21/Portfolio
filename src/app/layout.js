import { Poppins } from "next/font/google";
import Head from 'next/head';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: "Xiao Nan Pols || Portfolio",
    description: "Creative developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title}</title>å
            </Head>
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    );
}
