import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';


const FirstSlide = () => {
    return (
        <div className="h-[100vh] lg:flex justify-center items-start relative max-w-[100%] pt-[150px] lg:pt-0">
            <div className="bg-black absolute z-[5] bg-opacity-40 top-0 left-0 right-0 bottom-0">

            </div>

            <div className="z-10 relative lg:absolute h-full w-10/12 max-w-[1600px] mx-auto lg:left-2/4 lg:transform lg:-translate-x-2/4 flex items-center justify-start">
                <div className='text-white'>
                    <h1 className=" text-5xl font-bold w-10/12 leading-none mb-3">
                        Prowears
                    </h1>
                    <p className="text-base mb-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda.
                    </p>
                    <button className='btn btn-white flex items-center space-x-5'>
                        Dive into metaverse
                        <BsArrowRight className='text-xl' />
                    </button>
                </div>
            </div>
            <div className="top-0 left-0 w-full absolute lg:relative">
                <video controlsList='nodownload' autoPlay muted width="100%" loop className="">
                    <source  src="/videos/landing3.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    )
}

export default FirstSlide