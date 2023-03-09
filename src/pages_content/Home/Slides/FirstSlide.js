import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';


const FirstSlide = () => {
    return (
        <div className="bg-gray-100 min-h-[100vh] pt-[80px] flex items-center justify-center">
            <div className="w-10/12 mx-auto max-w-[1600px] flex justify-center items-center relative">
                <div>
                <h1 className=" text-[120px] font-bold">
                    Sneaker
                    <span className="-mt-9 block text-2xl font-bold">
                        NEW CONCEPT FOR SUMMER
                    </span>
                </h1>
                <p className="text-base mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda.
                </p>
                <button className='btn btn-black'>
                    BROWSE COLLECTION
                    <BsArrowRight className='text-3xl'/>
                </button>
                </div>
                <Image alt="pro wears sneaker" src="/images/shoe.webp" height={1000} width={1000} className="w-6/12"/>
            </div>
        </div>

    )
}

export default FirstSlide