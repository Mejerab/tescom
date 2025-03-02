import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Testimonial2 = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/chBgZzc/Bg-2.png)] bg-cover bg-no-repeat">
            <div className="max-w-[1320px] mx-auto px-4 py-32">
                <div className="flex lg:flex-row flex-col gap-y-7 justify-between">
                    <h3 data-aos='fade-right' className="text-[40px] text-[#181E27] leading-[48px] font-bold uppercase lg:w-[31rem]"><span className="bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] p-1 pb-0 rounded-lg text-white">Inspiring</span> Stories of Customer <span className="bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] p-1 pb-0 rounded-lg text-white">Loyalty and</span> Satisfaction.</h3>
                    <div data-aos='fade-left' className="space-x-6 pt-12 flex lg:justify-center">
                        <button id="prev-but" className="btn tra hover:bg-none h-12 w-12 rounded-full bg-[#FFF4F3] grad-btn relative overflow-hidden"><FaLongArrowAltLeft className="text-[23px] z-20" /></button>
                        <button id="next-but" className="btn tra hover:bg-none h-12 w-12 rounded-full bg-[#FFF4F3] grad-btn relative overflow-hidden"><FaLongArrowAltRight className="text-[23px] z-20" /></button>
                    </div>
                </div>
                <div className="mt-20 flex justify-between gap-x-8">
                    <Swiper
                        slidesPerView={window.innerWidth>720?3:1}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '#next-but',
                            prevEl: '#prev-but',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div data-aos='fade-right' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/pxwkG8q/Image-here-1.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/pQt20kW/Image-here-2.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-left' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/J5Grh19/Image-here-3.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-right' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/pxwkG8q/Image-here-1.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-up' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/pQt20kW/Image-here-2.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-left' className="bg-white rounded-[18px] p-2 h-[345px] contt">
                        <div className="flex gap-x-5 items-center">
                            <div className="imm tra bg-[url(https://i.ibb.co.com/XS315FZ/Rectangle-3482.png)] bg-cover bg-no-repeat p-4 w-fit">
                                <img className="" src="https://i.ibb.co.com/J5Grh19/Image-here-3.png" alt="" />
                            </div>
                            <div className="text-[#181E27]">
                                <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                                <p className="text-[15px] sora">Cyclists</p>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[33px] sora text-[#333931] pl-5 py-5">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus adipiscing elit habitant morbi massa sapien faucibus”.</p>
                    </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial2;