import { IoSearchOutline } from "react-icons/io5"
import { BsBag, BsCartPlus } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"
import { useClientUser } from "@/hooks/useClientUser";
import { AiOutlineHeart } from "react-icons/ai";

const Mobile = ({ setOpen }) => {
    const user = useClientUser();
    return (
        <>

            <div className="flex lg:hidden items-center space-x-5">
                <button name="search" className="focus:outline-none">
                    <IoSearchOutline className="text-2xl" />
                </button>  
                <button name="cart" className="focus:outline-none">
                    <BsBag className="text-2xl" />
                </button> 
                {/* <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold">
                        Items 02
                    </p>
                    <BsCartPlus className="text-xl" />
                </div> */}
                <button onClick={() => setOpen(true)} name="menu" className="focus:outline-none">
                    <BiMenu className="text-3xl" />
                </button>
                {/* 
                <button name="cart" className="focus:outline-none">
                    <BsBag className="text-3xl" />
                </button>
                <button name="cart" className="focus:outline-none">
                    <AiOutlineHeart className="text-3xl" />
                </button>
                 */}
            </div>
        </>
    )
}

export default Mobile