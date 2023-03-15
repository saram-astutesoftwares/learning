import { useEffect, useState } from "react";
import Image from "next/image";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import MobileLinks from "./Mobile/LinksContainer";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={`border-b-[1px] border-gray-300 z-10 fixed bg-white top-0 left-0 w-full flex-shirnk-0 px-4`}>
                <div className="max-w-[1600px] w-10/12 mx-auto flex-shrink-0 flex justify-between space-x-5">
                    <a href="#" className='text-2xl font-bold py-3'>
                        <Image height={70} width={70} src="/images/pro-wears.svg" className="" />
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