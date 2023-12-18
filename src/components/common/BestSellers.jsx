import { bestSellers, products, bestSellersResponsive } from "../../api"
import styles from "./styles/BestSellers.module.css"
import ProductsMap from "./ProductsMap"
export default function BestSellers({ }) {
    return (
        <section className={styles.bestsellers}>
            <p className={styles.title} desktop={bestSellers} responsive={bestSellersResponsive}></p>
            <ProductsMap />
            <div className={styles.responsive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="109" height="10" viewBox="0 0 109 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="#DC1E0F" />
                    <circle cx="38" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5" />
                    <circle cx="71" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5" />
                    <circle cx="104" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5" />
                </svg>
            </div>
        </section>
    )
}