import { BiHeadphone } from "react-icons/bi";
import { BsBatteryCharging } from "react-icons/bs";
import { MdBluetoothAudio, MdDevicesOther, MdOutlineTouchApp } from "react-icons/md";
import { SiHeadphonezone } from "react-icons/si";

const Benefits = () => {
    return (
        <section className="max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col justify-between items-center">
            <div className="space-y-12 lg:mt-0 mt-12">
                <div data-aos='fade-right' className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><MdBluetoothAudio className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-16">
                        <h4 className="text-[19px] font-bold mb-2">Bluetooth Connectivity</h4>
                        <p className="text-[#333931] sora w-[17.6rem] text-[15px] leading-[28px]">Seamlessly connect your headphones to your devices without wires.</p>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-delay={700} className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><SiHeadphonezone className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-2">
                        <h4 className="text-[19px] font-bold mb-2">Noise Cancellation</h4>
                        <p className="text-[#333931] sora lg:w-[12.5rem] text-[15px] leading-[28px]">Block out external noise for an immersive listening experience.</p>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-delay={1000} className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><MdOutlineTouchApp className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-5">
                        <h4 className="text-[19px] font-bold mb-2">Touch Controls</h4>
                        <p className="text-[#333931] sora lg:w-[18rem] text-[15px] leading-[28px]">Easily control your music lg:pl-0 playback, volume, and calls with intuitive touch gestures.</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="w-[360px] h-[709px] lg:block hidden" src="https://i.ibb.co.com/c383F9N/Image-1.png" alt="" />
            </div>
            <div className="space-y-12 my-12">
                <div data-aos='fade-left'className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><BiHeadphone className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-6">
                        <h4 className="text-[19px] font-bold mb-2">Ambient Sound Mode</h4>
                        <p className="text-[#333931] sora lg:w-[17.8rem] text-[15px] leading-[28px]">Stay aware of your surroundings while listening to music by activating the ambient sound mode.</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay={700} className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><MdDevicesOther className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-6">
                        <h4 className="text-[19px] font-bold mb-2">Multipoint Pairing</h4>
                        <p className="text-[#333931] sora lg:w-[17rem] text-[15px] leading-[28px]">Connect your headphones to multilg:pl-0 ple devices simultaneously, such as your phone and laptop.</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay={1000} className="flex bene-hover items-start">
                    <div className="relative mr-5">
                        <img className="" src="https://i.ibb.co.com/FssGJjF/Ellipse-20.png" alt="" />
                        <div className="absolute inner tra top-3 lg:left-3 bg-[#fee4e2] z-50 overflow-hidden rounded-full w-fit p-5 hover:text-white">
                            <span className="z-[100]"><BsBatteryCharging className="text-4xl tra text-[#181E27]" /></span>
                        </div>
                    </div>
                    <div className="lg:pl-0 pl-5">
                        <h4 className="text-[19px] font-bold mb-2">Long Battery Life</h4>
                        <p className="text-[#333931] sora lg:w-[18rem] text-[15px] leading-[28px]">Enjoy extended listening sessions with headphones that offer a long-lasting battery.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;