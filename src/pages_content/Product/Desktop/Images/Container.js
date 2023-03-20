import React, { useEffect } from 'react'
import {motion} from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';
import {
    SideBySideMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";
  



const Container = ({url, alt, setOpen}) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = "auto"
        }
    })
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        exit={{
            opacity: 0
        }}
        className={`z-[100] fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto overflow-x-hidden`}
    >
        <div className="max-w-[1600px] w-8/12 mx-auto py-12">
            <div className="flex justify-end">
                <button onClick={() => setOpen(false)}>
                    <AiOutlineClose className='text-3xl'/>
                </button>
            </div>

            <div className="w-10/12 mx-auto react-mag">
            <SideBySideMagnifier
            imageSrc={url}
            alwaysInPlace={true}
            />
            </div>

        </div>

    </motion.div>
  )
}

export default Container