import Customization from "./Customization";
import Faq from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header/Header";
import OverView from "./OverView";
import PreOrder from "./PreOrder";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Home1 = () => {
    return (
        <div className="overflow-hidden text-[#181E27] font">
            <Header />
            <div className="space-y-32">
                <Features />
                <Customization />
                <OverView />
                <Products />
                <Testimonials />
                <PreOrder />
                <Faq />
            </div>
            <Footer />
        </div>
    );
};

export default Home1;