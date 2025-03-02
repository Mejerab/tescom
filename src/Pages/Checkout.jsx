import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import Swal from "sweetalert2";
import Footer2 from "./Home2/Footer2";

const Checkout = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const first = document.getElementById('first').value;
        const last = document.getElementById('last').value;
        const address = document.getElementById('address').value;
        const state = document.getElementById('state').value;
        const postcode = document.getElementById('postcode').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;
        const country = document.getElementById('country').value;
        console.log(phone, country);
        
        if (!isNaN(phone) && country !== 'Country:'&&first&&last&&address&&state&&postcode&&email.includes('@')&&company&&message) {
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
            document.getElementById('form').reset();
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Fill the input fields correctly.',
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
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">checkout</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/checkout'>Shop</Link></p>
                </div>
            </section>
            <section id="checkout" className="py-24 max-w-[1320px] mx-auto px-4">
                <div className="font-medium text-[15px] flex justify-between items-center gap-x-12">
                    <h4 data-aos='fade-right' className="bg-[#FFF4F3] w-full rounded-[10px] h-[60px] flex items-center pl-4">Have a coupon? <button className="bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] bg-clip-text text-transparent pl-1">Click here to enter your code</button></h4>
                    <h4 data-aos='fade-left' className="bg-[#FFF4F3] lg:flex hidden w-full rounded-[10px] h-[60px] items-center pl-4">Returning customer? <button className="bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] bg-clip-text text-transparent pl-1">Click here to login</button></h4>
                </div>
                <div className="mt-10 flex lg:flex-row flex-col justify-between gap-16 relative">
                    <div className="lg:w-[904px]">
                        <h4 className="text-[#333931] font-bold text-[28px]">Billing Details:</h4>
                        <form id="form" onSubmit={handleSubmit} className="bg-[#FFF4F3] pb-9 rounded-xl mt-7 p-4 lg:p-7 space-y-5">
                            <div className="flex gap-x-5 sora text-[15px]">
                                <input id="first" type="text" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="First Name:" />
                                <input id="last" type="email" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Last Name:" />
                            </div>
                            <div className="flex gap-x-5 sora text-[15px]">
                                <select id="country" className="select w-[90%] lg:w-[97%] h-[59px] sora">
                                    <option disabled selected>Country:</option>
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>America</option>
                                    <option>Canada</option>
                                </select>
                                <input id="address" type="text" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Street Address:" />
                            </div>
                            <div className="flex gap-x-5 sora text-[15px]">
                                <input id="state" type="text" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="State:" />
                                <input id="postcode" type="text" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Postcode:" />
                            </div>
                            <div className="flex gap-x-5 sora text-[15px]">
                                <input id="phone" type="text" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Phone:" />
                                <input id="email" type="email" required className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Email Address:" />
                            </div>
                            <div className="flex gap-x-5 sora text-[15px]">
                                <input id="company" type="text" className="w-full input placeholder:text-[#333931] h-[59px]" placeholder="Company (Optional)" />
                            </div>
                            <div className="flex gap-x-5 sora text-[15px]">
                                <textarea id="message" rows={8} className="w-full textarea placeholder:text-[#333931]" placeholder="Order Notes (Optional)" />
                            </div>
                            <div className="h-[59px] absolute bottom-10 right-[4.8rem] lg:right-[4.5rem] mb-[0.9rem] text-center w-[198px] mx-auto">
                                <button onClick={handleSubmit} className="btn px-8 mt-2 h-full bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] sora rounded-[10px] hover:border-0 text-[15px] text-white font-medium"><span className="z-[100]">Place Your Order</span></button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:w-[339px]">
                        <h4 className="text-[28px] text-left font-bold text-[#333931]">Your Order:</h4>
                        <div className="bg-[#FFF4F3] p-5 text-[#181E27] rounded-xl mt-7">
                            <h4 className="text-[15px] px-2 lg:px-4 font-semibold flex justify-between">
                                <span>Products:</span>
                                <span>Subtotal:</span>
                            </h4>
                            <div className="space-y-3 mt-3">
                                <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                                    <p>Jabra Elite 75t</p>
                                    <p>$40.00</p>
                                </div>
                                <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                                    <p>Audio-Technica M50x</p>
                                    <p>$40.00</p>
                                </div>
                                <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                                    <p>Sony WH-1000XM4</p>
                                    <p>$40.00</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-3">
                                <h4 className="text-[15px] font-semibold flex justify-between px-4">
                                    <span>Subtotal:</span>
                                    <span>$120.00</span>
                                </h4>
                                <h4 className="text-[15px] font-semibold flex justify-between pl-3 pr-[0.7rem]">
                                    <span>Shipping Cost:</span>
                                    <span>$20.00</span>
                                </h4>
                                <div className="divider divider-[#181E27]"></div>
                                <h4 className="text-[15px] font-semibold flex justify-between px-4">
                                    <span>Total:</span>
                                    <span>$140.00</span>
                                </h4>
                            </div>
                            <select name="select" className="select w-full my-6">
                                <option disabled selected>Payment Method</option>
                                <option>Direct Bank Transfer</option>
                                <option>Visa</option>
                                <option>Cash On Delivery</option>
                            </select>
                            <p className="sora text-[14px] mb-4 pb-[4.5rem] leading-[26px] text-[#5E635D]"><span className="font-semibold text-[#181E27]">Note: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default Checkout;