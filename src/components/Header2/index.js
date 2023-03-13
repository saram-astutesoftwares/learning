import { IoSearchOutline } from "react-icons/io5"
import { BsBag } from "react-icons/bs"
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
const Header = () => {

    const { asPath } = useRouter();

    return (
        <>
            <header className={`z-10 fixed bg-white top-0 left-0 w-full flex-shirnk-0 px-4 py-2`}>
                <div className="max-w-[1600px] w-10/12 mx-auto flex-shrink-0 flex justify-between space-x-5">
                    <a href="#" className='text-2xl font-bold'>
                        <Image height={70} width={70} src="/images/pro-wears.svg" className="" />
                    </a>
                    <div className="flex items-center space-x-5">
                        <Link href={"/"} className="text-sm font-bold capitalize">
                            Men
                        </Link>
                        <Link href="/about" className="text-sm font-bold capitalize">
                            Women
                        </Link>
                        <Link href="/contact" className="text-sm font-bold capitalize">
                            About
                        </Link>
                    </div>
                    <div className="flex items-center space-x-5">
                        <button className="focus:outline-none">
                            <IoSearchOutline className="text-3xl"/>
                        </button>
                        <button className="focus:outline-none">
                            <BsBag className="text-3xl"/>
                        </button>
                        <button className="btn-shadow bg-black text-white py-3 px-5 text-lg rounded-lg">
                            Sign In
                        </button>
                    </div>
                    {/* <div className="flex-grow flex items-center space-x-5 justify-around">
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
                </div> */}
                </div>
            </header>
        </>
    )
}

export default Header