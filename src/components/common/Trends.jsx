import { trends, buyButton } from "../../api"
import styles from "./styles/Trends.module.css"
import ProductsMap from "./ProductsMap"

export default function Trends({ }) {
    return (
        <div className={styles.bgTrends}>
            <span className={styles.trend}>{trends}</span>
            <ProductsMap />
        </div>
    )
}