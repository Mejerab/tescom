
const Features = () => {
    return (
        <section className="-mt-24 lg:mt-0 lg:pt-24 lg:flex justify-between items-center max-w-[1320px] space-y-8 gap-x-8 mx-auto px-4">
            <h3 data-aos='fade-right' className="text-[40px] leading-[48px] w-96 font-bold">Smooth and Comfortable Off-Road Journeys Await</h3>
            <div  data-aos='fade-down' className="lg:ml-0 ml-auto w-fit relative">
                <img className="w-full" src="https://i.ibb.co.com/nk9v6sd/Bg-1.png" alt="" />
                <div className="absolute top-0 left-0 flex flex-col pl-6 justify-center h-full">
                    <h4 className="text-[39px] font-bold">100%</h4>
                    <p className="text-[16px] leading-[28px] sora p">Customer <br /> Satisfaction.</p>
                </div>
            </div>
            <div  data-aos='fade-up' className="w-fit relative flex justify-between items-center">
                <div>
                    <img src="https://i.ibb.co.com/WH8vvsS/Bg-2.png" alt="" />
                    <div className="absolute top-0 left-6 flex flex-col justify-center h-full">
                        <h4 className="font-bold text-[39px]">08</h4>
                        <p className="text-[16px] leading-[28px] sora p">Colour <br /> Variation.</p>
                    </div>
                </div>
                <img className="absolute top-8 right-6" src="https://i.ibb.co.com/tP4drpS/Icon.png" alt="" />
            </div>
            <p data-aos='fade-left' className="text-[21px] lg:ml-0 ml-auto sora leading-[31px] underline w-[15rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magna.”</p>
        </section>
    );
};

export default Features;