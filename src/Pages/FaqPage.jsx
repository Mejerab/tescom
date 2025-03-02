import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer2 from "./Home2/Footer2";

const FaqPage = () => {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);
    const [btn6, setBtn6] = useState(false);
    const [btn7, setBtn7] = useState(false);
    const [btn8, setBtn8] = useState(false);
    const [btn9, setBtn9] = useState(false);
    return (
        <div className="font">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px] text-center">FAQ</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/blog'>FAQ</Link></p>
                </div>
            </section>
            <section className="flex">
                <div className="w-1/3 flex-grow bg-gradient-to-r from-[#F98E5E99] via-white to-white"></div>
                <div className="lg:w-[50rem] py-28">
                    <h3 data-aos='fade-down' className="text-center lg:w-[28rem] mx-auto text-3xl lg:text-[40px] leading-[48px] font-bold text-[#181E27] uppercase">frequently <span className=" bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] p-1 pb-0 text-white rounded-lg to-[#FAA365]">asked</span> questions.</h3>
                    <div className="mx-auto space-y-5 mt-8">
                        <div data-aos='fade-up' onClick={() => { setBtn1(true); setBtn2(false); setBtn3(false); setBtn4(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn1 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn1 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">How does an electric cycle work?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn2(true); setBtn1(false); setBtn3(false); setBtn4(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn2 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn2 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Are there any ongoing software updates for the product?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn3(true); setBtn1(false); setBtn2(false); setBtn4(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn3 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn3 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I return or exchange the product if I'm not satisfied?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn4(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn5(false); setBtn6(false); setBtn7(false); setBtn8(false); setBtn9(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn4 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn4 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I use the product for both indoor and outdoor purposes?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn5(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn4(false); setBtn6(false); setBtn7(false); setBtn8(false); setBtn9(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn5 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn5 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Is the product suitable for beginners or experienced users?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn6(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn5(false); setBtn4(false); setBtn7(false); setBtn8(false); setBtn9(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn6 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn6 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I use wireless headphones for running?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn7(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn5(false); setBtn6(false); setBtn4(false); setBtn8(false); setBtn9(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn7 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn7 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I use the product for both indoor and outdoor purposes?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn8(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn5(false); setBtn6(false); setBtn7(false); setBtn4(false); setBtn9(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn8 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn8 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Is the product suitable for beginners or experienced users?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' onClick={() => { setBtn9(true); setBtn1(false); setBtn2(false); setBtn3(false); setBtn5(false); setBtn6(false); setBtn7(false); setBtn8(false); setBtn4(false) }} className="collapse bg-base-100 border">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn9 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn9 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I use wireless headphones for running?</h4></div>
                            <div className="collapse-content">
                                <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow w-1/3 bg-gradient-to-r from-white via-white to-[#F98E5E99]"></div>
            </section>
            <section id="footer">
                <Footer2 />
            </section>
        </div>
    );
};

export default FaqPage;