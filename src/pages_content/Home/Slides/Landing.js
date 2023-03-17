import React from 'react'
import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';
import "@/styles/Home.module.css"
import {motion} from "framer-motion"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Landing = ({active}) => {
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className={`bg-[#00b5e6] min-h-[100vh] pt-[70px] flex items-center justify-center`}>
            <div className="w-10/12 mx-auto max-w-[1600px] lg:flex justify-center items-center relative">
                <motion.h2
                    initial={{
                        y: "50%",
                        opacity: 0

                    }}
                    animate={{
                        y: active ? "0%" : "50%",
                        opacity: active ? 1 : 0
                    }}
                    transition={{
                        delay:0,
                        type: "spring", stiffness: 100
                    }}
                className="text-7xl md:text-[100px] font-bold uppercase md:absolute top-0 left-0 shadow-text text-transparent">
                    Super
                </motion.h2>

                <MouseParallaxChild factorX={0.4} factorY={0.8} className="md:py-16 lg:py-0  lg:w-6/12">
                    <motion.div
                    initial={{
                        y: "50%",
                        opacity: 0

                    }}
                    animate={{
                        y: active ? "0%" : "50%",
                        opacity: active ? 1 : 0
                    }}
                    transition={{
                        delay:0.5
                    }}
                    className="w-full relative">
                        <Image alt="shaoe" src="/images/shape.webp" height={1000} width={1000} className="z-10 mx-auto absolute w-[90%] top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%]"/>
                        <Image alt="pro wears sneaker" src="/images/shoe.webp" height={1000} width={1000} className="z-20 relative mx-auto w-[80%]"/>
                    </motion.div>
                </MouseParallaxChild>
                <motion.h2
                    initial={{
                        y: "-50%",
                        opacity: 0

                    }}
                    animate={{
                        y: active ? "0%" : "-50%",
                        opacity: active ? 1 : 0
                    }}
                    transition={{
                        delay:0,
                        type: "spring", stiffness: 100
                    }}
                    className="text-right md:text-left text-7xl md:text-[100px] font-bold uppercase md:absolute bottom-0 right-0 text-white">
                    Sale
                </motion.h2>
            </div>
        </MouseParallaxContainer>

    )
}

export default Landing