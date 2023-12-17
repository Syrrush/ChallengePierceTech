import styles from "./styles/Categories.module.css"
import { categoriesMessage, categoriasLeftImageText, categoriasCenterTopImageText, categoriasCenterBottomImageText, categoriasRightImageText } from "../../api"

export default function Categories({ }) {
    return (
        <div className={styles.GridCategories}>
            <p className={styles.category}>{categoriesMessage}</p>
            <div className={styles.container}>
                <figure className={styles.Zapatillas}>
                    <p className={styles.categoryName} >{categoriasLeftImageText}</p>
                </figure>
                <figure className={styles.Futbol}>
                    <p className={styles.categoryName}>{categoriasCenterTopImageText}</p>
                </figure>
                <figure className={styles.Calzas}>
                    <p className={styles.categoryName}>{categoriasCenterBottomImageText}</p>
                </figure>
                <figure className={styles.Pelotas}>
                    <p className={styles.categoryName}>{categoriasRightImageText}</p>
                </figure>
            </div>
        </div>
    )
}