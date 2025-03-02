import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/LxBb3tJ/Bg.png)]">
            <div className="px-4">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
};

export default Header;