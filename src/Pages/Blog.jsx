import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";
import Footer2 from "./Home2/Footer2";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs);

    return (
        <div className="font text-[#181E27]">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">blog post</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/blog'>Blog</Link></p>
                </div>
            </section>
            <section id="blogs" className="py-32 max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col justify-between gap-16">
                <div>
                    <div data-aos='fade-right' className="grid gap-y-8">
                        {
                            blogs.map(blog =>
                                <div className="bg-[#fbf0ef] p-7 rounded-[8px] flex lg:flex-row flex-col" key={blog.id}>
                                    <img src={blog.photo} alt="" />
                                    <div className="lg:pl-6 lg:pt-0 pt-6 grid gap-y-7">
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
                                        <h4 className="text-[#0A0909] font-semibold text-[19px]">{blog.title}</h4>
                                        <Link to={`/blog/${blog.id}`} className="btn-md border-0 hover:border-0 btn banner-btn relative overflow-hidden tra sora rounded-full w-[160px] h-[54px] text-[15px] hover:text-white font-medium bg-white"><span className="z-[100] tra bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] bg-clip-text text-transparent">Read More</span></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="join gap-x-5 mt-12">
                        <button className="sora font-medium border border-[#E3E4E5] bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/JjwY1ph/Rectangle-21.png)] tra hover:text-white bg-cover bg-no-repeat text-[15px] h-[64px] w-[64px] rounded-[11px] btn">1</button>
                        <button className="sora font-medium border border-[#E3E4E5] bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/JjwY1ph/Rectangle-21.png)] tra hover:text-white bg-cover bg-no-repeat text-[15px] h-[64px] w-[64px] rounded-[11px] btn">2</button>
                        <button className="sora font-medium border border-[#E3E4E5] bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/JjwY1ph/Rectangle-21.png)] tra hover:text-white bg-cover bg-no-repeat text-[15px] h-[64px] w-[64px] rounded-[11px] btn">3</button>
                        <button className="sora font-medium border border-[#E3E4E5] bg-[#FFF4F3] hover:bg-[url(https://i.ibb.co.com/JjwY1ph/Rectangle-21.png)] tra hover:text-white bg-cover bg-no-repeat text-[15px] h-[64px] w-[64px] rounded-[11px] btn"><MdKeyboardArrowRight className="text-[18px]" /></button>
                    </div>
                </div>
                <div data-aos='fade-left' className="w-fit mx-auto text-[#181E27]">
                    <form className="relative w-[339px] h-[62px]">
                        <input type="text" className="w-full h-full border pl-6 pt-1 sora text-[16px] border-[#E3E4E5] rounded-[8px]" placeholder="Search here" />
                        <IoSearch className="absolute top-[1.4rem] right-5 text-[21px] text-[#181E27]" />
                    </form>
                    <h4 className="font-bold text-[23px] uppercase mt-12 mb-7">Post Category:</h4>
                    <div className="w-[339px] grid gap-y-2">
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
                                <img src="https://i.ibb.co.com/qNJd1kV/Bg.png" alt="" className="tra img" />
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
                </div>
            </section>
            <footer>
                <Footer2 />
            </footer>
        </div>
    );
};

export default Blog;