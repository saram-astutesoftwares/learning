import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import ChildLinks from "./ChildLinks";
import {AiOutlineRight} from "react-icons/ai";

const LinksContainer = ({data}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="mb-5">
                <div className="text-lg font-medium flex items-center justify-between mb-5">
                    <Link href={"/"} className={`"}`}>
                        {data.title}
                    </Link>
                    <button onClick={() => setOpen(!open)} name="expand menu" className="focus:outline-none">
                        <AiOutlineRight className={`transition-transform transform ${open ? "rotate-[90deg]" : "rotate-[0deg]"}`}/>
                    </button>
                </div>
                <motion.div
                    initial={{
                        height: "0"
                    }}
                    animate={{
                        height: open ? "auto" : "0"
                    }}
                    className="overflow-hidden"
                >
                    {
                        data.nolinks ?
                            <p className="text-sm font-bold">
                                Coming Soon
                            </p>
                        :
                            data.categories.map((data, i) => (
                                <ChildLinks key={i} data={data} />
                            ))
                    }
                </motion.div>
            </nav>
        </>
    )
}

export default LinksContainer