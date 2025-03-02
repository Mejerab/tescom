import { FaLongArrowAltRight } from "react-icons/fa";

const Explore = () => {
    return (
        <section className="bg-[url(https://i.ibb.co.com/RYTrxGc/Bg-1.png)] bg-cover bg-no-repeat py-32">
            <div className="max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col justify-between items-center">
                <img data-aos='fade-right' className=" w-[570.82px]" src="https://i.ibb.co.com/Jcwq2Xx/Image-2.png" alt="" />
                <div className="lg:w-1/3 lg:my-0 my-7 flex lg:flex-col flex-row">
                    <img data-aos='fade-up' className="w-[120px] lg:w-[182px] h-[120px] lg:h-[182px] z-10" src="https://i.ibb.co.com/FsDpzzL/Ellipse-925.png" alt="" />
                    <img data-aos='fade-up' data-aos-delay={700} className="w-[120px] lg:w-[182px] h-[120px] lg:h-[182px] lg:-mt-[2.7rem] z-20" src="https://i.ibb.co.com/0yP6yQ6/Ellipse-926.png" alt="" />
                    <img data-aos='fade-up' data-aos-delay={1400} className="w-[120px] lg:w-[182px] h-[120px] lg:h-[182px] lg:-mt-[2.7rem] z-30" src="https://i.ibb.co.com/Wcy2WsQ/Ellipse-927.png" alt="" />
                </div>
                <div data-aos='fade-left' className="text-white relative lg:ml-8">
                    <h3 className="text-[40px] leading-[48px] uppercase font-bold">Explore our Sweatproof Sports Headphones.</h3>
                    <p className="text-[21px] sora py-6 leading-[31px] underline w-44 lg:w-60">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magna.”</p>
                    <button className="btn-md border-0 hover:border-0 btn mt-6 banner-btn relative overflow-hidden tra sora rounded-full px-10 lg:px-12 text-[15px] hover:text-white font-medium bg-white h-[59px]"><span className="z-[100]">Discover More</span></button>
                    <div data-aos='fade-up' data-aos-delay={700} className="bg-white h-[220px] w-[182px] rounded-[18px] absolute left-[11.5rem] lg:left-[16.3rem] top-52 lg:top-44">
                        <div className="relative w-full h-full">
                            <p className="text-[#333931] sora text-[13px] lg:w-fit flex pt-3 pl-[1.4rem] items-center"><h5 className="mr-1 font-bold font text-[#181E27] text-[25px] uppercase">80m</h5>Happy User</p>
                            <button className="btn z-20 overflow-hidden absolute top-12 left-[1.3rem] rounded-full w-fit btn-sm h-11 border-0 text-white bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] tra"><span className="z-[100]"><FaLongArrowAltRight className="text-lg -rotate-45" /></span></button>
                            <img className="absolute bottom-0 right-0 rounded-br-[18px] z-10" src="https://i.ibb.co.com/1q44xZp/image-63-1-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;