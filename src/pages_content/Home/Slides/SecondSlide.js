import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';


const FirstSlide = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-start relative">
                <div className="bg-black absolute bg-opacity-30 top-0 left-0 right-0 bottom-0">

                </div>

                <div className="absolute h-full w-10/12 max-w-[1600px] left-2/4 transform -translate-x-2/4 flex items-center justify-start">
                <div className=''>
                <h1 className="text-white text-5xl font-bold w-10/12 leading-none mb-3">
                    Browse Our Latest Collection
                </h1>
                <p className="text-base mb-5 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda.
                </p>
                <button className='btn btn-white'>
                    BROWSE COLLECTION
                    <BsArrowRight className='text-3xl'/>
                </button>
                </div>
                </div>
                <img alt="pro wears sneaker" src="/images/fashion-1.jpg"  className="w-4/12"/>
                <img alt="pro wears sneaker" src="/images/fashion-2.jpg"  className="w-4/12"/>
                <img alt="pro wears sneaker" src="/images/fashion-3.jpg"  className="w-4/12"/>
        </div>

    )
}

export default FirstSlide