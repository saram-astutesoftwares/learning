import { IoSearchOutline } from "react-icons/io5"
import { BsBag } from "react-icons/bs"
import { AiFillHeart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { useClientUser } from "@/hooks/useClientUser";
import LinksContainer from "./LinksContainer";

const Desktop = () => {
    const user = useClientUser();

    return (
        <>
            <LinksContainer/>

            <div className="hidden lg:flex items-center space-x-5">
                <button aria-label="Search" className="focus:outline-none">
                    <IoSearchOutline className="text-3xl" />
                </button>
                <button aria-label="Cart" className="focus:outline-none">
                    <BsBag className="text-3xl" />
                </button>
                <button aria-label="Wishlist" className="focus:outline-none">
                    <AiOutlineHeart className="text-3xl" />
                </button>
                {
                    user ?
                        <button aria-label="User" className="focus:outline-none">
                            <AiOutlineUser className="text-3xl" />
                        </button>
                        :
                        <a href="/account/login" className="btn btn-primary">
                            Sign In
                        </a>

                }
            </div>
        </>
    )
}

export default Desktop