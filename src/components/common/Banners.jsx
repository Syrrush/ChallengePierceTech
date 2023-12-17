import bannerBike from "../../assets/bannerBike.png"
import styles from "./styles/NavBar.module.css"

export default function Banners({ }) {
    return (
        <div>
            <img className={styles.image} src={bannerBike} />
            <svg xmlns="http://www.w3.org/2000/svg" width="111" height="12" viewBox="0 0 111 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="white" />
                <circle cx="39" cy="6" r="5.25" stroke="white" strokeWidth="1.5" />
                <circle cx="72" cy="6" r="5.25" stroke="white" strokeWidth="1.5" />
                <circle cx="105" cy="6" r="5.25" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
    )
}