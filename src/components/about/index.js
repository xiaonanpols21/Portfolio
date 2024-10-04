import data from "../../../public/data/data.json";
import ScrollGallery from "../global/scollGallery";
import Socials from "../global/socials";
import AboutGallery from "../aboutGallery";

import styles from "./about.module.scss";

export default function About() {
    const imgData = data.headerImages;

    return (
        <section className={styles.section}>
            <div>
                <h2>Over mij</h2>
                <ScrollGallery data={imgData} />
                <AboutGallery/>
                <p>Lorem ipsum dolor sit amet consectetur. Massa amet augue euismod a. Risus lorem habitant tempus sit cras dolor semper at praesent. Enim et sit diam adipiscing. Dignissim pellentesque morbi nisi pulvinar purus lectus. Lorem ipsum dolor sit amet consectetur. Massa amet augue euismod a. Risus lorem habitant tempus sit cras dolor semper at praesent. Enim et sit diam adipiscing. Dignissim pellentesque morbi nisi pulvinar purus lectus</p>
                <Socials/>
            </div>
            
        </section>
    )
}