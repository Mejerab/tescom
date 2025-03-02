import { VscQuote } from "react-icons/vsc";

const Hero = () => {
    return (
        <section className="py-32 relative mb-[26rem] max-w-[1400px] mx-auto 2xl:pl-[0.7rem]">
            <div className="lg:flex justify-between">
                <div data-aos-duration={700} data-aos='fade-right' className="lg:w-1/2 z-50">
                    <div className="relative">
                        <svg className="w-full mx-auto lg:w-fit 2xl:w-11/12" viewBox="0 0 628 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 18C0 8.05888 8.05888 0 18 0H610C619.941 0 628 8.05887 628 18V131.5V164C628 173.941 619.941 182 610 182H456C446.059 182 438 190.059 438 200V245C438 254.941 429.941 263 420 263H314H18C8.05887 263 0 254.941 0 245V18Z" fill="white"></path>
                        </svg>
                        <h2 className="uppercase absolute top-0 left-0 w-full font-bold text-[44px] lg:text-[80px] leading-[1] p-3 2xl:pl-9">your gateway to a smarter commute</h2>
                    </div>
                        <button className="btn-md border-0 hover:border-0 h-[59px] btn mt-5 lg:mt-10 hero-btn relative overflow-hidden 2xl:ml-7 tra sora rounded-full px-7 lg:px-12 text-sm lg:text-[15px] font-medium bg-[#FF8A71]"><span>Discover Now</span></button>
                </div>
                <div className="sora z-50 lg:mt-0 mt-5">
                    <div data-aos-duration={700} data-aos='fade-down' className="mr- relative">
                        <img src="https://i.ibb.co.com/f9g2X5X/Rectangle-3429.png" className="w-[72%] h-9/12 lg:h-full lg:w-fit" alt="" />
                        <VscQuote className="absolute top-8 text-[6rem] left-[5.5rem] w-fit z-10 opacity-30 text-[#FF8A71]" />
                        <div className="absolute top-4 lg:top-6 left-4 lg:left-6 z-20">
                            <p className="text-[15px] leading-[28px] w-64">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.”</p>
                            <p className="text-[#333931] w-fit text-[13px] flex items-center mt-5"><h6 className="font-semibold text-[15px] mr-[2px]">Alex Carpen -</h6>Designer</p>
                        </div>
                    </div>
                    <div data-aos-duration={700} data-aos='fade-up' className="ml-[10.5rem] w-fit -mt-4 lg:-mt-5">
                        <img src="https://i.ibb.co.com/Qmdd8wh/Image.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute top-[43rem] lg:top-56 2xl:top-60 left-2 2xl:left-12 z-0 w-fit">
                <img className="w-[1171px] z-0" src="https://i.ibb.co.com/J7VjgPS/Image-1.png" alt="" />
            </div>
        </section>
    );
};

export default Hero;