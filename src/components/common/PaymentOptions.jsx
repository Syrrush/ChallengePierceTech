import {
    PayOptLeftTitle
    , PayOptLeftSub
    , PayOptCenterTitle
    , PayOptCenterSub
    , PayOptRightTitle
    , PayOptRightSub
} from "../../api"
import payment1 from "../../assets/payment1.png"
import payment2 from "../../assets/payment2.png"
import payment3 from "../../assets/payment3.png"
import styles from "./styles/PaymentOptions.module.css"
export default function PaymentOptions({ }) {
    return (
        <section className={styles.PaymentOptions}>
            <div className={styles.PaymentOptionsContainer}>
                <figure className={styles.paymentGroup}>
                    <img className={styles.image} src={payment1} />
                    <div className={styles.groupText}>
                        <h3 className={styles.textTop}>{PayOptLeftTitle}</h3>
                        <p className={styles.textBottom}>{PayOptLeftSub}</p>
                    </div>
                </figure>
                <figure className={styles.paymentGroup}>
                    <img className={styles.image} src={payment2} />
                    <div className={styles.groupText}>
                        <h3 className={styles.textTop}>{PayOptCenterTitle}</h3>
                        <p className={styles.textBottom}>{PayOptCenterSub}</p>
                    </div>
                </figure>
                <figure className={styles.paymentGroup}>
                    <img className={styles.image} src={payment3} />
                    <div className={styles.groupText}>
                        <h3 className={styles.textTop}>{PayOptRightTitle}</h3>
                        <p className={styles.textBottom}>{PayOptRightSub}</p>
                    </div>
                </figure>
            </div>
            <div className={styles.responsive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="7" viewBox="0 0 45 7" fill="none">
                    <circle cx="3.5" cy="3.5" r="3.5" fill="black" />
                    <circle cx="22.5" cy="3.5" r="3.25" stroke="black" strokeWidth="0.5" />
                    <circle cx="41.5" cy="3.5" r="3.25" stroke="black" strokeWidth="0.5" />
                </svg>
            </div>
        </section>
    )
}