import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Fqa2 = () => {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    return (
        <div className="max-w-[1320px] mx-auto px-4 py-32 flex lg:flex-row flex-col justify-between relative gap-x-36">
            <div className="h-full">
                <div className="2xl:mr-12">
                    <div data-aos='fade-down' className="absolute top-32 lg:top-[11.5rem] left-6 lg:left-14 rounded-full border-[#181E27] border bg-white p-2">
                        <img className="spin" src="https://i.ibb.co.com/cct4qXs/Group-1.png" alt="" />
                        <img className="absolute top-8 left-8 rounded-full border border-[#181E27] p-3" src="https://i.ibb.co.com/fpt2pQQ/Mask-group-3.png" alt="" />
                    </div>
                </div>
                <img className="lg:h-[565px] w-[600px]" src="https://html.theme-village.com/tescom/images/faq-bg.png" alt="" />
                <div data-aos='fade-up' className="bg-[#fedfe2] rounded-[18px] absolute top-[32rem] lg:top-[28.8rem] left-4 lg:left-[21rem] h-[180px] w-[20.7rem]">
                    <div className="h-full flex pl-4 flex-col justify-center">
                        <p className="sora text-[15px] text-[#333931]">Starting <br /> From</p>
                        <p className="font-extrabold text-[32px] text-[#181E27]">$286</p>
                    </div>
                    <button className="btn z-20 overflow-hidden absolute top-10 left-[5.6rem] rounded-full w-fit btn-sm h-11 border-0 text-white bg-gradient-to-br from-[#DC5DDE] grad-btn via-[#FC252C] to-[#FAA365] tra"><span className="z-[100]"><FaLongArrowAltRight className="text-lg -rotate-45" /></span></button>
                    <img className="absolute bottom-0 overflow-hidden right-0 h-[200px] rounded-br-[18px]" src="https://i.ibb.co.com/JkF5db7/image-58-1-1.png" alt="" />
                </div>
            </div>
            <div className="lg:mt-0 mt-60 lg:w-1/2">
                <h3 data-aos='fade-left' className="text-[40px] leading-[48px] font-bold text-[#181E27] uppercase">frequently <span className=" bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] p-1 pb-0 text-white rounded-lg to-[#FAA365]">asked</span> questions.</h3>
                <div className="mx-auto space-y-5 mt-8">
                    <div data-aos='fade-up' data-aos-duration={500} onClick={() => { setBtn1(true); setBtn2(false); setBtn3(false); setBtn4(false) }} className="collapse bg-base-100 border">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn1 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn1 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">How does an electric cycle work?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1000} onClick={() => { setBtn2(true); setBtn1(false); setBtn3(false); setBtn4(false) }} className="collapse bg-base-100 border">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn2 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn2 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Are there wireless headphones for kids?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1500} onClick={() => { setBtn3(true); setBtn1(false); setBtn2(false); setBtn4(false) }} className="collapse bg-base-100 border">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn3 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn3 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">What is the battery life of wireless earbuds?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={2000} onClick={() => { setBtn4(true); setBtn1(false); setBtn2(false); setBtn3(false) }} className="collapse bg-base-100 border">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn4 ? ' bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-white' : 'bg-[#FFF4F3] text-[#181E27]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn4 && 'rotate-90'}`} /></button> <h4 className="text-[17px] font-bold">Can I use wireless headphones for running?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua velit dignissim sodales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fqa2;