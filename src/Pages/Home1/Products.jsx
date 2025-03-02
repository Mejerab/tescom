import { BsCart4 } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Products = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-4">
            <div className="flex lg:flex-row flex-col gap-y-7 justify-between pb-12">
                <h3 data-aos='fade-right' className="text-[40px] font-bold leading-[48px] uppercase">popular products</h3>
                <div data-aos='fade-left' className="space-x-5">
                    <button id="prev" className="btn tra h-12 w-12 rounded-full bg-[#FFF4F3] hover:text-[#fff] hover:bg-[#FF8A71]"><FaLongArrowAltLeft className="text-[23px]" /></button>
                    <button id="next" className="btn tra h-12 w-12 rounded-full bg-[#FFF4F3] hover:text-[#fff] hover:bg-[#FF8A71]"><FaLongArrowAltRight className="text-[23px]" /></button>
                </div>
            </div>
            <div>
                <div className="flex justify-between mx-auto gap-x-2">
                    <Swiper
                        slidesPerView={window.innerWidth>720?4:1}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            prevEl: '#prev',
                            nextEl: '#next',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={500} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/dPTWWSy/geo-chierchia-Yl-Zaf9z-VNp-I-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-9">Spark Cycle - sk892</h5>
                                <p className="text-[15px] sora">$580.95  <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$690.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={1000} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 ml-2 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/jHm3MYT/himiway-bikes-jv-Nc-dw-IISg-unsplash-1-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-9">Electra Bike - xd638</h5>
                                <p className="text-[15px] sora">$620.76 <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$730.02</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={1500} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center mr-2 w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/PZMn2LG/himiway-bikes-nf-BUBGOhhu-M-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-[2.6rem]">Zenith eCycles - es237</h5>
                                <p className="text-[15px] sora">$426.82  <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$573.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={2000} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/2kbkmR6/unbox-guy-5xl-Lza-P0h-KY-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-[4.5rem]">ElectriX - Volt83</h5>
                                <p className="text-[15px] sora">$794.20 <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$368.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={500} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/dPTWWSy/geo-chierchia-Yl-Zaf9z-VNp-I-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-9">Spark Cycle - sk892</h5>
                                <p className="text-[15px] sora">$580.95  <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$690.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={1000} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 ml-2 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/jHm3MYT/himiway-bikes-jv-Nc-dw-IISg-unsplash-1-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-9">Electra Bike - xd638</h5>
                                <p className="text-[15px] sora">$620.76 <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$730.02</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={1500} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center mr-2 w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/PZMn2LG/himiway-bikes-nf-BUBGOhhu-M-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-[2.6rem]">Zenith eCycles - es237</h5>
                                <p className="text-[15px] sora">$426.82  <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$573.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' data-aos-duration={2000} className="border border-[#E3E4E5] mx-auto rounded-2xl p-8 px-12 text-center w-fit pro-card tra h-[400px]">
                            <img src="https://i.ibb.co.com/2kbkmR6/unbox-guy-5xl-Lza-P0h-KY-unsplash-1.png" alt="" />
                            <div className="grid gap-y-2">
                                <h5 className="text-[17px] font-bold uppercase mt-[4.5rem]">ElectriX - Volt83</h5>
                                <p className="text-[15px] sora">$794.20 <span className="mx-1">/</span>  <span className="text-[#BCBCBC] line-through">$368.00</span></p>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><IoSearch className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><FaRegHeart className="text-lg" /></button>
                                    <button className="rounded-full h-10 w-10 tra bg-[#FFF4F3] flex justify-center items-center"><BsCart4 className="text-lg" /></button>
                                </div>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Products;