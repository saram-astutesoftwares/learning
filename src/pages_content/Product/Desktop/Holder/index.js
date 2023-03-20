import React, { useState } from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

const Holder = ({title, borderBottom, children}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <button aria-label='Expand' onClick={() => setOpen(!open)} className={`py-3 px-0 w-full uppercase  flex items-center justify-between ${borderBottom ? "border-b-2" : ""} border-200`}>
            <p className="text-lg font-semibold">
                {title}
            </p>

                    <AiFillCaretDown className={`transition-all transform ${open ? "rotate-[180deg]" : "rotate-[0]"}`}/>

        </button>
            <AnimatePresence>
                {
                    open &&
                    <motion.div
                        initial={{height : "0px"}}
                        animate={{height : "auto"}}
                        exit={{height : "0px"}}
                        className="overflow-hidden"
                    >
                        <div className="py-2">
                            {children}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Holder