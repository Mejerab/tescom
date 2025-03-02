import { Link } from "react-router-dom";
import Fqa2 from "./Home2/Fqa2";
import Footer2 from "./Home2/Footer2";
import Navbar2 from "./Home2/Navbar2";
import Testimonial2 from "./Home2/Testimonial2";

const AboutUs = () => {
    return (
        <div className="font">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">about us</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/about-us'>About Us</Link></p>
                </div>
            </section>
            <section id="all-products" className="py-32 xl:max-w-[1320px] mx-auto px-4 text-[#181E27]">
                <h3 data-aos='fade-up' className="text-3xl lg:text-[40px] lg:w-[60rem] uppercase font-bold leading-[48px]">Your Trusted Partner <span className="text-white p-1 pb-0 rounded-lg bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365]">for Cutting-Edge</span> Product Solutions That Propel Businesses Forward.</h3>
                <div className="mt-16 flex lg:flex-row flex-col justify-between gap-x-7">
                    <div data-aos='fade-right' className="lg:w-1/2">
                        <div className="flex gap-x-7">
                            <button data-aos='fade-right' data-aos-duration={700} className="rounded-[8px] bg-[#ffe1e1] w-fit hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">
                                <p className="sora font-medium text-[15px] px-[20px] lg:px-[40px] py-[25px] tra">Our Mission</p>
                            </button>
                            <button data-aos='fade-right' data-aos-duration={1400} className="rounded-[8px] bg-[#ffe1e1] w-fit hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">
                                <p className="sora font-medium text-[15px] px-[20px] lg:px-[43px] py-[25px] tra">Our Vision</p>
                            </button>
                            <button data-aos='fade-right' data-aos-duration={2100} className="rounded-[8px] bg-[#ffe1e1] w-fit hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">
                                <p className="sora font-medium text-[15px] px-[20px] lg:px-[40px] py-[25px] tra">Who We Are</p>
                            </button>
                        </div>
                        <div className="sora text-[17px] leading-[32px] text-[#333931] grid gap-y-6 mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa. Elit eget gravida cum sociis natoque penatibus et magnis.</p>
                            <p>Dui sapien eget mi proin sed libero enim sed faucibus. In hac habitasse platea dictumst quisque sagittis purus. Morbi tincidunt ornare massa eget egestas purus.</p>
                            <button className="w-fit btn-md btn banner-btn relative overflow-hidden tra sora rounded-full border-2 px-12 text-[15px] hover:text-white font-medium bg-white h-[59px]"><span className="z-[100]">All Products</span></button>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="lg:w-1/2 lg:mt-0 mt-7">
                        <div className="about-card relative 2xl:w-[678px] rounded-[18px] bg-gradient-to-bl from-[#DC5DDE] via-[#FC252C] to-[#FAA365]">
                            <div className="py-7 2xl:pl-12 pl-5 text-white">
                                <div className="bg-[url(https://i.ibb.co.com/1s6b1PB/Ellipse-20-1.png)] w-[100px] h-[100px] bg-no-repeat relative">
                                    <div className="w-[82px] absolute top-[0.55rem] left-[0.55rem] h-[82px] rounded-full bg-white">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img className="one tra" src="https://i.ibb.co.com/FDJVPtm/Mask-group-4.png" alt="" />
                                            <img className="two tra hidden" src="https://i.ibb.co.com/L1nCnb5/Mask-group-5.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-[19px] my-4 font-bold">Long Battery Life</h4>
                                <p className="sora text-[15px] leading-[28px] underline w-48">“Enjoy extended listening sessions with headphones that offer a long-lasting battery.”</p>
                                <button className="w-fit btn-sm btn mt-4 banner-btn relative overflow-hidden tra sora rounded-full border-0 hover:border-0 h-[41px] px-4 text-[15px] hover:text-white font-medium bg-white"><span className="z-[100]">Buy Now</span></button>
                            </div>
                            <img className="absolute top-16 left-44" src="https://i.ibb.co.com/kH3wm55/Vector.png" alt="" />
                            <img className="h-[613.5px] rounded-br-[18px] lg:block hidden absolute bottom-0 right-0" src="https://i.ibb.co.com/h8dSVVS/image-68-1-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="font">
                <Testimonial2 />
            </section>
            <section id="faq">
                <Fqa2 />
            </section>
            <footer>
                <Footer2 />
            </footer>
        </div>
    );
};

export default AboutUs;