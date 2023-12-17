import styles from "./styles/Footer.module.css"
import { footerOptions, regretButton, powered, title, branches, footerContact} from "../../api"
import Pierce from "../../assets/Pierce.png"
import Vtex from "../../assets/vtex.png"
export default function Footer({ }) {
    return (
        <div className={styles.allFooter}>
            <div className={styles.leftSide}>
                <p className={styles.conditions}>{footerOptions}</p>
                <div className={styles.btnregret}>
                    <p className={styles.regret}>{regretButton}</p>
                </div>
                <div className={styles.images}>
                    <div className={styles.groupFooter}>
                        <span className={styles.powered}>{powered}</span>
                        <img className={styles.pierce} src={Pierce} />
                    </div>
                    <img className={styles.vtex} src={Vtex} />
                </div>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
            </div>
            <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <g clip-path="url(#clip0_2_1073)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.89494 0.0541214 3.89071 0.933518 2.40174 2.45633C0.912763 3.97915 0.0529187 6.02891 0 8.18182C0.0746255 9.5038 0.431266 10.7931 1.04489 11.9591C1.06355 11.9955 1.084 12.0318 1.10622 12.0682C5.944 20 7.38489 20 8 20C8.95956 20 10 19.3091 12.4636 15.7864C13.7484 13.95 14.848 12.1455 14.8942 12.0682C14.9164 12.0318 14.9364 11.9955 14.9551 11.9591C15.5686 10.793 15.9253 9.50379 16 8.18182C15.9471 6.02891 15.0872 3.97915 13.5983 2.45633C12.1093 0.933518 10.1051 0.0541214 8 0ZM13.7622 11.35C13.7622 11.35 9.32756 18.6364 8 18.6364C6.68356 18.6364 2.23778 11.35 2.23778 11.35C1.71766 10.3725 1.4092 9.29199 1.33333 8.18182C1.33333 6.37352 2.03571 4.63931 3.28595 3.36065C4.5362 2.08199 6.23189 1.36364 8 1.36364C9.76811 1.36364 11.4638 2.08199 12.714 3.36065C13.9643 4.63931 14.6667 6.37352 14.6667 8.18182C14.5909 9.292 14.2824 10.3725 13.7622 11.35ZM8 4.09091C7.29678 4.09091 6.60935 4.30419 6.02464 4.70376C5.43993 5.10333 4.98421 5.67121 4.71509 6.33567C4.44598 7.00013 4.37557 7.73128 4.51276 8.43667C4.64996 9.14205 4.98859 9.79002 5.48584 10.2986C5.9831 10.8071 6.61664 11.1535 7.30635 11.2938C7.99606 11.4341 8.71096 11.362 9.36065 11.0868C10.0103 10.8116 10.5656 10.3455 10.9563 9.74754C11.347 9.14954 11.5556 8.44648 11.5556 7.72727C11.5544 6.76322 11.1794 5.83899 10.5129 5.1573C9.84632 4.47561 8.94263 4.09211 8 4.09091ZM8 10C7.56049 10 7.13084 9.86671 6.7654 9.61698C6.39996 9.36725 6.11513 9.01231 5.94693 8.59702C5.77874 8.18174 5.73473 7.72475 5.82048 7.28388C5.90622 6.84301 6.11787 6.43806 6.42865 6.12022C6.73943 5.80237 7.1354 5.58591 7.56647 5.49821C7.99754 5.41052 8.44435 5.45554 8.85041 5.62755C9.25646 5.79957 9.60353 6.09087 9.84771 6.46462C10.0919 6.83837 10.2222 7.27777 10.2222 7.72727C10.2222 8.33004 9.9881 8.90811 9.57135 9.33433C9.1546 9.76055 8.58937 10 8 10Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_1073">
                            <rect width="16" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className={styles.branch}>{branches}</span>
                </div>
                <p className={styles.footerContact}>
                    {footerContact}
                </p>
            </div>
        </div>
    )
}