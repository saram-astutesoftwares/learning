import { useEffect, useState } from "react";
import Image from "next/image";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import MobileLinks from "./Mobile/LinksContainer";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10 bg-gray-100">
                <div className="hidden lg:flex h-9 mx-auto w-10/12 max-w-[1600px] justify-end items-center space-x-3">
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
            <header className={`border-b-[1px] border-gray-300 z-10 fixed bg-white top-0 lg:top-9 left-0 w-full flex-shirnk-0 px-4`}>
                <div className="max-w-[1600px] w-10/12 mx-auto flex-shrink-0 flex justify-between space-x-5">
                    <a href="#" className='text-2xl font-bold py-3'>
                        <Image height={120} width={120} src="/images/logo.png" className="w-24" />
                    </a>
                    <Desktop/>
                    <Mobile setOpen={setOpen}/>
                </div>
            </header>
            <MobileLinks open={open} setOpen={setOpen} />
        </>
    )
}

export default Header