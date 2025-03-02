import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="transition duration-300 drop relative py-2"><button className="flex items-center text-[15px]">Home <MdKeyboardArrowDown /></button>
            <ul className="absolute ul bg-base-100 rounded-box z-[100] w-52 space-y-5 shadow p-6 py-8">
                <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/'>Bicycle Landing Page</Link></li>
                <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/headphone-landing-page'>Headphone Landing Page</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/about-us'>About Us</Link></li>
        <li className="hover:text-[#FF8A71] transition duration-300"><Link to="/cart">Products</Link></li>
        <li className="transition duration-300 drop relative py-2"><button className="flex items-center text-[15px]">Pages <MdKeyboardArrowDown /></button>
            <ul className="absolute ul bg-base-100 rounded-box z-[100] w-52 space-y-5 shadow p-6 py-8">
                <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/faq'>FAQ</Link></li>
                <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/cart'>Cart Page</Link></li>
                <li className="hover:text-[#FF8A71] transition duration-300"><Link to='/checkout'>Checkout</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#FF8A71] transition duration-300"><Link to="/blog">Blog</Link></li>
        <li className="hover:text-[#FF8A71] transition duration-300"><Link to="/contact-us">Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-transparent text-[#181E27] max-w-[1320px] mx-auto p-0">
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
                        className="font-medium text-[15px] space-y-2 dropdown-content bg-base-100 rounded-box z-[70] mt-3 w-52 p-3 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold p-0 text-2xl"><img src="https://i.ibb.co.com/JzLwSCJ/Group.png" alt="" /><span className="mt-2">Tescom</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="lg:flex items-center space-x-9 text-[15px] mt-2 hidden">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <button className="font-medium lg:block hidden hover:text-[#FF8A71] transition duration-300 text-[15px] mt-2">Shop Now</button>
                <Link to='/cart' className="btn relative bg-white rounded-full border-0"><img src="https://html.theme-village.com/tescom/images/bag.svg" alt="" />
                    <span className="px-1.5 top-0 -left-1 h-4 pt-0.5 text-[9px] rounded-full absolute bg-[#FF8A71] w-fit text-white">2</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;