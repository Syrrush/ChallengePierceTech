import {
    title, account, navBarOption1, navBarOption2, navBarOption3, navBarOption4, navBarOption5
} from "../../api"
import SearchBar from "../../assets/search.png"
import cart from "../../assets/cart.png"
import profile from "../../assets/profile.png"
import offer from "../../assets/offer.png"
import styles from "./styles/NavBar.module.css"

export default function NavBar({ }) {

    return (
        <div className={styles.header}>
            <header className={styles.headerTop}>
                <h1 className={styles.title}>Mi Tienda</h1>

                <div className={styles.headerTopRight}>
                    <div className={styles.searchBox}>
                        <div className={styles.inputContainer}>
                            <div className={styles.lens}>
                                <img className={styles.searchLens} src={SearchBar} />
                            </div>
                        </div>
                    </div>


                    <div className={styles.config}>
                        <div className={styles.accountGroup}>
                            <img src={profile} />
                            <span className={styles.account}>{account}</span>
                        </div>
                        <img src={cart} />
                    </div>
                </div>


            </header>
            <nav className={styles.navigation} >
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
        </div>
    )
}