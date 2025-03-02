import { FaLongArrowAltRight } from "react-icons/fa";

const Customization = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-4 pr-6 grid lg:grid-cols-2">
            <div className="grid lg:grid-cols-3 gap-x-5">
                <img data-aos='fade-right' className="w-full lg:w-[416px] lg:col-span-2 h-[552px]" src="https://i.ibb.co.com/JjMRK4R/Rectangle-3433.png" alt="" />
                <div className="flex lg:flex-col justify-between py-7 w-full">
                    <img data-aos='fade-up' data-aos-duration={1000} className="w-[113px] h-[150px]" src="https://i.ibb.co.com/bz3Q3j4/Rectangle-3436.png" alt="" />
                    <img data-aos='fade-up' data-aos-duration={1400} className="w-[113px] h-[150px]" src="https://i.ibb.co.com/wzjM1PL/Rectangle-3435.png" alt="" />
                    <img data-aos='fade-up' data-aos-duration={1800} className="w-[113px] h-[150px]" src="https://i.ibb.co.com/WyczCr4/Rectangle-3434.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-between lg:mt-0 mt-5">
                <div data-aos='fade-left' className="flex lg:flex-row flex-col lg:w-full w-[70%] gap-x-2">
                    <h3 className="text-[40px] font-bold leading-[48px] uppercase">Tailor Your Electric Cycle to Your Preferences</h3>
                    <img src="https://i.ibb.co.com/XWFfVBY/Image-2.png" alt="" />
                </div>
                <div>
                    <div data-aos='fade-up' data-aos-duration={1000} className="cust-hover flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-3 mt-6 py-5 border-t border-[#E3E4E5]">
                            <button className="btn tra h-12 w-12 rounded-full bg-[#FFF4F3] text-[#FF8A71]"><FaLongArrowAltRight className="text-[23px]" /></button>
                            <h4 className="text-[22px] tra uppercase font-bold w-52 leading-[33px]">Powerful Electric Moto</h4>
                        <p className="text-[#333931] text-[15px] leading-[28px] w-80 lg:w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1400} className="cust-hover flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-3 pt-5 border-t border-[#E3E4E5]">
                        <button className="btn tra h-12 w-12 rounded-full bg-[#FFF4F3] text-[#FF8A71]"><FaLongArrowAltRight className="text-[23px]" /></button>
                        <h4 className="text-[22px] tra uppercase font-bold w-52 leading-[33px]">Long-Lasting Battery</h4>
                        <p className="text-[#333931] text-[15px] leading-[28px] w-80 lg:w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1800} className="cust-hover flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-3 mt-5 py-5 border-y border-[#E3E4E5]">
                        <button className="btn tra h-12 w-12 rounded-full bg-[#FFF4F3] text-[#FF8A71]"><FaLongArrowAltRight className="text-[23px]" /></button>
                        <h4 className="text-[22px] tra uppercase font-bold w-52 leading-[33px]">Pedal Assist System</h4>
                        <p className="text-[#333931] text-[15px] leading-[28px] w-80 lg:w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customization;