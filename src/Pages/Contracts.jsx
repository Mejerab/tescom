import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import Footer2 from "./Home2/Footer2";
import Swal from "sweetalert2";

const Contracts = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const select = e.target.select.value;
        const phone = e.target.phone.value;
        console.log(select);

        if (select !== 'Subject:' && !isNaN(phone)) {
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
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Select your subject first & seta valid number',
                icon: 'error',
                confirmButtonText: 'Return',
                background: 'linear-gradient(to bottom right,#DC5DDE, #FC252C,#FAA365)',
                color: '#fff',
                customClass: {
                    confirmButton: 'custom-btn'
                }
            })
        }
    }
    return (
        <div className="font text-[#181E27]">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px] text-center">Contact Us</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/contact-us'>Contact Us</Link></p>
                </div>
            </section>
            <section id="contracts" className="max-w-[1320px] mx-auto px-4 py-24">
                <div>
                    <iframe className="w-full rounded-[18px] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.383678505297!2d90.27195449999999!3d23.79739945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1732112577052!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    <div className="mt-12 flex lg:flex-row flex-col justify-between gap-16">
                        <div data-aos='fade-right' className="lg:w-[850px]">
                            <h4 className="text-[#333931] font-bold text-[28px]">Get In Touch:</h4>
                            <form onSubmit={handleSubmit} className="bg-[#FFF4F3] pb-9 rounded-xl mt-7 p-4 lg:p-7 space-y-5">
                                <div className="flex gap-x-5 sora text-[15px]">
                                    <input type="text" className="w-full input placeholder:text-[#333931] h-[59px]" required placeholder="First Name:" />
                                    <input type="text" className="w-full input placeholder:text-[#333931] h-[59px]" required placeholder="Last Name:" />
                                </div>
                                <div className="flex gap-x-5 sora text-[15px]">
                                    <select name="select" className="select w-full h-[59px] sora">
                                        <option disabled selected>Subject:</option>
                                        <option>Headphone</option>
                                        <option>Bicycle</option>
                                        <option>Drone</option>
                                    </select>
                                </div>
                                <div className="flex gap-x-5 sora text-[15px]">
                                    <input name="phone" type="tel" className="w-full input placeholder:text-[#333931] h-[59px]" required placeholder="Phone:" />
                                    <input type="email" className="w-full input placeholder:text-[#333931] h-[59px]" required placeholder="Email Address:" />
                                </div>
                                <div className="flex gap-x-5 sora text-[15px]">
                                    <input type="text" className="w-full input placeholder:text-[#333931] h-[59px]" required placeholder="Address:" />
                                </div>
                                <div className="flex gap-x-5 sora text-[15px]">
                                    <textarea rows={8} className="w-full textarea placeholder:text-[#333931]" placeholder="Write A Message (Optional)" />
                                </div>
                                <button className="btn px-8 h-[59px] relative -bottom-2 bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] sora rounded-[10px] text-[15px] text-white font-medium"><span className="z-[100]">Send A Message</span></button>
                            </form>
                        </div>
                        <div data-aos='fade-left'>
                            <h4 className="text-[28px] font-bold">Contact Info:</h4>
                            <div className="mt-7 bg-[#FFF4F3] rounded-xl p-8">
                                <h5 className="text-[18px] mt-3 font-semibold">Call Us:</h5>
                                <div className="pt-4 flex items-center gap-x-6">
                                    <img src="https://i.ibb.co.com/L15fj85/Group.png" alt="" />
                                    <div className="pl-3">
                                        <p className="sora text-[15px] text-[#333931]">(706) 456-2884</p>
                                        <p className="sora text-[15px] text-[#333931]">(936) 326-9236</p>
                                    </div>
                                </div>
                                <div className="opacity-75 divider divider-[#181E27]"></div>
                                <h5 className="text-[18px] font-semibold">E-mail Us::</h5>
                                <div className="pt-4 flex items-center gap-x-6">
                                    <img src="https://i.ibb.co.com/SVCTQ5B/email-1.png" alt="" />
                                    <div className="pl-3">
                                        <p className="sora text-[15px] text-[#333931]">support@gmail.com</p>
                                        <p className="sora text-[15px] text-[#333931]">infotescom@gmail.com</p>
                                    </div>
                                </div>
                                <div className="opacity-75 divider divider-[#181E27]"></div>
                                <h5 className="text-[18px] font-semibold">Call Us:</h5>
                                <div className="pt-4 flex items-center gap-x-6">
                                    <img src="https://i.ibb.co.com/R4jMGBq/location-1-1.png" alt="" />
                                    <div>
                                        <p className="sora pl-3 text-[15px] text-[#333931] leading-[30px]">501 Stafford StCherry Valley, Massachusetts(MA), 01611</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer2 />
            </footer>
        </div>
    );
};

export default Contracts;