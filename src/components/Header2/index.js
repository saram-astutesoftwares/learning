import { IoSearchOutline } from "react-icons/io5"
import { BsBag } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { useClientUser } from "@/hooks/useClientUser";
const Header = () => {
    const user = useClientUser();
    const { asPath } = useRouter();

    console.log(user, "THIS IS USER")

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
                        {
                            user ?
                                <button className="focus:outline-none">
                                    <AiOutlineUser className="text-3xl"/>
                                </button>
                            :
                            <a href="/account/login" className="btn btn-primary">
                                Sign In
                            </a>

                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header