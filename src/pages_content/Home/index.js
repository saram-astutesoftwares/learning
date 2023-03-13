import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Shop from "./Shop";
import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';

const Home = ({ data, description, error, shop }) => {
    if (error) {
        return (
            <>
                <p className="text-red-500">
                    Error Occured!
                </p>
            </>
        )
    }
    return (
        <>
        <FirstSlide/>
            {/* <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className=""
            >
                <SwiperSlide className='min-h-[100vh]'>
                    <FirstSlide/>
                </SwiperSlide>
                <SwiperSlide className='min-h-[100vh]'>
                    <SecondSlide/>
                </SwiperSlide>
            </Swiper> */}
        <Shop/>
        </>
    )
}

export default Home