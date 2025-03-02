import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { Outlet } from "react-router-dom";

const Main = () => {
    useEffect(()=>{
        AOS.init({
            delay: 200,
            duration: 700,
            once: true
        })
    }, [])
    return (
        <div className="overflow-hidden">
            <Outlet />
        </div>
    );
};

export default Main;