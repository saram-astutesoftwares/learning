import React from 'react'
import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';
import "@/styles/Home.module.css"
import {motion} from "framer-motion"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const FirstSlide = () => {
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className="bg-white min-h-[100vh] pt-[80px] flex items-center justify-center">
            <div className="w-10/12 mx-auto max-w-[1600px] lg:flex justify-center items-center relative">
                 <MouseParallaxChild factorX={0} factorY={0} className="lg:w-6/12">   
                <div>
                    <motion.h1
                        initial={{
                            y: "50%",
                            opacity: 0

                        }}
                        animate={{
                            y: "0%",
                            opacity: 1
                        }}
                    className="text-7xl lg:text-[120px] font-bold">
                        Sneaker
                    </motion.h1>
                <motion.span
                initial={{
                    y: "50%",
                    opacity: 0

                }}
                animate={{
                    y: "0%",
                    opacity: 1
                }}
                transition={{ delay: 0.2 }}
                className=" block text-2xl font-bold">
                    NEW CONCEPT FOR SUMMER
                </motion.span>
                <motion.p
                initial={{
                    y: "50%",
                    opacity: 0

                }}
                animate={{
                    y: "0%",
                    opacity: 1
                }}
                transition={{ delay: 0.3}}
                className="text-base mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda.
                </motion.p>
                <motion.button
                initial={{
                    y: "50%",
                    opacity: 0

                }}
                animate={{
                    y: "0%",
                    opacity: 1
                }}
                transition={{ delay: 0.4}}
                className='btn-shadow hover:bg-white hover:text-black transition-all border-2 border-black bg-black text-white py-3 px-5 text-lg rounded-lg flex items-center font-medium space-x-2'>
                    <p>Browse Collection</p>
                    <BsArrowRight className='text-3xl'/>
                </motion.button>
                </div>
                </MouseParallaxChild>   

                <MouseParallaxChild factorX={0.4} factorY={0.8} className="lg:w-6/12">
                    <motion.div
                    initial={{
                        y: "50%",
                        opacity: 0

                    }}
                    animate={{
                        y: "0%",
                        opacity: 1
                    }}
                    transition={{
                        delay:0.5
                    }}
                    className="w-full">
                        <Image alt="pro wears sneaker" src="/images/shoe.webp" height={1000} width={1000} className="mx-auto w-full"/>

                    </motion.div>
                </MouseParallaxChild>
            </div>
        </MouseParallaxContainer>

    )
}

export default FirstSlide