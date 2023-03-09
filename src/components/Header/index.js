import {FaSearch} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
const Header = () => {

    const { asPath } = useRouter();

    return (
        <>
        <header className={`flex-shirnk-0 px-4 py-2 ${asPath === "/" ? "bg-white shadow-lg fixed w-full top-0 left-0 z-10" :"bg-white"}`}>
            <div className="max-w-[1600px] w-10/12 mx-auto flex-shrink-0 flex space-x-5">
                <a href="#" className='text-2xl font-bold'>
                    <Image height={70} width={70} src="/images/pro-wears.svg" className=""/>
                </a>
                <div className="flex-grow flex items-center space-x-5 justify-around">
                    <div className="flex items-center space-x-5">
                        <Link href={"/"} className="text-sm font-bold capitalize">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-bold capitalize">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-bold capitalize">
                            Contact
                        </Link>
                    </div>
                    <div className='relative w-[220px]'>
                        <input type="text" className='py-2 px-4 rounded-full w-full bg-white border-[1px] border-black focus:outline-none' />
                        <FaSearch className='absolute top-2/4 right-4 transform translate-y-[-50%]'/>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <p className="text-sm font-bold">
                            02 ITEMS
                        </p>
                        <AiOutlineShoppingCart className='text-xl'/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header