import { IoSearchOutline } from "react-icons/io5"
import { BsBag } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { useClientUser } from "@/hooks/useClientUser";
import LinksContainer from "./LinksContainer";

const Desktop = () => {
    const user = useClientUser();

    return (
        <>
            <LinksContainer/>

            <div className="flex items-center space-x-5">
                <button className="focus:outline-none">
                    <IoSearchOutline className="text-3xl" />
                </button>
                <button className="focus:outline-none">
                    <BsBag className="text-3xl" />
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

                }
            </div>
        </>
    )
}

export default Desktop