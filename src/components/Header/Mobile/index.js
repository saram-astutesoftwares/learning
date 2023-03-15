import { IoSearchOutline } from "react-icons/io5"
import { BsBag } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"
import { useClientUser } from "@/hooks/useClientUser";

const Mobile = ({setOpen}) => {
    const user = useClientUser();
    return (
        <>

            <div className="flex lg:hidden items-center space-x-5">
                <button name="search" className="focus:outline-none">
                    <IoSearchOutline className="text-3xl" />
                </button>
                <button name="cart" className="focus:outline-none">
                    <BsBag className="text-3xl" />
                </button>
                <button onClick={() => setOpen(true)} name="menu" className="focus:outline-none">
                    <BiMenu className="text-3xl" />
                </button>
            </div>
        </>
    )
}

export default Mobile