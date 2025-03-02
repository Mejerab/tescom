import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import Footer2 from "./Home2/Footer2";
import { useEffect } from "react";
import AOS from "aos";

const ErrorPage = () => {
    useEffect(()=>{
        AOS.init({
            delay: 200,
            duration: 700,
            once: true
        })
        AOS.refresh()
    }, [])
    return (
        <div className="font text-[#181E27]">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">404 Error</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/nothing'>Error Page</Link></p>
                </div>
            </section>
            <section id="error">
                <div className="text-center font-bold  max-w-[1320px] mx-auto px-4 py-28">
                    <h3 data-aos='fade-down' className="text-[56px] bg-gradient-to-br bg-clip-text text-transparent from-[#DC5DDE] via-[#FC252C] to-[#FAA365]">Sorry!</h3>
                    <h4 className="text-[25px] text-[#333931]">The Page You're Looking for Can't Be Found</h4>
                    <button className="w-fit mt-8 btn-md btn banner-btn relative overflow-hidden tra sora rounded-full border-2 px-12 text-[15px] hover:text-white font-medium bg-white h-[59px]"><span className="z-[100]">Back To Home</span></button>
                    <img className="w-fit mx-auto mt-6" src="https://i.ibb.co.com/MnHf1Z2/Image.png" alt="" />
                </div>
            </section>
            <footer>
                <Footer2 />
            </footer>
        </div>
    );
};

export default ErrorPage;