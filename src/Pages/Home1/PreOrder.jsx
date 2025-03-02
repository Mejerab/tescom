
const PreOrder = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-4 grid lg:grid-cols-4 justify-between pt-20 h-fit">
            <div data-aos='fade-left' className="space-y-16">
                <h3 className="text-[40px] leading-[48px] w-96 font-bold">Smooth and Comfortable Off-Road Journeys Await</h3>
                <div data-aos='fade-left' data-aos-duration={1000} className="w-fit relative">
                    <img src="https://i.ibb.co.com/nk9v6sd/Bg-1.png" alt="" />
                    <div className="absolute top-0 left-0 flex flex-col pl-6 justify-center h-full">
                        <h4 className="text-[39px] font-bold">100%</h4>
                        <p className="text-[16px] leading-[28px] sora p">Customer <br /> Satisfaction.</p>
                    </div>
                </div>
            </div>
            <div data-aos='zoom-in' className="col-span-2 lg:mb-0 mb-5">
                <img className="relative lg:left-0 -left-4 lg:-top-20" src="https://i.ibb.co.com/9VPnzYq/Image.png" alt="" />
            </div>
            <div data-aos='fade-right' className="flex flex-col space-y-10 items-end lg:pr-0 pr-6">
                <div data-aos='fade-right' data-aos-duration={1000} className="w-fit relative flex justify-between items-center">
                    <div>
                        <img src="https://i.ibb.co.com/WH8vvsS/Bg-2.png" alt="" />
                        <div className="absolute top-0 left-6 flex flex-col justify-center h-full">
                            <h4 className="font-bold text-[39px]">08</h4>
                            <p className="text-[16px] leading-[28px] sora p">Colour <br /> Variation.</p>
                        </div>
                    </div>
                    <img className="absolute top-8 right-6" src="https://i.ibb.co.com/tP4drpS/Icon.png" alt="" />
                </div>
                <p className="text-[21px] mr-[1.4rem] sora leading-[31px] underline w-[15rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magna.”</p>
                <div className="flex justify-center w-full">
                    <button className="btn btn-md sora h-[59px] hero-btn overflow-hidden relative px-9 bg-[#FF8A71] text-white rounded-full"><span>Pre-Book Order</span></button>
                </div>
            </div>
        </section>
    );
};

export default PreOrder;