import { FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="py-24 px-4 max-w-[1600px] mx-auto 2xl:pl-[7.3rem] relative flex gap-y-24 lg:flex-row flex-col justify-between items-center">
            <div data-aos='fade-right'>
                <h2 className="text-4xl lg:text-[60px] font-bold uppercase lg:w-[40rem] leading-[50px] lg:leading-[66px]">Best Bluetooth Headphones for On-the-Go Listening.</h2>
                <div className="bg-white rounded-[18px] relative  mt-12 h-[156px] w-[19.6rem]">
                    <div className="h-full flex pl-4 flex-col justify-center">
                        <p className="sora text-[15px] text-[#333931]">Starting <br /> From</p>
                        <p className="font-extrabold text-[32px] text-[#181E27]">$286</p>
                    </div>
                    <button className="btn z-20 overflow-hidden absolute top-8 left-[5.5rem] rounded-full w-fit btn-sm h-11 border-0 text-white bg-gradient-to-br from-[#DC5DDE] grad-btn via-[#FC252C] to-[#FAA365] tra"><span className="z-[100]"><FaLongArrowAltRight className="text-lg -rotate-45" /></span></button>
                    <img className="absolute bottom-0 right-0 h-[190px] rounded-br-[18px]" src="https://i.ibb.co.com/JkF5db7/image-58-1-1.png" alt="" />
                </div>
                <div data-aos='fade-up' data-aos-delay={600} className="bg-white h-[220px] w-[182px] rounded-[18px] absolute  left-[22.5rem] top-40 lg:block hidden">
                    <div className="relative w-full h-full">
                        <p className="text-[#333931] sora text-[13px] flex pt-3 pl-[1.5rem] items-center"><h5 className="mr-1 font-bold font text-[#181E27] text-[25px] uppercase">80m</h5>Happy User</p>
                        <button className="btn z-20 overflow-hidden absolute top-12 left-5 rounded-full w-fit btn-sm h-11 border-0 text-white bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] tra"><span className="z-[100]"><FaLongArrowAltRight className="text-lg -rotate-45" /></span></button>
                        <img className="absolute bottom-0 rounded-bl-[18px] z-10" src="https://i.ibb.co.com/nLMRL6N/girl-wireless-headphones-face-profile-soft-pink-background-oversized-hoodie-1.png" alt="" />
                    </div>
                </div>
                <button className="btn-md border-0 hover:border-0 btn mt-12 banner-btn relative overflow-hidden tra sora rounded-full px-12 text-[15px] hover:text-white font-medium bg-white h-[59px]"><span className="z-[100]">Discover More</span></button>
            </div>
            <div className="relative">
                <div className="2xl:mr-12">
                    <img src="https://i.ibb.co.com/vsrTcpd/Ellipse-918.png" alt="" />
                    <img className="absolute bottom-12 lg:bottom-0 2xl:-bottom-7 right-12 lg:right-36 2xl:right-48" src="https://i.ibb.co.com/C8CCBcP/Image-here.png" alt="" />
                    <div className="absolute top-0 lg:top-24 left-24 rounded-full lg:block hidden border-[#181E27] border bg-white p-2">
                        <img className="spin" src="https://i.ibb.co.com/cct4qXs/Group-1.png" alt="" />
                        <img className="absolute top-8 left-8 rounded-full border border-[#181E27] p-3" src="https://i.ibb.co.com/fpt2pQQ/Mask-group-3.png" alt="" />
                    </div>
                </div>
                <div className="absolute -bottom-12 lg:bottom-12 -right-[0.5rem] flex flex-col space-y-4">
                    <div data-aos='fade-left' data-aos-delay={300}>
                        <Link to='https://www.facebook.com' className="btn tra hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><LiaFacebookF className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Facebook</span></Link>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={600}>
                        <Link to='https://www.facebook.com' className="btn tra relative right-7 hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-0 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><GrTwitter className="p-4 ml-2 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Twitter</span></Link>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={700}>
                        <Link to='https://www.facebook.com' className="btn tra relative right-14 hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><FaLinkedin className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Linkedin</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;