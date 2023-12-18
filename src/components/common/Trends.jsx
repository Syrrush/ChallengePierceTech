import { trends, buyButton } from "../../api"
import styles from "./styles/Trends.module.css"
import ProductsMap from "./ProductsMap"
import Circles from "./Circles"
export default function Trends({ }) {
    return (
        <section className={styles.bgTrends}>
            <h2 className={styles.trend}>{trends}</h2>
            <ProductsMap />
            <div className={styles.responsive}>
                <Circles />
            </div>
        </section>
    )
}