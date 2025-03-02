import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaStar, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Footer2 from "./Home2/Footer2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";

const BlogPost = () => {
    const [blogs, setBlogs] = useState({});
    const [rating, setRating] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        fetch(`/blogs.json`)
            .then(res => res.json())
            .then(data => {
                for (const blog of data) {
                    if (blog.id == id) {
                        setBlogs(blog)
                    }
                }
            })
    }, [id])
    const handleSubmit = e => {
        e.preventDefault();
        if (rating > 0) {
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
            setRating(0);
            e.target.reset();
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Set a rating star.',
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
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">blog post</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/blog'>Blog</Link></p>
                </div>
            </section>
            <section id="blog-post" className="py-24 max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col justify-between gap-16">
                <div data-aos='fade-right' className="lg:w-[904px]">
                    <div className="flex gap-x-12">
                        <div className="flex items-center">
                            <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                            <span className="text-[15px] ml-2 sora">17 July 2023</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://i.ibb.co.com/m5hjfmC/calendar-alt-1.png" alt="" />
                            <span className="text-[15px] ml-2 sora">Comment (06)</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[30px] font-bold uppercase py-3 text-[#181E27] fontz leading-[42px]">{blogs.title}</h3>
                        <div className="sora text-[16px] leading-[32px] text-[#333931] space-y-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <img src='https://i.ibb.co.com/PwTq4P5/Image.png' className="w-full" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <p className="italic text-[19px] font-bold text-white bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] p-6 rounded-lg uppercase">“habitant morbi tristique. Ornare arcu dui vivamus arcu felis bibendum ut Diam vel quam elementum pulvinar etiam non quam. Purus in mollis nunc sed id quam Diam vel quam elementum pulvinar etiam non”.</p>
                            <h3 className="text-[30px] font-bold uppercase py-4 text-[#181E27] font">Exploring the Ride-Sharing Opportunity</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            <div className="bg-[url(https://i.ibb.co.com/QHbGJCj/Bg.png)] bg-top bg-cover bg-no-repeat rounded-lg w-full lg:p-0 p-5 lg:h-[78px] flex lg:flex-row flex-col gap-y-5 justify-between items-center uppercase">
                                <div className="flex gap-x-5 items-center ml-4">
                                    <h4 className="text-[15px] font-bold text-[#181E27]">Tags:</h4>
                                    <button className="bg-white py-1 px-4 uppercase rounded-[5px] text-[13px] hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">riding</button>
                                    <button className="bg-white py-1 px-4 uppercase rounded-[5px] text-[13px] hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">travel</button>
                                    <button className="bg-white py-1 px-4 uppercase rounded-[5px] text-[13px] hover:bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] tra hover:text-white">taxi</button>
                                </div>
                                <div className="flex gap-x-5 items-center mr-4">
                                    <h4 className="text-[15px] font-bold text-[#181E27]">share:</h4>
                                    <button className="bg-white border-0 border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                        <FaFacebookF className="text-[18px]" />
                                    </button>
                                    <button className="bg-white border-0 border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                        <FaTwitter className="text-[18px]" />
                                    </button>
                                    <button className="bg-white border-0 border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                        <FaSkype className="text-[18px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h4 className="uppercase text-[#0A0909] text-[30px] font-bold mb-4">comment (02)</h4>
                            <div className="border border-[#E3E4E5] rounded-[10px] p-7">
                                <div className="flex lg:flex-row flex-col gap-y-5 justify-between lg:items-center">
                                    <div className="flex items-center gap-x-6">
                                        <img src="https://i.ibb.co.com/Pt79C07/Image-here.png" alt="" />
                                        <div className="space-y-2">
                                            <h6 className="font-semibold text-[18px] leading-[18.45px] text-[#0A0909]">Savannah Nguyen</h6>
                                            <p className="text-[13px] sora text-[#747474]">19 June 2023</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h6 className="font-semibold text-[18px] text-[#0A0909]">Rating:</h6>
                                        <p className="space-x-2 flex items-center">
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <span className="text-[13px] sora text-[#747474]">(4.8)</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[15px] sora text-[#333931] leading-[30px] pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            </div>
                            <div className="w-11/12 ml-auto border border-[#E3E4E5] rounded-[10px] p-7 mt-7">
                                <div className="flex lg:flex-row flex-col gap-y-5 justify-between lg:items-center">
                                    <div className="flex items-center gap-x-6">
                                        <img src="https://i.ibb.co.com/K79WgNd/Image-here-1.png" alt="" />
                                        <div className="space-y-2">
                                            <h6 className="font-semibold text-[18px] leading-[18.45px] text-[#0A0909]">Darlene Robertson</h6>
                                            <p className="text-[13px] sora text-[#747474]">19 June 2023</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h6 className="font-semibold text-[18px] text-[#0A0909]">Rating:</h6>
                                        <p className="space-x-2 flex items-center">
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <FaStar className="text-[#F7B401] -mt-1" />
                                            <span className="text-[13px] sora text-[#747474]">(4.8)</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[15px] sora text-[#333931] leading-[30px] pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h3 className="uppercase text-[30px] font-bold text-[#0A0909]">leave a review</h3>
                        <form onSubmit={handleSubmit} className="mt-5 text-[#333931] sora text-[16px] space-y-5">
                            <div className="flex gap-x-5">
                                <input type="text" className="input input-bordered border-[#E3E4E5] w-full placeholder:text-[#333931] focus:border-0" placeholder="First Name:" required />
                                <input type="text" className="input input-bordered border-[#E3E4E5] w-full placeholder:text-[#333931] focus:border-0" placeholder="Last Name:" required />
                            </div>
                            <div className="flex gap-x-5">
                                <input type="email" className="input input-bordered border-[#E3E4E5] w-full placeholder:text-[#333931] focus:border-0" placeholder="Email Address:" required />
                                <p type="text" className="input input-bordered border-[#E3E4E5] w-full placeholder:text-[#333931] border-1 pt-3 flex items-start">Rating: <Rating
                                    style={{ color: '#F7B401', width: '93px', height: '15px' }}
                                    value={rating}
                                    onChange={setRating}
                                    className="mt-1 ml-2 text-[#F7B401]"
                                /></p>
                            </div>
                            <div className="flex gap-x-5">
                                <textarea rows={7} className="textarea textarea-bordered border-[#E3E4E5] w-full placeholder:text-[#333931] focus:border-0" placeholder="Write Here..." required />
                            </div>
                            <button className="btn-md border-2 w-[220px] btn mt-12 banner-btn relative overflow-hidden tra sora rounded-full text-[15px] hover:text-white font-medium bg-white h-[59px]"><span className="z-[100]">Submit Comment</span></button>
                        </form>
                    </div>
                </div>
                <aside data-aos='fade-left' className="w-fit mx-auto text-[#181E27]">
                    <form className="relative w-[339px] h-[62px]">
                        <input type="text" className="w-full h-full border pl-6 pt-1 sora text-[16px] border-[#E3E4E5] rounded-[8px]" placeholder="Search here" />
                        <IoSearch className="absolute top-[1.4rem] right-5 text-[21px] text-[#181E27]" />
                    </form>
                    <h4 className="font-bold text-[23px] uppercase mt-12 mb-7">Post Category:</h4>
                    <div className="w-[339px] grid gap-y-4">
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Electric Cycle</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Electric Scooter</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Water Bottle</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Healthy Pet Food</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Skin Care cream</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                        <div className="w-full h-[62px] banner-btn relative overflow-hidden z-50 flex justify-between items-center border border-[#E3E4E5] px-4 rounded-lg">
                            <p className="inter z-[100] text-[#333931]">Food Products</p>
                            <p className="z-[100] tra text-[#333931]"><MdKeyboardArrowRight className="text-[18px]" /></p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h4 className="font-bold text-[23px] uppercase">Recent Post:</h4>
                        <div className="my-6 w-[340px]">
                            <div className="w-full h-[150px] border-y border-[#E3E4E5] flex items-center asidee">
                                <img src="https://i.ibb.co.com/qNJd1kV/Bg.png" alt="" className="img tra" />
                                <div className="pl-7">
                                    <div className="flex items-center mb-2">
                                        <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                                        <span className="text-[15px] text-[#333931] ml-2 sora">17 July 2023</span>
                                    </div>
                                    <h4 className="text-[16px] leading-[23px] font-semibold">Interdum velit laoreet id donec ultrices tincidunt arcu.</h4>
                                </div>
                            </div>
                            <div className="w-full h-[150px] border-y border-[#E3E4E5] flex items-center asidee">
                                <img src="https://i.ibb.co.com/r7xKQWM/Bg-1.png" alt="" className="img tra" />
                                <div className="pl-7">
                                    <div className="flex items-center mb-2">
                                        <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                                        <span className="text-[15px] text-[#333931] ml-2 sora">17 July 2023</span>
                                    </div>
                                    <h4 className="text-[16px] leading-[23px] font-semibold">Interdum velit laoreet id donec ultrices tincidunt arcu.</h4>
                                </div>
                            </div>
                            <div className="w-full h-[150px] border-y border-[#E3E4E5] flex items-center asidee">
                                <img src="https://i.ibb.co.com/9vp1gyN/Bg-2.png" alt="" className="img tra" />
                                <div className="pl-7">
                                    <div className="flex items-center mb-2">
                                        <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                                        <span className="text-[15px] text-[#333931] ml-2 sora">17 July 2023</span>
                                    </div>
                                    <h4 className="text-[16px] leading-[23px] font-semibold">Interdum velit laoreet id donec ultrices tincidunt arcu.</h4>
                                </div>
                            </div>
                            <div className="w-full h-[150px] border-y border-[#E3E4E5] flex items-center asidee">
                                <img src="https://i.ibb.co.com/Cnqsww1/Bg-3.png" alt="" className="img tra" />
                                <div className="pl-7">
                                    <div className="flex items-center mb-2">
                                        <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                                        <span className="text-[15px] text-[#333931] ml-2 sora">17 July 2023</span>
                                    </div>
                                    <h4 className="text-[16px] leading-[23px] font-semibold">Interdum velit laoreet id donec ultrices tincidunt arcu.</h4>
                                </div>
                            </div>
                            <div className="w-full h-[150px] border-y border-[#E3E4E5] flex items-center asidee">
                                <img src="https://i.ibb.co.com/Y0PSZH3/Bg-4.png" alt="" className="img tra" />
                                <div className="pl-7">
                                    <div className="flex items-center mb-2">
                                        <img src="https://i.ibb.co.com/THTv5hs/calendar-alt.png" alt="" />
                                        <span className="text-[15px] text-[#333931] ml-2 sora">17 July 2023</span>
                                    </div>
                                    <h4 className="text-[16px] leading-[23px] font-semibold">Interdum velit laoreet id donec ultrices tincidunt arcu.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h4 className="text-[23px] font-bold uppercase">Social Share:</h4>
                        <div className="my-6 flex gap-x-3">
                            <div className="border border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                <FaFacebookF className="text-[18px]" />
                            </div>
                            <div className="border border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                <FaTwitter className="text-[18px]" />
                            </div>
                            <div className="border border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                <FaSkype className="text-[18px]" />
                            </div>
                            <div className="border border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                <FaInstagram className="text-[18px]" />
                            </div>
                            <div className="border border-[#E3E4E5] w-[52px] h-[52px] hover:bg-[url(https://i.ibb.co.com/0jTLycb/Bg-5.png)] tra hover:text-white flex justify-center items-center text-[#333931] rounded-lg">
                                <FaLinkedin className="text-[18px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 w-[339px]">
                        <h4 className="text-[23px] font-bold uppercase">popular tag:</h4>
                        <div className="grid grid-cols-3 gap-3 my-6">
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal">Electric</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal col-span-2">Smart Watch</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal col-span-2">Healty Jiuce</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal">Product</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal ">Landing</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal col-span-2">Food Products</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal col-span-2">Water Bottle</button>
                            <button className="btn bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/znvdhyF/Bg-6.png)] tra hover:text-white bg-no-repeat bg-center bg-cover sora text-[16px] font-normal">Drone</button>
                        </div>
                    </div>
                </aside>
            </section >
            <footer>
                <Footer2 />
            </footer>
        </div >
    );
};

export default BlogPost;