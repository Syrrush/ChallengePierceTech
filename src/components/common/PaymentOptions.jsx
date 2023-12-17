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
        <div className={styles.PaymentOptions}>
            <figure className={styles.paymentGroup}>
                <img className={styles.image} src={payment1} />
                <div className={styles.groupText}>
                    <p className={styles.textTop}>{PayOptLeftTitle}</p>
                    <p className={styles.textBottom}>{PayOptLeftSub}</p>
                </div>
            </figure>
            <figure className={styles.paymentGroup}>
                <img className={styles.image} src={payment2} />
                <div className={styles.groupText}>
                    <p className={styles.textTop}>{PayOptCenterTitle}</p>
                    <p className={styles.textBottom}>{PayOptCenterSub}</p>
                </div>
            </figure>
            <figure className={styles.paymentGroup}>
                <img className={styles.image} src={payment3} />
                <div className={styles.groupText}>
                    <p className={styles.textTop}>{PayOptRightTitle}</p>
                    <p className={styles.textBottom}>{PayOptRightSub}</p>
                </div>
            </figure>
        </div>
    )
}