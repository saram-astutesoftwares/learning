import { useEffect, useState } from "react";
import Image from "next/image";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import MobileLinks from "./Mobile/LinksContainer";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [colored, setColored] = useState(router.asPath === "/" ? false : true);

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
        console.log(window.scrollY)
    };

    useEffect(() => {
        if(clientWindowHeight === ""){
            return
        }
        else if(clientWindowHeight > 400){
            setColored(true)
        } else{
            setColored(false)
        }
      }, [clientWindowHeight]);
      
      
    useEffect(() => {
        if(router.asPath === "/"){
            console.log("yahan aaya me?")
            window.addEventListener("scroll", handleScroll); 
            return () => window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10 bg-gray-200 text-black block">
                <div className={`hidden ${colored ? "lg:flex" : "lg:hidden"} h-9 mx-auto w-10/12 max-w-[1600px] justify-end items-center space-x-3`}>
                    <a href="#" className="text-sm font-medium">
                        Help
                    </a>
                    <a href="#" className="text-sm font-medium">
                        Return Policy
                    </a>    
                    <a href="#" className="text-sm font-medium">
                        Track Order
                    </a>
                    <a href="#" className="text-sm font-medium">
                        Join Pro Club
                    </a>
                </div>
            </div>
            <header className={`border-gray-300 z-10 fixed top-0 ${colored ? "lg:top-9" : "lg:top-0"} left-0 w-full flex-shirnk-0 px-4 transition-all ${colored ? "bg-white text-black" : "bg-transparent text-white"}`}>
                <div className="max-w-[1600px] w-10/12 mx-auto flex-shrink-0 flex justify-between space-x-5">
                    <a href="/" className='text-2xl font-bold py-3'>
                        <Image height={120} width={120} src="/images/logo-white.svg" className={`${colored ? "hidden" : "block"} w-24`} />
                        <Image height={120} width={120} src="/images/logo.png" className={`${colored ? "block" : "hidden"} w-24`} />
                    </a>
                    <Desktop colored={colored}/>
                    <Mobile setOpen={setOpen}/>
                </div>
            </header>
            <MobileLinks open={open} setOpen={setOpen} />
        </>
    )
}

export default Header