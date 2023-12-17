import { bestSellers, products } from "../../api"
import styles from "./styles/BestSellers.module.css"
import ProductsMap from "./ProductsMap"
export default function BestSellers ({}) {
    return (
        <div className={styles.bestsellers}>
            <p className={styles.title}> {bestSellers} </p>
            <ProductsMap />
        </div>
    )
}