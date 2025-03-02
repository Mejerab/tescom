import { BsCart4 } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const HeadProducts = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-4 py-32">
            <h3 data-aos='fade-up' className="text-[38px] lg:text-[40px] text-center mx-auto leading-[48px] font-bold text-[#181E27] uppercase lg:w-[42rem]">Explore Wireless and Bluetooth <span className="p-2 pb-0 text-white rounded-lg bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365]">Headphones for</span> Ultimate Convenience</h3>
            <div className="flex justify-between gap-x-3 mt-20 mx-w-[1200px]">
                <Swiper
                    slidesPerView={window.innerWidth>720?4:1}
                    slidesPerGroup={1}
                    loop={true}
                    navigation={{
                        prevEl: '#prev-button',
                        nextEl: '#next-button',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={700} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/S0LW5Pm/kiran-ck-LSNJ-pltdu8-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Spark Cycle - sk892</h4>
                                <p className="sora text-[15px] text-[#181E27]">$580.95  /  <span className="text-[#BCBCBC] line-through">$690.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={1400} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/8Kngqv5/luke-peterson-l-UMj2-Zv5-HUE-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Electra Bike - xd638</h4>
                                <p className="sora text-[15px] text-[#181E27]">$620.76  / <span className="text-[#BCBCBC] line-through"> $730.02</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={2100} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/NsJxVjq/milena-trifonova-p-Hqt1-Ds-HCx0-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Zenith eCycles - es237</h4>
                                <p className="sora text-[15px] text-[#181E27]">$426.82  / <span className="text-[#BCBCBC] line-through"> $573.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={2800} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/xzrKy8J/maurice-lourens-5j-Axu-x08-Qo-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">ElectriX - Volt83</h4>
                                <p className="sora text-[15px] text-[#181E27]">$794.20  /  <span className="text-[#BCBCBC] line-through">$368.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={700} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/S0LW5Pm/kiran-ck-LSNJ-pltdu8-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Spark Cycle - sk892</h4>
                                <p className="sora text-[15px] text-[#181E27]">$580.95  /  <span className="text-[#BCBCBC] line-through">$690.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={1400} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/8Kngqv5/luke-peterson-l-UMj2-Zv5-HUE-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Electra Bike - xd638</h4>
                                <p className="sora text-[15px] text-[#181E27]">$620.76  / <span className="text-[#BCBCBC] line-through"> $730.02</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={2100} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/NsJxVjq/milena-trifonova-p-Hqt1-Ds-HCx0-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">Zenith eCycles - es237</h4>
                                <p className="sora text-[15px] text-[#181E27]">$426.82  / <span className="text-[#BCBCBC] line-through"> $573.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-up' data-aos-duration={2800} className="w-[307px] h-[415px] head-pro relative overflow-hidden tra rounded-[1000px] head-card mx-auto">
                        <div className="w-[299px] h-[400px] z-20 relative top-0.5 bg-white border rounded-[1000px] mx-auto">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img className="w-[144px] h-[160px]" src="https://i.ibb.co.com/xzrKy8J/maurice-lourens-5j-Axu-x08-Qo-unsplash-1.png" alt="" />
                                <h4 className="uppercase font-bold text-[17px] mt-12">ElectriX - Volt83</h4>
                                <p className="sora text-[15px] text-[#181E27]">$794.20  /  <span className="text-[#BCBCBC] line-through">$368.00</span></p>
                                <div className="flex gap-x-2 justify-center mt-3">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
            <div className="space-x-6 pt-12 flex justify-center">
                <button id="prev-button" className="btn tra border-0 h-12 w-12 rounded-full bg-[#FFF4F3] grad-btn relative overflow-hidden"><FaLongArrowAltLeft className="text-[23px] z-20" /></button>
                <button id="next-button" className="btn tra border-0 h-12 w-12 rounded-full bg-[#FFF4F3] grad-btn relative overflow-hidden"><FaLongArrowAltRight className="text-[23px] z-20" /></button>
            </div>
        </section>
    );
};

export default HeadProducts;