import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer2 = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            Swal.fire({
                title: 'Success!',
                text: 'Press the button to continue',
                icon: 'success',
                confirmButtonText: 'Continue',
                background: 'linear-gradient(to bottom right,#DC5DDE, #FC252C,#FAA365)',
                color: '#fff',
                customClass: {
                    confirmButton: 'custom-btn'
                }
              })
            e.target.reset();
        }
    }
    return (
        <footer className="bg-[url(https://i.ibb.co.com/74FFmYt/Bg-3.png)] bg-center bg-cover bg-no-repeat text-white">
            <div className="max-w-[1320px] mx-auto px-4 py-32">
                <h3 data-aos='fade-up' className="text-[32px] font-bold text-center">Subscribe To Our Newsletter</h3>
                <form onSubmit={handleSubmit} className="my-7 mx-auto relative lg:w-[670px] h-[59px]">
                    <input type="email" name="email" className="input sora rounded-full w-full h-full bg-[#2A3038] pl-6 pt-0.5" placeholder="Enter your email:" />
                    <div className="absolute top-0 right-0">
                        <button className="btn-md border-0 hover:border-0 btn h-[59px] banner-btn relative overflow-hidden tra sora rounded-full lg:px-12 text-[15px] hover:text-white font-medium bg-white"><span className="z-[100]">Subscribe Now</span></button>
                    </div>
                </form>
                <div className="pt-6 flex lg:flex-row flex-col gap-6 items-center w-fit mx-auto">
                    <h4 className="font-bold text-[22px]">Social Links:</h4>
                    <Link data-aos='fade-right' data-aos-delay={700} to='https://www.facebook.com' className="btn tra hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><LiaFacebookF className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Facebook</span></Link>
                    <Link data-aos='fade-right' data-aos-delay={1400} to='https://www.facebook.com' className="btn tra hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><GrTwitter className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Twitter</span></Link>
                    <Link data-aos='fade-right' data-aos-delay={2100} to='https://www.facebook.com' className="btn tra hover:bg-gradient-to-br hover:from-[#DC5DDE] hover:via-[#FC252C] hover:to-[#FAA365] h-[60px] space-x-1 border-0 pl-2 pr-20 rounded-full text-white uppercase bg-[#2A3038]"><FaLinkedin className="p-4 rounded-full bg-white text-[#181E27] w-fit text-5xl" /><span className="mt-0.5">Linkedin</span></Link>
                </div>
            </div>
            <div className="bg-[#262c35]">
                <div className=" py-3 max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col text-center gap-y-2 justify-between items-center">
                    <div>
                        <button className="btn btn-ghost text-2xl px-0"><img src="https://i.ibb.co.com/Ch4vf6k/Group-2.png" alt="" /><span className="mt-2">Tescom</span></button>
                    </div>
                    <p className="sora text-[16px]">Copyright © 2023 <span className="bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] grad-btn to-[#FAA365] text-transparent bg-clip-text">Tescom</span> || All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;