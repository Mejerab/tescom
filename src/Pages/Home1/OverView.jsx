
const OverView = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/9Z1m5D3/Bg-3.png)] bg-cover bg-no-repeat py-32">
            <div className="max-w-[1320px] mx-auto px-2 text-white">
                <h3 data-aos='fade-up' className="text-3xl lg:text-[40px] font-bold leading-[48px] uppercase lg:w-[38rem] mx-auto text-center">Discover Our Most Sought-After Cycling Features</h3>
                <div className="mt-24 flex lg:flex-row flex-col gap-y-7 justify-between gap-x-6">
                    <div data-aos-duration={500} data-aos='fade-up' className="grid mx-auto gap-y-5 pr-12 w-fit lg:border-r-2 border-dotted border-[#ffffff59]">
                        <img src="https://i.ibb.co.com/jzkKC8s/Icon-1.png" alt="" />
                        <h4 className="uppercase text-[22px] leading-[33px] font-bold w-56">Pedal Assist System</h4>
                        <p className="text-[16px] leading-[28px] w-64 sora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div data-aos-duration={1000} data-aos='fade-up' className="grid mx-auto gap-y-5 pr-12 w-fit lg:border-r-2 border-dotted border-[#ffffff59]">
                        <img src="https://i.ibb.co.com/CmDw27J/Icon.png" alt="" />
                        <h4 className="uppercase text-[22px] leading-[33px] font-bold w-56">Long-Lasting Battery</h4>
                        <p className="text-[16px] leading-[28px] w-64 sora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div data-aos-duration={1500} data-aos='fade-up' className="grid mx-auto gap-y-5 pr-12 w-fit lg:border-r-2 border-dotted border-[#ffffff59]">
                        <img src="https://i.ibb.co.com/6XkbCXw/Icon-1.png" alt="" />
                        <h4 className="uppercase text-[22px] leading-[33px] font-bold w-56">Multiple Riding Modes</h4>
                        <p className="text-[16px] leading-[28px] w-64 sora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div data-aos-duration={2000} data-aos='fade-up' className="grid lg:ml-0 ml-7 gap-y-5 w-fit">
                        <img src="https://i.ibb.co.com/XjPTTKz/Icon-2.png" alt="" />
                        <h4 className="uppercase text-[22px] leading-[33px] font-bold w-56">Lightweight and Durable Frame</h4>
                        <p className="text-[16px] leading-[28px] w-64 sora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;