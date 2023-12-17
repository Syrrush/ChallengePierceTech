import washingMachine from "../../assets/washingMachine.png"
import styles from "./styles/Product.module.css"
import { productName, price, buyButton } from "../../api"

export default function Product({ image, brand, productName, price, buyButton }) {
    return (
        <figure className={styles.product}>
            <img className={styles.image} src={image} />
            <p>{brand}</p>
            <p className={styles.name}>{productName}</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.btn}>{buyButton}</button>
        </figure>
    )
}