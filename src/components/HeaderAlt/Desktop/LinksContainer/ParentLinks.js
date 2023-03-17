import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import ChildLinks from "./ChildLinks";

const ParentLinks = ({data, colored}) => {
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        console.log(isHover)
    }, [isHover])

    return (
        <>
            <nav className="h-full relative" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] ${colored ? "after:bg-primary" : "after:bg-white"} items-center flex justify-center h-full text-sm font-semibold capitalize ${isHover ? "after:scale-x-[1]" : "after:scale-x-[0]"}`}>
                    {data.title}
                </Link>
                <motion.div
                    initial={{
                        height: "0"
                    }}
                    animate={{
                        height: isHover ? "auto" : "0"
                    }}
                    className="shadow-xl overflow-hidden w-[200px] absolute -bottom-[2px] transform translate-y-full left-2/4 translate-x-[-50%]"
                >
                        <div className="text-black bg-white shadow-xl text-center">

                    {
                        data.nolinks ?
                        <>
                            <h2 className="py-12 text-center text-2xl font-bold">
                                Coming soon
                            </h2>
                        </>
                        :
                        <>
                            <div className="py-4 space-y-5">
                                {
                                    data.categories.map((data, i) => (
                                        <ChildLinks key={i} data={data} />
                                    ))
                                }
                            </div>
                        </>
                    }
                        </div>

                </motion.div>
            </nav>
        </>
    )
}

export default ParentLinks