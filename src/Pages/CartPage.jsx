import { Link } from "react-router-dom";
import Navbar2 from "./Home2/Navbar2";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer2 from "./Home2/Footer2";

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const [pro1, setPro1] = useState(1);
    const [pro2, setPro2] = useState(1);
    const [pro3, setPro3] = useState(1);
    const [proo1, setProo1] = useState(1);
    const [proo2, setProo2] = useState(2);
    const [proo3, setProo3] = useState(3);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        console.log(id);
        const newPro = products.filter(pro => pro.id !== id);
        setProducts(newPro);
        if (id === proo1) {
            setProo1(false)
        }
        else if (id === proo2) {
            setProo2(false)
        }
        else if (id === proo3) {
            setProo3(false)
        }
    }
    return (
        <div className="font">
            <section className="bg-[url(https://i.ibb.co.com/Mkx1pcv/Bg.png)] font text-white bg-cover bg-no-repeat" id="navbar">
                <Navbar2 />
                <div className="py-32 w-fit mx-auto">
                    <h3 data-aos='fade-up' className="uppercase font-bold text-[60px]">cart page</h3>
                    <p className="bg-[#F8716F] p-2 rounded-full text-[15px] font-medium sora w-fit px-8 mx-auto mt-3"><Link to='/headphone-landing-page'>Home</Link> <span className="text-[#181E27] mx-1">//</span> <Link to='/cart'>Shop</Link></p>
                </div>
            </section>
            <section id="cart" className="py-24 max-w-[1320px] mx-auto px-4 flex lg:flex-row flex-col gap-y-6 justify-between gap-x-16">
                <div data-aos='fade-right' className="lg:w-[904px] h-[650px] bg-[#FFF4F3] rounded-xl pt-6">
                    <div className="overflow-x-auto w-[95%] h-[80%] mx-auto rounded-[10px] font">
                        <table className="table rounded-[10px] w-full">
                            {/* head */}
                            <thead className="bg-white rounded-3xl">
                                <tr className="text-[15px] rounded-[10px] h-[60px] font-semibold text-[#181E27]">
                                    <th className="rounded-l-[10px]">Products:</th>
                                    <th>Price:</th>
                                    <th>Quantity:</th>
                                    <th>Total:</th>
                                    <th className="rounded-r-[10px]"> </th>
                                </tr>
                            </thead>
                            {
                                products.map((product) =>
                                    <tr key={product.id} className={`text-[15px] h-[130px] mt-2 rounded-[10px] text-[#333931] font-medium bg-white ${product.id === 1 ? 'relative top-3' : product.id === 2 ? 'relative top-6' : 'relative top-9'}`}>
                                        <td className="rounded-l-[10px]">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask h-[90px] w-[90px]">
                                                        <img
                                                            src={product.image}
                                                            alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold pl-3">{product.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${product.price}.00
                                        </td>
                                        <td>
                                            <div className="bg-[#FFF4F3] w-[100px] text-[15px] font-semibold flex justify-around rounded-lg items-center h-[38px]">
                                                <button className="text-[10px]" onClick={() => product.id == 1 ? pro1 > 1 && (setPro1(pro1 - 1)) : product.id == 2 ? pro2 > 1 && (setPro2(pro2 - 1)) : pro3 > 1 && (setPro3(pro3 - 1))}><FaMinus /></button>
                                                <button>{product.id == 1 ? pro1 : product.id == 2 ? pro2 : pro3}</button>
                                                <button onClick={() => product.id == 1 ? setPro1(pro1 + 1) : product.id == 2 ? setPro2(pro2 + 1) : setPro3(pro3 + 1)} className="text-[10px]"><FaPlus /></button>
                                            </div>
                                        </td>
                                        <td>
                                            ${product.id == 1 ? pro1 * 20 : product.id == 2 ? pro2 * 20 : pro3 * 20}.00
                                        </td>
                                        <td className=" rounded-[10px]">
                                            <button onClick={() => handleDelete(product.id)} className="text-[15px] rounded-full bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] w-[25px] h-[25px] text-white">x</button>
                                        </td>
                                    </tr>
                                )}
                        </table>
                    </div>
                    <form className="lg:w-[543px] h-[59px] mt-6 lg:mx-0 mx-2 lg:ml-6 relative">
                        <input type="text" className="input w-full h-full rounded-[10px] placeholder:text-[#333931] focus:border-white text-[#333931] text-[15px] sora bg-white" placeholder="Coupon Code" />
                        <div className="w-fit absolute top-0 right-0">
                            <button className="btn lg:w-[181px] h-[59px] bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] sora rounded-[10px] hover:border-0 px-4 text-[15px] text-white font-medium"><span className="z-[100]">Apply Coupon</span></button>
                        </div>
                    </form>
                </div>
                <div data-aos='fade-left' className="lg:w-[339px] h-[510px] bg-[#FFF4F3] p-5 text-[#181E27] rounded-xl">
                    <h4 className="text-[15px] px-4 font-semibold flex justify-between">
                        <span>Products:</span>
                        <span>Subtotal:</span>
                    </h4>
                    <div className="space-y-3 mt-3">
                        <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                            <p>Jabra Elite 75t</p>
                            <p>${proo1 && pro1 * 20}.00</p>
                        </div>
                        <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                            <p>Audio-Technica M50x</p>
                            <p>${proo2 && pro2 * 20}.00</p>
                        </div>
                        <div className="lg:w-[299px] flex justify-between px-4 items-center h-[56px] bg-white rounded-[10px] text-[15px] text-[#333931]">
                            <p>Sony WH-1000XM4</p>
                            <p>${proo3 && pro3 * 20}.00</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3">
                        <h4 className="text-[15px] font-semibold flex justify-between px-4">
                            <span>Subtotal:</span>
                            <span>${pro1*20 + pro2*20 + pro3*20}.00</span>
                        </h4>
                        <h4 className="text-[15px] font-semibold flex justify-between pl-3 pr-[0.7rem]">
                            <span>Shipping Cost:</span>
                            <span>$20.00</span>
                        </h4>
                        <div className="divider divider-[#181E27]"></div>
                        <h4 className="text-[15px] font-semibold flex justify-between px-4">
                            <span>Total:</span>
                            <span>${pro1*20 + pro2*20 + pro3*20 + 20}.00</span>
                        </h4>
                        <div className="w-[234px] mx-auto h-[59px]">
                            <Link to='/checkout' className={`btn w-full h-full mt-4 bg-gradient-to-br from-[#DC5DDE] via-[#FC252C] to-[#FAA365] sora rounded-[10px] hover:border-0 px-4 text-[15px] text-white font-medium ${!products.length && 'hidden'}`}><span className="z-[100]">Proceed To Checkout</span></Link>
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

export default CartPage;