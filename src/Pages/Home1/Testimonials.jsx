import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="bg-[url(https://i.ibb.co.com/qpRQwY2/Bg-4.png)] bg-cover bg-no-repeat">
            <div className="max-w-[1320px] mx-auto px-4 pt-32 pb-32">
                <h3 data-aos='fade-up' className="uppercase text-center font-bold text-3xl lg:text-[40px] leading-[48px] mx-auto lg:w-[56rem]">Inspiring Stories of <span className="text-[#FF8A71] underline">Customer Loyalty and</span> Satisfaction</h3>
                <div className="flex justify-between gap-x-12 mt-20">
                    <Swiper
                        slidesPerView={window.innerWidth>720?2:1}
                        slidesPerGroup={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper -space-x-3"
                    >
                        <SwiperSlide><div data-aos='fade-right' className='mb-24 mx-4'>
                            <img src="https://i.ibb.co.com/vHWJN7K/Image-3.png" alt="" />
                            <p className="p sora text-[20px] underline font-medium leading-[40px] py-7">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus. Adipiscing elit habitant morbi massa sapien faucibus et molestie ac”.</p>
                            <h4 className="font-bold text-[23px]">Alex Jordan</h4>
                            <p className="text-[15px] sora text-[#FF8A71] mt-2">Cyclists</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-left' className='mx-4'>
                            <img src="https://i.ibb.co.com/0jrr2JX/Image-4.png" alt="" />
                            <p className="p sora text-[20px] underline font-medium leading-[40px] py-7">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus. Adipiscing elit habitant morbi massa sapien faucibus et molestie ac”.</p>
                            <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                            <p className="text-[15px] sora text-[#FF8A71] mt-2">Cyclists</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-right' className='mx-4'>
                            <img src="https://i.ibb.co.com/vHWJN7K/Image-3.png" alt="" />
                            <p className="p sora text-[20px] underline font-medium leading-[40px] py-7">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus. Adipiscing elit habitant morbi massa sapien faucibus et molestie ac”.</p>
                            <h4 className="font-bold text-[23px]">Alex Jordan</h4>
                            <p className="text-[15px] sora text-[#FF8A71] mt-2">Cyclists</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div data-aos='fade-left' className='mx-4'>
                            <img src="https://i.ibb.co.com/0jrr2JX/Image-4.png" alt="" />
                            <p className="p sora text-[20px] underline font-medium leading-[40px] py-7">“Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus. Adipiscing elit habitant morbi massa sapien faucibus et molestie ac”.</p>
                            <h4 className="font-bold text-[23px]">Staken Hoktan</h4>
                            <p className="text-[15px] sora text-[#FF8A71] mt-2">Cyclists</p>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;