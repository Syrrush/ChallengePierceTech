import washingMachine from "../../assets/washingMachine.png"
import styles from "./styles/Product.module.css"
import { productName, price, buyButton } from "../../api"

export default function Product({ image, brand, productName, price, buyButton }) {
    return (
        <article className={styles.productContainer}>
        <figure className={styles.product}>
            <img className={styles.image} src={image} />
        </figure>
        <div className={styles.name}>
            <p>{brand}</p>
            <p>{productName}</p>
        </div>
            <p className={styles.price}>{price}</p>
            <button className={styles.btn}>{buyButton}</button>
        </article>
    )
}