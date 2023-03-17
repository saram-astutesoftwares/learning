import { IoSearchOutline } from "react-icons/io5"
import { BsBag, BsCartPlus } from "react-icons/bs"
import { AiFillHeart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { useClientUser } from "@/hooks/useClientUser";
import LinksContainer from "./LinksContainer";

const Desktop = ({colored}) => {
    const user = useClientUser();

    return (
        <>
            <LinksContainer colored={colored}/>

            <div className="hidden lg:flex items-center space-x-5">
                <div className="relative">
                    <input type="text" className={`py-2 px-4 rounded-full bg-white focus:outline-none text-sm font-medium  border-black placeholder:text-xs ${colored ? "border-[1px]" : ""}`} placeholder="Search" />
                    <IoSearchOutline className="text-2xl absolute top-2/4 right-4 transform translate-y-[-50%]" />
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium uppercase">
                        02 Items
                    </p>
                    <BsCartPlus className="text-2xl" />
                </div>

                {/* <button className="focus:outline-none">
                    <IoSearchOutline className="text-3xl" />
                </button>
                <button className="focus:outline-none">
                    <AiOutlineHeart className="text-3xl" />
                </button>
                {
                    user ?
                        <button className="focus:outline-none">
                            <AiOutlineUser className="text-3xl" />
                        </button>
                        :
                        <a href="/account/login" className="btn btn-primary">
                            Sign In
                        </a>

                } */}
            </div>
        </>
    )
}

export default Desktop