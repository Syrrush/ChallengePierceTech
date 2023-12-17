import Banners from "../common/Banners";
import BestSellers from "../common/BestSellers";
import Categories from "../common/Categories";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import PaymentOptions from "../common/PaymentOptions";
import Trends from "../common/Trends";

export default function Home({ }) {
    return (
        <div>
            <NavBar />
            <Banners />
            <Trends />
            <Categories />
            <BestSellers />
            <PaymentOptions />
            <Footer />
        </ div>
    )
}