import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";


const Navbar2 = () => {
    const links = <>
        <li className="transition duration-300 drop relative py-2"><button className="flex items-center text-[15px]">Home <MdKeyboardArrowDown /></button>
            <ul className="absolute ul bg-base-100 rounded-box z-[100] w-52 space-y-3 lg:space-y-7 shadow p-6 py-8 bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] text-[15px] to-[#FAA365]">
                <li className="hover:text-[#181E27] transition duration-300"><Link to='/'>Bicycle Landing Page</Link></li>
                <li className="hover:text-[#181E27] transition duration-300"><Link to='/headphone-landing-page'>Headphone Landing Page</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#181E27] transition duration-300"><Link className="text-[15px]" to='/about-us'>About Us</Link></li>
        <li className="hover:text-[#181E27] transition duration-300"><Link className="text-[15px]" to='/cart'>Products</Link></li>
        <li className="transition duration-300 drop relative py-2"><button className="flex items-center text-[15px]">Pages <MdKeyboardArrowDown /></button>
            <ul className="absolute ul bg-base-100 rounded-box z-[100] w-52 space-y-3 lg:space-y-7 shadow p-6 py-8 bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] text-[15px] to-[#FAA365]">
                <li className="hover:text-[#181E27] transition duration-300"><Link to='/faq'>FAQ</Link></li>
                <li className="hover:text-[#181E27] transition duration-300"><Link to='/cart'>Cart Page</Link></li>
                <li className="hover:text-[#181E27] transition duration-300"><Link to='/checkout'>Checkout</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#181E27] transition duration-300"><Link className="text-[15px]" to='/blog'>Blog</Link></li>
        <li className="hover:text-[#181E27] transition duration-300"><Link className="text-[15px]" to='/contact-us'>Contact Us</Link></li>
    </>
    return (
        <nav className="navbar font bg-transparent max-w-[1320px] mx-auto px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] text-[15px] to-[#FAA365] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/headphone-landing-page' className="btn btn-ghost text-2xl px-0"><img src="https://i.ibb.co.com/v3PsrQk/Group.png" alt="" /><span className="mt-2">Tescom</span></Link>
            </div>
            <div className="navbar-center items-center hidden lg:flex">
                <ul className="text-xs text-[15px] font-medium mt-2 ml-[1.3rem] text-white lg:flex items-center space-x-9 hidden">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <button className="font-medium lg:block hidden hover:text-[#181E27] transition duration-300 text-[15px] mt-2">Shop Now</button>
                <Link to='/cart' className="btn relative bg-white rounded-full border-0"><img src="https://html.theme-village.com/tescom/images/bag.svg" alt="" />
                    <span className="px-1.5 top-0 -left-1 h-4 pt-0.5 text-[9px] rounded-full absolute bg-[#181E27] w-fit text-white">2</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar2;