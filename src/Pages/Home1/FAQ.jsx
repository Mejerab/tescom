import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Faq = () => {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);

    return (
        <div className="bg-[#E3E4E5CC] bg-[url(https://i.ibb.co.com/q5tTxY8/Mask-group.png)] bg-cover bg-no-repeat py-32">
            <div data-aos='fade-up' className="max-w-[1320px] mx-auto px-4">
                <h3 className="text-[40px] font-bold leading-[48px] text-center lg:w-[48rem] uppercase mx-auto">Your Questions Answered in Our Extensive FAQ Section</h3>
                <div className="lg:w-2/3 mx-auto space-y-5 mt-20">
                    <div data-aos='fade-up' data-aos-duration={500} onClick={() => { setBtn1(true); setBtn2(false);setBtn3(false);setBtn4(false);setBtn5(false) }} className="collapse bg-base-100">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn1 ? 'bg-[#FF8A71] text-white' : 'bg-[#FFF4F3] text-[#FF8A71]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn1 && 'rotate-90'}`} /></button> <h4 className="uppercase text-[17px] font-bold">How does an electric cycle work?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua. Sed velit dignissim sodales ut sem integer vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1000} onClick={() => { setBtn2(true); setBtn1(false);setBtn3(false);setBtn4(false);setBtn5(false) }} className="collapse bg-base-100">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn2 ? 'bg-[#FF8A71] text-white' : 'bg-[#FFF4F3] text-[#FF8A71]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn2 && 'rotate-90'}`} /></button> <h4 className="uppercase text-[17px] font-bold">What is the range of an electric cycle on a single charge?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua. Sed velit dignissim sodales ut sem integer vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1500} onClick={() => { setBtn3(true); setBtn1(false);setBtn2(false);setBtn4(false);setBtn5(false) }} className="collapse bg-base-100">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn3 ? 'bg-[#FF8A71] text-white' : 'bg-[#FFF4F3] text-[#FF8A71]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn3 && 'rotate-90'}`} /></button> <h4 className="uppercase text-[17px] font-bold">What is the maximum speed an electric cycle can reach?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua. Sed velit dignissim sodales ut sem integer vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={2000} onClick={() => { setBtn4(true); setBtn1(false);setBtn2(false);setBtn3(false);setBtn5(false) }} className="collapse bg-base-100">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn4 ? 'bg-[#FF8A71] text-white' : 'bg-[#FFF4F3] text-[#FF8A71]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn4 && 'rotate-90'}`} /></button> <h4 className="uppercase text-[17px] font-bold">Are spare parts readily available for electric cycles?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua. Sed velit dignissim sodales ut sem integer vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={2500} onClick={() => { setBtn5(true); setBtn1(false);setBtn2(false);setBtn3(false);setBtn4(false) }} className="collapse bg-base-100">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl flex items-center space-x-5 font-medium"><button className={`btn tra h-12 w-12 rounded-full ${btn5 ? 'bg-[#FF8A71] text-white' : 'bg-[#FFF4F3] text-[#FF8A71]'}`}><FaLongArrowAltRight className={`text-[23px] tra ${btn5 && 'rotate-90'}`} /></button> <h4 className="uppercase text-[17px] font-bold">What is the warranty coverage for an electric cycle?</h4></div>
                        <div className="collapse-content">
                            <p className="sora p text-[15px] leading-[28px] pl-[4.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore etor dolore magna aliqua. Sed velit dignissim sodales ut sem integer vitae. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;