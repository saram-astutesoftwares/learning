import React, { useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const Images = ({data}) => {
    return (
        <>
        <Swiper
                modules={[Navigation]}
                navigation
                // loop={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="relative"
            >
                {
                    data.images && data.images.length > 0 &&
                    data.images.map((item, index) => (
                        <SwiperSlide>
                                <Image height={1500} width={1500} alt={item.alt} className='w-full select-none' src={item.url} />
                        </SwiperSlide>
                    ))
                }
            
        </Swiper>
        </>
    )
}

export default Images