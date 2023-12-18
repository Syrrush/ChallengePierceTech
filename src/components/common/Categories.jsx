import styles from "./styles/Categories.module.css"
import { categoriesMessage, categoriasLeftImageText, categoriasCenterTopImageText, categoriasCenterBottomImageText, categoriasRightImageText } from "../../api"

export default function Categories({ }) {
    return (
        <section className={styles.GridCategories}>
            <h2 className={styles.category}>{categoriesMessage}</h2>
            <div className={styles.container}>
                <figure className={styles.Zapatillas}>
                    <p className={styles.categoryName} >{categoriasLeftImageText}</p>
                </figure>
                <figure className={styles.Futbol}>
                    <p className={styles.categoryName}>{categoriasCenterTopImageText}</p>
                </figure>
                <figure className={styles.Pelotas}>
                    <p className={styles.categoryName}>{categoriasRightImageText}</p>
                </figure>
                <figure className={styles.Calzas}>
                    <p className={styles.categoryName}>{categoriasCenterBottomImageText}</p>
                </figure>
            </div>
            <div className={styles.responsive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <ellipse cx="4.26068" cy="3.5" rx="3.57977" ry="3.5" fill="black" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5" />
                </svg>
            </div>
        </section>
    )
}