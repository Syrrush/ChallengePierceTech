import { products, buyButton } from "../../api"
import Product from "./Product"
import styles from "./styles/ProductsMap.module.css"
import Arrows from "./Arrows"
import washingMachine from "../../assets/washingMachine.png"

export default function ProductsMap({ }) {
    return (

        <div className={styles.products}>
            {products.Products?.map((prod) => (
                <Product
                    key={prod.id}
                    image={washingMachine}
                    brand={prod.brand}
                    productName={prod.name}
                    price={prod.price}
                    buyButton={buyButton}
                />
            ))}
            <Arrows />
        </div>

    )
}