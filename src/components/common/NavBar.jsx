import { useState } from "react";
import {
    title, account, navBarOption1, navBarOption2, navBarOption3, navBarOption4, navBarOption5
} from "../../api"
import SearchBar from "../../assets/search.png"
import cart from "../../assets/cart.png"
import profile from "../../assets/profile.png"
import offer from "../../assets/offer.png"
import styles from "./styles/NavBar.module.css"
import NavBarResponsive from "./NavBarResponsive"

export default function NavBar({ }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleChangeNav(prevState) {
        setIsOpen(!prevState)
    }


    return (
        <div className={styles.header}>

            <header className={styles.headerTop}>
                <h1 className={styles.title}>{title}</h1>
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

            {/* -------------------------------------------------------------------------------------------- */}
            <div className={styles.headerResponsive}>
                <header className={styles.headerTopResponsive}>
                    {isOpen && <NavBarResponsive handleChangeNav={handleChangeNav} />}
                    <div onClick={() => handleChangeNav()} className={styles.burgerMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M16.4706 13.1765C16.8331 13.1767 17.1817 13.3163 17.4441 13.5665C17.7065 13.8167 17.8626 14.1583 17.88 14.5204C17.8974 14.8825 17.7749 15.2375 17.5377 15.5117C17.3006 15.7859 16.967 15.9584 16.6061 15.9934L16.4706 16H1.41176C1.04921 15.9998 0.700617 15.8602 0.438224 15.61C0.175832 15.3598 0.0197534 15.0182 0.00233011 14.6561C-0.0150932 14.2939 0.107475 13.939 0.344636 13.6648C0.581797 13.3905 0.91537 13.218 1.27624 13.1831L1.41176 13.1765H16.4706ZM16.4706 6.58824C16.845 6.58824 17.2041 6.73697 17.4689 7.00173C17.7336 7.26649 17.8824 7.62558 17.8824 8C17.8824 8.37442 17.7336 8.73351 17.4689 8.99827C17.2041 9.26303 16.845 9.41177 16.4706 9.41177H1.41176C1.03734 9.41177 0.678254 9.26303 0.413496 8.99827C0.148739 8.73351 0 8.37442 0 8C0 7.62558 0.148739 7.26649 0.413496 7.00173C0.678254 6.73697 1.03734 6.58824 1.41176 6.58824H16.4706ZM16.4706 0C16.845 0 17.2041 0.148739 17.4689 0.413496C17.7336 0.678254 17.8824 1.03734 17.8824 1.41176C17.8824 1.78619 17.7336 2.14528 17.4689 2.41003C17.2041 2.67479 16.845 2.82353 16.4706 2.82353H1.41176C1.03734 2.82353 0.678254 2.67479 0.413496 2.41003C0.148739 2.14528 0 1.78619 0 1.41176C0 1.03734 0.148739 0.678254 0.413496 0.413496C0.678254 0.148739 1.03734 0 1.41176 0H16.4706Z" fill="#5E5E5E" />
                        </svg>
                    </div>
                    <div className={styles.groupResponsive}>
                        <h1 className={styles.title}>Mi Tienda</h1>
                        <div className={styles.config}>
                            <div className={styles.accountGroup}>
                                <img src={profile} />
                                <span className={styles.account}>{account}</span>
                            </div>
                            <img src={cart} />
                        </div>
                    </div>
                </header>
                <div className={styles.headerTopRightResponsive}>
                    <div className={styles.searchBox}>
                        <div className={styles.inputContainer}>
                            <div className={styles.lens}>
                                <img className={styles.searchLens} src={SearchBar} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------------------------------------------------- */}


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