import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            Swal.fire({
                title: 'Subscribed to Newsletter',
                text: 'Press the button to continue',
                icon: 'success',
                background: '#FF8A71',
                color: '#fff',
                confirmButtonText: 'Continue',
                customClass: {
                    confirmButton: 'confirm'
                }
              })
        }
    }
    return (
        <div className="bg-[url(https://i.ibb.co.com/St6HjqQ/Mask-group-1.png)] bg-cover bg-no-repeat bg-[#181e27] text-white">
            <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 gap-y-14 lg:grid-cols-4 justify-between items-center py-32">
                <ul data-aos='fade-right'className="text-[#C0BEBE] w-fit">
                    <h4 className="text-[22px] font-bold text-white mb-3">Quick Links:</h4>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link><MdKeyboardArrowRight className="inline mr-2" />Home</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />About Us</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />Features</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />Testimonial</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />Shop</Link></li>
                </ul>
                <ul data-aos='fade-down' className="text-[#C0BEBE] w-fit">
                    <h4 className="text-[22px] font-bold text-white mb-3">Popular Cycle:</h4>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />Tesla eBike - PowerCycle</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />VoltBike - ThunderBolt</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />EcoRider - ElectraCity</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />SwiftMotion - Zephyr</Link></li>
                    <li className="sora text-[17px] py-2 tra hover:text-[#ff8a71]"><Link to='/'><MdKeyboardArrowRight className="inline mr-2" />SparkCycle - Electron Pro</Link></li>
                </ul>
                <div data-aos='fade-up'>
                    <h4 className="text-[22px] font-bold text-white mb-7">Newsletter :</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
                        <input name="email" type="email" className="input pr-10 w-[250px] h-[58px] border-0 rounded-full bg-[#2A3038] text-[15px] sora" placeholder="Enter your email:" required/>
                        <button className="btn w-fit rounded-full overflow-hidden h-[59px] text-white px-8 btn-md relative hero-btn bg-[#ff8a71] font-medium text-[15px] sora border-0"><span>Subscribe Now</span></button>
                        <div className="flex space-x-2 items-center pt-2">
                            <input type="checkbox" className="accent-[#FF8A71] bg-white" />
                            <p className="text-[#C0BEBE] text-[15px] sora">I agree to email receive.</p>
                        </div>
                    </form>
                </div>
                <div data-aos='fade-left'>
                    <h4 className="text-[22px] font-bold text-white mb-3">Social Links: :</h4>
                    <div className="flex flex-col gap-y-3">
                        <Link to='https://www.facebook.com' className="btn tra w-fit hover:bg-[#FF8A71] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><LiaFacebookF className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Facebook</span></Link>
                        <Link to='https://www.facebook.com' className="btn tra w-fit hover:bg-[#FF8A71] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><GrTwitter className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Twitter</span></Link>
                        <Link to='https://www.facebook.com' className="btn tra w-fit hover:bg-[#FF8A71] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><FaLinkedin className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Linkedin</span></Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#2a3038]">
                <div className="max-w-[1320px] mx-auto px-4 py-3 flex lg:flex-row flex-col text-center justify-between items-center">
                <a className="btn btn-ghost font-bold p-0 text-2xl"><img src="https://i.ibb.co.com/JzLwSCJ/Group.png" alt="" /><span className="mt-2">Tescom</span></a>
                <p className="sora text-[16px] mt-1">Copyright © 2023 <span className="text-[#FF8A71]">Tescom</span> || All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;