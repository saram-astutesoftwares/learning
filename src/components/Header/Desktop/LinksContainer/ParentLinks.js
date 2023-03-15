import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import ChildLinks from "./ChildLinks";

const LinksContainer = ({data}) => {
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        console.log(isHover)
    }, [isHover])

    return (
        <>
            <nav className="h-full" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] after:bg-primary items-center flex justify-center h-full text-base font-bold capitalize ${isHover ? "after:scale-x-[1]" : "after:scale-x-[0]"}`}>
                    {data.title}
                </Link>
                <motion.div
                    initial={{
                        height: "0"
                    }}
                    animate={{
                        height: isHover ? "auto" : "0"
                    }}
                    className="shadow-xl overflow-hidden absolute w-full -bottom-[2px] transform translate-y-full left-0"
                >
                    <div className="bg-white shadow-xl w-full">
                        <div className="gap-5 py-12 grid grid-cols-4 max-w-[1600px] w-10/12 mx-auto">
                            {
                                data.categories.map((data, i) => (
                                    <ChildLinks key={i} data={data} />
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </nav>
        </>
    )
}

export default LinksContainer