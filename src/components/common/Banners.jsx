import bannerBike from "../../assets/bannerBike.png"
import BannerResponsive from "../../assets/BannerResponsive.png"
import styles from "./styles/Banner.module.css"
import Circles from "./Circles"
export default function Banners({ }) {
    return (
        <div className={styles.container}>
                <Circles className={styles.icons} />
        </div>
    )
}