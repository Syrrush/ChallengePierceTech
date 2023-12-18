import {
    title, navBarOption1, navBarOption2, navBarOption3, navBarOption4, navBarOption5
} from "../../api"
import styles from "./styles/NavBarResponsive.module.css"
import offer from "../../assets/offer.png"

export default function NavBarResponsive({ handleChangeNav }) {
    return (
        <nav className={styles.header}>
            <div className={styles.headerResponsive}>
                <h1 className={styles.title}>{title}</h1>
                <div onClick={handleChangeNav} className={styles.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                    </svg>
                </div>
            </div>
            <ul className={styles.navList}>
                <li className={styles.NavOption}>{navBarOption1}</li>
                <li className={styles.NavOption}>{navBarOption2}</li>
                <li className={styles.NavOption}>{navBarOption3}</li>
                <li className={styles.NavOption}>{navBarOption4}</li>
                <li className={styles.NavOptionRed} >{navBarOption5}
                    <img src={offer} />
                </li>
            </ul>
        </nav>
    )
}